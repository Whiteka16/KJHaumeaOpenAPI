fetch(`https://api.artic.edu/api/v1/artworks/search?q=animals`
)
    .then((response) => {
        if(!response.ok){
            throw new Error("Request Failed");
        }
        return response.json();
    })
    .then((data) => {
        const return1 = JSON.parse(data);
        console.log(return1);
    })