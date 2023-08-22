let dice = document.getElementById('dice');
let roll;
let youGot = document.getElementById('roll-result');
let next = document.getElementById('next');
let diceRoll = document.getElementById('dice-roll');
let information = document.getElementById('information');
let finished = document.getElementById('finished');


let nextRoll = document.getElementById('go-roll');

let space =0;

information.style.display = "none";
finished.style.display = "none";

dice.onclick = () => {
    roll = Math.ceil(Math.random() *6);
    space +=roll;

    youGot.innerHTML = "You got: " + roll.toString();
    
}
const context = {
    theTiles: [
        {
            title: 'Adopt a squirrel!',
            image: '../images/squirrel.png',
            details: 'Most people get a dog or cat, but no, not you! You found the squirrel injured in your yard one day, and the rest is history!'
        },
        {
            title: 'Find a mysterious rock with intricate carvings in the park!',
            image: '../images/stone.png',
            details: 'I wonder what it could mean... is this a priceless artifact??'
        },
        {
            title: 'Get a deal on a nice apartment',
            image: '../images/apartment.png',
            details: 'Your friend is a real estate agent in NYC. You score a sweet apartment for an unbeatable price!'
        },
        {
            title: 'Date a billionare',
            image: '../images/limo.png',
            details: 'Do you love them? Maybe not, but there\'s always the private jet, fancy dinner, and expensive gifts'
        },
        {
            title: 'Help a turtle cross the road',
            image: '../images/turtle.png',
            details: 'On your way to the beach, you see a turtle in the middle of the road. You pull over to save him from harms way!'
        },
        {
            title: 'Join a cooking class',
            image: '../images/cooking.png',
            details: 'You meet new friends in your city while cooking up delicious food; it\'s a win-win!'
        },
        {
            title: 'Lose your car in a parking garage',
            image: '../images/parkinggarage.jpeg',
            details: 'You go to the mall with your friends, but can\'t find your car in the massive parking garage. You spend hours searching and end up missing a dinner party. ☹️'
        },
        {
            title: 'Go vegetarian',
            image: '../images/vegetarian.png',
            details: 'No more meat for you.'
        },
        {
            title: 'Impersonate someone at the airport',
            image: '../images/limo.png',
            details: 'You swear it\'s not as bad as it sounds! After your ride bails on you, you see the chauffer with the sign and pretend to be the person whose name is on the sign.'
        },
        {
            title: 'TSA breaks your camera',
            image: '../images/camera.png',
            details: 'When going through security, TSA is rough with your bag and you find out later that your camera doesn\'t work anymore. ☹️'
        },
        {
            title: 'Miss out on the last marble rye bread',
            image: '../images/bread.png',
            details: 'The old lady ahead of you gets the last marble rye bread at the bakery. You offer to pay double to get it from her (getting this bread is crucial), but she refuses. Desperate times call for desperate measures so you rob the bread from her after she leaves the bakery.'
        },
        {
            title: 'Spend 2 hours waiting at a restaurant for a table',
            image: '../images/restaurant.jpg',
            details: 'After being told it would only be 10-15 minutes, you and your friends end up leaving after two hours.'
        },
        {
            title: 'Fall for an online scam',
            image: '../images/scam.png',
            details: 'It looked so convincing though!'
        },
        {
            title: 'Find a wishing well that grants all of your wishes',
            image: '../images/well.png',
            details: '...well your first three wishes, but like any smart person, you wished for infinite wishes, obviously.'
        },
        {
            title: 'Go skydiving',
            image: '../images/skydiving.png',
            details: 'Such fun!'
        },
        {
            title: 'Meet someone on a train in Vienna and walk around all day talking to them',
            image: '../images/beforesunrise.jpeg',
            details: 'You agree to meet them again six months from now in the same station...Will they show up?'
        },
        {
            title: 'Save a man, get mistaken for his fiancee',
            image: '../images/sleeping1.jpeg',
            details: 'You see a man get mugged by the subway and take him to the hospital, where the misunderstanding arises that you are his fiancee!'
        },
        {
            title: 'Find raccoons in your basement',
            image: '../images/raccoon.png',
            details: 'You have to admit you\'d think they were cute if they weren\'t in your basement.'
        }
    ]
};


function moveToTile(space) {
    const templateElement = document.getElementById("templateHB");
    const templateSource = templateElement.innerHTML;
    const template = Handlebars.compile(templateSource);
    const currentTile = context.theTiles[Math.floor(space)];

    const compiledHtml = template(currentTile);
    document.getElementById("information").innerHTML = compiledHtml;

}


next.onclick = () => {
    diceRoll.style.display = "none";

    if (space >= context.theTiles.length) {
        diceRoll.style.display = "none";
        information.style.display = "none";
        finished.style.display = "block";
    } else {
        information.style.display = "block";
        moveToTile(space);
        youGot.innerHTML = "You got: ";
    }

}

document.addEventListener("click", displayDice);

function displayDice(event) {
    var element = event.target;
    if(element.tagName == 'BUTTON' && element.classList.contains("go-roll")){
        diceRoll.style.display = "block";
        information.style.display = "none";
    }
}
