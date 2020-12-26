const longest = (s1, s2) =>  {
    s3 = s1 + s2
    s4 = s3.split('')
    s4 = s4.sort().filter((element,index,array)=> {
        return element !== array[index - 1]
    })
    return s4.join("")
}

let a = longest("aretheyhere", "yestheyarehere") === "aehrsty" ? true: false
let b = longest("loopingisfunbutdangerous", "lessdangerousthancoding") === "abcdefghilnoprstu" ? true: false

console.log(a+" "+b)
