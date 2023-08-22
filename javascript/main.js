try {
    function randomCardGenerator() {
        randomNum = Math.floor(Math.random() *5);
        return randomNum;
    
    }
    
    const context = {
        cards: [
            {
                image: '../images/waiter.png',
                jobTitle: 'Server',
                pay: 40000
            },
            {
                image: '../images/mechanic.png',
                jobTitle: 'Mechanic',
                pay: 50000
            },
            {
                image: '../images/flight_attendant.png',
                jobTitle: 'Flight Attendant',
                pay: 65000
            },
            {
                image: '../images/realtor.png',
                jobTitle: 'Realtor',
                pay: 65000
            },
            {
                image: '../images/athlete.png',
                jobTitle: 'Athlete',
                pay: 80000
            }
        ]
    };
    
    const templateElement = document.getElementById("templateHB");
    const templateSource = templateElement.innerHTML;
    const template = Handlebars.compile(templateSource);
    const career = context.cards[randomCardGenerator()];
    const compiledHtml = template(career);
    document.getElementById("information").innerHTML = compiledHtml;

} catch (error) {

}







