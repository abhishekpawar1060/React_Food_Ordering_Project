Build a React Full Stack Project by Using React js, Node js, express js, MongoDB.



Step 1 : Create frontend project by using command : npx create-react-app fronted


## Backend
1. Create a backend folder.
2. Intialize npm project by using (npm init -y)
3. Copy data.js file into the backed/src
4. npm install express cors
5. Create server.js
6. Add Food Router
    1. Add jsconfig.json
    2. Add Apis
7. npm install nodemon (npm i -D nodemod)
    1. Add dev Script into the package.json
    2. npm run dev
8. Add axios package (axiosConfig.js file) For the connection of frontend with backend
9. install axios at frontend folder
9. Connect food service to the Apis


## Login Page Design
# Backend
1. Create User Router
    1. npm install jsonwebtoken
    2. add login api
        1. Add sample_users to data.js
        2. add httStatus.js
    3. Add generateTokenResponse function
2. Add uset Router to Server.js

# Frontend
1. Create user Service
    1. Add getUser function
    2. Add login function
    3. Add logout function
2. npm install react-toastify
3. create userAuth hook
    1. Add user state
    2. add login function
    3. add logout funnction
4. Create loginPage component(npm install react-hook-form)
    1. Add to AppRouter.js
    2. Create Custom Components
        Input Cotainer (Add CSS)s

5. Add useAuth to the Header Component