let rows = 3, cols = 4;
let matrix_div = document.getElementById("matrix-elements");
let matrix_container = document.getElementById('matrix-container')

let el_width = 38
let el_height = 36

//each el is 30px so we should just increase width by 30

window.addEventListener('load', init())

function init(){
    console.log("INIT")
    matrix_container.style.width = `${80 + cols * el_width}px`
    matrix_container.style.height = `${50 + rows * el_height}px`

    for(let i = 1; i <= rows; i++){

        matrix_div.innerHTML += `<div id=row${i} class="row"> </div>`;
        let row = document.getElementById(`row${i}`);
        for(let j = 1; j <= cols; j++){
            row.innerHTML += `<input class="el" name=\"el${i}${j}\" value=\"0\"></input>`;
        }
    }


    // for(let i = 1; i <= rows; i++){
    //     let row = document.getElementById(`row${i}`);
    //     row.innerHTML += `<input class="el" name=\"el${i}${cols}\"value=\"0\"></input>`;
    // }
}

var form = document.getElementById("matrix-form");
form.addEventListener('submit', e => {
    console.log("submission works")
    e.preventDefault()
    // build up formdata
    const formData = new FormData(form);
    let list = []
    for(let input of formData){
        console.log(input)
        list.push(input[1])
    }
    formData.append('rows', rows)
    formData.append('cols', cols)
    const request = new XMLHttpRequest();
    request.open("POST", "/");

    // update text on success
    request.addEventListener('load', function( event ) {
    //   window.location.replace('/')
        console.log('this.responseText:', request.responseText);
        console.log('this.status:', request.status);
        let matrix_display = document.getElementById("display-matrix")
        matrix_display.innerHTML = JSON.parse(request.response)["matrix"]

        // console.log("first request")
        // let thing = document.getElementById("display-matrix")
        // thing.innerHTML += "slihalsdhalsdhjalsdkjhsaldkj"
        // getMatrixData();
    });

    // // Do whatever needed on error
    request.addEventListener('error', function( event ) {
      console.log('failed request..')
    });   
    
    request.send(formData);
})

// function getMatrixData(){
//     const second_request = new XMLHttpRequest();
//     second_request.open("GET", "/matrix-data");
//     second_request.addEventListener('load', function( event ) {
//             console.log('this.responseText:', second_request.responseText);
//             // console.log('this.status:', request.status);
//             console.log("second request")
//             let thing = document.getElementById("display-matrix")
//             thing.innerHTML += "slihalsdhalsdhjalsdkjhsaldkj"
//         });
//     second_request.send();
// }

function addRow(incr){
    if(cols < 1){return}
    // console.log("addRow")
    // matrix_div.innerHTML = "";
    console.log(incr)

    if(incr > 0){
        rows+=incr;
        matrix_div.innerHTML += `<div id=row${rows} class="row"> </div>`;
        let row = document.getElementById(`row${rows}`);
        for(let j = 1; j <= cols; j++){
            row.innerHTML += `<input class="el" name=\"el${rows}${j}\" value=\"0\"></input>`;
        }
    } else if(incr < 0){
        if(rows == 0) { return }
        console.log(matrix_div.innerHTML)
        matrix_div.removeChild(document.getElementById(`row${rows}`))
        rows+=incr;
        // let row = document.getElementById(`row${rows}`);
        // for(let j = 1; j <= cols; j++){
        //     row.innerHTML += `<input name=\"el${rows}${j}\" value=\"0\"></input>`;
        // }
    }
    matrix_container.style.height = `${50 + rows * el_height}px`
}


function addCol(incr){
    if(incr > 0){
        cols+=incr;
        for(let i = 1; i <= rows; i++){
            let row = document.getElementById(`row${i}`);
            row.innerHTML += `<input class="el" name=\"el${i}${cols}\"value=\"0\"></input>`;
        }
    } else if(incr < 0){
        if(cols == 0){ return }
        console.log("as")
        for(let i = 1; i <= rows; i++){
            let row = document.getElementById(`row${i}`);
            console.log(row)
            console.log(row.lastChild)
            row.removeChild(row.lastElementChild)
            console.log(row)
            // row.innerHTML += `<input name=\"el${i}${cols}\"value=\"0\"></input>`;
        }
        cols+=incr;
    }
    matrix_container.style.width = `${80 + cols * el_width}px`
}



