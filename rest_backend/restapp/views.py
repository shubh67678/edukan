from django.shortcuts import render
from django.contrib.auth.models import User
from django.urls import resolve
from rest_framework import viewsets,status,permissions,generics
from rest_framework.views import APIView
from .custom_renders import JPEGRenderer,PNGRenderer
from rest_framework.response import Response
from .models import * 
from .serializers import * 

from rest_framework_simplejwt.tokens import RefreshToken

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self,request,*args, **kwargs):
        post_data = request.data

        new_address = Address.objects.create(**post_data['address']) #create the meta post data 
        new_address.save()
        post_data['address'] = new_address #have the reference 
        print(post_data['address'])

        user = User.objects.filter(id = post_data['seller']) #create the meta post data 
        post_data['seller'] = user.first()  #have the reference 

        new_company = Company.objects.create(**post_data) #create the main obj 
        new_company.save()

        serializer = CompanySerializer(new_company,context={'request': request})   
        # if not serializer.is_valid():
            # return Response(data = serializer.errors,status = status.HTTP_400_BAD_REQUEST)
        return Response(data = serializer.data,status= status.HTTP_201_CREATED)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes  = [permissions.IsAuthenticated]

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated]

    # def create(self,request,*args, **kwargs):
    #     post_data = request.data

    #     company_ref = Company.objects.get(id = post_data['company']) #create the meta post data 
    #     post_data['company'] = company_ref  #have the reference 

    #     new_product = Product.objects.create(**post_data) #create the main obj 
    #     new_product.save()

    #     serializer = ProductSerializer(new_product,context={'request': request})   
    #     return Response(data = serializer.data,status= status.HTTP_201_CREATED)

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        print("order view user",user)
        return Order.objects.filter(purchaser=user.id)
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    # permission_classes = [permissions.IsAuthenticated]

class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    # permission_classes = [permissions.IsAuthenticated]

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self,request,*args, **kwargs):
        post_data = request.data

        new_user = User(
            email=post_data['email'],
            username=post_data['username']
        )
        new_user.set_password(post_data['password'])
        
        try:
            new_user.save()
        except:
            return Response("error in user",status= status.HTTP_400_BAD_REQUEST)
        new_token = Token.objects.create(user=new_user)
        serializer = TokenSerializer(new_token,context={'request': request})
        
        return Response(data = serializer.data,status= status.HTTP_201_CREATED)


# class ImageAPIView(generics.RetrieveAPIView):
#     queryset = Image.objects.filter(id=1)
#     renderer_classes = [JPEGRenderer]
#     def get(self, request, *args, **kwargs):
#         renderer_classes = [JPEGRenderer]
#         queryset = Image.objects.get(id=self.kwargs['id']).image
#         data = queryset
#         return Response(data, content_type='image/jpg')


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class =  ImageSerializer
    renderer_classes = [JPEGRenderer]

    
    def retrieve(self, request, pk=None):
        renderer_classes = [JPEGRenderer]
        queryset = Image.objects.get(id=pk).image
        data = queryset
        return Response(data, content_type='image/jpg')
    
    def create(self, request):
        image_serializer = ImageSerializer(data = request.data)
        
        if image_serializer.is_valid():
            image_serializer.save()
            return Response(image_serializer.data,status = status.HTTP_201_CREATED)

        return Response(image_serializer.errors,status=status.HTTP_400_BAD_REQUEST)   
    # def create(self,request,*args, **kwargs):
    #     post_data = request.data

    #     new_user = User(
    #         email=post_data['email'],
    #         username=post_data['username']
    #     )
    #     new_user.set_password(post_data['password'])
        
    #     try:
    #         new_user.save()
    #     except:
    #         return Response("error in user",status= status.HTTP_400_BAD_REQUEST)
    #     new_token = Token.objects.create(user=new_user)
    #     serializer = TokenSerializer(new_token,context={'request': request})
        
    #     return Response(data = serializer.data,status= status.HTTP_201_CREATED)


class BlacklistTokenView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self,request):
        print(request.data)
        try:    
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)