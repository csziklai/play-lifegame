
function randomCardGenerator() {
    randomNum = Math.floor(Math.random() *5);
    return randomNum;

}

const context = {
    cards: [
        {
            image: 'images/engineer.png',
            jobTitle: 'Civil Engineer',
            pay: 85000
        },
        {
            image: 'images/business.png',
            jobTitle: 'Accountant',
            pay: 70000
        },
        {
            image: 'images/doctor.png',
            jobTitle: 'Doctor',
            pay: 150000
        },
        {
            image: 'images/scientist.png',
            jobTitle: 'Lab Assistant',
            pay: 60000
        },
        {
            image: 'images/software.png',
            jobTitle: 'Software Engineer',
            pay: 90000
        }
    ]
};

const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const career = context.cards[randomCardGenerator()];
const compiledHtml = template(career);
document.getElementById("information").innerHTML = compiledHtml;




