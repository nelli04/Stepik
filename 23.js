function testRegExp(s, sub_s) {
    var m = new RegExp(sub_s, 'g')
    x = s.match(m);
    return x.join();
}