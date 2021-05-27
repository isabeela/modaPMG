function raspar (documento) {
    var destaque = document.createElement('div');
    var h1 = document.createElement('h1')
    var verDestaque = documento.querySelectorAll(".item")
       verDestaque.forEach(div => {  

       const indesejavel = documento.querySelectorAll(".post-cat, .post-author, .read-more, .views, .comments, .date")

       for (let t = 0; t < indesejavel.length; t++) {
           indesejavel[t].remove()
       }



       const principal =  verDestaque[0]
       principal.setAttribute('class','principal')
       principal.style.backgroundColor = "red"
       principal.style.width = "60%"
       principal.style.textAlign = "justify"

       for (let i = 4; i < verDestaque.length; i++) {
           verDestaque[i].style.display = "none"
       }


        h1.innerHTML =  "DESTAQUES"

        destaque.appendChild(div)
        div.parentNode.insertBefore(h1, div)
        
    });

    document.body.appendChild(destaque);
}


function destaques () {
    fetch('https://cors-anywhere.herokuapp.com/https://mixdeseries.com.br/?s=friends')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        raspar(documento);
    })
    .catch(e => document.write(e));
}

window.onload = destaques 