from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EventSerializer, CategorySerializer
from .models import Event,Category
# Create your views here.

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
