from django.urls import path,include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token

from .views import *
from .payment_views import *


# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'profile', ProfileViewSet)
router.register(r'address', AddressViewSet)
router.register(r'users', UserViewSet)
router.register(r'order', OrderViewSet)
router.register(r'company', CompanyViewSet)
router.register(r'product', ProductViewSet)
router.register(r'user', UserViewSet)
router.register(r'image', ImageViewSet)



urlpatterns = [
    path('', include(router.urls)),
    
    #clear the token as we have logged out 
    path('api/logout/blacklist/',BlacklistTokenView.as_view()),


    #payment view 
    path('stripe_payment/',test_function_view),

    # this was for auth inbuilt in django -> path('login/',obtain_auth_token,name="login"),
]
