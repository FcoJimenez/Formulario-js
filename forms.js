$('form').submit(function(event){    
    var userResponses = $(this).serialize()
    //event.preventDefault()                      //detiene el envio para tomar los valores, cambia el contexto
    //console.log(this)                         //muestra el objeto (this) <- form
    console.log(userResponses);                 //la f() serialize extrae la cadena con los name y sus valores
})

$('button').click(function(event){
    event.preventDefault()
    console.log(this)
})
