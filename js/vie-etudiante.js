document.getElementById("flecheGauche").addEventListener("click",function() { defiler(-1); });
document.getElementById("flecheDroite").addEventListener("click",function() { defiler(1); });
var counter = 1;
// mettre les lignes devenements dans la variable php nb-evenements
var nb_evenements = 4;// "<?php echo $ nb_evenements;?>"
//var images = ["medias/vie-etudiante/party-tim.jpg", "medias/vie-etudiante/tim-talk.jpg", "medias/vie-etudiante/noel-tim.jpg", "medias/vie-etudiante/tim-arcade.JPG"];
//var titres = ["Party TIM XX", "TIM-Talk", "TIM-Noel", "TIM-Arcade"];
//var informations = ["Pour célébrer les 20 ans de l’éxistence du TIM, le département a organisé une fête pour réunir les étudiant.e.s, les ancien.ne.s et les professeurs", "Présentation aux étudiants style TED-talk", "Pour la fête de Noël, les étudiant.e.s ont organisé une fête thématique dans le département", "Pour cette fête, les étudiant.e.s ont organisé une fête avec le thème arcade rétro"];

function defiler(sens){
    if(sens==1){
        counter++;
        if (counter > nb_evenements) {
            counter = 1
        }
    }
    else if(sens==-1){
        counter--;
        if (counter < 1) {
            counter = nb_evenements
        }
    }
    //document.getElementById ("image_ve").src = images[counter];
    //document.getElementById ("titre_ve").innerHTML = titres[counter];
    //document.getElementById ("information_ve").innerHTML = informations[counter];
    //alert ("counter="+counter);
    var article= document.getElementById (counter);
    //article.style.display="block";
    document.getElementById ("ipremiereimage").src = article.childNodes.item(1).src;//images[counter];
    document.getElementById ("titre_ve").innerHTML = article.childNodes.item(3).innerHTML;//article.querySelector(".titre").innerHTML; 
    document.getElementById ("information_ve").innerHTML = article.childNodes.item(5).innerHTML;//article.querySelector(".desc").innerHTML;
    /*for (i=1; i<=nb_evenements; i++){
        if (i!=counter){
            //document.getElementById (i).style.display="none";

        }
    
    }*/
}
