# Bayt Assignment
## Author : Lujain Al-Jarrah

## this assignment consist of three part

* **first part** :you can find the solution in TCL_assessment . 
* **second part** : consist of Rss_parser_frontend and RSS_parser_backend.(check below steps)
* **third part** :you can find the solution in ER_diagram_assessment.


# For second Part(RSS Parser)
## for RSS_parser_backend

make sure you are in **\bayt_assignment\RSS_parser_backend**
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

### If you want to login to the admin pannel
1. python manage.py migrate


2. python manage.py createsuperuser

   
URL : http://127.0.0.1:8000/admin/


###  To check the API 

URL : http://127.0.0.1:8000/jobs/api/jobs/
 ### python version 3.10.4
## for rss_parser_frontend

make sure you are in **\bayt_assignment\rss_parser_frontend**
1. code .
2. index.hmtl file ,press right click and choose 'open with live server'
![html](./assess/html.png)

 # the final result
![homeView](./assess/homeView.png)
![mapView](./assess/mapView.png)
![tableView](./assess/tableView.png)
