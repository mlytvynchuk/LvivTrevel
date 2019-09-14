from rest_framework import routers
from .views import CategoryViewSet, EventViewSet

router = routers.DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = router.urls