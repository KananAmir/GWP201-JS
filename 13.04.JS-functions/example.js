function findDigts(num) {
    // let x = num %10
    // let y = Math.floor((num % 100)/10)


    let x = num %10
    let z = (num% 100 -x )/10
    let y = (num- num%100)/100
    console.log(x);
    console.log(z);
    console.log(y);
}

findDigts(123);
