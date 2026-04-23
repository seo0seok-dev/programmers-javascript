function solution(x) {
    let xSum = [...String(x)].reduce((a,b) => a + Number(b), 0);

    return x % xSum === 0 ? true : false;
}