from django.shortcuts import render, redirect
from .forms import UserCreateForm
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .decorators import unauthenticated_user
from django.contrib import messages

# Create your views here.


@unauthenticated_user
def register(request):
    form = UserCreateForm()

    if request.method == "POST":
        form = UserCreateForm(request.POST)

        if form.is_valid():
            user = form.save()
            messages.success(request, 'Account was created')

            return redirect('accounts:login')
    return render(request, 'accounts/register.html', {'form': form})


@unauthenticated_user
def login_user(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            messages.info(request, "Username or password is incorrect")

    return render(request, 'accounts/login.html', {})


@login_required
def logout_user(request):
    logout(request)
    return redirect('index')
