# Mygamelist
## Description
- When opening the application, the user will be greeted with the home scene, which will contain all of the games available.
- Clicking on any of the games, will redirect the user to a new screen which will provide more information about the selected item.
- There the user will also find the possiblity to update the respective product with new information, or he could also delete entirely from the system.
- Somewhere on the screen, an option to add a new game will also be available.
## Domain Details (Video Game)
- Name, which is a string
- Description, which is a string
- Banner, which will be a string that contains a url
- ReleaseDate, which will be a time object
- Price, which will be a float
## Crud Operations
- The READ operation will only be executed once at the start of the application, since this app is built with the idea that only one user will have access.
- The CREATE operation will have his its own screen, which will contain an input "box" for each field of the object. Once the user presses the create button, the scene will either be destroyed, meaning the operation was a success, and he is redirected to the main page which will contain the object, OR the user will receive a short message on the screen which will contain details about the failure of the operation (mostly validation).
- The UPDATE operation will work similarly to the CREATE, with the difference that the input boxes will be auto filled with the already existing data from the object, for ease. Another difference would be the place of access, if the CREATE has a button somewhere on the main scene, the button for update will be found on the game scene.
- In both CREATE and UPDATE will consider the name of the object to be unique, this validation will ocur when the button is pressed.
- The DELETE operation will be found on the game scene and it will ask for confirmation from the user. If the user selects "yes", then the object is removed and the scene is destroyed, otherwise the confirmation just closes.
## Persistance
- All Crud operation will persist from the moment the local_db or the server are implemented.
- The app (for now) is meant for a single user usage, hence the READ will only be done once at the start, and will keep a consistent database locally and on the server.
## Offline Support
- The local db will be able to provide a variable which will contain if the server has went offline or not.
- When the app start, we will try to connect to the server, if we can't we set the variable to true, and stay on the local db. If the value is true, then we bring the data from the local db to the server and set the variable back to false.
- If we connect to the server AND the variable is false, the persistance will only be done on the server, but the local db will also be updated with the server information.
- If the server shutdowns mid session, the local db will be used, updated with the current list (the items that are also on the server), and set the variable to true.
- In short, the variable will be the mechanism to provide persistance without using both databases at the same time.
