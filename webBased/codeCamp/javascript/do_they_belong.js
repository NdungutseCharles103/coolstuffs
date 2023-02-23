const  calculateArea = (x1, y1, x2, y2, x3, y3) => {
    const a1 = 1/2*(y1+y2)*(x2-x1);
    const a2 = 1/2*(y2+y3)*(x3-x2);
    const a3 = 1/2*(y1+y3)*(x3-x1)

    return Math.abs(a1+a2-a3)
}

const isInside = (x1, y1, x2, y2, x3, y3, x,y) => {
    const a1 = calculateArea(x, y, x1, y1, x2, y2);
    const a2 = calculateArea(x, y,x2, y2, x3, y3)
    const a3 = calculateArea(x, y, x1, y1, x3, y3)

    const A = calculateArea(x1, y1, x2, y2, x3, y3);

    return a1+a2+a3=== A
}

console.log(isInside(2,1 ,4,4, 6,2, 14, 2));
console.log(isInside(0, 0, 20, 0, 10, 30, 10, 15));
// console.log(area(2,1 ,4,4, 6,2));
// console.log(calculateArea(2,1 ,4,4, 6,2));