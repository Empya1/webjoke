function addCategory() {
    var baseurl = "https://v2.jokeapi.dev/joke/";
    var category = [];
    var userchoice = document.querySelectorAll(".catg");
    
    for (choice of userchoice) {
        if (choice.checked==false) {
            category.push(choice.id);
        };
    };
    
    if (category.length >= 7 || category.length<=0) {
        return "https://v2.jokeapi.dev/joke/Any"
    }else {
        return "https://v2.jokeapi.dev/joke/" + 
        category.join(",")
    };
};

function getUrl(upc) {
        var single = document.getElementById("single");
        var twopart = document.getElementById("twopart");
                
        if (single.checked==true &&  twopart.checked == false) {
            return upc +"?"+"type=single"
        }else if (single.checked==false && twopart.checked == true){
            return upc +"?" + "type=twopart"
        }else{
            return upc
        };
        
};

function getJoke(custom_url){
    var btn = $("#generate");
    var btnn = document.querySelector(".disableonreq")
    var joke_setup = $("#jokesetup");
    var delivery = $("#delivery");
    var category = $("#category");
    var url = "https://v2.jokeapi.dev/joke/Any";
    var spinner = $("#spin");
    spinner.addClass("spinner-border spinner-border-sm");
    btnn.disabled = true;
        
        
    $.ajax({
        url: custom_url,
        type:"GET",
        
        success: function (data, txt, xhr){
                    var response = xhr.responseText;
                    joke_setup.text(response+"")
                    var jsondata = parsetxt(response+"");
                    category.text("category : " + jsondata.category+"")
                
                    if (jsondata.type == "twopart") {
                        joke_setup.show(); joke_setup.text(jsondata.setup);
                        delivery.show();
                        delivery.text(jsondata.delivery)
                    }else{
                        joke_setup.text(jsondata.joke);
                        delivery.hide()
                    };},
                    
        error: function (xhr, status, error){
            //console.log(xhr.responseText+"")
            category.text("Failed to get joke");
            joke_setup.hide();
            delivery.hide()},
            
        complete:function(){
            btnn.disabled = false
            spinner.removeClass("spinner-border spinner-border-sm")
            }
        });
    };
    




function parsetxt(json){
    jsondata = JSON.parse(json);
    return jsondata
};


function RetrieveJoke() {
    var urlwithcategory = addCategory()
    var urlwithjoketype = getUrl(urlwithcategory)
    //finally
    //console.log(urlwithjoketype)
    getJoke(urlwithjoketype)
};




$(document).ready(function(){
    
   //console.log(addCategory())
    
});

