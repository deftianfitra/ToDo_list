$(document).ready(function() {

    $("#add").click(function(){
        let nilaiInput = $("#input").val()
        if (nilaiInput === "") {
            alert("Anda belum memasukkan task!")
        } else if (nilaiInput != "") {
            $("#list").append(`<li><span>${nilaiInput}</span><button><i class="fa-regular fa-trash-can fa-xl"></i></button></li>`);
        }
        $('#input').val('');
    });

    $('#list').on('click', 'li button', function(){
        $(this).parent('li').remove();
    }) 
    
    $('#list').on('click', 'span', function(){
        $(this).toggleClass('garis');
    }) 

});