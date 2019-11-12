$(document).ready(function(){
 var createChar=function(charData){
     var charel=$('#template-element').prop('outerHTML');
     $.map(charData, function(el,i)){
       newHTML = charel.replace('id="template-element"',"");
       newHTML = newHTML.replace("%char-img-scr",el.image);
       newHTML =newHTML.replace("%char-modal-id",i);
       $("#characters").append(newHTML);
     }

     $("#template-element").remove();
     for (el of $(".portfolio .portfolio-item .portfolio-item-caption")) {
        hoverClr = "rgba(" + Math.floor(Math.random() * 256) + "," +
       Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) +
       ",0.9)";
        el.style.backgroundColor = hoverClr;
        }

        var createModal = function (charData) {
            //Funkcija prihavata charData koji ćemo prikupiti sa interneta preko APIa
            //Prvo ćemo pokupiti naš templejt iz index.html-a i pretvoriti ga u
           string
            var charModal = $('.modal-template').prop('outerHTML');
            let fa = ["fas fa-brain",
            "fas fa-dna",
            "fas fa-globe",
            "fas fa-atom",
            "fas fa-biohazard",
            "fas fa-meteor",
            "fas fa-moon",
            "fas fa-radiation",
            "fas fa-rocket",
            "fas fa-satellite-dish",
            "fas fa-user-astronaut"]
            var newHtml;
            
            //koriščenjem map funkcije na svaki objekat u charData primenićemo
          // funkciju, kojoj prosleđujemo element el do kog je map stigao, kako i njegov index
          // i
            $.map(charData, function (el, i) {
                var newHTML, hoverClr
            //kreiramo novi HTML string u kojem ćemo zameniti placeholder
          // elemente sa pravim vrednostima
            newHtml = charModal.replace("%name%", el.name);
            newHtml = newHtml.replace("%gender%", el.gender);
            newHtml = newHtml.replace("%origin-name%", el.origin.name);
            newHtml = newHtml.replace("%status%", el.status);
            newHtml = newHtml.replace("%date-creation%", el.created);
            newHtml = newHtml.replace("%char-img-scr%", el.image);
            newHtml = newHtml.replace("%char-modal-id%", i);
            newHtml = newHtml.replace("%fa-icon%", fa[Math.floor(Math.random() *
           fa.length)]);
            //dodajemo taj element na kraj diva id ="characters"
            $("#modals").append(newHtml);
            });
            //Posto smo dodali sve elemente, templejt brišemo
            $('.modal-template').remove();
            }
           
 }
});