
const heading = document.getElementById("heading");
const Body_Of_Row = document.getElementById("body");



for(let i = 65; i<=90;i++)
{
    const char = String.fromCharCode(i);
    let headcell = document.createElement("div");
    headcell.innerText = char;
    heading.appendChild(headcell);
    }



function call100time(serialcount){

    const Div_Of_Row = document.createElement("div");
    Div_Of_Row.className="row";
    for(let i = 64; i<=90;i++)
{  
    if(i==64){
        let serialNo = document.createElement("b");
        serialNo.innerText = serialcount;
        Div_Of_Row.appendChild(serialNo);

    }
    else 
    {
        let RowCell = document.createElement("div");
        RowCell.contentEditable = "true";
        // RowCell.addEventListener("click" , printId);
        RowCell.id = `${String.fromCharCode(i)}${serialcount}`;
        Div_Of_Row.appendChild(RowCell);
        RowCell.addEventListener("click" , onCellFocus);

    }
}
Body_Of_Row.appendChild(Div_Of_Row);


}

for(let i = 1; i<=100; i++){
    call100time(i);
}


