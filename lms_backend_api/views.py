from .serializers import TeacherSerializers
from .models import Teacher
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from rest_framework.permissions import IsAuthenticated

class TeacherList(APIView):
    """
    List all teacher, or create a new teacher.
    """
    permission_classes=[IsAuthenticated,]
    def get(self, request, format=None):
        teacher = Teacher.objects.all()
        serializer = TeacherSerializers(teacher, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = TeacherSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TeacherDetail(APIView):
    """
    Retrieve, update or delete a teacher instance.
    """
    def get_object(self, pk):
        try:
            return Teacher.objects.get(pk=pk)
        except Teacher.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        teacher = self.get_object(pk)
        serializer = TeacherSerializers(teacher)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        teacher = self.get_object(pk)
        serializer = TeacherSerializers(teacher, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        teacher = self.get_object(pk)
        teacher.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)