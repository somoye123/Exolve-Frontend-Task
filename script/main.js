$(document).ready(function (params) {
    const allCards = document.querySelectorAll('.governace .card');
    allCards.forEach(card => {
        card.classList.add('is-clickable');
        card.setAttribute('data-toggle', 'modal');
        card.setAttribute('data-target', '#exampleModal')
        card.addEventListener('click',()=> displayInfo(card))
    })
})

const displayInfo = (data) => {
   const imgSrc = getImgSrc(data);
   const title = getTitle(data);
   const pres = getPres(data);
   const modalImg = document.querySelector('#exampleModal img');
   const modalTitle = document.querySelector('#exampleModal .modal-title');
   const modalPres = document.querySelector('#exampleModal .modal-pres');
   modalImg.setAttribute('src', imgSrc);
   modalTitle.textContent = title;
   modalPres.textContent = pres

}
const getImgSrc = (data) => {
    const imgSrc = data.querySelector('img').getAttribute('src')
    return imgSrc;
}
const getTitle = (data) => {
    return data.querySelector('.card-title').textContent;
}
const getPres = (data) => {
    return data.querySelector('.card-text').textContent;
}