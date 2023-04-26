# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory to the root directory of the frontend app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend app files to the container
COPY . .

# Expose the port that the frontend app is running on
EXPOSE 3000

# Start the frontend app
CMD ["npm", "start"]
