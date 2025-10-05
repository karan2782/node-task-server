# Simple Node.js Web Server

This project is a basic web server built with Node.js that serves static files. It's designed to deliver HTML, CSS, JavaScript, and image files from the `static` directory.

## Project Structure

- `server.js`: The main entry point for the application. It creates the server and handles requests.
- `static/`: This directory contains all the static assets that are served to the client.
  - `home.html`: The home page of the website.
  - `about.html`: The about page.
  - `contact.html`: The contact page.
  - `download.jpeg`: An image file used on the pages.
  - `404.html`: A page that is shown when a requested file is not found.
- `package.json`: Defines the project's metadata and dependencies.
- `package-lock.json`: Records the exact version of each dependency.
- `node_modules/`: Contains the installed Node.js modules.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository or download the source code.
2. Open a terminal in the project directory.
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

To start the server, run the following command:

```bash
node server.js
```

Alternatively, if you have `nodemon` installed, you can run:

```bash
nodemon server.js
```

This will start the server on `http://localhost:3000` and automatically restart it when you make changes to the code.

## Screenshots

Here are some screenshots of the project in action.

### Home Page
This is the main landing page of the website, displaying a welcome message and navigation links.

![Home Page](./screenshots/Screenshot%20from%202025-10-05%2012-23-44.png)

### About Page
This page provides more information about the laundry service.

![About Page](./screenshots/Screenshot%20from%202025-10-05%2012-23-51.png)

### Contact Page
This page contains the contact information.

![Contact Page](./screenshots/Screenshot%20from%202025-10-05%2012-23-59.png)

### Development Environment
This shows the code in the editor and the server running with `nodemon` in the terminal.

![Development Environment](./screenshots/Screenshot%20from%202025-10-05%2012-24-21.png)
