from django.shortcuts import render
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.conf import settings


def index(request):
    print(request)
    return render(request, 'index.html')


def contact(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']

        template = render_to_string('email_template.html', {
            'name': request.POST['name'],
            'email': request.POST['email'],
            'message': request.POST['message']
        })

        email = EmailMessage(
            "Vilytic",
            template,
            settings.EMAIL_HOST_USER,
            ['diegoabdov@gmail.com']
        )
        email.fail_silently = False
        email.send()
        return render(request, 'contact_confirm.html', {"name": name})
    else:
        return render(request, 'index.html')
