import feedparser
from django.core.cache import cache
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class JobListView(APIView):
    def get(self, request):
        # Check if data is in cache
        cached_data = cache.get('rss_feed_data')

        if cached_data is None:
            # Data is not in cache, fetch and format it
            rss_url = "https://www.rotanacareers.com/rss/all/"
            parsed_feed = feedparser.parse(rss_url)

            format_job = []

            for val in parsed_feed.entries:
                job = {}
                job['title'] = val.title
                job['location'] = val.summary_detail.value.split('<b>Job Location:</b>')[1].split('</td>')[1].split(">")[1]
            
                format_job.append(job)

            # Store formatted data in cache
            cache.set('rss_feed_data', format_job, timeout=3600)  # Cache for 1 hour

            return Response(format_job, status=status.HTTP_200_OK)
        else:
            # Return data from cache
            return Response(cached_data, status=status.HTTP_200_OK)
