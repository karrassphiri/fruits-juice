
function checkSelected(fruit) {
    return (fruit.name == document.getElementById('second-special').value) || (fruit.name == document.getElementById('first-special').value) || (fruit.name == document.getElementById('third-special').value);
  }
  
  var btn = document.getElementById('submitButton');
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById('modal-container').style.display = "flex";
    document.getElementById('instruction-summary').innerHTML = document.getElementById('instructions').value;
    var first = document.getElementById('first-special');
    document.getElementById('First').innerHTML = first.value;
    document.getElementById('Second').innerHTML = document.getElementById('second-special').value;
    document.getElementById('Third').innerHTML = document.getElementById('third-special').value;
    document.getElementById('first_name').innerHTML = document.getElementById('first-name').value;
    document.getElementById('tel_num').innerHTML = document.getElementById('tel').value;
    document.getElementById('email_address').innerHTML = document.getElementById('e-address').value;
  
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    document.getElementById('formdate').textContent = new Date().toLocaleDateString('en-US', options);
    document.getElementById('thanks').innerHTML = 'We will make your juice in due course!'
    
    fetch('https://karrassphiri.github.io/wdd230/bountiful/json/data.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const fruits = jsonObject['fruits'];
        var filtered = fruits.filter(checkSelected);
        var carbo = 0;
        var fat = 0;
        var protein = 0;
        var sugar = 0;
        var calories = 0;
        for (const item of filtered) {
          carbo += item['nutritions']['carbohydrates'];
          fat += item['nutritions']['fat'];
          protein += item['nutritions']['protein'];
          sugar += item['nutritions']['sugar'];
          calories += item['nutritions']['calories'];
        }
  
        document.getElementById('summary').innerHTML = 'carbo: ' + carbo.toString() + '<br>' + 'fat: ' + fat.toString() + '<br>' + 'protein: ' + protein.toString() + '<br>' + 'sugar: ' + sugar.toString() + '<br>' + 'calories: ' + calories.toString() + '<br>';
  
      });
  
  })
  
  function showModal() {
  
  }
  /******************************************************* */
  const reqURL = "json/data.json";
  const gridbtn = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector("div");
  
  fetch(reqURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const fruits = jsonObject['fruits'];
      fruits.forEach(displayfruits);
    });
  
  console.log(fruits);
  
  function displayfruits(fruits) {
  
    let card = document.createElement("section");
    let fruitsName = document.createElement("h2");
    let fruitsGenus = document.createElement("p");
    let fruitsId = document.createElement("p");
    let fruitsOrder = document.createElement("p");
    let fruitsNutritions = document.createElement("p");
    let fruitsNutritions1 = document.createElement("p");
    let fruitsNutritions2 = document.createElement("p");
    let fruitsNutritions3 = document.createElement("p");
    let fruitsNutritions4 = document.createElement("p");
    let fruitsNutritions5 = document.createElement("p");
  
    // Change the textContent property of the h2 element to contain the fruits details
    fruitsName.textContent = `${fruits.name}`;
    fruitsGenus.textContent = `Genus:${fruits.genus}`;
    fruitsId.textContent = `ID:${fruits.id}`;
    fruitsOrder.textContent = `ORDER:${fruits.order}`;
    fruitsNutritions.textContent = `${fruits.nutritions.carbohydrates}`;
    fruitsNutritions1.textContent = `fat:${fruits.nutritions.fat}`;
    fruitsNutritions2.textContent = `sugar:${fruits.nutritions.sugar}`;
    fruitsNutritions3.textContent = `protein:${fruits.nutritions.protein}`;
    fruitsNutritions4.textContent = `calories:${fruits.nutritions.calories}`;
    fruitsNutritions5.textContent = `carbohydrates:${fruits.nutritions.carbohydrates}`;
  
  
    //append the section(card) with the h2 element
    card.appendChild(fruitsName);
    card.appendChild(fruitsGenus);
    card.appendChild(fruitsId);
    card.appendChild(fruitsOrder);
    card.appendChild(fruitsNutritions);
    card.appendChild(fruitsNutritions1);
    card.appendChild(fruitsNutritions2);
    card.appendChild(fruitsNutritions3);
    card.appendChild(fruitsNutritions4);
    card.appendChild(fruitsNutritions5);
  
  
    document.querySelector('div.menu').appendChild(card);
  
    gridbtn.addEventListener("click", () => {
      display.classList.add("grid");
      display.classList.remove("list");
    });
  
    listbutton.addEventListener("click", showList);
  
  
    function showList() {
      display.classList.add("list");
      display.classList.remove("grid");
    }
  
  }