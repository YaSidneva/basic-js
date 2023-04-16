const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    if (isDirect) {
      this.modification = "direct";
    } else {
      this.modification = "reverse";
    }
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let res = "";
    let j = 0;
    for (let i = 0; i <= message.length - 1; i++) {
      if (/[A-Z]/.test(message[i])) {
        let charNum = message.charCodeAt(i) - "A".charCodeAt(0);
        let keyCharNumber = key.charCodeAt(j) - "A".charCodeAt(0);
        j = (j + 1) % key.length;
        let encryptedCharNum = (charNum + keyCharNumber) % 26;
        let symbol = String.fromCharCode(encryptedCharNum + "A".charCodeAt(0));
        res += symbol;
      } else {
        res += message[i];
      }
    }
    if (this.modification === "reverse") {
      res = res.split("").reverse().join("");
    }
    return res;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let res = "";
    let j = 0;
    for (let i = 0; i <= encryptedMessage.length - 1; i++) {
      if (/[A-Z]/.test(encryptedMessage[i])) {
        let charNum = encryptedMessage.charCodeAt(i) - "A".charCodeAt(0);
        let keyCharNumber = key.charCodeAt(j) - "A".charCodeAt(0);
        j = (j + 1) % key.length;
        let encryptedCharNum = (charNum - keyCharNumber) % 26;
        if (encryptedCharNum < 0) {
          encryptedCharNum += 26;
        }
        let symbol = String.fromCharCode(encryptedCharNum + "A".charCodeAt(0));
        res += symbol;
      } else {
        res += encryptedMessage[i];
      }
    }

    if (this.modification === "reverse") {
      res = res.split("").reverse().join("");
    }
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
