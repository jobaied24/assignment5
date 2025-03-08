
const task=document.getElementById('task').innerText;
let convertedTask = parseInt(task);

const checkbox = document.getElementById('checkbox').innerText;
let convertedCheckbox = parseInt(checkbox);


function clickById(id){
document.getElementById(id).addEventListener('click',function(event){
    event.preventDefault();
   alert('Board Updated Successfully')
   this.setAttribute('disabled','true');
    
   let remainTask =--convertedTask;
   document.getElementById('task').innerText=remainTask;
   
   let checkbox = ++convertedCheckbox;
   document.getElementById('checkbox').innerText=checkbox;
   

//    history section
   const history=document.getElementById('historySection');
   const div=document.createElement('div');
   div.classList.add("bg-blue-100","m-3","p-2","rounded-md")

   const card=this.closest("div.bg-blue-100");
   const cardTitle=card.querySelector('h2').innerText;

   const date = new Date().toLocaleTimeString();
   div.innerHTML=` 
   <h1>You have completed the task</h1> ${cardTitle} at ${date}
   `
   history.appendChild(div);
})
}


// clickById('card1')
// clickById('card2')
// clickById('card3')
// clickById('card4')
// clickById('card5')
// clickById('card6')

['card1','card2','card3','card4','card5','card6'].forEach(clickById);