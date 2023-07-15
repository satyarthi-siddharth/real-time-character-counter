const descEl = document.getElementById("desc");
const posCountEl = document.getElementById("pos-count");
const revCountEl = document.getElementById("rev-count");
let count = 0;
updateCounter();
descEl.addEventListener("keyup",()=>{
    // count = count + 1;

    // if(count<=50){
    //     posCountEl.innerText = count;
    //     revCountEl.innerText = 50 - count;
    // }
    
    updateCounter();
    // console.log("hi");
});

descEl.addEventListener("keydown",()=>{
    updateCounter();
    // count = count + 1;
    // if(count<=50){
    //     posCountEl.innerText = count;
    //     revCountEl.innerText = 50 - count;
    // }
})

function updateCounter(){
    /* 1st Method */
    // count = count + 1;
    // if(count<=50){
    //     posCountEl.innerText = count;
    //     revCountEl.innerText = 50 - count;
    // }
    /* 2nd Method */
    posCountEl.innerText = descEl.value.length;
    revCountEl.innerText = descEl.getAttribute("maxlength") - descEl.value.length;
}