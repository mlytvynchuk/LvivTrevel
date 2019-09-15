from api.models import Event
def del_all_posts():
    Event.objects.all().delete()

del_all_posts()