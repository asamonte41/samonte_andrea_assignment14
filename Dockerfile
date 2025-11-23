# --- Stage 1: Build Production React App ---

# Use Node image to compile and build the app
FROM node:20 AS build

# Set working directory
WORKDIR /samonte_andrea_final_site

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the React app for production
RUN npm run build

# --- Stage 2: Serve with Nginx ---

# Use Nginx to serve the final bundle site
FROM nginx:stable-alpine

# Set working directory inside Nginx container
WORKDIR /samonte_andrea_final_site

# Copy production build from builder stage
COPY --from=build /samonte_andrea_final_site/build /usr/share/nginx/html

# Update NGINX to listen on port 5575 instead of the default
RUN sed -i 's/80/5575/' /etc/nginx/conf.d/default.conf

# Expose required port
EXPOSE 5575

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
