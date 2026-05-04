# Customer-Request_Tracker

//Step-by-step setup instructions

1. Clone the Repository
git clone <your-repo-link>
cd Customer-Request-Tracker

Backend Setup :
  - cd server
  - npm install
  - Create .env file inside server/

  - SUPABASE_URL=your_supabase_project_url
  - SUPABASE_ANON_KEY=your_supabase_anon_key

Frontend Setup :
  - cd ../client
  - npm install
  - npm run dev

3. How to run the project :
   - Run Backend
     -> nodemon server.js
     -> Server will run on: http://localhost:5000
     
   - Run Frontend
     -> npm run dev
     -> Frontend runs on: http://localhost:5173

4. Tools/technologies used :
   - Frontend : React (Vite), Tailwind CSS, Axios
   - Backend  : Node.js, Express.js
   - Database : Supabase
  
5. Architecture :
   Frontend (React UI)
           ↓
    Axios API Calls
           ↓
   Express Backend (Routes → Controllers)
           ↓
   Supabase Database
           ↓
   Response returned to frontend
           ↓
   React updates UI using state

6. Known Issues / Limitations :
   - No authentication (any user can access)
   
