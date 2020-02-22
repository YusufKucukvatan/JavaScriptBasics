function palindromeTest(str){
    var result = "";
    if(typeof str == "string"){
    
        for(var i = str.length -1 ; i >= 0; i-- ){
            result = result.concat(str.charAt(i));
        }
        
        if(result == str){
            return true;
        }
    }
    return false;
}
    console.log( palindromeTest("anastas mum satsana") );
    console.log( palindromeTest("Cybertek") );
    console.log(palindromeTest(123));

console.log("===============================================");

// "AAABBBCCC" ==> "ABC"
function RemoveDuplicates(str){
    var nonDuplicates = "";
    if(typeof str == "string"){
        for(var i = 0; i < str.length; i++){
            if(!nonDuplicates.includes(str.charAt(i)) ){
                nonDuplicates = nonDuplicates.concat(str.charAt(i));
            }
        }
    }
console.log(nonDuplicates);
}
RemoveDuplicates("AAABBBCCC");