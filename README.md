
# Reactify

Reactify is a full-stack transaction management application that enables users to transfer funds securely and efficiently,featuring a user-friendly interface and real-time transaction validation. The application uses Node.js, Express, MongoDB, and Mongoose for backend services, along with JWT for secure authentication. Mongoose sessions ensure transactional integrity for all user transfers.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Register and login functionality (JWT-based authentication).
- **Fund Transfer**: Users can transfer funds to other users.
- **Transaction History**: Users can view their past transactions.
- **Responsive Design**: The platform is fully responsive, offering a seamless experience on desktop and mobile.
- **Interactive UI**: Smooth navigation and real-time updates using React.
- **Backend API**: RESTful API built with Node.js and Express for data handling and storage.

## Tech Stack

### Frontend:
- **React**: Component-based architecture for the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Client-side routing for navigation.
- **Headless UI**: Accessible UI components.
  
### Backend:
- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: Web framework for building the REST API.
- **MongoDB**: NoSQL database for data persistence.
- **Mongoose**: ODM for MongoDB and data modeling.
- **JWT**: JSON Web Tokens for authentication and session management.

### Others:
- **Fetch**: Promise-based HTTP client for API requests from the frontend.
- **Bcrypt.js**: Password hashing and security.
- **Dotenv**: Environment variable management.

## Installation

### Prerequisites:
- Node.js (v14+)
- MongoDB (local or cloud instance)
- npm (Node package manager) or yarn

### Steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ashutosh-Shukla-036/Reactify.git
   cd Reactify
   ```

2. **Backend Setup:**

   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the `server` directory and add the following environment variables:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Frontend Setup:**

   ```bash
   cd ../FrontEnd
   npm install
   ```

4. **Run the project:**

   - To run the **backend** server:

     ```bash
     cd BackEnd
     npm start
     ```

   - To run the **frontend** React app:

     ```bash
     cd ../FrontEnd
     npm start
     ```

   The backend will be running on `http://localhost:5000` and the frontend on `http://localhost:3000`.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m "Add new feature"`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
