let btn_no = document.getElementById("btn_no")
let btn_yes = document.getElementById("btn_yes")
let block_p = document.getElementById("block_p")
let block_audio = document.getElementById("block_audio")
let audio = document.getElementById("audio")
let h1 = document.getElementById("h1")

btn_no.addEventListener("click", function(){
    btn_no.innerHTML = "<b>YES</b>"
    block_audio.style.display = "flex" ;
    h1.style.marginTop = "80px";
})

btn_yes.addEventListener("click", function(){
    block_audio.style.display = "flex" ;
    h1.style.marginTop = "80px";
})


audio.addEventListener("play", function(){
    block_p.style.display = "flex" ;
})
