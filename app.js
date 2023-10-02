let addBtn = document.getElementById('addBtn')
let inputField = document.getElementById('inputValue')
let listCon = document.getElementById('conList')

addBtn.addEventListener('click', ()=>{
   if(inputField.value === ""){
    alert("input is empty")
   }
   else{
     //create li element
        let displayList = document.createElement('li')
        // display input field value 
        displayList.innerHTML = inputField.value
        // append child to list container
        listCon.appendChild(displayList)
        //clear input field
        inputField.value = ''
        // display line through on element click
        displayList.addEventListener('click', ()=>{
            displayList.style.textDecoration = "line-through"
        })
        // remove element on double click
        displayList.addEventListener('dblclick', ()=>{
            listCon.removeChild(displayList)
        })
   }




})

displayDate = ()=>{
    let date  = new Date()
    date = date.toString().split(" ")
    document.querySelector('#date').innerHTML = `${date[1]}-${date[2]}-${date[1]}`
}
window.onload = ()=>{
    displayDate()
}
