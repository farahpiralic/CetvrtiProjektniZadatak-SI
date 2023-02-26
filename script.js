function fetchJokes(){
    fetch('https://icanhazdadjoke.com/', {
        headers:{
            'Accept':'application/json'
        }
    }).then(response =>{
        if(!response.ok){
            throw Error("error occured");
        }
        return response.json();
    }).then(data => displayData(data))
    .catch(error=>{console.log(error)});
}

let fetchedData;

function displayData(data){
    fetchedData=data.joke;
    console.log(fetchedData);
    document.getElementById("joke").innerText=fetchedData;
}


fetchJokes();