function ajax() {
    var x=new Promise(function(resolve, reject) {
        try {

    // creating an XHR object
    var xhttp = new XMLHttpRequest();
    // event listsener
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            var response = JSON.parse(this.responseText);

            // EXTRACT VALUE FOR HTML HEADER. 
            var col = [];
            for (var i = 0; i < response.length; i++) {
            for (var key in response[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
            }
            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");

            // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

            var tr = table.insertRow(-1);                   // TABLE ROW.

            for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
            tr.style.border = "1px solid black";

        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < response.length; i++) {
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length-1; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = response[i][col[j]];
            }
            if (j == 3) {

                var tabCell = tr.insertCell(-1);

                
                // NOW HERE I AM CREATING AND ADDING A CHECKBOX TO THE TABLE CELL.
                var chk = document.createElement('input');
                chk.setAttribute('type', 'checkbox');
                tabCell.appendChild(chk);
                chk.id = "id" + i +j;
                

                if(response[i][col[j]] == true){
                    chk.checked = true;
                    chk.disabled = true;
                }
                else
                    chk.checked = false;
                    
            }
            // console.log(chk.id);
            tr.style.border = "1px solid black";
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("sample");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    
    }
    
    // }
    // for (var i = 0; i < response.length; i++) {
    //     for (var j = 3; j < response.length; j++){
        //     const cb = document.querySelector('#chk');
        //    console.log(cb); // false
    //   }
    //  }
    }

    xhttp.open("Get","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
catch (e) {
    reject();
} 
finally {
    console.log('Done');
    resolve();
}
})
.then(function(s) {
    console.log('Promise called');
    main();
})
}

function main() {
    setTimeout(function() {
        // console.log(chk.id);
        var checked = $('input:checkbox:checked');
        var select = $('input:checkbox');
        console.log("Checkboxes: " + select.length);
        console.log("Checked: " + checked.length);
        count = 0;
        select.change(function() {
            var newly_checked = $('input:checkbox:checked');
            console.log("Now Checked becomes: " + newly_checked.length);
            count = newly_checked.length - checked.length;
            console.log("newly checked: " + count);

            if (count >= 5) {
                setTimeout(function() {
                    alert(" Congrats. 5 Tasks have been Successfully Completed");
                }, 400);
            }
        })
    }, 5000);
}
