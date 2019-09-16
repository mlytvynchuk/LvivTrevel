# LvivTrevel
LvivTrevel is a web application that shows events in Lviv. This one parses data from another events website, allows to moderate it and posts.
It is implemented with React.js and Django rest framework in EPAM Lviv Social Hackathon.


## To run frontend
In the project root directory, you can run:
 `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## To run backend:
1. Install virtualenv `virtualenv venv` in prject directory. If it is not installed - `pip install virtualenv` or `easy_install virtualenv`

2. Run `pip install -r requirements.txt` in the project `backend/` directory

3. Run `python manage.py runserver` in the same `backend/` directory 
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
