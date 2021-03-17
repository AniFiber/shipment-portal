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
	- BL + Status [✔️ - but currently single value search]
	- Universal search for both BL and status [✔️ - done single value]
-	- Validation (at least one search criteria filled in) ✔️ - **10%**
-	Showing Search result - **30%**
	- Table format ✔️
	- Actions/Buttons to update shipments & upload doc's [✔️ - done but uploading documents is a bonus part ]
-  Update shipment - **20%**
- **| Bonus |** Dashboard showing the number of onboard shipments at the time ✔️ (also added refresh on-click)
- **| Bonus |** Document upload to google drive on status arrived depot ❌


####  BackEnd
 - Update status change to database ✔️ (using MongoDB here on localhost)


___

> Made with [StackEdit.io](https://stackedit.io/app)