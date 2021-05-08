const [imgs, mainImg]= [document.querySelectorAll('.imgs img'), document.getElementById('current-img')];

imgs.forEach(el => el.addEventListener('click',(e) => mainImg.src = e.target.src))



// function slideShow(e) {
//     mainImg.src = e.target.src;
//     setInterval(console.log(e.target.src),5000)
// }
