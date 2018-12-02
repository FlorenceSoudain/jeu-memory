//this array contain the images
var cartes = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

var classCartes = document.getElementById('jeu').getElementsByClassName('cartes');

//hide the page that appear when the user clear the game
document.getElementById('resultat').style.display = "none";

//the cards state. When it's 0, the cards are verso
var etatCartes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//this array contain the card reversed by the user
var retourner = [];

//this variable contain the number of pair
var paires = 0;

//this loop will do the function controleJeu when the user click a card
for (var i = 0; i < classCartes.length; i++) {
    classCartes[i].noCarte = i;
    (function (i) {
        classCartes[i].addEventListener("click", function () {

            controleJeu(this.noCarte);
        });
    })(i);
}

initialisation();

//this function change the card state
function majAffichage(noCarte) {
    switch (etatCartes[noCarte]) {
        case 0:
            classCartes[noCarte].innerHTML = ('<img src= "images/dos.png"/>');
            break;
        case 1:
            classCartes[noCarte].innerHTML = ('<img src= "images/' + cartes[noCarte] + '.png"/>');
            break;
        case -1:
            classCartes[noCarte].style.visibility = "hidden";
    }
}

//this function mix the card in the first array
function initialisation() {
    for (var position = cartes.length - 1; position >= 1; position--) {

        var random = Math.floor(Math.random() * (position + 1));

        var sauve = cartes[position];
        cartes[position] = cartes[random];
        cartes[random] = sauve;
    }
}

//this function control the card
function controleJeu(noCarte)
{
    if (retourner.length < 2){
        if (etatCartes[noCarte] === 0){
            etatCartes[noCarte] = 1;
            retourner.push(noCarte);
            majAffichage(noCarte);
        }
    }

    //if the number of card is strictly 2, the condition below is launch
    if (retourner.length === 2){
        var nouveauEtat = 0;

        //if the two cards clicked by the user are the same, the number of pair increased by one and the cards disappeared (state -1).
        if (cartes[retourner[0]] === cartes[retourner[1]]){
            nouveauEtat = -1;
            paires++;
        }
        etatCartes[retourner[0]] = nouveauEtat;
        etatCartes[retourner[1]] = nouveauEtat;
    }

    //this setTimeout function return the two cards in 800 millisecond
    setTimeout(function(){
        majAffichage(retourner[0]);
        majAffichage(retourner[1]);
        retourner = [];

        //if the number of pair is strictly 6, the function "rejouer" is launch
        if(paires === 6){
            rejouer();
        }
    },800);

}

//this function hide the page "jeu" and show the page "resultat" when the game is over
function rejouer() {
    document.getElementById('jeu').style.display = 'none';
    document.getElementById('resultat').style.display = "block";
    document.getElementById('temps').innerHTML = "Vous avez terminé en " + minutes + " minutes et " + secondes + " secondes.";

    //when the user click on the button "rejouer", the window reload
    document.getElementById('rejouer').addEventListener('click', function () {
        window.location.reload();
    });
}

var secondes = 0;
var minutes = 0;

//this function count the time the player take to finish the game
function chrono(){
    setTimeout(chrono, 1000);
    secondes++;
    if (secondes === 60){
        minutes++;
        secondes = 0;
    }
    document.getElementById('chrono').innerHTML = "Chrono : " + minutes + " minutes " + secondes + ' secondes.';

}
chrono();

//jasmine
/**var fonction = function (f) {
    if (f == 1)
    {
        return "Test Jasmine";
    }
};

export { fonction }**/
