// se me ha borrado lo que habia desarrollado en los 15 minutos aunque no estaba completo.



// Ejercicio resuelto en casa


function translateMessage(message) {
    const morseToText = {
        ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E",
        "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J",
        "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O",
        ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
        "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y",
        "--..": "Z", ".----": "1", "..---": "2", "...--": "3", "....-": "4",
        ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9",
        "-----": "0"
    };
    
    const textToMorse = {
        A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".",
        F: "..-.", G: "--.", H: "....", I: "..", J: ".---",
        K: "-.-", L: ".-..", M: "--", N: "-.", O: "---",
        P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-",
        U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--",
        Z: "--..", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
        5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----.",
        0: "-----"
      };

    if (message.startsWith(".") || message.startsWith("-")) {
        const words = message.trim().split(" ");
        let translation = "";

        for (let i = 0; i < words.length; i++) {
            const characters = words[i].split(" ");
            let translatedWord = "";

            for (let j = 0; j < characters.length; j++) {
                if (morseToText[characters[j]]) {
                    translatedWord += morseToText[characters[j]];
                } else {
                    translatedWord += " ";
                }
            }

            translation += translatedWord;
        }
        console.log(translation);

    } else {
        let translation = "";

        for (let i = 0; i < message.length; i++) {
            const character = message.charAt(i).toUpperCase();
        
            if (character === " ") {
              translation += "/ ";
            } else if (textToMorse[character]) {
              translation += textToMorse[character] + " ";
            } else {
              translation += "? ";
            }
          }
        

        console.log(translation);
    }
}
    // Ejemplo de uso
    const message1 = ".... --- .-.. .- / -- ..- -. -.. ---";
    const message2 = "HOLA MUNDO"

    translateMessage(message1); // Imprimirá "THE IS THANCK MORNINGS"
    translateMessage(message2);

