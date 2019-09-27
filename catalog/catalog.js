var listaElevi = [];
var indexElev = -1;
var indexNota = -1;

class Elev{
    constructor(nume){
        this.nume = nume;
        this.note = [];
    }
    media(){
        if(this.note.length === 0){
            return "Nu are note!";
        }else{
            var suma = 0;
            for(var i = 0; i < this.note.length; i++){
                suma += this.note[i];
            }
            return suma / this.note.length;
        }
    }
    addNota(nota){
        this.note.push(nota);
    }
}

function adaugaElev(form, event){
    event.preventDefault();
    
    var nume = document.querySelector("[name='Nume']").value;
    if(nume === ""){
        return false;
    }else{
        listaElevi.push(new Elev(nume));
    }
    drawElevi();
    form.reset();
}

function sortUp(){
    listaElevi.sort(function(a, b){
        return a.media() - b.media();
    });
    console.log(listaElevi);
    drawElevi();
}

function sortDown(){
    listaElevi.sort(function(a, b){
        return b.media() - a.media();
    });
    console.log(listaElevi);
    drawElevi();
}

function drawElevi(){
    var str = "";
    for(var i = 0; i < listaElevi.length; i++){
        str += `<tr>
            <td>${listaElevi[i].nume}</td>
            <td>${listaElevi[i].media()}</td>
            <td><button onclick="editeazaElev(${i});">Adauga/Vezi Note</button></td>
        </tr>`;
    }
    document.querySelector("#tabelNume tbody").innerHTML = str;
}

function sortNoteUp(){
    indexElev.note.sort(function(a, b){
        return a - b;
    });
    drawNote();
}

function sortNoteDown(){
    indexElev.note.sort(function(a, b){
        return b - a;
    });
    drawNote();
}

function drawNote(){
    var elev = indexElev;
    var note = elev.note;
    var str = "";
    for(var i = 0 ; i < note.length; i++){
        str += `<tr>
            <td>${note[i]}</td>
        </tr>`;
    }
    document.querySelector("#tabelNote tbody").innerHTML = str;
}

function editeazaElev(index){
    indexElev = listaElevi[index];
    document.querySelector("#studentName").innerHTML = `${indexElev.nume}`;
    document.querySelector("#catalog").classList.remove("hidden");
    drawNote();
}

function adaugaNota(form, event){
    event.preventDefault();
    var nota = document.querySelector("[name='Nota']").value;
    notaNumeric = Number(nota);
    if(notaNumeric >= 4){
        indexElev.addNota(notaNumeric);
    }else{
        return false;
    }
    drawElevi();
    drawNote();
    form.reset();
}

function addHidden(){
    document.querySelector("#catalog").classList.add("hidden");
}