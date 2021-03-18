# Prerequisite

### Software's
- NodeJs
- MongoDB (Atlas - for local database)
- nodemon (npm i -g nodemon)
- Postman (for checking API endpoints)


# Project

### Shipment Portal 

##### **Defaul Password** ` Hardcoded` 
-  *Id* - admin
-  *Pass* - admin123

### Shipment Portal Server
  
##### Api Endpoint's `http://localhost:5000/api/shipment`
- `/totalOnboard` - To get onboard shipment count 
- `/all` - Get all shipment
- `/find` - To search BL + Status seperatly & together
-  `/search` - Universal search for both BL and status
- `/update/:id` - To update shipment details 
- `/CreateDemoData` - (for Demo Purpose) - Creates 6 random data & add's it to database 
  

# Project Requirements

####  FrontEnd
- Login Page - **10%**
- Search  - **30%**
	- BL + Status [✔️ - done multiple value search]
	- Universal search for both BL and status [✔️ - done only single value]
-	- Validation (at least one search criteria filled in) ✔️ - **10%**
-	Showing Search result - **30%**
	- Table format ✔️
	- Actions/Buttons to update shipments & upload doc's [✔️ - done but uploading documents is a bonus part ]
-  Update shipment - **20%**
- **| Bonus |** Dashboard showing the number of onboard shipments at the time ✔️ (also added refresh on-click)
- **| Bonus |** Document upload to google drive on status arrived depot ❌


####  BackEnd
 - Update status change to database ✔️ (using MongoDB here on localhost)


 # How to Run!! 
 1.   Go inside the folder 👉 shipment-portal-server
	  - npm  i	(install's all of the dependencies) `run only first time`
	  - start MongoDB `or make sure it's already running`
	  - npm start or nodemon app.js (nodemon reloads the server every-time the file's changes)
	  -  go to `http://localhost:5000/api/shipment/CreateDemoData` (it creates demo data) `only first time`

 2.  Go inside the folder 👉 shipment-portal 
	 - npm i 
	 - npm start

`On Second Run just 'npm start' on both folders`

# Learn More

#### React Cheatsheet
https://devhints.io/react
http://www.developer-cheatsheets.com/react
https://www.freecodecamp.org/news/react-cheatsheet-with-real-world-examples/

#### JavaScript Cheatsheet
https://github.com/iLoveCodingOrg/javascript-cheatsheet
https://github.com/iLoveCodingOrg/javascript-cheatsheet/blob/master/js-cheatsheet.pdf

#### Css Cheatsheet
https://github.com/iLoveCodingOrg/css-cheatsheet
https://github.com/iLoveCodingOrg/css-cheatsheet/blob/master/css-cheatsheet.pdf

#### Html Cheatsheet
https://github.com/iLoveCodingOrg/html-cheatsheet
https://github.com/iLoveCodingOrg/html-cheatsheet/blob/master/html-cheatsheet.pdf


___

> Made with [StackEdit.io](https://stackedit.io/app)