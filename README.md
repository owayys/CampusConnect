# Running your React Native application

Install the **Expo Go** app on your iOS or Android phone and connect to the same wireless network as your computer.

On your terminal, run the command:

```
npx code start --tunnel
```

On Android, use the Expo Go app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the default iOS Camera app.

# CampusConnect

#### React Native: Who, What, When, Where, How

Holy grail of answers: [React Native API Documentation](https://reactnative.dev/docs/components-and-apis)

#### Screens

All screens are deposited in

```
app -> screens -> ..
```

The naming convention for screen files are strictly to be **[Name]Screen.js**

For example **WelcomeScreen.js** for the Welcome Screen

##### Writing Screen Code

To begin writing a screens file, follow the starting skeleton code initilializer

1. Install the extenstion *React-Native/React/Redux snippets for es6/es7* from the marketplace.
2. on a fresh screen.js file, type

   ```
   rsf
   ```

and press **Enter**

What does `rsf` do, you ask?

`Creates a stateless React component as a named function without PropTypes (Reactjs code snippet) (React-Native/React/Redux snippets for es6/es7)`
