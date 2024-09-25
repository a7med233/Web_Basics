function checkSpam(str){
    str = str.toLowerCase();
    return str.includes("advertising") || str.includes("promo");
}
console.log(checkSpam("New promo! Press here!!!"));
console.log(checkSpam("WE WILL POST YOUR AdVeRtIsInG HERE!"));
console.log(checkSpam("rabbit"));
