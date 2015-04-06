$(document).ready(function(){
        $('.hide').hide();
});

var strDip = $('.diplome');
var strComp = $('.competence');
var strReal = $('.realisation');
var strLoi = $('.loisir');

function genFade(strElem) {
    strElem.fadeToggle("slow");
}


/*$(document).ready(function() {
    var tr;
    for(var i = 0; i < compTabSpe.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + compTabSpe[i].type + "</td>");
        tr.append("<td>" + compTabSpe[i].detail + "</td>");
        $('#competence').append(tr);
    }
}*/

var compTabSpe =[{"type":"Programmation : ","detail":"C++, C, Java, MIPS"},
                 {"type":"Web : ","detail":"HTML5, CSS 3, PHP, Javascript"},
                 {"type":"Bases de données : ","detail":"SQL, PL/SQL"},
                 {"type":"Modélisation : ","detail":"UML, Merise"},
                 {"type":"Logiciels : ","detail":"Code Blocks, IDE Eclipse Java et C++"}];

var compTabSpe =[{"type":"Mathématique : ","detail":"Algèbre linéaire, Cryptographie"},
                 {"type":"Gestion de projet : ","detail":"Méthode PERT, GANTT et méthodes agiles"},
                 {"type":"Economie : ","detail":"Comptabilité générale et analytique"},
                 {"type":"Anglais : ","detail":"Niveau technique"}];

