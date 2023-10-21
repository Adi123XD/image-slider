// const slideImages = document.querySelectorAll('img')
// console.log('sdfd',slideImages)
// const next = document.querySelector('.next');
// console.log(next);
// const prev = document.querySelector('.prev');
// console.log(prev)
// const dots = document.querySelectorAll('.dot');
// let counter = 0;
// function slideNext(){
//     slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
//     console.log(slideImages[counter])
//     slideImages[counter].classList.remove('active');
//     if(counter >= slideImages.length-1){
//         counter=0;
//     }
//     else{
//         counter++;
//     }
//     console.log(slideImages[counter])
//     slideImages[counter].classList.add('active');
//     slideImages[counter].style.animation='next2 0.5s ease-in forwards'
// }

// next.addEventListener('click',slideNext);
const slideImages = document.querySelectorAll('.slides img'); // Use .slides to select images within the slides container
// console.log('sdfd', slideImages);
const next = document.querySelector('.next'); // Use .next to select the next button
// console.log(next);
const prev = document.querySelector('.prev'); // Use .prev to select the prev button
// console.log(prev);
const dots = document.querySelectorAll('.dot'); // Use .dot to select dot elements
let counter = 0;
// console.log(dots)
// function to add and remove active classes from indicatiors
function indicators(){
    for (i=0;i<dots.length;i++)
    {
        dots[i].className = dots[i].className.replace(' active',"");
    }
    dots[counter].className+=' active';
}
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    // console.log(slideImages[counter])
    // slideImages[counter].classList.remove('active');
    if (counter >= slideImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    // console.log(slideImages[counter])
    // slideImages[counter].classList.add('active');
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards'
    if (counter === 0) {
        counter = slideImages.length - 1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation='prev2 0.5s ease-in forwards'
    indicators();
}

function autosliding(){
    slideinterval=setInterval(()=>{
        slideNext();
},2500);
}
autosliding();

// stop sliding when the mouse is over
const container= document.querySelector('.slides-container')
container.addEventListener('mouseover',()=>{
    clearInterval(slideinterval)
})
// resume sliding when the mouse is out
container.addEventListener('mouseout',autosliding);
next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);

// changing the images based on the indicators
function handleDotClick(e){
    const dotIndex = e.target.getAttribute('attr');
    if (dotIndex > counter)
    {
        
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = dotIndex;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if (dotIndex===counter)
    {
        return ;    
    }
    else{
        
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards'
        counter = dotIndex;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards'
    }
    indicators();
}
dots.forEach(dot=>{

    dot.addEventListener('click',handleDotClick);
});





