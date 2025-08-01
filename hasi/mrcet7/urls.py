# # from django.contrib import admin
# from django.urls import path
# # from hasi.views import home, about
# from . import views

# urlpatterns =[
#     # path('admin/', admin.site.urls),
#     # path('',views.index ,name ='index'),
#     path('', views.contact,name='contact')
#     path('details/<slug:slug>/', views.details, name='details')
# ]
# # from django.urls import include
# from django.urls import path
# from . import views
# urlpatterns = [
#      path('', views.contact,name='contact'),
#     path('details/<slug:slug>/', views.details, name='details'),
#     path('register/',views.register,name='register'),
#     path('login/', views.login, name='login'),

# ]
from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.contact,name='contact'),
    path('details/<slug:slug>/', views.details, name='details'),
    path('register/' , views.register, name='register'), 
path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login')


]



