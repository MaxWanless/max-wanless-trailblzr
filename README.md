# 🗻 TrailBLZR

This project was completed as my capstone for the BrainStation Web-Development bootcamp.

## Table of Contents

- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Setup Instructions](#EF%B8%8F-setup-instructions)
- [Next Steps](#-next-steps)
- [Contact Me](#-contact)

## 📲 Live Demo
Please follow the link to view a live (Stay tuned!)
<!-- [Demo](https://trailblzr-client.herokuapp.com/) -->

## 💻 Tech Stack

### Front-End

- React
- SASS
- Axios
- JWT-Decode
- Material UI
- Google Maps API

### Back-End

- Node.js
- Express
- MySQL
- knex.js
- JSON Web Token
- bcrypt
- REST API

## ✨ Features

- Browse provincial parks in Ontario.
- Retrieve information about parks like contact information, highlights and trails.
- Create an account to favourite parks of your choosing. 


## 📸 Screenshots

<img align="left" alt="Screenshots" width="100%" src="./client\src\assets\screenshots\laptop_&_Iphone.png" />
desktop and mobile dashboards
<br />

## ⚙️ Setup Instructions

- Follow this [link](https://www.youtube.com/watch?v=2_HZObVbe-g&t=1s&ab_channel=GoogleMapsPlatform) to learn how to obtain a google maps API key. 
- Download or clone the project repository.
- In the client folder create a `.env` file with the following variables: 
  - `REACT_APP_API_URL` The url for your API server 
  - `REACT_APP_GOOGLE_API_KEY` The API key obtained above.
- In the server folder create a `.env` file with the following variables:
  - `PORT` The port you wish your API server to run on. (eg. "5050")
  - `BACKEND_URL` The url for your API server. (eg. "http://localhost")
  - `ACCESS_TOKEN_SECRET` The secret used to generate your JSON Web Token.
  - `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_DATABASE` The information for your mySQL database.
- `npm run i` in root folder.
- `npm run postInstall` in root folder.
- cd into server folder and run `npm run migrate` and then `npm run seed` to create database tables.
- `npm run dev` in root folder.
- If port is already in use, use command `killall -9 node` and start again.

## 👟 Next Steps

- Add a search functionality to make finding parks easier. 
- Add the ability to store more data about parks and trails like trail maps. 
- Implement a new authentication system like Oauth. 
- Add ability for users to review parks. 

## 📬 Contact ##

If you have any questions regarding this project please feel free to reach out to me:
<br />
<br />
[<img align="left" alt="codeSTACKr | LinkedIn" width="22px" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" />][linkedin]
<br />


[linkedin]: https://www.linkedin.com/in/maxwanless/
