function truncate(str, maxlength){
    if(str.length > maxlength){
        return str.slice(0, maxlength-2)+"...";
    }
    return str;
}

console.log(truncate("Here's what I would like to say on this topic:", 20));
console.log(truncate("Hello, everyone!", 20));