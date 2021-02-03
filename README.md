# [Toilet-Surfing](https://toiletsurfing.herokuapp.com/)

Toilet Surfing, where chill people share their toilets with other chill people, inspired by the giving and laid-back culture of couch surfing and by good vibes of surfers in general. This was my first full-stack solo project using node.js, react, redux, css, html, and express. The whole site is contained on the root route `/` , allowing for a seemless user experience and limited the need for frequent database and redux store calls.

Logged-in users can create, update, and delete toilets as well as book and cancel bookings for toilets to use in the future.


Try the live site [here](https://toiletsurfing.herokuapp.com/), and view the database schema, routes, feature list (current and planned), and user stories in the [Wiki](https://github.com/zduvall/Toilet-Surfing/wiki).

Tech Stack
[Toilet Surfing](https://toiletsurfing.herokuapp.com/) uses the following tools, frameworks, and key packages:

[Sequelize](https://sequelize.org/) (with [PostgreSQL](https://www.postgresql.org/))
[Express.js](https://expressjs.com/)
[React](https://reactjs.org/)
[Redux](https://react-redux.js.org/)
[Node.js](https://nodejs.org/en/)
[react-google-maps-api](https://react-google-maps-api-docs.netlify.app/)
Hosted on [Heroku](https://dashboard.heroku.com/)

Icons and fonts are from:
[Google Fonts](https://fonts.google.com/)
[Font Awesome](https://fontawesome.com/)

Run Toilet Surfing Locally
Follow these instructions to run Toilet Surfing on your local machine. Note: image uploads and map functionality will not work without a valid AWS key/secret and google Maps API key.

Clone the repository at https://github.com/zduvall/Toilet-Surfing
Open the root folder in your terminal and use npm install (requires Node.js) to install all dependencies (in both the frontend and backend)
Make a local .env file in the /backend folder using the .env.save file. Edit to match local configurations. Note that file upload is not supported without valid AWS secret and key. DO NOT expose your AWS credentials on github.
Create the user and database from your .env in psql
Run all migrations with npx dotenv sequelize db:migrate
Seed all data with npx dotenv sequelize db:seed:all
In two seperate terminals, cd into your /backend folder and your /frontend folder. Use the script npm start in each to start the servers. React will launch the site in your browser.
