let styles = ["Jazz","Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classical";
console.log(styles);

alert(styles.shift());

styles.unshift("Rap","Raggae");
console.log(styles);


