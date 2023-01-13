# Angular Classes Archive

## Installing the application

After cloning the repository, install the packages and dependencies for this project using `npm install`.

## Google Firebase settings

Create a project on Google Firebase, and configure the Authentication and Realtime Database.

On Authentication, be sure to enable `localhost` and/or the domain of your server on the list of authorized domains. Also create a root node named `list` on Realtime Database.

Insert your own web app's Firebase configuration on `app.module.ts`. You can retrieve that information from project settings page on your Firebase console.

```javascript
AngularFireModule.initializeApp({
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    }),
```

## Running the application

With Angular CLI installed, use `ng serve` to builds and serve your application locally, rebuilding on file changes.

For more information, please refer to the `README.md` file available on the root folder of this repository.