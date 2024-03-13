# Use a base image with the necessary dependencies
FROM ubuntu:latest

# Install required packages for JS
RUN apt-get update && apt-get install -y \
  nginx \
  ffmpeg \
  libnginx-mod-rtmp \
  nodejs \
  npm 


# Set up the working directory
WORKDIR /app

# Copy the application code to the container
COPY . /app

# Install javascript dependencies
RUN npm install


# Expose the necessary ports
EXPOSE 80
EXPOSE 1935

# Start the NGINX server
CMD service nginx start && npm run app.js

# add volume for user login data
VOLUME /app/data
