function testArray(a, b) {
    var myAr = new Array();
    var myArr = new Array();
    for (let i = 0; i < a.length; i+= 1){
        myAr[i] = a[i]
    }
    for (let i = 0; i < b.length; i+= 1){
        myArr[i] = b[i]
    }
    var x = myAr.concat(myArr)
    x.unshift("Иванов")
    x.reverse()
    var myStr = ""
    for (let i = 0; i < x.length; i += 1){
        myStr += x[i]
    }
    return myStr
}

