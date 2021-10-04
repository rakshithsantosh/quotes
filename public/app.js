
let quote = document.getElementById("main-quote");
let person = document.getElementById("said-by");
let refbtn = document.getElementById("refbtn");
let ani = document.getElementById("animeid");



function getdata (){

    axios.get("https://animechan.vercel.app/api/random")
    .then(function(response){
        console.log(response);
        quote.innerText=response.data.quote;
        ani.innerText=response.data.anime;
        if(response.data.quote.length>132){
            quote.style.fontSize="3em";
        }
        person.innerText=response.data.character;
        
    });
}

refbtn.onclick = getdata


