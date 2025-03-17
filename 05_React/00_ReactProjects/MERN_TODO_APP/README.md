# MERN-Todo-App-main 
#Made by Sandeepak

‘To-Do’ application. The user should be able to add, edit or delete their entries in the to-do list.

Use whatever technology/framework that you are comfortable with (any mix of frontend, backend, and database technologies/frameworks).

You’d also need to implement user authentication and authorization functionalities. 

Include at least two RESTful APIs that perform basic CRUD operations on a specific resource (e.g., adding tasks).

Deploy the application to a hosting platform of your choice (e.g., Heroku, AWS, or Azure) or provide instructions on how to run it locally.

Document the technologies used, any important architectural decisions, and provide instructions on how to set up and test the application.

 Used MongoDb as the database , React for frontend , NodeJs Engine as Backend for the web application,
#     - The /server so called backend Utilizes REST Guidelines to make reequest , Or while connection with the client . 
#     - Tne breakup for the server is provided below 
          - The models path contains a model for todo list used by ODM to check weather it fulful the guidelines or not 
        -  /model for todo list used by ODM to check weather it fulful the guidelines from the Schema  or not 
        -  /routes for todo list contains all the methods for Our Api , which is in our case;  GET POST PUT DELETE which do following 
                     Operations Desc. display All ,Create New , Update Existing , Delete Entry" 
           -  Other things are normal , like index.js is Our Starting Point


# It is Suggested to make request in required format as stated above only. 
          ### To run the app use following commands for both frontend and Backend seperately from /server and /client directory OR anywhere if you installed it globally
             - npmm init 
             - npm i 
             - npm run / npm run build , for backend and Frontend

     - The /client frontend is Made via preddefined React Template (Create React app)
          - The frontend Contains only few things as shown below 
                -  /src directory with consist , App.js as starting point for our app
                -  /public directory consists all assets like icon and images      


# It is Suggested to make request in required format as stated above only. 
          ### To run the app use following commands for both frontend and Backend seperately from /server and /client directory OR anywhere if you installed it globally
             - npmm init 
             - npm i 
             - npm run / npm run build , for backend and Frontend
# Please define DB_CONNECT , PORT in .env file inside /server Directory
              - Assign your Mongo URI in DB_CONNECT inside .env before Hand.
# Note : The frontend will be running on PORT 3000 , and supposes that BACKEND IS Available at PORT 5550 . So it is suggested to Ensure the needful.
