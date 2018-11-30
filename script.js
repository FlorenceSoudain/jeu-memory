var cartes = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

var classCartes = document.getElementById('jeu').getElementsByClassName('cartes');
document.getElementById('resultat').style.display = "none";
var etatCartes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var retourner = [];
var paires = 0;

for (var i = 0; i < classCartes.length; i++) {
    classCartes[i].noCarte = i;
    (function (i) {
        classCartes[i].addEventListener("click", function () {

            controleJeu(this.noCarte);
        });
    })(i);
}

initialisation();

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

function initialisation() {
    for (var position = cartes.length - 1; position >= 1; position--) {

        //hasard reçoit un nombre entier aléatoire entre 0 et position
        var random = Math.floor(Math.random() * (position + 1));

        //Echange
        var sauve = cartes[position];
        cartes[position] = cartes[random];
        cartes[random] = sauve;
    }
}

function controleJeu(noCarte)
{
    if (retourner.length < 2){
        if (etatCartes[noCarte] === 0){
            etatCartes[noCarte] = 1;
            retourner.push(noCarte);
            majAffichage(noCarte);
        }
    }
    if (retourner.length === 2){
        var nouveauEtat = 0;
        if (cartes[retourner[0]] === cartes[retourner[1]]){
            nouveauEtat = -1;
            paires++;
            console.log(paires);
        }
        etatCartes[retourner[0]] = nouveauEtat;
        etatCartes[retourner[1]] = nouveauEtat;
    }
    setTimeout(function(){
        majAffichage(retourner[0]);
        majAffichage(retourner[1]);
        retourner = [];
        if(paires === 6){
            rejouer();
        }
    },1000);

}
function rejouer() {
    document.getElementById('jeu').style.display = 'none';
    document.getElementById('resultat').style.display = "block";
    document.getElementById('rejouer').addEventListener('click', function () {
        window.location.reload();
    });
}