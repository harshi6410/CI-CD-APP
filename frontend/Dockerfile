# Use the official Node.js image as a base
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY frontend/package.json ./frontend/
WORKDIR /app/frontend
RUN npm install

# Copy all other files
COPY frontend/ /app/frontend/

# Build the React app
RUN npm run build

# Install a static file server to serve the production build
RUN npm install -g serve

# Expose the app's port
EXPOSE 3000

# Start the React app using serve to serve the build
CMD ["serve", "-s", "build", "-l", "3000"]
