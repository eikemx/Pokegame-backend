# Pokemon Game Quartett Backend API

## Project Overview
Pokemon Game Backend API serves as the data management system for the Pokemon Game platform. This Node.js-based API handles Pokemon data management and provides a robust backend infrastructure for the frontend application.

## Features
- Complete Pokemon data management system
- RESTful API endpoints
- Static Pokemon database
- Error handling and logging
- CORS configuration for secure cross-origin requests

## Technologies Used
### Backend
- Node.js
- Express.js
- CORS
- dotenv
- nodemon (development)

## Getting Started
### Prerequisites
- Node.js (version 16.x)
- npm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/eikemx/pokegame-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

Development mode (with auto-reload):
```bash
npm run dev
```
Production mode:
```bash
npm start
```

The server will start on port 3088 (or the port specified in your environment variables).

## Project Structure
```bash
pokegame-backend/
├── dbs/
├── routes/
└── README.md
```

## API Endpoints in Detail

### Pokemons
1. **Get All Pokemons**
   - Endpoint: `GET /pokemons`
   - Returns all Pokemon data

2. **Get Single Pokemon**
   - Endpoint: `GET /pokemons/:id`
   - Returns detailed Pokemon information by ID

## Pokemon Data Structure
Each Pokemon object contains:
- ID
- Name (in multiple languages)
- Type(s)
- Base stats:
  - HP
  - Attack
  - Defense
  - Special Attack
  - Special Defense
  - Speed

## Related Repositories
- Frontend Application: [Pokegame-Frontend](https://github.com/eikemx/pokegame-frontend)

## Scripts
- `npm run dev`: Starts development server with nodemon
- `npm start`: Starts production server

## Deployment
The API is deployed on Render and can be accessed at:
- [https://poke-quartett.onrender.com](https://poke-quartett.onrender.com)

## Contact
- GitHub: [@eikemx](https://github.com/eikemx)
- LinkedIn: [Eike Merx](https://www.linkedin.com/in/eike-merx-50b111216/)
- XING: [Eike Merx](https://www.xing.com/profile/Eike_Merx/web_profiles)

## Acknowledgments
- Pokemon data source
- WBS Coding School
- Project collaborator: yegormalakhov

---
*This project was created as part of the WBS Coding School Bootcamp curriculum*