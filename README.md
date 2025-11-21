#README for assignment 12 coding
#Name: Andrea Samonte

#--TOOLS--

# Node.js 18+ (Recommended:20)

# Docker

# Git

#--Set Up and Installation--

#Create React App

# npx create-react-app samonte_andrea_ui_garden --template typescript

# cd samonte_andrea_ui_garden

#This creates a React project using Typescript(including tsconfig.json)

#Install Storybook for React + Typescript

# npx sb init

#Verify Storybooks works

# npm run storybook

#It will deafult open at: http://localhost:6006

#Install Dependencies

# npm install

#Run the React app

# npm start

#Run Storybook Locally (Live Dev Mode)

# npm rum storybook

#It will start Storybook on http://localhost:6006

#--Building React and Storybook--

#Build React App

# npm run build

#Build Storybook static site

# npm run build-storybook

#This will create files in: build/
#Storybook static files in: storybook-static/

#--Docker Setup--

#Create the Dockerfile

#Build the DockerImage

# docker build -t samonte_andrea_coding_assignment12 .

#Run the Container

# docker run -d -p 8083:80 samonte_andrea_coding_assignment12

#Open React App: http://localthost:8083/react
#Storybook: http://localhost:8083/storybook

#--Component Library--

#Components Includes:

# Button

# Label

# Text

# Table (TableHeader, TableRow, TableCell, TableFooter)

# Dropdown

# Radio Button

# Img

# Hero Image

# Card

#Component Structure

# ComponentName/

# ComponentName.tsx

# ComponentName.stories.tsx

# ComponentName.types.tsx

# ComponentName.tests.tsx

# index.ts

#Styling and Responsive

# Components are styled using Styled Components

# All components has to be responsive

#Functionality

# Components have default and disabled states

# Disabled state are greyd out and non clickable

#--Initialize Git--

#Go to your project folder path

# cd "%USERPROFILE%"/Documents/samonte_andrea_ui_garden

# git init

#That creates a new local Git repository

#Place all project files to Git

# git add .

#This stages all your files (React app, Storybook, Dockerfile,ReadME, etc.)

#Make first commit

# git commit -m "First commint"

#Create a new Github Repo

#Link your local repo to Github

# git remote add origin https://github.com/asamonte41/samonte_andrea_ui_garden.git

# git branch -M main

# git push -u origin main

#For future ongoing updtes

# git add .

# git commit -m "Imput Anything Here"

# git push
