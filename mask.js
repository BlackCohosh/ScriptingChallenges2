function maskify(string) {
    string = string.split("");
    for(var i = 0; i < string.length - 4; i++){
      string[i] = "#";
  }
  
  string = string.join("");
  return string
  }

  console.log(maskify("12345#7"))