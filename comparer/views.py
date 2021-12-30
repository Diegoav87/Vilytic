from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from slugify import slugify
import requests
from rest_framework import status
from rest_framework.decorators import throttle_classes
from .throttles import VideoIdTrottle, VideoSearchTrottle


# Create your views here.


def dashboard(request):
    return render(request, 'comparer/dashboard.html')

# API


@api_view(["GET"])
@throttle_classes([VideoSearchTrottle])
def video_search(request):
    search_url = 'https://www.googleapis.com/youtube/v3/search'
    raw_query = request.GET.get('query').split('-')
    query = " ".join(raw_query)
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
        if 'videoId' in video['id']:
            video_data = {
                "id": video['id']['videoId'],
                "title": video['snippet']['title'],
                "thumbnail": video['snippet']['thumbnails']['high']['url'],
            }

            data["items"].append(video_data)

    return Response(data)


@api_view(['GET'])
@throttle_classes([VideoIdTrottle])
def video_id(request):
    video_id = request.GET.get('id')
    url = 'https://www.googleapis.com/youtube/v3/videos'
    params = {
        "part": 'statistics,snippet',
        'key': settings.YOUTUBE_API_KEY,
        "id": video_id
    }

    r = requests.get(url, params=params)
    data = r.json()

    if len(data['items']) > 0:
        item = data['items'][0]

        video_data = {
            "stats": {
                "views": item['statistics']['viewCount'],
                "likes": item['statistics']['likeCount'],
                "favorites": item['statistics']['favoriteCount'],
                "comments": item['statistics']['commentCount'],
            },
            "id": item['id'],
            "title": item['snippet']['title'],
            "thumbnail": item['snippet']['thumbnails']['high']['url'],
        }

        return Response(video_data)
    else:
        return Response("Video not found.", status=status.HTTP_404_NOT_FOUND)
