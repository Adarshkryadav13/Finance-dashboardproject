from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import ReacordViewset

router = DefaultRouter()
router.register('', ReacordViewset)

urlpatterns = [
    path('', include(router.urls)),
]
