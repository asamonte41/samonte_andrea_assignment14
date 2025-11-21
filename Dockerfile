# --- Stage 1: Build React app ---
FROM node:20 AS builder

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
FROM nginx:stable-alpine

# Set working directory inside Nginx container
WORKDIR /samonte_andrea_final_site

# Copy production build from builder stage
COPY --from=builder /samonte_andrea_final_site/build /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose required port
EXPOSE 5575

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
