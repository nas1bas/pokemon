//forms-selects-start
var form = document.querySelector('.form')
var select = document.querySelector('.select');
var input = document.querySelector('.input');
var list = document.querySelector('.pokemons__list');
var a_z = document.querySelector('.select__az');

var typesOfSelect = [];

for (var i = 0; i < pokemons.length; i++) {
    
    for (var j = 0; j < pokemons[i].type.length; j++) {
        if (!typesOfSelect.includes(pokemons[i].type[j])) {
            typesOfSelect.push(pokemons[i].type[j]);
        }
    }
}

for (var i = 0; i < typesOfSelect.length; i++) {
    var option = document.createElement('option');

    option.textContent = typesOfSelect[i];

    select.appendChild(option);
}
//forms-selects-end



//btn-submit-start
form.addEventListener("submit", function (evt) {
    evt.preventDefault()
    console.log(select.value)
    console.log(input.value)
    console.log(a_z.value)
});
//btn-submit-end


//pokemons-list-start
function elementCreator(tagName) {
    return document.createElement(tagName);
}

for (var i = 0; i < pokemons.length; i++) {
    pokemonTypes(pokemons[i]);
} 

function pokemonTypes(pokemon) {

    var item = document.createElement('li');
    var img = document.createElement('img');
    var line = document.createElement('hr');
    var title = document.createElement('h3');
    var type = document.createElement('p');
    var weight = document.createElement('span');
    var height = document.createElement('span');


    img.src = pokemon.img;
    title.textContent = pokemon.name;
    type.textContent = pokemon.type;
    weight.textContent = pokemon.weight;
    height.textContent = pokemon.height;


    list.appendChild(item);
    item.appendChild(img);
    item.appendChild(line);
    item.appendChild(title);
    item.appendChild(type);
    item.appendChild(weight);
    item.appendChild(height);
}
//pokemons-list-end






//1-masala
var salaries = [
    {
        name: "Akmal",
        summ: 1200
    },
    {
        name: "Karim",
        summ: 1800
    }
]

function sumSalaries(summ) {

    for (var i = 0; i < salaries.length; i++) {

        for (var j = 0; j < salaries[i].length; j++) {
            sumSalaries(salaries.summ);
        }


        var firstWorker = salaries[i].summ;
        var secondWorker = salaries[j].summ;

        var summ = firstWorker + secondWorker;
    }
    return summ;
}
console.log(sumSalaries());



// 2-masala

function numbers() {
    var numb = numbArr[0];

    for (var i = 1; i < numbArr.length; i++) {
        if (numb < numbArr[i]) {
            numb = numbArr[i];
        }
    }
    return numb;
}
var numbArr = [102, 24, 201, 333, 34];
var summ = numbers([102, 24, 201, 333, 34]);

console.log(summ);

var numbArr = [550, 22, 200, 100, 344];
var summ = numbers([550, 22, 200, 100, 344,]);

console.log(summ);

