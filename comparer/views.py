from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from slugify import slugify
import requests

# Create your views here.
@login_required
def dashboard(request):
    return render(request, 'comparer/dashboard.html')

# API
@api_view(["GET"])
def video_search(request):
    search_url = 'https://www.googleapis.com/youtube/v3/search'
    raw_query = request.GET.get('query').split('-')
    query = " ".join(raw_query)
    print(query)
    params = {
        'part': 'snippet',
        'q': query,
        'key': settings.YOUTUBE_API_KEY,
        'maxResults': 5
    }

    r = requests.get(search_url, params=params)

    data = {
        "items": []
    }

    for video in r.json()['items']:
        video_data = {
            "id": video['id']['videoId'],
            "title": video['snippet']['title'], 
            "thumbnail": video['snippet']['thumbnails']['medium']['url'], 
        }
        data["items"].append(video_data)

    return Response(data)
