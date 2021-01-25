# User Stories

- [Authorization](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#authorization)
- [Sign Up](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#sign-up)
- [Nav Bar](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#nav-bar)
- [View and Book Bathrooms](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#view-and-book-bathrooms)
- [View Specific Bathroom](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#view-specific-bathroom)
- [Create Bathroom](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#create-bathroom)
- [Review Bathroom](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#review-bathroom)

# User Story Stretch Goals

- [View User Page](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#view-user-page)
- [Mark a Bathroom as Favorite](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#mark-a-bathroom-as-favorite)
- [Messaging](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#messaging)

## Authorization

As an unauthorized user, I want to be able to login to the website via a form, so that I can access my private information.

### Questions

- How will a user login?
  - User will login via email or username and password
- What routes should we use for login?
  - POST: log in user
  - DELETE: log out user
  - GET: restore session user
- Where should the user be redirected after login?
  - Home page
- What will be different on the home view for the logged in user vs not logged in?
  - The navbar will have a profile dropdown rather than log in and signup
- What happens if the user doesn't exist/enters bad credentials?
  - Display the message "Invalid surfer credentials. Please try again."
- Should logging in use session-based or use token-based authentication?
  - We will use session-based auth
- How will we protect from cross-site request forgery?
  - We will use the `csurf` package
- Will we allow OAuth authentication via a third party?
  - Not yet -- maybe in a future story
- Should this story include allowing a user to reset their password?
  - Not yet -- maybe in a future story

### Acceptance Criteria

**Given** that I'm a logged-out user and

1. **When** I'm on the `/` route and click "Log In"
   - **Then** there will be a login form with an email or username and password field and a "Log In" button to submit the form.
2. **When** I try to fill out the form with an invalid email and password combination and the "Login" button
   - **Then** at the bottom of the form, I will see a message "Invalid surfer credentials. Please try again."
3. **When** I try to fill out the form with a valid email and password and press the "Log In" button
   - **Then** I will stay on the home page, the modal login form will disappear, and the nav bar will update.
4. **When** I try to create, review, or book a bathroom
   - **Then** I will be prompted to log in or sign up.

**Given** that I am a logged-in user

1. **When** I refresh a page
   - **Then** I will still be logged in and stay on that page

## _Sign Up_

As an **unauthorized user**, I want to **be able to sign up for the website via a signup form**, so that I can **access Toilet-Surfing**.

### Questions

- Will the user enter a username and an email address to signup?
  - User will enter a username and email address to signup.
- Will we confirm their password during signup?
  - User will confirm the password through a confirm password field.
- What route should we use for signup?
  - The form will use a method of `POST` with an action of `/api/user`
- Where should the user be redirected after signup?
  - Home page
- What happens if the user with the username or email already exists?
  - Display error
- What happens if the user enters the wrong password confirmation?
  - Display error
- How will we protect from cross-site request forgery?
  - We will use the `csurf` package

### Acceptance Criteria

**Given** that I'm a logged-out user and

1. **When** I'm on the `/` route and click "Sign Up"
   - **Then** there will be a login form with an email or username and password field and a "Log In" button to submit the form.
2. **When** I try to fill out the form with any invalid or non-unique information
   - **Then** at the bottom of the form, I will see corresponding errors.
3. **When** I try to fill out the form with a valid username, email and password and press the "Sign In" button
   - **Then** I will stay on the home page, the modal login form will disappear, and the nav bar will update.
4. **When** I try to create, review, or book a bathroom
   - **Then** I will be prompted to log in or sign up.

## _Nav Bar_

As a **logged-in or logged-out user**, I want to **see a Nav Bar** at the top of the page, so I can **navigate between pages and logout**.

### Questions

- What will the nav bar allow the user to do?
  - Navigate between pages and logout
- What links will there be in the nav bar?
  - Logged in:
    - Bathrooms, profile dropdown
  - Logged out:
    - Bathrooms, Log In, Sign Up
- What will be displayed on the user profile dropdown?
  - Username, email, my bookings, my toilets, messages, logout
- How will the nav bar allow a user to logout?
  - There will be an option to logout on the profile dropdown
- When a user clicks the logout button, what page will they be redirected to?
  - Whatever page they are on unless it is a page that requires auth, then they will be directed to `/`

### Acceptance Criteria

**Given** that I am a **logged-in user**

1. **When** I click logout
   - **Then** the navbar will be updated, and I will stay on the page I'm on unless it requires auth, then I will be redirected to `/`
2. **When** I click on "Bathrooms"
   - **Then** I will be redirected via the href on the anchor tag to `/bathrroms`.
3. **When** I click on "my bookings" in the profile dropdown
   - **Then** I will be redirected via the href on the anchor tag to `/bookings`
4. **When** I click on "my toilets" in the profile dropdown
   - **Then** I will be redirected via the href on the anchor tag to `/users/:UserId(\\d+)` where the id is the current user
   - I will see all bathrooms I own and when I click on a specific bathroom, I will see usernames associated with bookings
5. **When** I click on "messages" in the profile dropdown
   - **Then** I will be directed to `/messages` where I will see all the users I have messaged

## _View and Book Bathrooms_

As a **logged in user** I want to **view a list of bathrooms** so that **I can find bathrooms to use.**

### Questions

- How many bathrooms will the user be able to see on the screen at a time?
  - All bathrooms will be listed by order of creation with the newest at the top
- How will users narrow down the search criteria?
  - Users will type into google maps
- What information will users be able to see on bathrooms in the list?
  - Basic information including `name`, `locality`, `administrative area`, overall rating
  - The `name` of the bathroom will have an anchor with an href to the detailed view of that bathroom (`/bathrooms/:id(\\d+)`)
- What route is used to view bathrooms?
  - A `GET` request to `/bathrooms`
- What happens when a user clicks on a specific bathroom?
  - The user is redirected to the detailed bathroom view at `/bathrooms/:bathroomId(\\d+)`

### Acceptance Criteria

**Given** that I am a **logged-in user**

1. **When** I use the option to view bathrooms
   - **Then** a list of all bathrooms shows up ordered by creation date (descending PK).
2. **When** I enter a location into the google maps search bar
   - **Then** the bathrooms shown on screen will be narrowed down based on what is currently in the google maps window
3. **When** there are no bathrooms in the window
   - **Then** I will be prompted to broaden my search or zoom out
4. **When** I click on a specific bathroom
   - **Then** I will be redirect to `/bathrooms/:id(\\d+)`

## _View Specific Bathroom_

As a **logged in user** I want to **view a specific bathroom** so that **I see details, see/add reviews, and book the bathroom.**

### Questions

- What information will be available on the detailed bathroom view?
  - bathroom Name (`name`)
  - Cleanliness Score, Atmosphere Score, Privacy Score, Owner Quality Score (based on average ratings from the connected reviews, otherwise defaults to 0)
  - The address
  - A description of the bathroom (`description`)
  - The user name (`userName`, with an anchor and href to that user's page `/users/:userId(\\d+)`) of the user who created the bathroom.
  - A calendar showing availability and option to book 15 minute increments
  - An unordered list of all connected reviews
    - Each review will show specific scores and the username of the user who reviewed the bathroom.

### Acceptance Criteria

**Given** that I am a **logged-in user**

1. **When** I am viewing a specific bathroom
   - **Then** I will see the bathroom at `/bathrooms/:bathroomId(\\d+)` that shows the detials of the bathroom, all connected reviews, and a calendar with ability to book 15 minute increments.

## _Create Bathroom_

As a **registered user**, I want to **add new bathrooms to the site**, so that I and others can **book and review them**.

### Questions

- What route will be used to get to the "Create Bathroom" form?
  - User will be directed to a "Create Bathroom" form via the `/bathrooms/new` route
  - The form will use a method of `POST` with an action of `/bathrooms`
- What fields will be shown on the form?
  - Name (`name`), location (several fields), and a description of the bathroom (`description`)
  - `bathroomOwnerId` will be set on the backend to id of user who is logged in and creating the bathroom
- What happens when a user enters invalid credentials?
  - Display errors
- Where will we redirect a user after creating a bathroom?
  - To that detailed view page of the newly created bathroom (`/bathrooms/:bathroomId(\\d+)`)
- What happens if a bathroom already exists with the same name?
  - Due to the "uniqe" constraints on the fields to create a bathroom, the user will receive an error.
- How will we protect from cross-site request forgery?
  - We will use the `csurf` package

### Acceptance Criteria

**Given** that I am a **logged-in user**

1. **When** I fill in the add bathroom form with valid information
   - **Then** the new bathroom appears listed.
2. - **When** I add invalid or missing information to the form and attempt to submit
   - **Then** the form validations fail and return me to the form with an error message.

## _Review Bathroom_

As a **logged in user**, I want to be able to **review bathrooms** so that I and others **read see my reviews**.

### Questions

- How will a user access the review form for a bathroom?
  - User will click on a review button which will redirect them to `/reviews/new`
- What is included on the review form for the bathroom?
  - reviewText, cleanliness, atmosphere, privacy, ownerQuality
- What type of elements are used for those form items?
  - reviewText: `textarea`
  - all others: `range` element with `min` of `0` and `max` of `5`
- Where should the user be redirected after reviewing?
  - User will be redirected to the detailed view of the bathroom they reviewed `/bathrooms/:bathroomId(\\d+)`
- How will we protect from cross-site request forgery?
  - We will use the `csurf` package

### Acceptance Criteria

**Given** that I'm a logged-in user and

1. **When** I'm on the `/reviews/new` route
   - **Then** there will be a review form with four fields (described above) and a "Submit" button to submit the form.
2. **When** I try to fill out the form with invalid inputs press the "Submit" button
   - **Then** at the bottom of the form, I will see errors displayed
3. **When** I try to fill out the form with valid inputs and press press the "Submit" button
   - **Then** I will be redirected to the detailed view of the bathroom I reviewed `/bathrooms/:bathroomId(\\d+)`

&nbsp;

# User Stories Stretch Goals

## _View User Page_

As a **logged in user**, I want to be able to **view my own and others' user page** so that I can **see bathrooms I or others own**.

### Questions

- How will a user navigate to their own bathrooms page?
  - By clicking on "My Toilets" in profile dropdown in the [navbar](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#nav-bar).
- How will the user's page look?
  - At the top of the page it will say "`userName`'s Forest", followed by their "`userName`'s Climber Score" ([handled below](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#climber-score), defaults to `0`) an unordered list of "bathrooms I have climbed" and then "bathrooms I want to climb".
  - Formatting can be the same as the `/bathrooms` view
- Should we show something different for a new user because there will be no bathrooms in the forest?
  - When there are no bathrooms, show an extra link in the middle of the page that redirects to `/bathrooms` with an invitation to "Grow your forest by adding bathrooms you have climbed or want to climb!".
- What will happen when a user clicks on a bathroom name?
  - The same thing that happens when they click on a bathroom name in the `/bathrooms` view. They will be redirected to the detailed view of the bathroom at `/bathrooms/:id(\\d+)`.
- Will users be able to remove bathrooms from their forest?
  - As a stretch goal, a "remove" button will be available next to bathrooms in the forest, only when a user is looking at their own forest. This will remove bathrooms by deleting the coresponding entry in the `bathroomConnections` table with a `DELETE` request to `/bathroomConnections`. The correction row in the table will be found using `where` with the `bathroomId` and `userId`.

### Acceptance Criteria

**Given** that I'm a logged-in user and

1. **When** I am viewing my own forest page
   - **Then** I will see "`userName`'s Foest" at the top, followed by a list of "bathrooms I have climbed" and then "bathrooms I want to climb".
2. **When** I click on the bathroom names of bathrooms in my forest
   - **Then** I will be redirected to that bathrooms detailed page view at `/bathrooms/:id(\\d+)`

## _Mark a Bathroom as Favorite_

As a **logged-in-user** I want to be able to **favorite** a bathroom, so that I can I keep a record of my **favorite bathrooms** that I’ve used or want to use.

### Questions

* How would the page let the user know a bathroom has been “favorited”?
  * It changes the color of the star next to the bathroom.
* How would the app update the database with the “favorited” bathrooms?
  * We will use sequelize to create a new entry in the joins table

### Acceptance Criteria

**Given** I am a user that’s signed in.
  1. **When** I click to **favorite a bathroom** 
      * **Then** the new bathroom appears listed.

## _Messaging_

As a **logged-in-user** I want to be able to **message** another user, so that I can **coordinate bookings or otherwise communicate**.

### Questions

* Who can a user message?
  * Any other user by clicking on message on that user's profile
* How would the user see messages they have already sent
  * Via the profile dropdown menu

### Acceptance Criteria

**Given** I am a user that’s signed in.
  1. **When** I message another user. 
      * **Then** that message will appear in the other users messages.

