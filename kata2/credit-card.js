// function maskify(cc){
//     return cc.slice(0,-4).replace(/./g,'#') + cc.slice(-4)
// }

// function maskify(cc) {
//     return cc.replace(/.(?=....)/g, '#');
// }

const maskify = (cc) => {
    return cc.replace(/.(?=....)/g, '#');
}

console.log(maskify("asdas1234"));

// function maskify(cc) {
//     const arr = cc.split('')
//     const count = arr.length
//     const porti = ''
//     let j=0 
//     for(let i=count;i>=0;i--){
     
//         if(j>4){
//             arr[i] = '#'
//         }
//         j++
//     }
//     return arr.join('')
// }


// const a = maskify('4556364607935616') === '############5616' ? true : false
// console.log(a);