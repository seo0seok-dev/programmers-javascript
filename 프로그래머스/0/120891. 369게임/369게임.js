function solution(order) {
    return [...String(order)].filter((e) => e % 3 === 0 && e !== '0').length;
}