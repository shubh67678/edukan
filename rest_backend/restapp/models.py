from typing import Set
from django.conf import settings
from django.db import models

from django.contrib.auth.models import User
from django.db.models.fields import CharField,EmailField
from django.db.models.deletion import CASCADE, SET_DEFAULT, SET_NULL

from django_extensions.db.models import TimeStampedModel
from phonenumber_field.modelfields import PhoneNumberField
from django_countries.fields import CountryField
from django.utils import timezone

from django.db.models.signals import post_save #called when post and save happen
from django.dispatch import receiver #this decorator will help say the fun that will be called
from rest_framework.authtoken.models import Token #token table 

class Address(TimeStampedModel,models.Model):
    address1 = models.CharField("Address line 1",max_length=1024,)
    address2 = models.CharField("Address line 2",max_length=1024,)
    zip_code = models.CharField("ZIP / Postal code",max_length=12,)
    city = models.CharField("City",max_length=1024,)
    country = CountryField()
    class Meta:
        verbose_name = "Address"
        verbose_name_plural = "Addresses"
    def __str__(self):
        return str(self.zip_code)
class Profile(TimeStampedModel,models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_no = PhoneNumberField(unique = True)
    address = models.OneToOneField(Address,on_delete= SET_NULL,null= True)
    cart_id = models.IntegerField(null=True)
    # orders = models.ManyToManyField(Order,on_delete = SET_NULL, null = True)
    def __str__(self):
        return str(self.user)
class Company(models.Model):
    seller = models.ForeignKey(User,on_delete= CASCADE,related_name="company")
    name = models.CharField(max_length=50)
    address = models.OneToOneField(Address,on_delete=SET_NULL,null= True)
    bank = models.IntegerField(null = True ) 
    def __str__(self):
        return str(self.name)
class Product(models.Model):
    company = models.ForeignKey(Company,on_delete=CASCADE)
    name = models.CharField(max_length=50)
    price = models.IntegerField(default= 100)
    quantity = models.IntegerField(default= 0)
    description = models.TextField("description", max_length=500)
    comments = models.CharField("comments", max_length=100)
    def __str__(self):
        return str(self.name)

def user_directory_path(instance,filename):
    print("inff",filename)
    return f"images/{filename}/" #same filename no over-write hashing of some sort
class Image(TimeStampedModel,models.Model):
    options = (
        ('active','Active'),
        ('deactivated','Deactivated')
    )
    title = models.CharField(max_length=250,default= "Prod_img",blank = True)
    alt = models.TextField(max_length=250,blank = True)
    image = models.ImageField(
        upload_to = "images/", 
        default = 'posts/default.jpg'
    )
    slug = models.SlugField(max_length=250,unique_for_date='created',default = "title")
    product = models.ForeignKey(Product,on_delete=models.CASCADE,default=1,related_name="images")

class Order(models.Model):
    purchaser = models.ForeignKey(User,on_delete=SET_NULL,null = True )
    products = models.ManyToManyField(Product,null = True,blank=True)  
    address = models.ForeignKey(Address,on_delete=SET_NULL,null=True)
    payment = models.IntegerField(null = True,blank=True)
    status = models.CharField(max_length=20,default = "pending")
    ordered_on = models.DateTimeField(editable=False,null = True,blank=True)
    delivered_on = models.DateTimeField(null = True,blank=True)
    def save(self, *args, **kwargs):
        '''add timestamps for creation'''
        if not self.id:
            self.ordered_on = timezone.now()
        return super(Order,self).save(*args, **kwargs)
    def __str__(self):
        return str(self.payment)

# @receiver(post_save,sender = settings.AUTH_USER_MODEL)
# def create_auth_token(sender,instance=None,created=False,**kwargs):
#     if created:
#         Token.objects.create(user=instance)
