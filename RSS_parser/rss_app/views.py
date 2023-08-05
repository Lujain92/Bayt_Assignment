import feedparser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class JobListView(APIView):
    def get(self, request):
        rss_url = "https://www.rotanacareers.com/rss/all/"
        parsed_feed = feedparser.parse(rss_url)

        format_job = []

        for val in parsed_feed.entries:
            job = {}
            job['title'] = val.title
            job['location'] = val.summary_detail.value.split('<b>Job Location:</b>')[1].split('</td>')[1].split(">")[1]
            
            format_job.append(job)

        return Response(format_job, status=status.HTTP_200_OK)
