$('form').submit(function(event){    
    var userResponses = $(this).serialize()
    console.log(userResponses);
})

$('button').click(function(event){
    event.preventDefault()
    console.log(this)
})