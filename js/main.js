let noti = document.getElementById('news');

function  Api_con_axios(){
    axios({
        method: 'GET',
        url: 'https://gnews.io/api/v4/search?q=animal&country=es&apikey=d5db65676f8d2a1ad2bacf863839a8f9'
    }).then(res => {
        let noticias = res.data.articles;
        console.log(noticias);
        noticias.map((elemento)=>{
            let div = document.createElement('div');
            div.innerHTML = `<br>
            <img style= 'max-width:600px'; src=${elemento.image}
            <br>
            <h1>${elemento.title}</h1>
            <h3>${elemento.description}</h3>
            <h3>${elemento.content}</h3>           
            <h3>${elemento.publishedAt}</h3>
            <h3>${elemento.source.name}</h3>
            <a href=${elemento.url}>Seguir leyendo</a>`;
        
            noti.appendChild(div);
        })
    })
}


Api_con_axios();

