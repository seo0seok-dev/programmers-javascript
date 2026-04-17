function solution(s) {
    const sArray = [...s]; 
    return parseInt(sArray.filter(item => item != "+").join(''));
}