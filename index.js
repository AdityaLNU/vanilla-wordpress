
const injectData = (data) =>{
    let obj = document.getElementById('data');
    data.map((e,key) => {
        let d = document.createElement("div");
        d.innerHTML = `${e.title} <em>by ${e.author.name}</em> ${e.content}`
        obj.appendChild(d);
    }
    )
    
}
const fetchData = () =>{
    let data = null;
    
    fetch('https://public-api.wordpress.com/rest/v1.1/sites/adityadotdev.wordpress.com/posts').then(function (response) {
            return response.json();
        }).then(res =>{
            console.log('success!', res.posts);
            data = res;
            injectData(data.posts);
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
}

fetchData();

