/**************** Script for hamburger menu *******************/

function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("hamBtn").classList.toggle("open");

}
const x = document.getElementById('hamBtn');
x.onclick = toggleMenu;

//Footer last modified date
const options = {
	day: 'numeric',
	month: 'long',
	year: 'numeric'
};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);


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

//----------------------------------------------------------------------\\

/**********Weather forecast scripts**********/
//select output elements
const temperature = document.querySelector('#temperature');
const description = document.querySelector ('#description');
const humidity = document.querySelector('#humidity');
const weathericon = document.querySelector('#weathericon');
const caption = document.querySelector('figcaption');

//Get the weather data from the API- openweathermap.org
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,US&units=metric&appid=910d98e020c88d4ac0c19f9874cb1e2e';
async function apiFetch() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);//this is for testing the call
      displayResults(data);
    } else {
      console.log('Response not OK ${await response.text()}');
    }
  } catch(error) {
    console.log(`Error: ${error.message}`);
  }
}
apiFetch();

//capitalize

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

//display the results

function displayResults(data) {
  temperature.textContent = data.main.temp.toFixed(0);
  humidity.textContent = data.main.humidity.toFixed(0);
  let desc = capitalize(data.weather[0].description)
  description.textContent = desc;
  caption.textContent = desc;
  weathericon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weathericon.alt = `Icon of current weather condition of Carlsbad which is ${desc}`;
}

/********Three day forecast********/


/****Script to display the three days temperature forecast ******/

const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad,US&units=imperial&appid=910d98e020c88d4ac0c19f9874cb1e2e";

fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsForecast) => {
    console.log(jsForecast);

    var i = 1;
      for(var x=0; (i<2 || x<jsForecast.list.length); x++){
        if(jsForecast.list[x].dt_txt.includes("12:00:00")){
          let cardF = document.createElement('section');
          let imgF = document.createElement('img');
          let tempF = document.createElement('p');
          let conF = document.createElement('p2');


          
          tempF.textContent = jsForecast.list[x].main.temp.toFixed(0) +"°F";
          const imagesrc = 'https://openweathermap.org/img/w/' + jsForecast.list[x].weather[0].icon + '.png';  // note the concatenation
          const desc = jsForecast.list[x].weather[0].description;
          imgF.setAttribute('src', imagesrc);
          imgF.setAttribute('alt', desc);
          
          cardF.appendChild(tempF);
          cardF.appendChild(imgF);
          cardF.appendChild(conF);

          

          document.querySelector('div.Day' + i).appendChild(cardF);
          
          i++; 
        }
      }
  });

  /****Script to display the three days ******/
const d =new Date();
const weekday =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function CheckDay(day){
  if(day +d.getDay() > 6){
    return day +d.getDay() -7;
  }
  else {
    return day +d.getDay();
  }
}
for(i=0;i<3;i++){
  document.getElementById("today"+(i+1)).innerHTML = weekday[CheckDay(i)];
}

/*********Form script Fetch API ************/
//fetch('https://www.fruityvice.com//api/fruit/all')

