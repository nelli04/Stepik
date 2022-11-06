function testWhile(a) {
    var x=0;
    var y=1;
    while (y<=a) {
        if (y%2==0)
        {
            x=x+y;
        }
        y=y+1;
    }
    return x;
}