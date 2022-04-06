from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect,Http404
from django.shortcuts import render
# from django.http import HttpResponse
from django.urls import reverse
from django.template.loader import render_to_string

monthly_challenges = {
   "january": "Quit alcohol for 30 days.",
   "february": "Learn how to do the plank and push-ups correctly.",
   "march": "Experience all the benefits of meditation.",
   "april": "Boost your level of endurance by doing cardio workouts.",
   "may": "Try eating less meat and at least 400 grams of vegetables.",
   "june": "Maintain good hydration in your body.",
   "july": "Add more steps to your daily routine and become more agile.",
   "august": "Give up a Social media and maintain good mental health.",
   "september": "Beat that sugar addiction and show it who's boss!",
   "october": "Learning to sleep better as a good night's sleep is essential for a strong immune system.",
   "november": "Show yourself some love and understanding.",
   "december": None
}

# Create your views here.

def index(request):
    months = list(monthly_challenges.keys())

    return render(request,"challenges/index.html",{
        "months":months
    })

def monthly_challenge_by_number(requst, month):
    months = list(monthly_challenges.keys())
    
    if month > len(months):
        return HttpResponseNotFound("Enter correct month number please")

    redirect_month = months[month-1]
    
    redirect_path = reverse("month_challenge", args=[redirect_month]) 
    return HttpResponseRedirect(redirect_path)


def monthly_challenge(request, month):
    
    try:
        print(month)
        challenge_text = monthly_challenges[month]
                            
        return render(request, "challenges/challenge.html", {
        "text":challenge_text,
        "monthname":month.capitalize()
        })
        
    except:
        raise Http404()


        # response = render_to_string("404.html")
        # return HttpResponseNotFound(response)
    


    
   