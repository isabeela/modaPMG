document.querySelector("#botao").addEventListener('click',  () => {

    window.scrollTo( 550, 550);


    if  (document.querySelector('.qntdErros')) {
        document.querySelector('.qntdErros').remove()
    }
    
    if (document.querySelector('.notificacao')) {
        document.querySelector('.notificacao').remove()
    }  


    const inputNome = document.querySelector('#nome')
    const nome = inputNome.value
    const inputEmail = document.querySelector('#email')
    const email = inputEmail.value

    const inputDDD = document.querySelector("#DDD")
    const inputPrimeiros = document.querySelector("#primeirosDigitos")
    const inputUltimo = document.querySelector("#ultimosDigitos")

    const DDD = inputDDD.value
    const primeiros = inputPrimeiros.value
    const ultimos = inputUltimo.value

    const telefone = document.querySelector('fieldset')

    const form = document.querySelector('form')

    var notificacao = document.createElement('div')
    notificacao.classList.add('notificacao')
    notificacao.style.border = " 1px solid red"
    notificacao.style.padding= "5px"
    notificacao.style.textAlign = "justify"
  

    var qntdErros = document.createElement('p')
    qntdErros.classList.add('qntdErros')
    qntdErros.style.textAlign = "center"
    qntdErros.style.fontWeight = "bold"
    qntdErros.style.fontSize = "1.2rem"


    var erro = 0
   
    
    if (nome == "" || nome == "null") {
        erro += 1
        notificacao.innerHTML =   `Campo <a href = #nome class = "a-form" autofocus> nome </a> em branco `
        form.parentNode.insertBefore(notificacao, form)
        inputNome.style.border = "3px solid red"
       
        
    }  else if (isNaN(nome)) {

        inputNome.style.border = "1px solid #823E2B";
       
    }  else  {
        erro += 1
        notificacao.innerHTML =  `O campo <a href = "#nome" class = "a-form"> nome </a> deve conter APENAS letras`
        form.parentNode.insertBefore(notificacao, form)
        inputNome.style.border = "3px solid red"
        
    }


    

    if(email == "" || email == "null") {
        erro += 1
        notificacao.innerHTML +=  `<br> Campo <a href = "#email" class = "a-form"> email </a> em branco  `
        form.parentNode.insertBefore(notificacao, form)
        inputEmail.style.border = "3px solid red"
       
    }  else if(email.indexOf('@')==-1 ) {
        erro += 1
        notificacao.innerHTML +=  `<br> Campo <a href = "#email" class = "a-form"> email </a> deve conter @ `
        form.parentNode.insertBefore(notificacao, form)
        inputEmail.style.border = "3px solid red"
       
    } else if (email.indexOf('.')==-1) {
        erro += 1
        notificacao.innerHTML +=  `<br> Campo <a href = "#email" class = "a-form"> email </a> deve conter "." `
        form.parentNode.insertBefore(notificacao, form)
        inputEmail.style.border = "3px solid red"
        
    } else {
        inputEmail.style.border = "1px solid #823E2B";
    }




    if (DDD == "" && primeiros == "" && ultimos == "" ) {
        erro += 3
        notificacao.innerHTML += `<br> Campo <a href = "#DDD" class = "a-form"> telefone DDD </a>  em branco  `
        notificacao.innerHTML += ` <br> Campo <a href = "#primeirosDigitos" class = "a-form">  telefone primeiros digitos </a>  em branco `
        notificacao.innerHTML += ` <br> Campo <a href = "#ultimosDigitos" class = "a-form"> telefone ultimos digitos </a>  em branco `
        form.parentNode.insertBefore(notificacao, form) 
        inputDDD.style.border = "3px solid red";
        inputPrimeiros.style.border = "3px solid red";
        inputUltimo.style.border = "3px solid red";           

    } else if ( primeiros == "" && ultimos == "" ){
        erro += 2
        notificacao.innerHTML += ` <br> Campo <a href = "#primeirosDigitos" class = "a-form">  telefone primeiros digitos </a>  em branco `
        notificacao.innerHTML += ` <br> Campo <a href = "#ultimosDigitos" class = "a-form"> telefone ultimos digitos </a>  em branco `
        form.parentNode.insertBefore(notificacao, form) 
        inputDDD.style.border = "1px solid #823E2B";
        inputPrimeiros.style.border = "3px solid red";
        inputUltimo.style.border = "3px solid red";      

    } else if (  DDD == "" &&  primeiros == "" ){ 
        erro += 2
        notificacao.innerHTML += `<br> Campo <a href = "#DDD" class = "a-form"> telefone DDD </a>  em branco  `
        notificacao.innerHTML += ` <br> Campo <a href = "#primeirosDigitos" class = "a-form">  telefone primeiros digitos </a>  em branco `
       
        form.parentNode.insertBefore(notificacao, form) 
        inputDDD.style.border = "3px solid red";
        inputPrimeiros.style.border = "3px solid red";
        inputUltimo.style.border = "1px solid #823E2B";  

    }  else if (  DDD == "" && ultimos == "" ){ 
        erro += 2
        notificacao.innerHTML += `<br> Campo <a href = "#DDD" class = "a-form"> telefone DDD </a>  em branco  `
        notificacao.innerHTML += ` <br> Campo <a href = "#ultimosDigitos" class = "a-form"> telefone ultimos digitos </a>  em branco `
       
        form.parentNode.insertBefore(notificacao, form) 
        inputDDD.style.border = "3px solid red";
        inputPrimeiros.style.border = "1px solid #823E2B";
        inputUltimo.style.border = "3px solid red";  

    } else if (DDD == "") {

        erro += 1
        notificacao.innerHTML += `<br> Campo <a href = "#DDD" class = "a-form"> telefone DDD </a>  em branco `
        form.parentNode.insertBefore(notificacao, form) 
        inputDDD.style.border = "3px solid red";
        inputPrimeiros.style.border = "1px solid #823E2B";
        inputUltimo.style.border = "1px solid #823E2B";  

    }
    else if (primeiros == "") {

        erro += 1
        notificacao.innerHTML += ` <br> Campo <a href = "#primeirosDigitos" class = "a-form">  telefone primeiros digitos </a>  em branco `
        form.parentNode.insertBefore(notificacao, form) 
        inputDDD.style.border = "1px solid #823E2B";
        inputPrimeiros.style.border = "3px solid red";
        inputUltimo.style.border = "1px solid #823E2B";  
    }
    else if (ultimos == "") {

        erro += 1
        notificacao.innerHTML += ` <br> Campo <a href = "#ultimosDigitos" class = "a-form"> telefone ultimos digitos </a>  em branco `
        form.parentNode.insertBefore(notificacao, form) 
        inputDDD.style.border = "1px solid #823E2B";
        inputPrimeiros.style.border = "1px solid #823E2B";
        inputUltimo.style.border = "3px solid red";  

    } else  {

        inputDDD.style.border = "1px solid #823E2B";
        inputPrimeiros.style.border = "1px solid #823E2B";
        inputUltimo.style.border = "1px solid #823E2B";  
    }

    qntdErros.innerHTML = `Erro(s): ${erro}`
    notificacao.parentNode.insertBefore(qntdErros, notificacao)

});

  