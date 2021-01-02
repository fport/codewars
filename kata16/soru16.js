
function persistence(num) {
   let product = 1, k=0
   while(num>9){
        while(num!=0){
            product = product * (Math.floor(num%10))
            num = Math.floor(num / 10); 
        }
        num=product
        product=1
        k+=1
   }
   return k
}


console.log(persistence(999));