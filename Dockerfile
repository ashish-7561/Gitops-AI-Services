# Step 1: Use a lightweight Node.js base image
FROM node:18-slim

# Step 2: Create a directory for the app inside the container
WORKDIR /usr/src/app

# Step 3: Copy package files first (to optimize caching)
COPY package*.json ./

# Step 4: Install only production dependencies
RUN npm install --only=production

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Expose the port your app runs on
EXPOSE 3000

# Step 7: Define the command to start the app
CMD [ "npm", "start" ] 