function sandwichCalculator (slicesOfBread, slicesOfCheese) {
    let sandwiches = slicesOfBread / 2;

    if(slicesOfCheese == sandwiches) {
        return sandwiches;
    } else if ((sandwiches>=1 ) && (slicesOfCheese > sandwiches)) {
        return sandwiches
    } else {
        console.log('No sandwich. Your ratios are off.');
    }
    
}
console.log(sandwichCalculator(2,0));


