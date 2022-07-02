$(document).ready(function(){
    $("#click11").click(function(){
        $("#cart").hide()
    })
    $("#click12").click(function(){
        $("#cart").show()
    })

})
function boldWords(n){
    var text=document.querySelectorAll('.word');
    if(n==1){
        text[0].style.color="black"
        text[1].style.color="black"
        text[2].style.color="black"

    }
    else{
        text[0].style.color="grey"
        text[1].style.color="grey"
        text[2].style.color="grey"
    }
    
}