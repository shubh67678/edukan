from re import I
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.fields import ReadOnlyField #token table 
from drf_writable_nested import WritableNestedModelSerializer

from .models import *

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ["id","url","name","seller","address"]

# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = ["url","name","company","price","id","description"]


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ["url","id","status","payment","products","purchaser"]
    
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ( 'image',)
    
    def create(self,validated_data):
        print('in')
        return None


class ProductSerializer(serializers.ModelSerializer):
    #https://stackoverflow.com/questions/60102891/how-to-get-foreign-key-reference-in-serializer-using-input-value


    images = serializers.HyperlinkedRelatedField(many=True, read_only=True,view_name="image-detail")
    # company = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    # images = ImageSerializer()
    # company = CompanySerializer()

    class Meta(object):
        model = Product
        fields =["id", "name","price","quantity","company","images" ]
        
        # def create(self, validated_data):
            
        #     image_validated_data = validated_data.pop("images")
        #     product_obj = Product.objects.create(**validated_data)

        #     # image_set_serializer = self.fields['images']
        #     # for i in image_validated_data:
        #         # i['']
            
        #     image_validated_data['product'] = product_obj

        #     image = image_validated_data.create(image_validated_data)
            # return product_obj


            # product_data = validated_data.pop('product')
            # # company = validated_data.pop('image')
            # image_obj = Image.objects.create(**validated_data)
            
            # Product.objects.create(**product_data)
            # print(image_obj)
            
            # return image_obj

class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token 
        fields = ["key"]
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["url","username","first_name","last_name","id","email","password"]

    # def create(self, validated_data):
    #     user = User(
    #         email=validated_data['email'],
    #         username=validated_data['username']
    #     )
    #     user.set_password(validated_data['password'])
    #     user.save()
    #     return user


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["url","user","address"]

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"

