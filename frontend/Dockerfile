# Use the official Node.js image as a base
FROM node:14-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the frontend files and build the app
COPY frontend/ ./
RUN npm run build

# Stage 2: Use a lightweight web server (serve) to serve the React app
FROM nginx:alpine

# Copy the build files from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for serving the app
EXPOSE 80

# Start nginx to serve the built files
CMD ["nginx", "-g", "daemon off;"]
