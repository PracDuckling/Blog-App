const btn = document.getElementById('click');
const itext = 'Blog App';
let toggle = false;
btn.addEventListener('click', ()=>{
    if(toggle)
        document.querySelector("h1").textContent = "This is an app";
    else 
        document.querySelector("h1").textContent = itext;
        
    toggle = !toggle;
});