from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import TeacherList,TeacherDetail

urlpatterns = [
    path('teacher/', TeacherList.as_view()),
    path('teacher/<int:pk>/', TeacherDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)