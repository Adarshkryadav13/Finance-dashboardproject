from rest_framework.decorators import api_view
from rest_framework.response import Response
from records.models import Records
from django.db.models import Sum

# Create your views here.
@api_view(['GET'])
def summary(request):
    income = Records.objects.filter(type='income').aggregate(total=Sum('amount'))
    expense = Records.objects.filter(type='expense').aggregate(total=Sum('amount'))

    total_income = income['total'] or 0
    total_expense = expense['total'] or 0

    return Response({
        "total_income": total_income,
        "total_expense": total_expense,
        "net_balance": total_income - total_expense
    })

@api_view(['GET'])
def category_summary(request):
    data = Records.objects.values('category').annotate(total=Sum('amount'))

    return Response(data)

@api_view(['GET'])
def recent_activity(request):
    data = Records.objects.order_by('-date')[:5].values()

    return Response(data)

from django.db.models.functions import TruncMonth

@api_view(['GET'])
def monthly_trends(request):
    data = (
        Records.objects
        .annotate(month=TruncMonth('date'))
        .values('month')
        .annotate(total=Sum('amount'))
        .order_by('month')
    )

    return Response(data)