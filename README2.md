#README for Coding Assignment 13

#UI Garden & Build Checks

#Name: Andrea Samonte

---

hello

# = PROJECT SETUP =

#Create Project Folder

# mkdir samonte_andrea_ui_garden_build_checks

# cd samonte_andrea_ui_garden_build_checks

#Initialize React Project

# npx create-react-app samonte_andrea_ui_garden --template typescript

# cd samonte_andrea_ui_garden

#Initialize Git Repository

# git init

# git add .

# git commit -m "Initial commit"

# = CODE FORMAT WITH PRETTIER =

#Install Prettier

# npm install --save-dev prettier

# = LINTING WITH ESLINT =

#Install ESLint

# npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-react

# = PRE-COMMIT HOOKS WITH HUSKY + LINT-STAGED =

#Install Husky and Lint-Staged

# npm install --save-dev husky lint-staged

# npx husky install

#Enable Husky

# npm set-script prepare "husky install"

# npm run prepare

#Create a Husky Pre-Commit Hook

# npx husky add .husky/pre-commit "npm run prettier:check && npm run lint & npm test"

# = GITHUB REPOSITORY SETUP =

#Create a new repo on GitHub
#Connect it locally

# git remote add origin https://github.com/asamonte41/samonte_andrea_ui_garden_build_checks.git

# git branch -M main

# git push origin main

# = Continuous Integration (GitHub Actions)

#Create file/folders: .github/workflows/ci.yml
#If any step fails, GitHub will show "Build Failed" in the Actions tab.

# = DOCKER SETUP (NGINX DEPLOYMENT)

#Create Dockerfile
#Create nginx.conf

# = BUILD AND RUN DOCKER CONTAINER =

#Build Image

# docker build -t samonte_andrea_coding_assignment13 .

#Run Container

# docker run -p 8018:8018 samonte_andrea_coding_assignment13

#Open Browser

# React app: http://localhost:8018

# Storybook: http://localhost:8018/storybook

# = RUN TESTS LOCALLY =

# npm test

# npm test -- --watchAll=false

# = MAINTENANCE COMMANDS =

#Fix Prettier Formatting

# npm run prettier:fix

#Fix ESLint Issues

# npm run lint-fix

#Run Tests Before Commit

# npm test

#Build Project Manually

# npm run build

#Check Formatting & Lint Before Commit

# npm run prettier:check && npm run lint
