from django.contrib import admin
from .models import Event, Category
# Register your models here.
admin.site.site_header = "Lviv Trevel Admin Panel"
admin.site.site_title = "Lviv Trevel Admin Panel"
admin.site.index_title = "Welcome to Lviv Trevel Admin Panel"
class EventAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_filter = ['category', 'is_active']
admin.site.register(Event, EventAdmin)
admin.site.register(Category)
