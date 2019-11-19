
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter string: ',function(x) {
 	var y = x         
   vowel(y)
  rl.close();
});
var vowels = 'a,e,i,o,u'; 
function vowel(symp){   
    if(vowels.indexOf(symp[i].toLowerCase()) > -1){
        var words = symp.split('');
       var sympCopy = symp.split('');
   }
   
  return sympCopy + words;
 }
