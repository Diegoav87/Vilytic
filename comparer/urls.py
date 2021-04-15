from django.urls import path
from . import views

app_name = "comparer"

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('video-search/', views.video_search, name="video-search"),
    path('video-id/', views.video_id, name="video-id")
]
