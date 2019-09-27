        var memo = [];
        var columns = "";
        var empty = "";
        var data;

        function displayData(){
            var display = "";
            for(var i = 0; i < memo.length; i++){
                display += `<tr>
                <td>${memo[i].name}</td>
                <td>${memo[i].telephone}</td>
                <td><a href="javascript:modifyData(${i})">Modifica</a></td>
                <td><a href="javascript:removeData(${i})">Sterge</a></td>
            </tr>`;
            document.querySelector("#display-table").classList.remove("hidden");
            document.querySelector("#display-table tbody").innerHTML = display;
            }
        }

        function addData(){
            var nume = document.querySelector("[name='nume']").value;
            var telefon = document.querySelector("[name='telefon']").value;
            data = {name: nume, telephone: telefon};
            if(nume.length === empty || telefon.length < 5){
                window.alert("Completeaza un numar de telefon valid!");
            }else{
                memo.push(data);
                console.log(memo);
            }

            displayData();
            event.preventDefault();
            document.querySelector("#formular").reset();
        }

        function modifyData(obj){
            var cell = new Map(Object.entries(memo[obj]));
            var cellName = cell.get("name");
            var cellTelephone = cell.get("telephone");
            document.querySelector("[name='nume']").value = cellName;
            document.querySelector("[name='telefon']").value = cellTelephone;
            removeData();
        }

        function removeData(obj){
            memo.splice(obj, 1);
            if(memo.length > 0){
                displayData();
            }else{
                document.querySelector("#display-table").classList.add("hidden");
            }
            console.log(obj);
        }