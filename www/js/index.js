window.localStorage.setItem( "pen","blue" );
window.localStorage.setItem( "pen","yellow" );
window.localStorage.setItem("book","red");
//window.localStorage.removeItem("pen");
var pen = window.localStorage.getItem("pen");
var book=window.localStorage.getItem("book");
var x= window.localStorage.length;
//window.alert(x);


$( document ).ready(function() {
    /*$("#book").text("book's colour:"+book);
    $("#pen").text("pen's colour:"+pen);
    $("#number").text("stored numbers: "+x);*/
    
    var myObj = { "name":"Fudge minis", "calories":"116kcal","fat":"4.2g","saturates":"2.3g","sugars":"16g","salt":"0.08g" };
    
    var myJSON = JSON.stringify(myObj);
    
    window.localStorage.setItem("chocbar", myJSON);
    
    var getChoc = window.localStorage.getItem("chocbar");

    var chocJSON = JSON.parse(getChoc);
    $("#name").text("name:"+chocJSON.name);
    $("#fat").text("fat:"+chocJSON.fat);
    $("#calories").text("fat:"+chocJSON.calories);
    $("#saturates").text("saturates:"+chocJSON.saturates);
    $("#sugar").text("sugars:"+chocJSON.sugars);
    $("#salt").text("salt:"+chocJSON.salt);

});

