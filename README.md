# ezySwiper
ezySwiper is a tinder-style web app designed to help pet-lovers find the ideal practice to care for their animal companions. The website prompts users to swipe left or right on a displayed veterinary office to indicate if it fails to meet or surpasses their needs. 

 - View veterinary practices and their respective info (location, vets employed, contact information, species-cared-for ect.) 
 - View customer ratings for each practice's price and customer-satisfaction. 
 - View personal history of vet practices you have approved of. 
 
# Application Architecture 

## Back-end:
 - Veterinary practice and surgeon profiles are stored in objects on the in the cloud on a *mongoDB* server.   
 - *Node.js*

## Front-end:  
-  The front-end runs on the react.js framework which was used to build the webpage view components. 
- 

# Database architecture: 
Vet and Profile objects are stored in the cloud on a mongoDB server.  The web app relies entirely on database operations and uses a custom API to access data and send it to the frontend.

# To Run...
1. Ensure node.js is installed on your machine. 
2. Run command 'npm install' in the front-end folder to install the node package manager.  
3. Run command 'npm install' in the back-end folder to install the node package manager.   
4. open 'localhost:3000'
