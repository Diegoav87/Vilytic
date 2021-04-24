from rest_framework.throttling import UserRateThrottle


class VideoSearchTrottle(UserRateThrottle):
    scope = 'video_search'

    def allow_request(self, request, view):
        return super().allow_request(request, view)


class VideoIdTrottle(UserRateThrottle):
    scope = 'video_id'

    def allow_request(self, request, view):
        return super().allow_request(request, view)
