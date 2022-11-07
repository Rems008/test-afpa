let objXHR = null;

(function () {
  document.querySelector("button").onclick = requete;

  objXHR = new XMLHttpRequest();
  objXHR.responseType = "json";
  objXHR.onload = reponse;
})();
function requete() {
  const url = "https://www.prevision-meteo.ch/services/json/creteil";

  objXHR.open("get", url);
  objXHR.send(null);
  document.querySelector("tfoot").style.display = "block";
}
function reponse() {
  document.querySelector("tfoot").style.display = "none";

  let meteo = objXHR.response;
  // console.log(meteo.fcst_day_0.hourly_data);

  let premierJour = meteo.fcst_day_0.hourly_data;

  let tr = ``;

  for (const idx in premierJour) {
    console.log(premierJour[idx].TMP2m);
    let temp = premierJour[idx].TMP2m;
    tr += `<tr><td>${idx}</td><td>${temp}</td><td><img src="${premierJour[idx].ICON}"</td></tr>`;
  }
  document.querySelector("tbody").innerHTML = tr;
}
