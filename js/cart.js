// cart page 

let mySection=document.createElement("section")
mySection.setAttribute("id","cart")
mySection.className="section-p1";


let myTable=document.createElement("table")
myTable.setAttribute("width","100%")

let tHead=document.createElement("thead")
let tRow=document.createElement("tr")
mySection.appendChild(myTable)
myTable.appendChild(tHead)
tHead.appendChild(tRow)

document.body.appendChild(mySection)

console.log(mySection)