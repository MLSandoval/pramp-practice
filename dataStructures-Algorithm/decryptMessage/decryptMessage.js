function decrypt(word) {
  let runningValue = 1;
  let decryptStr = "";
  
  for(let i = 0; i < word.length; i++){
    let newLetterAscii = word.charCodeAt(i);
    newLetterAscii -= runningValue;
    
    while(newLetterAscii < 97){
      newLetterAscii += 26;
    }
    
    decryptStr = decryptStr + String.fromCharCode(newLetterAscii);
    runningValue += newLetterAscii; 
  }
  
  return decryptStr;
}