var userFilms = [
    "https://media.fstatic.com/YTz-kfNphh-TH6vn_jT3eTM_Q3U=/322x478/smart/filters:format(webp)/media/movies/covers/2014/09/interestelar_t27814_15.jpg",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://cinepop.com.br/wp-content/uploads/2022/06/silent-hill-poster.jpg",
    "https://resizing.flixster.com/c-QCk9dA2ynBcyqvvwUZYCHI030=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18207_p_v8_bb.jpg",
    "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/2012-2009/large_5tIW9nTuxxy8iXSvsKJqFDVZpyg.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/ACl5NQBHeEvypdVlaaE868bwFs.jpg",
    "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/ex-machina-2015/large_btbRB7BrD887j5NrvjxceRDmaot.jpg",
    "https://image.tmdb.org/t/p/w342/t0VpOjqwobTpQK2SEZpXlqt5cqY.jpg",
    "https://image.tmdb.org/t/p/w342/hkIwPpdmGI1BaZeR2yrPSnNcv4v.jpg",
    "https://cinema10.com.br/upload/filmes/filmes_13030_pend.jpg"
];
var filmsNames = [
    "Interestelar",
    "A chegada",
    "Silent Hill",
    "Independence Day",
    "2012",
    "MoonFall",
    "Ex Machina",
    "Alien: 8 passageiro",
    "Ninguém vai te salvar",
    "O Culto"
];

//VARIAVEIS
var objBanner = document.getElementById("banner_container");
var objNome = document.getElementById("nome_filme");
var objUrl = document.getElementById("url_filme");
var optsRemove = document.getElementById("options_to_remove");
document.getElementById("div_remove_container").style.display = "none";

var i = 0;
var k = 0;

execute();

//FUNÇAO PARA INSERIR FILMES
function insert() {
    var exists = validate(objNome.value, filmsNames);

    if (exists == true) {
        //filme ja existe
        alert("O Filme já está listado.");
    } else if (objNome.value != "" && objUrl.value != "") {
        if (objUrl.value.indexOf(".jpg", 0) != -1) {
            filmsNames.push(objNome.value);
            userFilms.push(objUrl.value);
            execute();
            objNome.value = "";
            objUrl.value = "";
        } else {
            alert("Desculpe, mas a url precisa terminar em .jpg");
        }
    } else {
        alert("Por favor, preencha os campos.");
    }
}

//FUNÇÃO PARA DELETAR UM FILME
function deletar() {
    var select = document.getElementById("select_opt").value;

    filmsNames.forEach(function (item, indice) {
        if (select === item) {
            filmsNames.splice(indice, 1);
            userFilms.splice(indice, 1);
            console.log(item + " index:" + indice);
            console.log(userFilms[indice] + " index:" + indice);
        }
    });
    document.getElementById("div_remove_container").style.display = "none";
    execute();
    listOptionsToRemove();
}

//FUNÇÃO PARA ABRIR O MENU DE REMOÇÃO
function remove() {
    listOptionsToRemove();
    var removeDiv = document.getElementById("div_remove_container");
    if (removeDiv.style.display === "none") {
        removeDiv.style.display = "block";
    } else {
        removeDiv.style.display = "none";
    }
}

//FUNÇÃO PARA LISTAR AS OPCOES DE FILMES PARA DELETAR
function listOptionsToRemove() {
    optsRemove.innerHTML = "";
    filmsNames.forEach(function (item) {
        optsRemove.innerHTML +=
            '<option value="' + item + '">' + item + "</option>";
    });
}

//FUNÇÃO PARA REMOVER TODOS OS FILMES (Inutilizada, no momento)
/*function remove() {
	if (filmsNames.length > 0) {
		filmsNames.forEach(function(item) {
			filmsNames.splice(0, filmsNames.length)
		});
		//objBanner.innerHTML = ""
		execute()
	} else {
		alert("Nenhum filme listado.")
	}
} */

//FUNÇÃO PARA VALIDAR SE O FILME JA EXISTE NA LISTA
function validate(obj, array) {
    var vOrF;
    array.forEach(function (item) {
        if (obj == item) {
            vOrF = true;
        } else {
            vOrF = false;
        }
    });
    return vOrF;
}

//FUNÇÃO PARA LISTAR OS FILMES
function execute() {
    if (filmsNames.length > 0) {
        objBanner.innerHTML = "";
        userFilms.forEach(function (element, i) {
            objBanner.innerHTML +=
                "<div id='item'><img id='image' src=" +
                element +
                "><br><small>" +
                filmsNames[i] +
                "</small></div>";
        });
    } else {
        objBanner.innerHTML = "";
    }
}
