# User Stories
* [Login](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#login)
* [Sign Up](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#sign-up)
* [Nav Bar](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#nav-bar)
* [View Bathrooms](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#view-bathrooms)
* [View Specific Bathroom](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#view-specific-bathroom)
* [Book a Bathroom"](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#book-a-bathroom)
* [Create Bathroom](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#create-bathroom)
* [Review Bathroom](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#review-bathroom)

# User Story Stretch Goals
* [View User Page](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#view-user-page) 
* [Mark a Bathroom as Favorite](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#mark-a-bathroom-as-favorite)
* [Messaging](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#messaging)

## _Login_
As an unauthorized user, I want to be able to login to the website via a form, so that I can access my private information.

### Questions
* How will a user login?
  * User will login via email or username and password
* What routes should we use for login?
  * User will be directed to a login form via `/login` route
  * The form will use a method of `POST` with an action of `/login`
* Where should the user be redirected after login?
  * [Personal profile page](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#view-user-page) `/users/:id(\\d+)` that will include personal “Forests”
* Will we allow OAuth authentication via a third party?
  * Not yet -- maybe in a future story
* What happens if the user doesn't exist/enters bad credentials?
  * Display the message "Invalid climber credentials :( Please try again."
* Should this story include allowing a user to reset their password?
  * Not yet -- maybe in a future story
* Should logging in use session-based or use token-based authentication?
  * We will use session-based auth
* How will we protect from cross-site request forgery?
  * We will use the `csurf` package

### Acceptance Criteria
**Given** that I'm a logged-out user and
1. **When** I'm on the `/login` route
    * **Then** there will be a login form with an email and password field and a "Login" button to submit the form.
2. **When** I try to fill out the form with an invalid email and password combination and the "Login" button
    * **Then** at the top of the form, I will see a red message "Invalid climber credentials :( Please try again."
3. **When** I try to fill out the form with a valid email and password and press the "Login" button
    * **Then** I will be redirected to my profile page at `/users/:id(\\d+)` route.
4. **When** I try to navigate to any route on Toilet-Surfing
    * **Then** I will be redirected to the `/login` route

**Given** that I am a logged-in user
1. **When** I refresh a page
    * **Then** I will still be logged in and stay on that page

## _Sign Up_
As an **unauthorized user**, I want to **be able to sign up for the website via a signup form**, so that I can **access Toilet-Surfing**.

### Questions
* Will the user enter a username and an email address to signup?
  * User will enter a username and email address to signup.
* Will we confirm their password during signup?
  * User will confirm the password through a confirm password field.
* What route should we use for signup?
  * User will be directed to a signup form via `/sign-up` route
  * The form will use a method of `POST` with an action of `/sign-up`
* Where should the user be redirected after signup?
  * [Personal profile page](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#view-user-page) `/users/:id(\\d+)` that will include personal “Forests”
* Will we allow OAuth authentication via a third party?
  * Stretch Goal - yes but will be using sessions object in MVP
* What happens if the user with the username or email already exists?
  * Use express middleware to send error to a front end error display text field
* What happens if the user enters the wrong password confirmation?
  * Use express middleware to send error to a front end error display text field
* How will we protect from cross-site request forgery?
  * We will use the `csurf` package

### Acceptance Criteria
**Given** that I'm a logged-out user and
1.  **When** I'm on the `/login` route
    * **Then** there will be a login form with an "Climber email" field, a "password" field, a "confirm password" field, and a "Start Climbing" button to submit the form.
2. **When** I try to fill out the form with an invalid email and password combination and press the "Start Climbing" button
    * **Then** at the top of the form, I will see a red message `Invalid climber inputs :( please try again`.
3. **When** I try to fill out the form with an email that doesn't exist in the system and press Enter or press the "Login" button
    * **Then** at the top of the form, I will see a red message `Invalid climber inputs :( please try again`.
4. **When** I try to fill out the form with a valid email and password and press press Enter or press the "Login" button
    * **Then** I will be redirected to my user page at `/users/:id(\\d+)`.

## _Nav Bar_
As a **logged in user**, I want to **see a Nav Bar** at the top of the page, so I can **navigate between pages and logout**.

### Questions
  * What will the nav bar allow the user to do?
    * Navigate between pages and logout
  * Which pages will there be links to in the nav bar?
    * "My Forest" `/users/:id(\\d+)`, "Find Trees" `/trees/`, and as a stretch goal, "Highest Climber" `/users`
  * How will the links be made?
    * Using anchor tags with an href to the corresponding page.
  * How will the nav bar allow a user to logout?
    * Using an anchor tag with an `href` to `/logout`
  * When a user clicks the logout button, what page will they be redirected to?
    * First to `/logout` to handle the logout, and that route handler will redirect them to `/login`
  * How will the nav bar be created?
    * Using an unordered list in the layout file in our pug templates and other pug files will extend it.
  * Will there be anything else on the nav bar outside of the links?
    * Before the links, it will also say "Welcome to Toilet-Surfing, `userName`!"

### Acceptance Criteria
**Given** that I am a **logged-in user**
1. **When** I click logout
    * **Then** I will be redirected via the href on the anchor tag to `/logout` and that route handler will log me out and redirect me to `/login`
2. **When** I click on "My Forest"
    * **Then** I will be redirected via the href on the anchor tag to `/users/:id(\\d+)` using their own `id`.
3. **When** I click on "Find trees"
    * **Then** I will be redirected via the href on the anchor tag to `/trees`
4. **When** I click on "Highest Climber"
    * **Then** I will be redirected to `/users`

## _View Bathrooms_
As a **logged in user** I want to **view a list of trees** so that **I can find new trees that might interest me.**

### Questions
* How many trees will the user be able to see on the screen at a time?
  * All trees will be visible as they scroll, but it will depend on mediascreen size, potentially 16 as a good starting point
* What information will users be able to see on trees in the list?
  * Basic information including `name` and `cityState`
  * The `name` of the tree will have an anchor with an href to the detailed view of that tree (`/trees/:id(\\d+)`)
* How will the trees be ordered?
  * Trees will be ordered by `PK` as a default, search and filter options will be a stretch goal.
* What route is used to view bathrooms?
  * A `GET` request to `/trees`
* What happens when a user clicks on a specific tree?
  * The user is redirected to the detailed tree view at `/trees/:id(\\d+)`


### Acceptance Criteria

**Given** that I am a **logged-in user**
  1. **When** I use the option to view bathrooms
      * **Then** a list of all trees shows up ordered by PK showing each trees `name` and `cityState`.
  2. **When** I click on a specific tree
      * **Then** I will be redirect to `/trees/:id(\\d+)`

## _View Specific Bathroom_

As a **logged in user** I want to **view a list of trees** so that **I can find new trees that might interest me.**

### Questions
* What information will be available on the detailed tree view?
  * Tree Name (`name`)
  * Difficulty Score, Fun Score, View-from-Top Score (based on average ratings from the connected reviews, otherwise defaults to 0)
  * The closest city and/or state (`cityState`)
  * A detailed description of it's location (`detLocation`)
  * A description of the tree and its climb (`description`)
  * The user name (`userName`, with an anchor and href to that user's page `/users/:id(\\d+)`) of the user who created the tree.
  * Buttons to [mark the tree as "climbed" or "want to climb"](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#mark-tree-as-climbed-or-want-to-climb)
  * An unordered list of all connected reviews
      * Each review will show reviewer (`reviewer`), Difficulty Score (`difficulty`), Fun Score (`funFactor`), View-from-Top Score (`viewFromTop`), and the review text (`reviewText`).

### Acceptance Criteria
**Given** that I am a **logged-in user**
  1. **When** I am viewing a specific tree
      * **Then** I will see the tree at `/trees/:id(\\d+)` that shows `name`, `cityState`, `detLocation`, `description`, `userName`, buttons to [mark the tree as "climbed" or "want to climb"](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#mark-tree-as-climbed-or-want-to-climb), and all connected reviews. Each review will show `reviewer`, `difficulty`, `funFactor`,`viewFromTop`, and `reviewText`.

## _Book a bathroom"_
As a **logged-in user** I want to be able to click a button so that I can mark a tree as “climbed” or "want to climb"
## Questions
  * Where will the buttons be available for a user?
    * On the detailed view of trees (`/trees/:id(\\d+)`)
  * How would the page let the user know a tree has been marked as “climbed”?
    * By changing the text and color dynamically without refreshing entire page(AJAX)
  * How would our app handle updating the database?
    * Changing the `BOOLEAN` value to `true` for “climbed” and `false` to “want to climb”
  * Will users be able to mark trees from the discover page?
    * Marking trees will only be available in the detailed view of a specific tree at first, and as a stretch goal next to the tree in the list view.
  * Will users be able to toggle how trees in their forest are marked?
    * Yes, by clicking on the tree to get to the detailed view of the tree where the buttons will be available.
  * Will users be able to remove trees from their forest?
    * As a stretch goal, a "remove" button will be available next to trees in the forest. This will remove trees by deleting the coresponding entry in the `ForestConnections` table.
  * What will happen if a user clicks on "climbed" or "Want to climb" and the tree is already in their forest?
    * A new row in the `ForestConnections` table will not be created, rather it will be changed if they clicked a different button or nothing will happen if it already exists. As such, any time a user clicks one of these buttons, we will have to first check if a connection already exists. If it already exists with the button they clicked, we can send an alert to the browser that says "You have already marked this tree as climbed" or "You have already marked this tree as not climbed"
    
### Acceptance Criteria
**Given** I am a logged-in user
  1. **When** I click the “climbed” button
      * **Then** the *Toilet-Surfing App* will use AJAX to update the climb status button by changing the color and the text to “climbed!”
  2. **When** I click the “want to climb” button
      * **Then** the **Toilet-Surfing App* will use AJAX to update the climb status by changing the color and the text to “want to climb”
  3. **When** I click either button on a tree that is already in my forest
      * **Then** either nothing will happen in the database and an alert will be sent to the browser or the row in the `ForestConnections` table will be updated if it is different from what is already there.

## _Create Bathroom_
As a **registered user**, I want to **add new trees to the site**, so that I and others can **review them and add them to our forests**.

### Questions
* What route will be used to get to the "Create Bathroom" form?
  * User will be directed to a "Create Bathroom" form via the `/trees/new` route
  * The form will use a method of `POST` with an action of `/trees`
* What fields will be shown on the form?
  * Name (`name`), closest city and/or state (`cityState`), detailed location or address (`detLocation`), and a description of the tree and its climb (`description`) 
  * `addedBy` will be set on the backend to id of user who is logged in and creating the tree
* What happens when a user enters invalid credentials?
    * Use express middleware to send error to a front end error display text field
* Where will we redirect a user after creating a tree?
  * To that detailed view page of the newly created tree (`/trees/:id(\\d+)`)
* Is this tree in the user’s forest by default?
  * No, but they will have an option to add it in the detailed view of the tree.
* What happens if a tree already exists?
  * Due to the "uniqe" constraints on the fields to create a tree, the user will receive an error.
* How will we protect from cross-site request forgery?
  * We will use the `csurf` package

### Acceptance Criteria
**Given** that I am a **logged-in user**
  1. **When** I fill in the add tree form with valid information
      * **Then** the new tree appears listed.
  2. * **When** I add invalid or missing information to the form and attempt to submit
      * **Then** the form validations fail and return me to the form with an error message.

      ## _Review Bathroom_
As a **logged in user**, I want to be able to **review bathrooms** so that I and others **read see my reviews**.

### Questions
* How will a user access the review form for a tree?
  * User will click on a review button which will redirect them to `/reviews/new`
* What is included on the review form for the tree?
  * reviewText, difficulty, funFactor, viewFromTop 
* What type of elements are used for those form items?
  * reviewText: `textarea`
  * difficulty: `select` element with four `option` elements 
    * easy (value=1), medium (value=2), hard (value=3), danger seeker (value=4)
  * funFactor: `select` element with four `option` elements 
    * boring (value=1), okay (value=2), enjoyable (value=3), amazing (value=4)
  * viewFromTop: `select` element with four `option` elements 
    * dull (value=1), good (value=2), great (value=3), mesmerizing (value=4)
* Where should the user be redirected after reviewing?
  * User will be redirected to the detailed view of the tree they reviewed `/trees/:id(\\d+)`
* How will we protect from cross-site request forgery?
  * We will use the `csurf` package

### Acceptance Criteria
**Given** that I'm a logged-in user and
   1. **When** I'm on the `/reviews/new` route
      * **Then** there will be a review form with four fields (described above) and a "Submit" button to submit the form.
  2. **When** I try to fill out the form with empty inputs press the "Submit" button
      * **Then** at the top of the form, I will see a red message "Review fields cannot be empty"
  3. **When** I try to fill out the form with valid inputs and press press Enter or press the "Submit" button
      * **Then** I will be redirected to the detailed view of the tree I reviewed `/trees/:id(\\d+)`

&nbsp;

# User Stories Stretch Goals

## _Mark a Bathroom as Favorite_

## _View User Page_
As a **logged in user**, I want to be able to **view my own forest and climber score** so that I can **keep track of trees I have climbed and want to climb**.
### Questions
* How will a user navigate to their own forest page?
    * By clicking on "My Forest" in the [nav bar](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#nav-bar).
* How will the user's page look?
    * At the top of the page it will say "`userName`'s Forest", followed by their "`userName`'s Climber Score" ([handled below](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#climber-score), defaults to `0`) an unordered list of "Trees I have climbed" and then "Trees I want to climb".
    * Formatting can be the same as the `/trees` view
* Should we show something different for a new user because there will be no trees in the forest?
  * When there are no trees, show an extra link in the middle of the page that redirects to `/trees` with an invitation to "Grow your forest by adding trees you have climbed or want to climb!".
* What will happen when a user clicks on a tree name?
  * The same thing that happens when they click on a tree name in the `/trees` view. They will be redirected to the detailed view of the tree at `/trees/:id(\\d+)`.
* Will users be able to remove trees from their forest?
    * As a stretch goal, a "remove" button will be available next to trees in the forest, only when a user is looking at their own forest. This will remove trees by deleting the coresponding entry in the `TreeConnections` table with a `DELETE` request to `/treeConnections`. The correction row in the table will be found using `where` with the `treeId` and `userId`.

### Acceptance Criteria
**Given** that I'm a logged-in user and
1. **When** I am viewing my own forest page
      * **Then** I will see "`userName`'s Foest" at the top, followed by a list of "Trees I have climbed" and then "Trees I want to climb".
  2. **When** I click on the tree names of trees in my forest
      * **Then** I will be redirected to that trees detailed page view at `/trees/:id(\\d+)`

## _Climber Score_
As a **logged in user**, I want to **know my "Climber Score"**, so I can **be motivated to get out there and climb more trees**.
### Questions
* Where will a user a climb score?
    * In a [user page](https://github.com/zduvall/Toilet-Surfing/wiki/User-Stories#view-own-forest-and-climber-score) at `/users/:id(\\d+)`
* How will a user's climb score be calculated?
    * By adding up the number of trees they have climbed with more difficult trees being worth more points.
    * We will have a function that calculates a user's climb score that can be invoked here and potentially in our stretch goal below
### Acceptance Criteria
**Given** that I'm a logged-in user and
   1. **When** I'm on a `/users/:id(\\d+)` route
      * **Then** I will see a Climber Score near the top of the screen under "`userName`'s Forest"

As a **logged-in-user** I want to be able to **favorite** a tree, so that I can I keep a record of my **favorited trees** that I’ve climbed or want to climb in my personal **forest**.

### Questions

* How would the page let the user know a tree has been “favorited”?
  * It changes the color of the word "favorite" when they click on it next to the tree.
* How would the app update the database with the “favorited” trees?
  * We will use sequelize to toggle the `favStatus` from the default `false` to true.

### Acceptance Criteria

**Given** I am a user that’s signed in.
  1. **When** I click on add **favorite tree** 
      * **Then** the new tree appears listed.
