
var args = process.argv;

function obfuscatePassword(args) {
  var password = args[2];
  var output = "";

  for (var c = 0; c < password.length; c++){
    var currchar = password[c];

    if (currchar == 'a') {
      output += '4';
    } else if (currchar == 'e') {
      output += '3';
    } else if (currchar == 'o') {
      output += '0';
    } else if (currchar == 'l') {
      output += '1';
    } else {
      output += currchar;
    }
  }
  return output;
}

console.log(obfuscatePassword(args));