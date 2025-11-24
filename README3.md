#README for Coding Assignment 14

#Building a Portfolio Website

#Name: Andrea Samonte

---

# - OBJECTIVES -

#Containerize the React portfolio website using Docker.
#Run the production build in a Docker container on a specific port.
#Apply Husky, Prettier, ESLint and CI/CD best practices for a professional development workflow.

# - ISNTALL REACT ROUTER DOM -

#Before setting up routing, install React Router DOM:

# npm install react-router-dom

#Use <Link> components from react-router-dom for navigation:

# import { Link } from "react-router-dom";

#<Link to="work">My Work</Link>

# - STEP 1: BUILD PRODUCTION VERSION -

#Ensure you are in the root of your React project.

#Run the following command to create a production build:

# npm run build

#This generates a build/ folder containing the optimized production version of the app.

# - STEP 2: SET UP HUSKY, PRETTIER AND ESLINT -

#Install dependencies:

# npm install --save-dev husky lint-staged prettier eslint

#Initialize Husky for Git hooks:

# npx husky install

#Then add Husky pre-commit hook to lint and format code:

# npx husky add .husky/pre-commit "npx lint-staged"

#Configure lint-staged in package.json.

#Run linting manually:

# npx eslint src --fix

#Format code manually with Prettier:

# npx prettier --write .

# - STEP 3: CREATE DOCKERFILE -

#Create a file named "Dockerfile" in your project root.

#Use official Node.js image as base

# FROM node:20 AS build

#Set working directory

# WORKDIR /samonte_andrea_final_site

#Copy package.json and package-lock.json

# COPY package\*.json ./

#Copy package.json and package-lock.json

# COPY package\*.json ./

#Install dependencies

# RUN npm install

#Copy all source files

# COPY . .

#Build the React app for production

# RUN npm run build

#Use Nginx to serve the final bundle site

# FROM nginx:stable-alpine

#Set working directory inside Nginx container

# WORKDIR /samonte_andrea_final_site

#Copy production build from builder stage

# COPY --from=build /samonte_andrea_final_site/build /usr/share/nginx/html

#Update NGINX to listen on port 5575 instead of the default

# RUN sed -i 's/80/5575/' /etc/nginx/conf.d/default.conf

#Expose required port

# EXPOSE 5575

#Start Nginx in foreground

# CMD ["nginx", "-g", "daemon off;"]

# - STEP 4: BUILD DOCKER IMAGE -

# docker build -t samonte_andrea_coding_assignment14 .

# - STEP 5: RUN DOCKER CONTAINER -

# docker run -p 5575:5575 samonte_andrea_coding_assignment14

# - STEP 6: GIT & GITHUB WORKFLOW -

#Initialize Git repository (if not done):

# git init

#Then add files and make first commit:

# git add .

# git commit -m "Initial Commit"

#Connect to GitHub remote repository:

# git remote add origin https://github.com/asamonte41/samonte_andrea_assignment14.git

#Push to GitHub:

# git push -u origin main

#Workflow for changes:

# git add .

# git commit -m "Updates.."

# git push

#Husky will automatically run Prettier and ESLint before each commit.

# - STEP 7: GCI/CD (GITHUB ACTIONS) -

#Create .github/workflows/ci.yml
#This workflow ensures that code is linted, formatted and built on every push to main.

# - STEP 8: OPTIONAL DOCKER MANAGEMENT COMMANDS -

#Stop container: docker stop portfolio-container
#Remove container: docker rm portfolio-container
#Remove Docker image: docker rmi portfolio-site
#Check running containers: docker ps

# - SUMMARY -

#Assignment 12 and 13: Build and enhance React portfolio.
#Assignment 14: Containerize with Docker, apply Husky, ESLint, Prettier and CI/CD for professional workflow.
#GitHub Integration: Push, commit and maintin code quality automatically.
