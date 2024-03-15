from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
UserModel = get_user_model()

def custom_validation(data):
    email = data['email'].strip()
    username = data['username'].strip()
    password = data['password'].strip()
    ##
    if not email or UserModel.objects.filter(email=email).exists():
        raise ValidationError('Välj en annan e-post')
    ##
    if not password or len(password) < 8:
        raise ValidationError('Välj ett annat lösenord med minst 8 tecken')
    ##
    if not username:
        raise ValidationError('Välj ett annat användarnamn')
    return data


def validate_email(data):
    email = data['email'].strip()
    if not email:
        raise ValidationError('En e-post adress krävs')
    return True

def validate_username(data):
    username = data['username'].strip()
    if not username:
        raise ValidationError('choose another username')
    return True

def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('Ett lösenord krävs')
    return True