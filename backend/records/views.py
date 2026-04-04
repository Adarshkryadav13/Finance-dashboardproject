from rest_framework import viewsets
from .models import Records
from .serializers import RecordSerializer
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.


class ReacordViewset(viewsets.ModelViewSet):
    queryset = Records.objects.all()
    serializer_class = RecordSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category', 'type', 'date']

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)