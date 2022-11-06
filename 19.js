function testMath(a, b, c) {
    var Ж = c * Math.PI / 180;
    S = 1/2 * a * b * Math.sin(Ж);
    return S;
}