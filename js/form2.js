
function checkSelected(fruit) {
    return (fruit.name == document.getElementById('second-special').value) || (fruit.name == document.getElementById('first-special').value) || (fruit.name == document.getElementById('third-special').value);
  }
  
  var btn = document.getElementById('submitButton');
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById('modal-container').style.display = "flex";
    var first = document.getElementById('first-special');
    document.getElementById('First').innerHTML = first.value;
    document.getElementById('Second').innerHTML = document.getElementById('second-special').value;
    document.getElementById('Third').innerHTML = document.getElementById('third-special').value;
  
   
    fetch('json/data.json')
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
  