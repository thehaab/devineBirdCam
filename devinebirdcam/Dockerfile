# Use a base image with the necessary dependencies
FROM ubuntu:latest

# Install required packages
RUN apt-get update && apt-get install -y \
  nginx \
  ffmpeg \
  libnginx-mod-rtmp \
  python3 \
  python3-pip

# Set up the working directory
WORKDIR /app

# Copy the application code to the container
COPY . /app

# Install Python dependencies
RUN pip install pipreqs 
RUN pipreqs /app

# Expose the necessary ports
EXPOSE 80
EXPOSE 1935

# Start the NGINX server
CMD service nginx start && python3 app.py

# add volume for user login data
VOLUME /app/data
