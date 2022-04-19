//I'm just using glabal decleration for this part because it's much easier to debug that way using the browser's console
var search, list, item;

function searchList() {

    search = document.getElementById('searchPokemon').value.toUpperCase();
    list = document.getElementsByName('pokemonListItem');

    for (i = 0; i < list.length; i++) {
        item = list[i].getElementsByTagName("span")[0].innerText.toLocaleUpperCase();

        if (item.indexOf(search) > -1) {
            list[i].style.display = "inline-block";
        } else {
            list[i].style.display = "none";
        }
    }
}