//your JS code here. If required.
const gridcontainer=document.querySelector(".grid");
const form=document.querySelector("#form");
let previousSelectedElement=null;
form.addEventListener("submit",function(event){
    event.preventDefault();
    let cellid=form.inputId.value;
    let selectedcolor=form.color.value;
    let cell=document.getElementById(cellId);
    cell.style.backgroundColor=selectedcolor;
    if(previousSelectedElement){
        previousSelectedElement.style.backgroundColor="white";
    }
    previousSelectedElement=cell;
});
for(let i=1;i<=9;i++){
    const gridItem=document.createElement("div");
    gridItem.id=i;
    gridItem.innerText=i;
    gridItem.className="grid-item";
    gridcontainer.appendChild(gridItem);
}