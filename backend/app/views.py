from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from django.contrib.auth.models import User

# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the app index.")

@csrf_exempt  # This is for demonstration; be cautious about CSRF in production.
@require_http_methods(["POST"])  # This ensures that only POST requests are accepted.
def login_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return JsonResponse({'error': 'Please provide both username and password.'}, status=400)

    # Authenticating the user.
    user = authenticate(request, username=username, password=password)

    if user is not None:
        # Successfully authenticated. Now, log the user in.
        login(request, user)
        return JsonResponse({'success': f'User {username} logged in successfully.'})
    else:
        # Authentication failed.
        return JsonResponse({'error': 'Invalid credentials'}, status=400)
    
@csrf_exempt  # Be cautious of CSRF in production environments.
@require_http_methods(["POST"])  # Ensures that only POST requests are processed.
def signup_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Basic validation
    if not username or not password or not email:
        return JsonResponse({'error': 'Missing username, password, or email'}, status=400)

    # Check if the user already exists
    if User.objects.filter(username=username).exists():
        return JsonResponse({'error': 'Username already exists'}, status=400)

    # Create the user
    try:
        user = User.objects.create_user(username, email, password)
        user.save()
        return JsonResponse({'success': 'User created successfully'}, status=201)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
