let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
console.log(countEl)
let count =0
function increment(){

count +=1
countEl.textContent=count

}


function save(){
let counterStr=count+ " - "
saveEl.textContent+=counterStr
countEl.textContent=0
count=0

}


