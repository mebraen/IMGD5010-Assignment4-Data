//current endpoint data
let myData;

//current endpoint
let endpoint = ''

//endpoints
let rickAndMorty = 'rick%20and%20morty'
let Homeland = 'homeland'
let strangerThings = 'stranger%20things'
let batman = 'batman'
let velma = 'velma'
let secretInvasion = 'secret%20invasion'
let gilmoreGirls = 'gilmore%20girls'
let phineasAndFerb = 'phineas%20and%20ferb'
let gameOfThrones = 'game%20of%20thrones'
let theWalkingDead = 'the%20walking%20dead'

//list of show names
let showList = ['Rick and Morty', 'Homeland', 'Stranger Things', 'Batman', 'Velma', 'Secret Invasion', 'Gilmore Girls', 'Phineas and Ferb', 'Game of Thrones', 'The Walking Dead']


function setup() {
  createCanvas(400, 400);
}

function draw() {
  //gray background so that the stars are more visible
  background(150)
  
  //write show names on left side of canvas
  let showNameIncrement = height/showList.length
  let showNameY = 0
  textAlign(LEFT, CENTER)
  textSize(24)
  
  for(let i = 0; i < showList.length; i++) {
    text(showList[i], 0, showNameY, width/2+4, height/10)
    showNameY+=showNameIncrement
  }
  
  noLoop()
}

function loadData(newurl) {
  //if the current url is not empty, load the data
  if(newurl != '') {
    myData = loadJSON(newurl, ratings);
  }
}

function ratings() {
  //get rating information
  let rating = myData.rating.average
  
  //loop variables
  let yIncrement = height/10
  let xIncrement = width/20
  let x = width/2
  let y = 0
  
  //placement of stars on y axis based on endpoint
  switch(endpoint) {
      case(Homeland): y = yIncrement
        break;
      case(strangerThings): y = yIncrement*2
        break;
      case(batman): y = yIncrement*3
        break;
      case(velma): y = yIncrement*4
        break;
      case(secretInvasion): y = yIncrement*5
        break;
      case(gilmoreGirls): y = yIncrement*6
        break;
      case(phineasAndFerb): y = yIncrement*7
        break;
      case(gameOfThrones): y = yIncrement*8
        break;
      case(theWalkingDead): y = yIncrement*9
        break;
  }
  
  //draw stars
  textAlign(CENTER,CENTER)
  textSize(18)
  for(let i = 0; i < ceil(rating); i++) {
    text('⭐', x, y, xIncrement, yIncrement)
    x+=xIncrement
  }
  
  //draw rectangle over last star to display partial ratings
  //ex: 8.8 rating shows 8 full stars and 80% of the last star
  fill(150)
  stroke(150)
  let ratingDecimal = nf(rating).split('.')[1]
  let rectPercent = ((ratingDecimal/10) * xIncrement)
  let rectLength = rectPercent + (10 - floor(rating))*xIncrement

  rect(x - (xIncrement - rectPercent), y, rectLength, yIncrement)
  
}

function mousePressed() {
  let heightIncrement = height/10
  //if mouse is on left half of screen where show names are
  //then figure out which show to display rating for
  if(mouseX < width/2) {
    if(mouseY < heightIncrement) {
      endpoint = rickAndMorty
    }
    else if(mouseY < heightIncrement*2) {
      endpoint = Homeland
    }
    else if(mouseY < heightIncrement*3) {
      endpoint = strangerThings
    }
    else if(mouseY < heightIncrement*4) {
      endpoint = batman
    }
    else if(mouseY < heightIncrement*5) {
      endpoint = velma
    }
    else if(mouseY < heightIncrement*6) {
      endpoint = secretInvasion
    }
    else if(mouseY < heightIncrement*7) {
      endpoint = gilmoreGirls
    }
    else if(mouseY < heightIncrement*8) {
      endpoint = phineasAndFerb
    }
    else if(mouseY < heightIncrement*9) {
      endpoint = gameOfThrones
    }
    else if(mouseY < height) {
      endpoint = theWalkingDead
    }
  }
  //pass show url to loadData
  newurl = 'https://api.tvmaze.com/singlesearch/shows?q=' + endpoint
  loadData(newurl)
}
