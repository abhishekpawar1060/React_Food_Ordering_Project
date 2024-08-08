Build a React Full Stack Project by Using React js, Node js, express js, MongoDB.

# Deploy On the Render.com (Link is below)
https://food-ordering-project-su4s.onrender.com


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


# Login Page Design
## Backend
1. Create User Router
    1. npm install jsonwebtoken
    2. add login api
        1. Add sample_users to data.js
        2. add httStatus.js
    3. Add generateTokenResponse function
2. Add uset Router to Server.js

## Frontend
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



## MongoDB
1. Install MongoDB 
2. Install mongoose
    1. add user model
    2. add food model
3. Add .env file
    install dotenv
    1. Add MONGO_URI_LOCAL
    2. add to .gitIgnore
4. Add database.config.js
    1. connect to mongodb
    2. Seed users
        install bcryptjs for password hasing
    3. Seed Food

5. Update user.router (Using UserModel)
    1. install express-async-handler
    2. Login API
    3. generateTokenResponse
6. Update food.router (Using FoodModel)
    1. Root API (Loading all foods)
    2. Tags api
    3. search api
    4. foodId api (Finding food by id)

7. Fix Image url in:
    1. Thubnails component
    2. Food Page Component
    3. Cart Page Component

# Register Page Desgin
1. Add Register Page Component
    1. Add to APProutes
    2. Add Link to login Page
    3. CSS
2. Add/Register api to user.router.js
3. Add register function in UserService
4. Add register function in useAuth hook
    1. add to register page


# Design Loading Component
1. Create useLoading hook
    Add LoadinProvider to index.js
2. Create Loading Component
    1. Add to app.js
    2. add image
    3. css
3. create Loading interceptor

# Checkout Page
1. Create Checkout Page Component
    1. Create AuthRoute
    2. Add to Route
    3. Add css
    4. Create Order Items list
    5. Create Maps Component
        1. Install leaflet & react-leaflet
        2. Adding Images to public folder
        3. Fixing header menu problem with map
2. Create Order router  
    1. Create auth middleware
        1. Add UNAUTHORIZED http status
        2. Add to Order router
    2. Create Order model
        1. Create Order Status
    3. Add to server.js
3. Connenctin Frontend to Backend
    1. Create order service
        1. Add create function
    2. Create Auth Interceptor
        1. add to index.js

# Payment Page
1. Create PaymentPage Component
    1. Add to route
    2. css
2. Upadate order route
    1. add newOrderForCurrentUser
    2 add pay api
3. Create PaypalButtons Component
    1. npm install @paypal/react-paypal-js
    2. add cleatCart to useCart
    3. Get clientId
    4. Create SandBox user for testing

# Order Track Page
1. Create Order track page
    1. Add to route
    2. css
    3. Create DataTime Component
    
# Desing Profile Page
1. Create ProfilePage Component
    1. CSS
    2. Update Profile
    3. ChangePassword component
2. Update useAuth hook

# Desing Order Page
1. Create Order Page
    1. Add to route
    2. CSS
2. Update Order Service
    1. Add getAll function

# Design admin Dashboard
1. Adding Icons
2. Create Dashboard Component
    1. add to route
3. Update link in the header

# Food Admin Page
1. Create Foods Admin Page
    1. Add it to AppRoute.js
        1. Create Admin Route
2. Add Search
3. Delete Food

# Add and Edit Foods
1. Create FoodEditPage Component
    1. add form
2. Image
    1. Create uploadService
        1. uploadImage
    2. Create upload.router
        1. Add to server.js
        2. npm install multer
        3. npm install cloudinary
        4. create cloudinary.config.js
        5. Progress bar instead of Loading for upload
    3. Update Food Service
        1. add function

# Manage Users
1. Create UserPage component
    1. Add to route
2. Add funtions to userService
    1. getAll
    2. toggleBlock
3. Add apis to user.router
    1. getAll
    2. toggleBlock
4. Add isBlocked property to user.model


# Add/Edit User
1. Create UserEditPage
    1. Add to route
2. Add to userService
    1. getById
    2. updateUser
3. Add to user.router
    1. getById
    2. updateUser
