# IMGD5010-Assignment4-Data
## What Endpoint I Chose
For assignment 4, I decided to use an endpoint which contains informration about shows. The endpoint url is: https://api.tvmaze.com/search/shows?q= followed by a show name. For example, for Rick and Morty the endpoint url looks like this: https://api.tvmaze.com/search/shows?q=rick%20and%20morty. I chose this endpoint because I wanted to experiment with dynamicly changing the endpoint to get information on different shows throughout the code.
## How the Code Works
The code that I produced (available in the showRatings.js file) displays the names of 10 shows on the left side of the screen. The shows were selected by me, randomly, and do not change. Upon clicking the name of one of the shows, stars will appear on the right side of the screen opposite of the show name. The number of stars will directly match the average rating of the show via the endpoint. This was achieved by calling a function which calls the API dynamically, with a different endpoint based on where the user clicks. This way, the user is not left waiting for all 10 API calls to finish before the display renders.
## End Product
Here is the link to my final product in fullscreen : https://editor.p5js.org/mebraen/full/XYpg9Wn5k
