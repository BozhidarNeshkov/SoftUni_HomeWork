function rounding(numberToFormat, precision) {

    if (precision > 15) {
        precision = 15;
    }


    let formattedNum = numberToFormat.toFixed(precision);

    let trimmedNum = parseFloat(formattedNum);

    console.log(trimmedNum);
}

rounding(10.5, 3);