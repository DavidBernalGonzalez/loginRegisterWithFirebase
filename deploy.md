# Deploy in firebase
https://medium.com/@mugan86/publicar-una-aplicaci%C3%B3n-angular-en-firebase-hosting-27dece258dce 

## First deploy
- create a firebase project in https://firebase.google.com/?hl=es
- npm install -g firebase-tools
- firebase login
- angular.json and change outputPath to "dist/name-project" to "dist"
- ng build --prod --base-href "./"
- firebase init > Y > Hosting > Use an existing project > select firebase project 
- select hosting
- select project
- What do you want to use as your public directory? indicate the project build forlder (dist)
- Configure as a single-page app (rewrite all urls to /index.html)? N
- Set up automatic builds and deploys with GitHub? (y/N) N
- File dist/index.html already exists. Overwrite? N
- Authorizing with GitHub to upload your service account to a GitHub repository's secrets store.
- For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) N
- Set up the workflow to run a build script before every deploy? (y/N) N
- firebase deploy

# Others deploys
- ng build --prod --base-href "./"
- firebase deploy
