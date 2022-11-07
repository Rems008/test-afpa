let objetXHR = null;

function requete(codePost) {
  const url = `https://geo.api.gouv.fr/communes?codePostal=${codePost}`;

  objetXHR.open("get", url);

  objetXHR.send(null);
}

function reponse() {
  console.log(objetXHR.response);
  let selectVille = document.querySelector("#ville");
  selectVille.innerHTML = "";

  if (objetXHR.response.length > 0) {
    for (const ville of objetXHR.response) {
      let option = new Option(ville.nom, ville.code);
      selectVille.add(option);
    }
  }
}

//window.onload = function () {};
// gére les evenement quand le DOM est construie
document.addEventListener("DOMContentLoaded", function () {
  objetXHR = new XMLHttpRequest();
  objetXHR.responseType = "json";
  objetXHR.onload = function () {
    reponse();
  };

  document.querySelector("#code_post").onkeyup = function () {
    if (this.validity.valid) {
      requete(this.value);
    }
  };
});
