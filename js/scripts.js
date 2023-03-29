/**************** Script for hamburger menu *******************/

function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("hamBtn").classList.toggle("open");

}
const x = document.getElementById('hamBtn');
x.onclick = toggleMenu;


/********Scripts for lazy loading**************/

//This finds all the images. 
const imagesToLoad = document.querySelectorAll('img[data-src]'); 


//this tells the system when to load the images.
const imgOptions = { 
    threshold: .7, 
    rootMargin: "0px 0px 50px 0px" 
};
//In the function below when the image gets loaded it will start with a blur and after loading the blur will disapper.
const loadImages = (image) => { 
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src'); 
    };
};
//intersectionObserver lets you know when an observed element enters or exits the browser's viewport
//if the observer is supported in window it will cause the code below to run
if ('IntersectionObserver' in window) { 
    const imgObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
//this will load images if needed 
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
//this will load all images not supported once observing has stopped 
} else {  
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}


