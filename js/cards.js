const reqtURL = 'https://karrassphiri.github.io/wdd230/fruits/fruits.json';

const display = document.querySelector("#cards");


function buildfruitsCards(info, type) {
  let data = info.fruits;
  data.forEach((fruit) => {
    let card = document.createElement("section");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    card.setAttribute("class", "section");
    p2.innerHTML = `${fruit.ftype}`;
    p3.innerHTML = `${fruit.price}`;

    if (type == "grid") {
      let img = document.createElement("img");
      img.setAttribute("src", `${fruit.photo}`);
      img.setAttribute("alt", `${fruit.name}`);
      img.setAttribute("loading", "lazy");
      card.append(img);
      let h3 = document.createElement("h3");
      h3.innerHTML = `${fruit.name}`;
      card.append(h3);
    } else {
      let h2 = document.createElement("h2");
      h2.innerHTML = `${fruit.name}`;
      card.append(h2);
    }

    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);

    display.classList.add(type);
    display.append(card);
  });
}

async function getfruits(type) {
  let response = await fetch(reqtURL);
  if (response.ok) {
    let data = await response.json();
    buildfruitsCards(data, type);
  } else {
    throw Error(response.statusText);
  }
}

getfruits("grid");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
  
})

