function solution(arr) {
    sum = arr.reduce((a, b) => a + Number(b), 0);
    length = arr.length;
    return sum / length;
}