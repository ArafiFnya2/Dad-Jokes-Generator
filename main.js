async function generateJoke() {
    const config ={
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch ('https://icanhazdadjoke.com/', config)
    const data = await res.json()  
    
    console.log(data.joke)
    document.getElementById('Joke').innerText=data.joke

}

document.getElementById('Gen').addEventListener('click', generateJoke)

function copyText() {
    const text = document.querySelector(".Joke").innerText;
    navigator.clipboard.writeText(text).then(() => {
    });
}


generateJoke()
