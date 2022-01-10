var select = document.querySelector('.select');
var list = document.querySelector('.list');
var btn = document.querySelector('.btn');


for (var i = 0; i < pokemons.length; i++) {

    var option = document.createElement('option');
    var item = document.createElement('li');
    var img = document.createElement('img');
    var line = document.createElement('hr');
    var title = document.createElement('h3');
    var type = document.createElement('p');
    var weight = document.createElement('span');
    var height = document.createElement('span');

    option.textContent = pokemons[i].type;
    img.src = pokemons[i].img;
    title.textContent = pokemons[i].name;
    type.textContent = pokemons[i].type;
    weight.textContent = pokemons[i].weight;
    height.textContent = pokemons[i].height;


    select.appendChild(option);
    list.appendChild(item);
    item.appendChild(img);
    item.appendChild(line);
    item.appendChild(title);
    item.appendChild(type);
    item.appendChild(weight);
    item.appendChild(height);

}

function button() {
console.log(selects);
}


btn.addEventListener('submit', button);















































