# Online Supermarket (OOPS Project )
A web-based application for an online supermarket. Customers can register and order items through this application.

Backend is made in java using SpringBoot framework,  React is used in frontend, MySql database. JDBC API is used to implement database connectivity to the application and Website hosted locally using Apache Tomcat Server. Ecclipse and Visual Studio Code IDE's were used. 


## Different Roles
- Users can register through portal. 
- Admins have to be added from backend.
- Manager and user can be added or deleted by admin.
- Admin/manager can add product, set actual and discounted price, upload product picture

## Functionality
- A user can be - admin, manager or customer
- Admin is the super user with all permissions.
- Users (customer, admin and manager) have information such as- user name, a UserId (unique across the system), phone number, and email id, and address.
- An existing logs into the system with user id and password.
- New customers are permitted to register.
- Manager/admin can add or delete items, modify details about the items (price/qty/offers
etc.)
- A user can withdraw himself from the Application.
- Password change (reset) facility through third party services

## Admin/manager publishing item details
- Manager or admin publish the details of the items made available for sale. Details being item_name, item_code, price, discounted price
- A manager or admin can delete the published item whenever required.

## Customer order management
- A customer allowed to view/search the items published/available for sale.
- Select items to the cart.
- Drop items from the cart if required.
- Request for estimation (total cost) for the items selected.
- Confirm order and make payment.
- User gets a confirmation message with expected delivery date.
- User will have a Wallet from where payments will be made, and user can top-up
the wallet if necessary. But at the time of registration must start with minimum of 1000/-.

## Special Features
- Delivery time is estimated based on pincode given by user. Pincode is changed to latitude and longitudes and distance is measured from a central warehouse using bing maps API.
- Forget Password functionality uses a third party site which changes the password in database and sends a mail to the user on the registered email id.
