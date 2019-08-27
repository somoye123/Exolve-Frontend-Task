$(document).ready(function (params) {
    const allCards = document.querySelectorAll('.governace .card');
    allCards.forEach(card => {
        card.classList.add('is-clickable');
        card.setAttribute('data-toggle', 'modal');
        card.setAttribute('data-target', '#exampleModal')
        card.addEventListener('click',()=> displayInfo(card))
    })
    console.log(allCards);
    
})

const displayInfo = (data) => {
    console.log(data, 'hello');
}