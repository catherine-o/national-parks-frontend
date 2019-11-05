# En Route
> A personal guide to the U.S. National Parks and Monuments that tracks where a user has or would like to visit

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General info
En Route is a single page application where users can save National Parks and Monuments to a Bucketlist (places where they'd like to go) or a Memoir (places where they have been). Users have the opportunity to filter parks by state, learn more about each park, as well as view a Google Map of the park's general location.

## Intro Video
[Sensi on YouTube](https://www.youtube.com/watch?v=WzjgFscnQqE)

## Technologies
* React.js
* Ruby on Rails
* PostgreSQL
* Google Maps API
* National Park Service API
* Firebase
* Heroku

## Setup
This project can be found live at https://national-parks-app.web.app/

To run this project locally, clone the GitHub repository and run

```
npm install

npm start
```
This should launch your browser. If not, you can navigate to http://localhost:3000/ (preferably on Chrome).
The project will run off of the database I have on Heroku. Otherwise, the backend repo can be found at https://github.com/catherine-o/national-parks-backend. 

## Code Examples
```javascript
<div className='park-container'>
  {selectedPark 
  ? renderSelectedPark(selectedPark)
  : renderCards(selectedState)}
</div>
```

```javascript
<div className='buttons'>
  <button onClick={openLink}>➤</button>
  <button onClick={() => handleBackButtonClick(selectedState)}>Back</button>
  {renderXButton()}
  {renderHeartButton()}
</div>
```

```javascript
const renderCards = (state) => {
  const filteredParks = parks.filter(park => {
    if (park.states.includes(state)) {
      return park
    }
  })
  return filterParks(filteredParks)
 }
```


## Features
* Login or create user account
* View Bucketlist and Memoir
* List all Parks & Monuments of selected state
* View information of selected park, including interactive Google Map
* Navigate to park details on National Park Service website
* Save park to Bucketlist or Memoir


To-do list:
* Allow login to persist on page refresh
* Show or Delete park functionality from user profile
* Allow user to update username
* User profile styling
* Implement a photo feature (users can upload photos)


## Status
Project is: deployed for desktop browsers at [https://national-parks-app.web.app/](https://national-parks-app.web.app/).

## Inspiration
The inspiration for En Route came from my love of nature and traveling. There are many wonderous places to visit and this app is an example of how we can keep track of them.

## Contact
Created by [Catherine O'Hara](www.linkedin.com/in/catherine-o)

Feel free to contact me!

## License
[GPL v3.0](https://github.com/catherine-o/national-parks-frontend/blob/master/LICENSE)
