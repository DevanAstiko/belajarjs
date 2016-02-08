function sembunyi(){
    var x = confirm('ini sembunyi');
    alert (x);
    if(x===true){
        alert($('#header').html());
        $('#tombol').html('apa deh');
     $('#header').css('color','red');  
     alert($('#tombol').attr('ae'));
        $('#header').hide('slow');
        
        $('#hide').delay(300).show('slow');
     
    }
}

