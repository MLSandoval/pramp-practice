function decrypt(word) {
  let secondStep = 1;
  let decryption = "";
  
  for(let i = 0; i < word.length; i++){
    let newLetterAscii = word.charCodeAt(i);
    console.log("newLetterAscii before - : ", newLetterAscii);
    console.log("secondStep: ", secondStep);
    newLetterAscii -= secondStep;
    console.log("newLetterAscii after - : ", newLetterAscii);
    
    while(newLetterAscii < 97){
      newLetterAscii += 26;
    }
    
    decryption = decryption + String.fromCharCode(newLetterAscii);
    secondStep += newLetterAscii; 
    console.log("secondStep prepped for next iteration: ", secondStep);
  }
  
  return decryption;
}