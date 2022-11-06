function testDateTime(a, b) {
    let x = new Date(a);
    let y = new Date(b);
    let d = x > y ? x : y;
    let z = d.getUTCDay();
    if (z === 0) {
        return "Воскресенье";
    } else if (z === 1) {
        return "Понедельник";
    } else if (z === 2) {
        return "Вторник";
    } else if (z === 3) {
        return "Среда";
    } else if (z === 4) {
        return "Четверг";
    } else if (z === 5) {
        return "Пятница";
    } else {
        return "Суббота";
    }
}





