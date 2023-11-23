let rows = 1, cols = 1;
let matrix_div = document.getElementById("matrix-form");

function addRow(){
    console.log("addRow")
    rows++;
    matrix_div.innerHTML = "";

    document.getElementById("test-div").innerHTML += "<div> hello </div>";

    for(let i = 0; i < rows; i++){
        matrix_div.innerHTML += `<div id=row${i} class="row"> </div>`;
        console.log("ran")
        let row = document.getElementById(`row${i}`);
        for(let j = 0; j < cols; j++){
            row.innerHTML += "<input name=\"surprise\" value=\"placeholder\"></input>";
        }
    }

}

function addCol(){
    cols++;
    for(let i = 0; i < rows; i++){
        console.log(`row${i}`)
        console.log(document.getElementById("matrix-form"))
        let row = document.getElementById("row" + i);
        console.log(row)
        row.innerHTML += "<input name=\"surprise\" value=\"placeholder\"></input>";
    }
}



