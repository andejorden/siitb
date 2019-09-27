var list = [],
str = "";

async function display(){
    var response = await fetch("https://meniu-mancare.firebaseio.com/.json");
    window.list = await response.json();
    for(var i in list){
        str += `<tr>
            <td class="image"><img src="${list[i].imagine}" alt="${list[i].nume}"></td>
            <td><h3>${list[i].nume}</h3>${list[i].ingrediente}</td>
            <td><button onclick="location.href='detalii-meniu.html?id=${i}'" class="btn btn-primary">Detalii</button></td>
        </tr>`;
    }
    document.querySelector("table tbody").innerHTML = str;
}

function searchForIngredients(form, event){
    var searchIndex = document.querySelector("[name='search']").value;
    var alt = "";
    event.preventDefault();
    for(var i in list){
        if(list[i].ingrediente.indexOf(searchIndex) !== -1){
            alt += `<tr>
                <td class="image"><img src="${list[i].imagine}" class="img-fluid" alt="${list[i].nume}"></td>
                <td><h3>${list[i].nume}</h3>${list[i].ingrediente}</td>
                <td><button onclick="location.href='detalii-meniu.html?id=${i}'" class="btn btn-primary">Detalii</button></td>
            </tr>`;
        }
    }
    form.reset();
    document.querySelector("table tbody").innerHTML = alt;
}