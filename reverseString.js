var word="newassignment"
function revstr(word) {
    let output= ''
        for(let i=word.length-1;i>=0;i--){
        output = output + word[i]
       //console.log(i,word[i]);
    }
    return output
}

console.log(revstr(word));

