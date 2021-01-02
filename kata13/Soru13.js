/*function isIsogram(str) {
    str = str.toLowerCase();
    const arr = str.split("")
    let k=1
    for (let i = 0; i < arr.length; i++) {
        for( k+=i ;k<arr.length; k++) {
            if (arr[i] === arr[k]) {
                return false
            }
        }
        k=1
    }
    return true
}*/


function isIsogram(str){
    return !/(\w).*\1/i.test(str);
}
    
console.log(isIsogram("isogram"));