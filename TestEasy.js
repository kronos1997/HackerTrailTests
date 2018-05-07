process.stdin.resume();
process.stdin.setEncoding('utf8');

//funtion to read line by line
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

//Library for alphabets
alphabetLibrary = [
    [
    [" __ "],
    ["|__|"],
    ["|  |"]
],[
    [" __ "],
    ["|__\\"],
    ["|__/"]
],
[
    [" __"],
    ["|  "],
    ["|__"],
],
[
    [" __ "],
    ["|  \\"],
    ["|__/"]
],
[
    [" __"],
    ["|_ "],
    ["|__"]
],
[
    [" __"],
    ["|_ "],
    ["|  "],
],
[
    [" __ "],
    ["| _ "],
    ["|__|"]
],
[
    ["    "],
    ["|__|"],
    ["|  |"]
],
[
    [" "],
    ["|"],
    ["|"]
],
[
    [" _"],
    [" |"],
    ["_|"]
],
[
    ["   "],
    ["|_/"],
    ["| \\"]
],
[
    ["   "],
    ["|  "],
    ["|__"]
],
[
    ["    "],
    ["|\\/|"],
    ["|  |"]
],
[
    ["    "],
    ["|\\ |"],
    ["| \\|"]
],
[
    [" __ "],
    ["|  |"],
    ["|__|"]
],
[
    [" __ "],
    ["|__|"],
    ["|   "]
],
[
    [" __ "],
    ["|__|"],
    ["| \\ "]
],
[
    [" __ "],
    ["|__ "],
    [" __|"]
],
[
    ["___"],
    [" | "],
    [" | "]
],
[
    ["    "],
    ["|  |"],
    ["|__|"]
],
[
    ["    "],
    ["|  |"],
    ["|/\\|"]
],
[
    ["   "],
    ["\\_/"],
    [" | "]
],
[
    ["__"],
    [" /"],
    ["/_"]
],
[
    [" "],
    [" "],
    [" "]
]
]

//Library for reverse alphabets
reverseAlphabetLibrary = [
    [
    [" __ "],
    ["|__|"],
    ["|  |"]
],[
    [" __ "],
    ["/__|"],
    ["\\__|"]
],
[
    ["__ "],
    ["  |"],
    ["__|"],
],
[
    [" __ "],
    ["/  |"],
    ["\\__|"]
],
[
    ["__ "],
    [" _|"],
    ["__|"]
],
[
    ["__ "],
    [" _|"],
    ["  |"],
],
[
    [" __ "],
    [" _ |"],
    ["|__|"]
],
[
    ["    "],
    ["|__|"],
    ["|  |"]
],
[
    [" "],
    ["|"],
    ["|"]
],
[
    ["_ "],
    ["| "],
    ["|_"]
],
[
    ["   "],
    ["\\_|"],
    ["/ |"]
],
[
    ["   "],
    ["  |"],
    ["__|"]
],
[
    ["    "],
    ["|\\/|"],
    ["|  |"]
],
[
    ["    "],
    ["| /|"],
    ["|/ |"]
],
[
    [" __ "],
    ["|  |"],
    ["|__|"]
],
[
    [" __ "],
    ["|__|"],
    ["   |"]
],
[
    [" __ "],
    ["|__|"],
    [" / |"]
],
[
    [" __ "],
    [" __|"],
    ["|__ "]
],
[
    ["___"],
    [" | "],
    [" | "]
],
[
    ["    "],
    ["|  |"],
    ["|__|"]
],
[
    ["    "],
    ["|  |"],
    ["|/\\|"]
],
[
    ["   "],
    ["\\_/"],
    [" | "]
],
[
    ["__"],
    ["\\ "],
    ["_\\"]
],
[
    [" "],
    [" "],
    [" "]
]
]

//array for what alphabet is in the sentence
function sortMatrixes(sentence){
    sentenceArray = [];
    for(i=0; i<sentence.length; i++){
        if(sentence.charAt(i) == "a"){
            sentenceArray.push(0); 
        }else if(sentence.charAt(i) == "b"){
            sentenceArray.push(1);
        }else if(sentence.charAt(i) == "c"){
            sentenceArray.push(2);
        }else if(sentence.charAt(i) == "d"){
            sentenceArray.push(3);
        }else if(sentence.charAt(i) == "e"){
            sentenceArray.push(4);
        }else if(sentence.charAt(i) == "f"){
            sentenceArray.push(5);
        }else if(sentence.charAt(i) == "g"){
            sentenceArray.push(6);
        }else if(sentence.charAt(i) == "h"){
            sentenceArray.push(7);
        }else if(sentence.charAt(i) == "i"){
            sentenceArray.push(8);
        }else if(sentence.charAt(i) == "j"){
            sentenceArray.push(9);
        }else if(sentence.charAt(i) == "k"){
            sentenceArray.push(10);
        }else if(sentence.charAt(i) == "l"){
            sentenceArray.push(11);
        }else if(sentence.charAt(i) == "m"){
            sentenceArray.push(12);
        }else if(sentence.charAt(i) == "n"){
            sentenceArray.push(13);
        }else if(sentence.charAt(i) == "o"){
            sentenceArray.push(14);
        }else if(sentence.charAt(i) == "p"){
            sentenceArray.push(15);
        }else if(sentence.charAt(i) == "r"){
            sentenceArray.push(16);
        }else if(sentence.charAt(i) == "s"){
            sentenceArray.push(17);
        }else if(sentence.charAt(i) == "t"){
            sentenceArray.push(18);
        }else if(sentence.charAt(i) == "u"){
            sentenceArray.push(19);
        }else if(sentence.charAt(i) == "w"){
            sentenceArray.push(20);
        }else if(sentence.charAt(i) == "y"){
            sentenceArray.push(21);
        }else if(sentence.charAt(i) == "z"){
            sentenceArray.push(22);
        }else{
            sentenceArray.push(23);
        }
    }
    return sentenceArray
}

rl.on('line', function(line){
    //Convert to string and lower case it
    string = line.toString().toLowerCase();
    //n is the first character of the string
    n = string.charAt(0);
    //s is the string
    s = string.substring(2);
    if(n == "1"){
        //Process string into array
        arrayString = sortMatrixes(s);
        //Loop into the array and print out characters
        for(o=0; o<3; o++){
            for(i=0; i<arrayString.length; i++){
                process.stdout.write(alphabetLibrary[arrayString[i]][o] + " ")
            }
            process.stdout.write("\n")
        }
    }else if(n == "2"){
        //Reverse the string
        splitString = s.split("");
        reverseArray = splitString.reverse();
        reverseString = reverseArray.join("");
        //Process string into array
        arrayString = sortMatrixes(reverseString);
        //Loop into the array and print out characters
        for(o=0; o<3; o++){
            for(i=0; i<arrayString.length; i++){
                process.stdout.write(reverseAlphabetLibrary[arrayString[i]][o] + " ")
            }
            process.stdout.write("\n")
        }
    }else{
        //End program
        process.exit();
    }
})

process.stdin.on('end', function() {
  //console.log("");
});

/*
Test Sets

1 alphabeth
2 alphabeth
1 Sharper Talent
2 Sharper Talent
0

1 abcdefghijklmnoprstuwyz
2 abcdefghijklmnoprstuwyz
1 ABCDEFGHIJKLMNOPRSTUWYZ
2 ABCDEFGHIJKLMNOPRSTUWYZ
0

*/