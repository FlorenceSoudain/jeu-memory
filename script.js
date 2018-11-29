var cartes = ["a", "a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f"];

var classCartes = document.getElementById('jeu').getElementsByClassName('cartes');

for (var position = cartes.length - 1; position >= 1; position--) {

    //hasard reçoit un nombre entier aléatoire entre 0 et position
    var random = Math.floor(Math.random() * (position + 1));

    //Echange
    var sauve = cartes[position];
    cartes[position] = cartes[random];
    cartes[random] = sauve;
}
var retourner = 0;
for (var i = 0; i < classCartes.length; i++) {
    (function (i) {
        classCartes[i].addEventListener("click", function () {

            classCartes[i].innerHTML = cartes[i];
        });
    })(i);
    (function (i) {
        classCartes[i].addEventListener("click", function () {

            classCartes[i].style.backgroundColor = "white";
        });
    })(i);
    (function (i) {
        classCartes[i].addEventListener("click", function () {

            classCartes[i].style.fontSize = "200px";
        });
    })(i);
    (function (i) {
        classCartes[i].addEventListener("click", function () {


            retourner = retourner + 1;
            console.log(retourner);
        });
    })(i);

    if (retourner == 2) {
        (function (i) {
            classCartes[i].addEventListener("click", function () {


                retourner = retourner + 1;
                console.log(retourner);
            });
        })(i);
    }
}
