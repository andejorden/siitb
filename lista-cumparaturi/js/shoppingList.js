var arr = [],
index = -1;

function sortTableUp(){
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector("#myTable");
    switching = true;
    while(switching){
        switching = false;
        rows = table.rows;
        for(i = 1; i < (rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].querySelector("tbody td span");
            y = rows[i + 1].querySelector("tbody td span");
            if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTableDown(){
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector("#myTable");
    switching = true;
    while(switching){
        switching = false;
        rows = table.rows;
        for(i = 1; i < (rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].querySelector("tbody td span");
            y = rows[i + 1].querySelector("tbody td span");
    
            if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function checkItem(aaa){
    console.log("item" + aaa);
    document.querySelector("td span.item" + aaa).classList.add("checked");
}

function showTable(){
    var str = "",
    table = document.querySelector("table");
    for(var i = 0; i < arr.length; i++){
        str += `<tr>
            <td><span class="item${[i]}">${arr[i]}</span></td>
            <td><button onclick="checkItem(${[i]})">Mark as buyed!</button></td>
        </tr>`;
    }
    table.querySelector("tbody").innerHTML = str;
}

function displayTable(form, event){
    event.preventDefault();

    var item = document.querySelector("[name='items']").value;

    if(item.length > 0){
        arr.push(item);
        document.querySelector(".table").classList.remove("hidden");
        showTable();
        form.reset();
    }else{
        index = -1;
        document.querySelector("form fieldset legend").innerHTML = `<strong class="alarm">Shopping List - Write an item in the input below and press OK!</strong>`;
    }
    console.log(arr);
}