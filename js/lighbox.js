const imgs = document.querySelectorAll('.img-galeria')
const imagenLigt = document.querySelector('.agg-img')
const contLight = document.querySelector('.image-light')
const hbg = document.querySelector('.hamburger');

imgs.forEach(img =>{
    img.addEventListener('click',()=>{
        SeeImage(img.getAttribute('src'))

    })

})

contLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLigt){
        contLight.classList.toggle('show')
        imagenLigt.classList.toggle('showimage')
        hbg.style.opacity = '1'
    }
})

const SeeImage= (img)=>{
    imagenLigt.src = img;
    contLight.classList.toggle('show')
    imagenLigt.classList.toggle('showimage')
    hbg.style.opacity = '0'
}
