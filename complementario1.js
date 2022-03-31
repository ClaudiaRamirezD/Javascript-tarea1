//Codigo correcto, es un juego en donde se tienen que poner la combinacion correcta de 4 letras sin espacios 

{
  let lives = 5;
  const secretCode = "cbda";
  let code;
  do {
    code = prompt(
      "Adivina el codigo secreto formado por las letras a, b, c y d. Por ejemplo: abcd Recuerda que no se puede repetir letras y tienes 5 vidas!"
    );
    if (code.toLowerCase() === secretCode);
    correct = secretCode === code.toLowerCase();

    if (correct) {
      alert("Eres un genio! Acertaste! 🥳");
      alert("Hasta luego!");
    } else if (secretCode !== code && lives > 1) {
      lives--;
      alert("Sigue intentando, te quedan: " + lives + " vidas. 😬");
    } else {
      alert("Has perdido y se acabó el juego 😔");
      const seguir = prompt("Quiere volver a jugar? (si/no)").toLowerCase();
      if (seguir != "si") break;
      else lives = 5;
    }
  } while (!correct || seguir != "si"); 
}

/* {
  let lives = 5;
  const secretCode = "cbda";
  let code;
  while (true === lives > 0) {
    code = prompt(
      "Adivina el codigo secreto formado por las letras a, b, c y d. Por ejemplo: abcd Recuerda que no se puede repetir letras y tienes 5 vidas!"
    );
    if (code.toLowerCase === secretCode) break;
    correct = secretCode === code;

    if (correct) {
      alert("Eres un genio! Acertasté!!!");
    } else if ((secretCode !== code) && (lives > 0)) {
      lives--;
      alert("Sigue intentando, te quedan: " + lives + " vidas.");
    }
  }
      alert("Has perdido y se acabó el juego =(");
  const seguir = prompt("Quiere volver a jugar? (si/no)").toLowerCase();
  if(seguir == si)

    
}
 */

/* {
  let lives = 5;
  const secretCode = "cbda";
  let code;
  code = prompt(
    "Adivina el codigo secreto formado por las letras a, b, c y d. Por ejemplo: abcd    Recuerda que no se puede repetir letras y tienes 5 vidas!"
  );if (code.toLowerCase === secretCode) {
    alert("Eres un genio! Acertasté!!!");
    let seguir = prompt("Quiere volver a jugar? (si/no)").toLowerCase();
    if (seguir != "si");
  } else if ((secretCode !== code.toLowerCase) && (lives > 0)) {
    lives--;
    alert("Sigue intentando, te quedan: " + lives + " vidas.");
  } else {
    alert("Has perdido y se acabó el juego =(");
    const seguir = prompt("Quiere volver a jugar? (si/no)").toLowerCase();
  }
}
 */
