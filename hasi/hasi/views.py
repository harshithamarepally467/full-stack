from django.http import HttpResponse 
from django.shortcuts import render


def home(request):
    return render(request, 'home.html')
    # return HttpResponse(request,'home.html')

# def about(request):
#   return HttpResponse(request,'about.html')
def about(request):
    return render(request, 'about.html')
    # return HttpResponse("this is the about page")