const select=document.querySelector("select"),list=document.querySelector("ul"),h1=document.querySelector("h1");function createCalendar(e,t){list.innerHTML="",h1.textContent=t;for(let t=1;t<=e;t++){const e=document.createElement("li");e.textContent=t,list.appendChild(e)}}select.addEventListener("change",(function(){const e=select.value;let t=31;"February"===e?t=28:"April"!==e&&"June"!==e&&"September"!==e&&"November"!==e||(t=30),createCalendar(t,e)})),createCalendar(31,"January");