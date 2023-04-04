const reqtURL = 'https://karrassphiri.github.io/wdd230/fruits/fruits.json';

const display = document.querySelector("#cards");


function buildBusinessCards(info, type) {
  let data = info.fruits;
  data.forEach((fruit) => {
    let card = document.createElement("section");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let a = document.createElement("a");

    card.setAttribute("class", "section");
    p.innerHTML = `${fruit.fname}`;
    p2.innerHTML = `${fruit.phone}`;
    p3.innerHTML = `${fruit.motto}`;
    a.innerHTML = `${fruit.site}`;
    a.setAttribute("href", `${fruit.site}`);

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
    card.appendChild(a);

    display.classList.add(type);
    display.append(card);
  });
}

async function getBusinesses(type) {
  let response = await fetch(reqtURL);
  if (response.ok) {
    let data = await response.json();
    buildBusinessCards(data, type);
  } else {
    throw Error(response.statusText);
  }
}

getBusinesses("grid");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
  
})

