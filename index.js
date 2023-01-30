
$(document).ready(function () {


 $("#list-items").html(localStorage.getItem("Listofitems"))

 //funcion=agarrar texto y subirlo a la pagina/lista

 $(".add-items").click(function (i) {
 i.preventDefault();

var item = $("#todo-list-item").val();


if (item) {

$("#list-items").append("<li><input type='checkbox'class='checkbox'/>"+item+"<a class='delete'>x</a><hr></li>")
}
localStorage.setItem("Listofitems",$("#list-items").html());


$("#todo-list-item").val("");

 
        });

 
 //animasion para slidear el elemento de la lista al clik


 //que se quede la task "checked"

 $(document).on("change",".checkbox", function() {
    if ($(this).attr("checked")) {
$(this).removeAttr("checked")
    }else{
$(this).attr("checked","checked")
    }


//marca que la task se complete y guardate

 $(this).parent().toggleClass("completed")
 localStorage.setItem("Listofitems",$("#list-items").html()); 
 });

//Cuando le des click a la X borrate y guardate

$(document).on("click",".delete", function(){   
$(this).parent().remove()
localStorage.setItem("Listofitems",$("#list-items").html());
});

});
