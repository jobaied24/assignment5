
const task=document.getElementById('task').innerText;
let convertedTask = parseInt(task);

function clickById(id){
document.getElementById(id).addEventListener('click',function(event){
    event.preventDefault();
   alert('Board Updated Successfully')
   this.setAttribute('disabled','true');
    
   let remainTask =--convertedTask;
   document.getElementById('task').innerText=remainTask;
   console.log(remainTask)

})
}


clickById('card1')
clickById('card2')
clickById('card3')
clickById('card4')
clickById('card5')
clickById('card6')