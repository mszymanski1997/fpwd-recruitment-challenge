# CurrenX 🪙

Hey! This is **CurrenX** – a lightweight, modern web app built to track live EUR/PLN exchange rates and simulate basic currency transactions.

I wrote this as a recruitment task, focusing on keeping the code clean, modular, and making sure the UI feels snappy and responsive.

---

## 🛠️ Key Features & Implementation Detail

- **Dark-Theme UI:** Styled with a custom, high-contrast dark and orange theme.
- **Fully Responsive:** Tested across multiple screen sizes – the layout handles everything from wide desktop monitors down to mobile viewports without breaking.
- **Pure TypeScript:** No raw JS here. Both frontend and backend are fully typed for better maintainability and fewer runtime bugs.
- **Modular SCSS:** Used SCSS Modules for styling, along with custom mixins and variables to keep the code clean, organized, and strictly DRY.
- **Live Data Sync:** Instead of forcing users to refresh manually, the frontend uses an active background interval to regularly poll the backend cache and keep the displayed rates up to date.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, SCSS Modules, Lucide Icons
- **Backend:** NestJS, TypeScript, Built-in Caching Mechanism

---

## 🚀 Getting Started (How to Run Locally)

Follow these simple steps to clone the repository and get the app spinning on your machine.

### 1. Clone the Repo

First, clone the project to your local directory:
git clone https://github.com/mszymanski1997/fpwd-recruitment-challenge.git

### 2.Configure Environment Variables (.env)

The backend requires access to an external API. Before launching the server, you need to set up your environment variables.

Navigate to the backend folder.
Create a new file named .env.
Paste the following variables and add your actual API details:

API_URL=[YOUR_API_URL]
API_KEY=[YOUR_API_KEY]

### 3.Backend Setup (NestJS)

Open your terminal and run the following commands to install dependencies and start the backend API server:
cd backend
npm install
npm run start

The server will boot up and listen for requests on http://localhost:3001.

### 4. Frontend Setup (Next.js)

Open a second terminal window (keep the backend terminal running!) and run these commands to launch the client application:

cd frontend
npm install
npm run dev

Now, open your favorite browser and go to http://localhost:3000. You're all set!
