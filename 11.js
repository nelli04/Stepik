function testArray(a, b) {
    let y=0;
    let x = a.concat(b);
    for (let i=0; i<x.length; i++){y+=x[i];}
    return y;
}
