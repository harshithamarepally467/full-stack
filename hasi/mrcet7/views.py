# # from django.shortcuts import render
# from django.http import HttpResponse

# # Create your views here.
# def contact(request):
#     return HttpResponse("This text is from myapp contact")
# # def about(request):
# #     return HttpResponse("this is about")
# from django.http import HttpResponse 
from django.shortcuts import render
from .models import csd
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import redirect



def contact(request):
    c = csd.objects.all()
    return render(request,'contact.html',{'csd_list': c})
def details(request,slug):
    csd_obj = csd.objects.get(slug=slug)
    return render(request,'details.html',{'csd': csd_obj}) 

# def register(request):
#     if request.method == 'POST':
#         form = UserCreationForm(request.POST)
          
#         if form.is_valid():
#              form.save()
#              return redirect("contact")
#         else:
#             form = UserCreationForm()
#         return render(request,'register.html',{'form':form})
    

# def login(request):
#     if request.method == 'POST':
#         form = AuthenticationForm(request, data=request.POST)
#         if form.is_valid():
#             user = form.get_user()
#             auth_login(request, user)
#             return redirect('contact')
#     else:
#         form = AuthenticationForm()
#     return render(request, 'login.html', {'form': form})
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("contact")
    else:
        form = UserCreationForm()
        return render(request, 'register.html', {'form':form})
    
        
        
        
