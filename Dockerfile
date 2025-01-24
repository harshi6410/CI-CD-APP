# Use the official Node.js image as a base
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy all app files
COPY . .

# Expose the app's backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "backend/server.js"]
