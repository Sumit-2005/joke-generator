const base_URL = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single"

let btn = document.querySelector(".btn");
let msg = document.querySelector(".msg2");

btn.addEventListener("click", async () => {
    let response = await fetch(base_URL);
    if(response.status === 200){
        let data = await response.json();
        msg.innerText = data.joke
    } else {
        console.log("Error while fetching Joke");
        msg.innerText = "Error while fetching Joke";
    }
})