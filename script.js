
const myJokes = document.getElementById("badjokes");
const getJokes = document.getElementById("getJokes");
const myapi = "https://icanhazdadjoke.com/";
 
const myNewJokes = () => {
    fetch(myapi, {
        headers: {
            Accept: "application/json",
        },
    }).then((res) => {
        return res.json();
    }).then((myJoke) => {
        myJokes.textContent = myJoke.joke;
       const storedData =  localStorage.setItem("Jokes", JSON.stringify(myJoke.joke));
       return storedData;
    }).catch((error) => {
        console.log(error);
    })
}


getJokes.addEventListener("click", myNewJokes);
 
