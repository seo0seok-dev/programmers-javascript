function solution(my_string) {
    return [...my_string].filter((num) => /[0-9]/.test(num)).reduce((a, b) => a + Number(b), 0);
}