decodeMorse = function(morseCode){
  var tabelaCod = {
      "A": ".-",
      "B": "-...",
      "C": "-.-.",
      "D": "-..",
      "E": ".",
      "F": "..-.",
      "G": "--.",
      "H": "....",
      "I": "..",
      "J": ".---",
      "K": "-.-",
      "L": ".-..",
      "M": "--",
      "N": "-.",
      "O": "---",
      "P": ".--.",
      "Q": "--.-",
      "R": ".-.",
      "S": "...",
      "T": "-",
      "U": "..-",
      "V": "...-",
      "W": ".--",
      "X": "-..-",
      "Y": "-.--",
      "Z": "--..",
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      ",": "..-..",
      ".": ".-.-.-",
      "!": "-.-.--",
      "?": "..--..",
      "SOS": "...---..."
    }
  
  var arrResult = morseCode.split(" ");
  var space = "";
  var resposta = "";
  for (let c of arrResult) {
      for (let i in tabelaCod) {
          c == "" ? space = " ": ""
          if (c == tabelaCod[i]) {
              resposta += space + i;
              resposta = resposta.trim();
              space = "";
          }
      }
  }
  
  return resposta;
}
