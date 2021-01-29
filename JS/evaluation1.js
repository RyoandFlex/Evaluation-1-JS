function estimation() {

  var marque = document.getElementById('marque').value;
  var modele = document.getElementById('modele').value;
  var prixN = document.getElementById('prixN').value;
  var type = document.getElementById('type').value;
  var origine = document.getElementById('origine').value;
  var km = document.getElementById('km').value;
  var travaux = document.getElementById('travaux').value;
  var prixE;

  if (origine == 'france') {
    if (type == 'essence') {
      if (travaux == 'oui') {
        prixE = prixN - (km * 0.1);
      }
      else {
        prixE = prixN - (km * 0.09);
      }
    }
    else {
      if (travaux == 'oui') {
        prixE = prixN - (km * 0.11);
      }
      else {
        prixE = prixN - (km * 0.1);
      }
    }
  }
  else if (origine == 'allemagne') {
    if (type == 'essence') {
      if (travaux == 'oui') {
        prixE = prixN - (km * 0.06);
      }
      else {
        prixE = prixN - (km * 0.08);
      }
    }
    else {
      if (travaux == 'oui') {
        prixE = prixN - (km * 0.10);
      }
      else {
        prixE = prixN - (km * 0.09);
      }
    }
  }
  else {
    if (type == 'essence') {
      if (travaux == 'oui') {
        prixE = prixN - (km * 0.5);
      }
      else {
        prixE = prixN - (km * 0.7);
      }
    }
    else {
      if (travaux == 'oui') {
        prixE = prixN - (km * 0.09);
      }
      else {
        prixE = prixN - (km * 0.08);
      }
    }
  }
    document.getElementById('message').style.display="block";
    document.getElementById('marqueR').innerHTML=marque;
    document.getElementById('modeleR').innerHTML=modele;
    document.getElementById('typeR').innerHTML=type;
    document.getElementById('origineR').innerHTML=origine;
    document.getElementById('kmR').innerHTML=km+' Km';
    document.getElementById('travauxR').innerHTML=travaux;
    document.getElementById('prixE').innerHTML=prixE+' €';
    document.getElementById('formulaire').style.display="none";
}

function rempli() {
  var marque = document.getElementById('marque').value;
  var modele = document.getElementById('modele').value;
  var type = document.getElementById('type').value;
  var origine = document.getElementById('origine').value;
  var km = document.getElementById('km').value;
  var prixN = document.getElementById('prixN').value;
  var travaux = document.getElementById('travaux').value;

  if (marque == '') {
    document.getElementById('errorMarque').style.display="block";
  }
  else {
    document.getElementById('errorMarque').style.display="none";
  }
  if (modele == '') {
    document.getElementById('errorModele').style.display="block";
  }
  else {
    document.getElementById('errorModele').style.display="none";
  }
  if (type == '') {
    document.getElementById('errorType').style.display="block";
  }
  else {
    document.getElementById('errorType').style.display="none";
  }
  if (origine == '') {
    document.getElementById('errorOrigine').style.display="block";
  }
  else {
    document.getElementById('errorOrigine').style.display="none";
  }
  if (km == '') {
    document.getElementById('errorKm').style.display="block";
  }
  else {
    document.getElementById('errorKm').style.display="none";
  }
  if (km>50000) {
    document.getElementById('kmH').style.display="block";
  }
  else {
    document.getElementById('kmH').style.display="none";
  }
  if (prixN == '') {
    document.getElementById('errorPrixN').style.display="block";
  }
  else {
    document.getElementById('errorPrixN').style.display="none";
  }
  if (travaux == '') {
    document.getElementById('errorTravaux').style.display="block";
  }
  else {
    document.getElementById('errorTravaux').style.display="none";
  }

  if (marque != '' && modele !='' && type != '' && origine != '' && km != '' && prixN != '' && travaux != '' && (km<=50000))
    {
        document.getElementById('btn').style.display="block";
    }
    else {
      document.getElementById('btn').style.display="none";
    }
}