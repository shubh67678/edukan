from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.conf import settings
import stripe 
stripe.api_key = settings.STRIPE_SECRET_KEY
from .models import Product,Order ,Profile

def calculate_payment_for_the_order(request):
    cart_data = request.data['cart_info']
    payment_val = 0 
    for product_dict in cart_data['products']:
        cur_product = Product.objects.filter(id = product_dict['id']).first()
        # print(cur_product.price,product_dict['quantity'])
        payment_val += cur_product.price * product_dict['quantity']
    
    requesting_user = request.user
    requesting_profile = Profile.objects.filter(user = requesting_user).first()
    print("requesting user",requesting_profile)

    return payment_val


def create_order_with_cart_reference(request):
    print(request.data)
    print(request.user)
    cart_data = request.data['cart_info']
    ordered_products = []
    payment_val = 0 
    for product_dict in cart_data['products']:
        cur_product = Product.objects.filter(id = product_dict['id']).first()
        # print(cur_product.price,product_dict['quantity'])
        payment_val += cur_product.price * product_dict['quantity']
        ordered_products.append(cur_product)
    
    requesting_user = request.user
    # print(requesting_user.id)
    # requesting_profile = Profile.objects.filter(user = requesting_user).first()
    # print("requesting user",requesting_profile)

    new_order_made = Order.objects.create(purchaser = requesting_user,payment = payment_val)
    for product in ordered_products:
        new_order_made.products.add(product)

    new_order_made.save()
    # print(new_order_made)
    # print(ordered_products)
    # print(payment_val)

    return payment_val



def generate_response(intent):
    # Note that if your API version is before 2019-02-11, 'requires_action'
    # appears as 'requires_source_action'.
    if intent.status == 'requires_action' and intent.next_action.type == 'use_stripe_sdk':
        # Tell the client to handle the action
        return Response(data = {'requires_action': True,
            'payment_intent_client_secret': intent.client_secret,},
            status= status.HTTP_200_OK)
    elif intent.status == 'succeeded':
        # The payment didn’t need any additional actions and completed!
        # Handle post-payment fulfillment
        return Response(data = {'success': True,},
            status= status.HTTP_200_OK)
    else:
        # Invalid status
        return Response(data = {'error': 'Invalid PaymentIntent status',},
            status= status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@api_view(['POST'])
def test_function_view(request):
    YOUR_DOMAIN = "http://localhost:8000/"

    data = request.data
    print(request.data)
    intent = None
    total_payment = calculate_payment_for_the_order(request)

    try:
        if 'payment_method_id' in data:
            # Create the PaymentIntent
                intent = stripe.PaymentIntent.create(
                payment_method = data['payment_method_id'],
                amount = total_payment*100,
                currency = 'inr',
                confirmation_method = 'manual',
                confirm = True,
            )
        elif 'payment_intent_id' in data:
            intent = stripe.PaymentIntent.confirm(data['payment_intent_id'])
    except stripe.error.CardError as e:
        # Display error on client
        return Response(data = {'error': 'Invalid PaymentIntent status',},
            status= status.HTTP_500_INTERNAL_SERVER_ERROR)

    stripe_payment_response = generate_response(intent)
    
    if 'success' in  stripe_payment_response.data and stripe_payment_response.data['success']:
        #create the order 
        create_order_with_cart_reference(request)

    return stripe_payment_response

    
        




# checkout_session = stripe.checkout.Session.create(
#     payment_method_types=['card'],
#     line_items=[
#         {
#             # TODO: replace this with the `price` of the product you want to sell
#             'price': a,
#             'quantity': 1,
#         },
#     ],
#     mode='payment',
#     success_url=YOUR_DOMAIN + '?success=true',
#     cancel_url=YOUR_DOMAIN + '?canceled=true',
# )
# except Exception as e:
#     return Response(data = str(e), status=status.HTTP_400_BAD_REQUEST)
# return Response(status=status.HTTP_200_OK)

# return Response(status=status.HTTP_400_BAD_REQUEST)
