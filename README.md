# [Toilet-Surfing](https://toiletsurfing.herokuapp.com/)

[Toilet-Surfing](https://toiletsurfing.herokuapp.com/), where chill people share their toilets with other chill people, inspired by the giving and laid-back culture of couch surfing and by good vibes of surfers in general. 

This was my first full-stack solo project. For this project, I used node.js, react, redux, css, html, and express. The whole site is contained on the root route `/`, allowing for a seamless user experience and limiting the need for excessive database and redux store calls.

![Welcome to Toilet Surfing](/frontend/public/pictures/toilet-surfer-preview.png)

Logged-in users can create, update, and delete toilets as well as create and delete bookings to use toilets in the future.

Try the live site [here](https://toiletsurfing.herokuapp.com/).

View the database schema, routes, feature list (current and planned), and user stories in the [Wiki](https://github.com/zduvall/Toilet-Surfing/wiki).

## Tech Stack
### [Toilet Surfing](https://toiletsurfing.herokuapp.com/) uses the following tools, frameworks, and key packages:

* [AWS S3](https://aws.amazon.com/s3/)
* [Bcryptjs](https://www.npmjs.com/package/bcrypt)
* [Express-session](https://www.npmjs.com/package/express-session)
* [Express-validator](https://express-validator.github.io/docs/)
* [Express.js](https://expressjs.com/)
* Hosted on [Heroku](https://dashboard.heroku.com/)
* [Node.js](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [React Google Maps Api](https://react-google-maps-api-docs.netlify.app/)
* [Redux](https://react-redux.js.org/)
* [Sequelize](https://sequelize.org/) (with [PostgreSQL](https://www.postgresql.org/))


### Icons and fonts are from:
* [Google Fonts](https://fonts.google.com/)
* [Font Awesome](https://fontawesome.com/)

## Run Toilet Surfing Locally
Follow these instructions to run Toilet Surfing on your local machine. Note: image uploads and map functionality will not work without a valid AWS key/secret and google Maps API key.

To run this application locally for development, you'll need to:

1. `git clone` this repo
2. `cd` into the local clone of the repository
3. `cd` into the `backend` folder and `npm install`
4. Create your own `.env` file in `backend` and `frontend` directories based on the `.env.example` files there
5. Create a PostgreSQL user that matches the one you identified in your `backend` `.env` file
6. Run `npx dotenv sequelize db:create to create the database`
7. If the sequelize module is not found, try running `npx dotenv sequelize-cli db:create` and replace sequelize with sequelize-cli for the rest of these commands
8. Run `npx dotenv sequelize db:migrate` to run the migrations
9. Run `npx dotenv sequelize db:seed:all` to seed the database
10. Open another terminal and `cd` into the `frontend` directory and `npm install`
11. Run `npm start` in both the terminal on your backend and frontend
12. The React server should open up a browser window with the correct address
