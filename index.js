const btn = document.getElementById('click');
const itext = btn.textContent;
let toggle = false;
btn.addEventListener('click', ()=>{
    if(toggle)
        document.querySelector("h1").textContent = "This is an app bro";
    else 
        document.querySelector("h1").textContent = itext;
        
    toggle = !toggle;
});