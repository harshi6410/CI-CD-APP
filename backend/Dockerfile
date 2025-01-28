# Use the official Node.js image as a base
FROM node:14-alpine

# Set environment variables
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy all backend files (including server.js, routes, controllers, etc.)
COPY backend/ ./

# Expose the app's port (5000)
EXPOSE 5000

# Create and switch to a non-root user for security
RUN adduser -D appuser
USER appuser

# Start the backend server
CMD ["node", "server.js"]
