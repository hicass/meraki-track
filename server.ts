// Import necessary modules
const express = require('express'); // Express.js for handling HTTP requests
const next = require('next'); // Next.js for server-side rendering and routing

// Determine whether the environment is development or production
const dev = process.env.NODE_ENV !== 'production'; // Set 'dev' to true if not in production

// Create a Next.js app instance with the current environment setting
const app = next({ dev });

// Get the request handler for Next.js
const handle = app.getRequestHandler();

// Create an instance of an Express server
const server = express();

// Prepare the Next.js app (i.e., initialize it)
app.prepare().then(() => {
  // Define Express.js routes and middleware here

  // Start the Express server and listen on port 8000
  server.listen(8000, (err?: Error) => {
    // If there’s an error starting the server, throw it
    if (err) throw err;

    // Log a message when the server is successfully started
    console.log('> Server ready on http://localhost:8000');
  });
});
