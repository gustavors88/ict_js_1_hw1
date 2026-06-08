function printStars(maxLine) {
    for (let line = 1; line <= maxLine; line++) {
        let stars = "";
        for (let star = 1; star <= line; star++) {
            stars += "*";
        }
        console.log(stars);
    }
}

printStars(4);