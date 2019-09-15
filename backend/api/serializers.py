from rest_framework import serializers
from .models import Event,Category
class EventSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    class Meta:
        model = Event
        fields = ['name', 'image', 'date', 'category', 'address', 'price', 'image', 'description']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

