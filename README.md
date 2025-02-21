# 🎯 Todo List App (Full-Stack Take Home Test)

This is a Todo List App for creating, editing, retrieving and deleting tasks. [Try out the complete app here!🚀](https://todo-list-frontend-liwj28j45-syedaliasar14s-projects.vercel.app/)

## Tech Stack

- Next.js
- Express.js
- Prisma
- MySQL
- Typescript
- Tailwind CSS


## Local Setup Instructions

### 🚀 Frontend Setup

1. [**Clone the Frontend repo**](https://github.com/syedaliasar14/todo-list-frontend)

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Setup environment variables**

    Create a ```.env.local``` file in the root directory and add the following

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:5000
    ```

4. **Run the server**

    ```sh
    npm run dev
    ```

    The frontend should now be running at `http://localhost:3000`

### ⚙️ Backend Setup

1. [**Clone the backend repo**](https://github.com/syedaliasar14/todo-list-backend)

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Configure environment variables**

    Create a `.env` file in the root directory and add the following
    ```env
    DATABASE_URL=<REFER TO MY EMAIL>
    PORT=5000
    ```

4. **Generate Prisma Client**

    ```sh
    npx prisma generate
    ```

5. **Run the server**

    ```sh
    npm run dev
    ```

    The backend should now be running at `http://localhost:5000`.


### ✅ Test Locally

1. Visit the local frontend url http://localhost:3000

2. Call backend APIs by creating, editing, and deleting tasks.


### Notes

- The MySQL database is hosted on the cloud by Aiven so dev and prod use the same database for this project.
- The frontend is hosted via **Vercel** and the backend is hosted via **Render**; it may take a minute for the data to load the first time you visit the prod application.
- For security reasons, please refer to my email to retrieve the value for ```DATABASE_URL``` environment variable.

