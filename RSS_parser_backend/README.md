
# RSS  Parser 

### Author: Lujain aljarrah
### Description : 
Create a RESTful API to fetch the jobs from the Bayt client RSS feed (https://www.rotanacareers.com/rss/all/) using the feedparser library. Parse the fetched data to extract job titles and locations.


Follow theses steps :

1. Create a virtual environment (optional but recommended).
 *  ubunto user :
```
python -m venv .venv
source .venv/bin/activate
```
* windows terminal user :
```
Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope Process
python -m venv .venv
.venv\Scripts\activate 
```

2. Installing the requirements
```
pip install -r requirement.txt
```

3.  Running the server

```
python manage.py runserver
```


### If you want to login to the admin page run the next 2 commands
```
 python manage.py migrate
```
```
python manage.py createsuperuser
```
   
URL : http://127.0.0.1:8000/admin/

###  To check the API 

URL : http://127.0.0.1:8000/jobs/api/jobs/

### Python version 3.10.4
