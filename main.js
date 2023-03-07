// function comment 
$(document).ready(function(){
    $('#comment').click(function(){
        var input = $('#input').val()
        $('.box').append(input+'<br>')
        $('#input').val(' ')
        $(".boxcontainer").slideup()
    })
    $('#comment').click(function(){
        $('input').val('')
    })
    $('#comment').click(function(){
        $('.box').text('')
        $(".boxcontainer").slideDown()
    })
    // function cancel 
    $('#cancel').click(function(){
        location.reload(true)
    })
})

// second function 

var characters=[{name: 'Robin' , link:'/Robin.html'},{name:'s', link :'/starfire.html'},{name:'Cyborg' , link: '/Cyborg.html'}, {name:'Raven', link :'/Raven.html'}, {name: 'Beast' , link: '/Beast.html'},{name:"blackfire",link:"/backfire.html"},{name:"misterX",link:"/misterX.html"},{name:"slade",link:"/slade.html"},{name:"terra",link:"/terra.html"},{name:"trigon",link:"/trigon.html"}]
$(document).ready(function(){
    $('#Search').click(function(){
        var input1 = $('#input1').val()
        for(var i=0 ; i<characters.length; i++){
            if(input1 === characters[i].name){
                console.log(input1)
                // document.getElementById('#Search')
                var hello=characters[i].link;
                console.log(hello);
                window.open(hello)
            }
           
        }
    })
})


    