function calculate(){
  let or = document.getElementById('or').value;
  let gemmes = document.getElementById('gemmes').value;
  let calcul = '';
  let result = '';
  const regexGemmes = /^[0-9]{1,4}$/;
  const regexOr = /^[0-9]{1,9}$/;

  function Milli(calcul) {
  return new Intl.NumberFormat().format(calcul);
  }

  if (regexGemmes.test(gemmes) && regexOr.test(or)) {
    calcul = Math.floor(or / gemmes);

    result = 'Le prix de 1 gemme est a 214 285 et la tienne est a ' + Milli(calcul);

    if (calcul > 300000) {
      document.getElementById('phrase').innerHTML = 'C\'est l\'affaire du siècle'
      document.getElementById('phrase').style.color = 'green';
    }else if (calcul < 300000 && calcul > 250000) {
      document.getElementById('phrase').innerHTML = 'C\'est une très bonne affaire'
      document.getElementById('phrase').style.color = 'green';
    }
    else if (calcul < 250000 && calcul > 210000) {
      document.getElementById('phrase').innerHTML = 'C\'est une bonne affaire'
      document.getElementById('phrase').style.color = 'orange';
    }
    else if (calcul < 210000 && calcul > 180000) {
      document.getElementById('phrase').innerHTML = 'Ce n\'est pas du tout une bonne affaire'
      document.getElementById('phrase').style.color = 'red';
    }
    else if (calcul < 180000) {
      document.getElementById('phrase').innerHTML = 'Arnaque !!'
      document.getElementById('phrase').style.color = 'red';
    }

  } else if (regexGemmes.test(gemmes) && or == 0) {

    calcul = Math.floor(gemmes * 214285);
    result = 'Ton item dois te couter aux alentours de ' + Milli(calcul) + ' Or';
  } else if (regexOr.test(or) && gemmes == 0) {
    calcul = Math.floor(or / 214285);
    result = 'Ton item dois te couter aux alentours de ' + Milli(calcul) + ' Gemmes';

  }
  else if (or == 0 && gemmes == 0) {
    result = 'Merci de remplir au moins un champ';
  } else {
    result = 'Merci de remplir correctement les champs';
  }

 document.getElementById('resultat').innerHTML = result;
}
