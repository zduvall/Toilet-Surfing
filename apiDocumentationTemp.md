The [Toilet Surfing](http://toiletsurfing.herokuapp.com/) API is organized around REST. Our API has predictable resource oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes and verbs.

API routes are not user-facing and should only be used by developers.
# Backend Routes
* [`/api/session`](https://github.com/zduvall/Toilet-Surfing/wiki/Routes-Backend-(API-documentation)#apisession)
* [`/api/user`](https://github.com/zduvall/Toilet-Surfing/wiki/Routes-Backend-(API-documentation)#apiuser)
* [`/api/bathrooms`](https://github.com/zduvall/Toilet-Surfing/wiki/Routes-Backend-(API-documentation)#apibathrooms)
* [`/api/bookings`](https://github.com/zduvall/Toilet-Surfing/wiki/Routes-Backend-(API-documentation)#apibookings)
* [`/api/messages`](https://github.com/zduvall/Toilet-Surfing/wiki/Routes-Backend-(API-documentation)#apimessages)

## /api/session
* POST: log in user
* DELETE: log out user
* GET: restore session user

## /api/user
* POST: create user

## /api/bathrooms
* GET: return all bathrooms and associated reviews
* POST: create new bathroom 
* POST `/:bathroomId/book`: create new booking 
* PATCH `/:bathroomId/book`: update booking 
* DELETE `/:bathroomId/book`: delete booking 
* POST `/:bathroomId/review`: create new review
* PATCH `/:bathroomId/review`: update review
* DELETE `/:bathroomId/review`: delete review
* POST `/:bathroomId/fav`: create new favorite bathroom
* DLETE `/:bathroomId/fav`: delete favorite bathroom

## /api/bookings
* GET: return all bookings for logged in user

## /api/messages
* GET: return all messages for logged in user
