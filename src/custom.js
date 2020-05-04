$( document ).ready(function() {
    if ($('.actualslider').length>0) {
        $('.actualslider').slider();
        $(".actualslider").on("slide", function(slideEvt) {
            $(".findvalue").val(slideEvt.value);
        });
    }
    var url=window.location.href;
    if(url.indexOf("index")<0){
        var i = localStorage.getItem("indice");
        var arraydeinomi = JSON.parse(localStorage.getItem("arraydeinomi"));
        $(".nomedaindovinare").html(arraydeinomi[i]);
    }
});

function clicktoplay(){
    var arraydeinomi = ["Maestra","Bue","Cane","Simona","Studentessa","Poeta","Scrittore","Padre","Dottoressa","Alunno","Pittrice",
    "La Dentista","Cameriere","Collana","Amicizia","Prete","Poetessa","Volpe maschio","Il cantante","Scrittrice"];
    var risposteesatte=["130","10","10","130","130","10","10","10","130","10","130",
    "130","10","130","130","10","130","10","10","130"];
    var i=0;
    var punteggionomi=0;
    localStorage.setItem("arraydeinomi", JSON.stringify(arraydeinomi));
    localStorage.setItem("risposteesatte", JSON.stringify(risposteesatte));
    localStorage.setItem("punteggionomi", punteggionomi);
    localStorage.setItem("indice", i);
    var audio = document.getElementById("glitter");
    audio.play();
    setTimeout(function(){ $(location).attr('href',"gioco.html"); }, 2000);
}

function rispostaesatta(){
    var punteggionomi = localStorage.getItem("punteggionomi");
    var risposteesatte = JSON.parse(localStorage.getItem("risposteesatte"));
    var arraydeinomi = JSON.parse(localStorage.getItem("arraydeinomi"));
    var i = localStorage.getItem("indice");
    var y=i+1;
    var valoreselezionato= $(".findvalue").val();
    var valorerisposta=risposteesatte[i];
    var ipunteggio=parseInt(punteggionomi);
    if (valorerisposta==130){
        if (valoreselezionato>128) {
            console.log("Corretto");
            ipunteggio++;
            localStorage.setItem("punteggionomi", ipunteggio);
            var inum=parseInt(i);
            inum++;
            console.log(inum);
            localStorage.setItem("indice", inum);
            var audio = document.getElementById("glitter");
            audio.play();
            var i = localStorage.getItem("indice");
            if (inum<20){
                var arraydeinomi = JSON.parse(localStorage.getItem("arraydeinomi"));
                $(".nomedaindovinare").html(arraydeinomi[i]);
            }else{
                setTimeout(function(){ $(location).attr('href',"finale.html"); }, 2000); 
            }
        } else {
            var ipunteggio=parseInt(punteggionomi);
            ipunteggio--;
            localStorage.setItem("punteggionomi", ipunteggio);
            var audio = document.getElementById("error");
            audio.play();
        }
    }
    if (valorerisposta==10){
        if (valoreselezionato<128) {
            console.log("Corretto");
            var inum=parseInt(i);
            inum++;
            console.log(inum);
            ipunteggio++;
            console.log(ipunteggio);
            localStorage.setItem("indice", inum);
            localStorage.setItem("punteggionomi", ipunteggio);
            var audio = document.getElementById("glitter");
            audio.play();
            var i = localStorage.getItem("indice");
            if (inum<20){
                var arraydeinomi = JSON.parse(localStorage.getItem("arraydeinomi"));
                $(".nomedaindovinare").html(arraydeinomi[i]);
            }else{
                setTimeout(function(){ $(location).attr('href',"finale"+".html"); }, 2000); 
            }
        } else {
            var ipunteggio=parseInt(punteggionomi);
            ipunteggio--;
            localStorage.setItem("punteggionomi", ipunteggio);
            var audio = document.getElementById("error");
            audio.play();
        }
    }  
}


function rispostaesattafinale(){
    var i = localStorage.getItem("i");
    var punteggionomi = localStorage.getItem("punteggionomi");
    punteggionomi++;
    i++;
    localStorage.setItem("punteggionomi", punteggionomi); 
    localStorage.setItem("i", i);
    var audio = document.getElementById("glitter");
    console.log(i);
    audio.play();
    setTimeout(function(){ $(location).attr('href',"finale.html"); }, 2000);
}


function rispostasbagliata(){
    var audio = document.getElementById("wrongaudio");
    audio.play();
    var punteggionomi = localStorage.getItem("punteggionomi");
    punteggionomi--;
    localStorage.setItem("punteggionomi", punteggionomi);
}