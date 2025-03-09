
const task=document.getElementById('task').innerText;
let convertedTask = parseInt(task);

const checkbox = document.getElementById('checkbox').innerText;
let convertedCheckbox = parseInt(checkbox);

const history=document.getElementById('historySection');

let completeTask=0;
let totalTask = 6;


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
   const div=document.createElement('div');
   div.classList.add("bg-blue-100","m-3","p-2","rounded-md","history-entires")

   const card=this.closest("div.bg-blue-100");
   const cardTitle=card.querySelector('h2').innerText;

   const date = new Date().toLocaleTimeString();
   div.innerHTML=` 
   <h1>You have completed the task</h1> ${cardTitle} at ${date}
   `
   history.appendChild(div);



//    completing alert
     completeTask++;
     if(completeTask==totalTask){
        alert('Congrates!! You have completed all the current task');
     }
    
})
}

// clickById('card1')
// clickById('card2')
// clickById('card3')
// clickById('card4')
// clickById('card5')
// clickById('card6')

['card1','card2','card3','card4','card5','card6'].forEach(clickById);



// clear hissk))tory
document.getElementById('history-btn').addEventListener('click',function(event){
    event.preventDefault();
    const dltHistory=document.querySelectorAll('.history-entires');
    dltHistory.forEach(function(div){
        div.remove();
    })
})




// discover section
document.getElementById('discover').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href='./discover.html';
})


// theme Change
  function getColorByClick(){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()* 256);

        const color= `rgb(${r}, ${g}, ${b})`;
        return color;
          
      }

      document.getElementById('theme').addEventListener('click',function(){
          const bgColor=  getColorByClick();
        document.body.style.backgroundColor=bgColor;
      })


    //   date section
   function newDate(){
    const currentDate = new Date();
    const convertedDate = {
        weekday:'short',
        month:'short',
        day:'numeric',
        year:'numeric'
    };

    return currentDate.toLocaleDateString('en-US',convertedDate);
   }


   
   const dateSection =document.getElementById('date').innerText=newDate(

   );




// completing alert

