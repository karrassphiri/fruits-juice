
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
    document.getElementById('thanks').innerHTML = 'We will contact you soon to get more information and make necessary arrangements'
   
  })
  
 