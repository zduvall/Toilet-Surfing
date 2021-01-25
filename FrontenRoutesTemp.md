# User-facing routes
* [`/bathrooms`](https://github.com/zduvall/Toilet-Surfing/wiki/Routes-Frontend#bathrooms)
* [`/reviews`](https://github.com/zduvall/Toilet-Surfing/wiki/Routes-Frontend#reviews)
* [`/bookings`](https://github.com/zduvall/Toilet-Surfing/wiki/Routes-Frontend#bookings)
* [`/users/:id`](https://github.com/zduvall/Toilet-Surfing/wiki/Routes-Frontend#usersid)
* [`/messages`](https://github.com/zduvall/Toilet-Surfing/wiki/Routes-Frontend#messages)

## `/`
* Display home page
* NavBar will allow for login and signup modals or user dropdown modal depending on logged in or not

## `/bathrooms`
* Display all bathrooms with given search criteria
* `/:bathroomId` Display single bathroom view and associated reviews
* `/new` Display modal form to create a new bathroom

## `/reviews`
* `/new` Display modal form to create a new review on the given bathroom

## `/bookings`
* Display logged-in user's bookings (requires auth)

## `/users/:id`
* Display all bathrooms owned by that user

## `/messages`
* Display all users logged in user has messaged
* `/:userId` Display message history with identified user