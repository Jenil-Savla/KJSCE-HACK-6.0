from django.urls import path
from . import views

urlpatterns = [
    path('model/', views.call_model.as_view()),
]