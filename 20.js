function testMath(a, b, c, d) {
    z=Math.max(a, b, c, d);
    f=Math.min(a, b, c, d);
    y=z/f;
    return Math.floor (y);
}