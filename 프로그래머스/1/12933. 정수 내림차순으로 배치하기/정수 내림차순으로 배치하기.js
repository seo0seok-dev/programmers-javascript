function solution(n) {
    let answer = 0;
    let result = [0,0,0,0,0,0];
    let digits = [...String(n)].map(Number);

    for (let j = 0; j < digits.length; j++){
        for (let i = 0; i < digits.length - 1; i++){
            if (digits[i] < digits[i+1]) {
                let temp = digits[i];
                digits[i] = digits[i+1];
                digits[i+1] = temp;
            }
        }
    }
    
    return Number(digits.join(''));
}