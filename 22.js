function testErrorFunc(a, func) {
    var e;
    try {
        func(a);
    } catch (e) {
        return e.name;
    }

}
