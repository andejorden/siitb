function carsMark(checkBox){
    if(checkBox.checked){
        document.querySelector("." + checkBox.name).classList.remove("hidden");
    }else{
        document.querySelector("." + checkBox.name).classList.add("hidden");
    }
}

function uncheckDiesel(){
    var diesel = document.querySelector("[name='diesel']");
    diesel.checked = false;
}

function uncheckGas(){
    var gas = document.querySelector("[name='gas']");
    gas.checked = false;
}

function formAction(form, event){
    document.querySelector("form").reset();
}
