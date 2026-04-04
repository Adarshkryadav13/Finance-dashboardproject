from django.urls import path
from .views import summary, category_summary, recent_activity, monthly_trends

urlpatterns = [
    path('summary/', summary),
    path('category/', category_summary),
    path('recent/', recent_activity),
    path('monthly/', monthly_trends),
]