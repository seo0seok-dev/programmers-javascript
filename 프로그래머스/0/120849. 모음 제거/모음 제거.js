function solution(my_string) {
    return [...my_string].filter((e) => !['a', 'e', 'i', 'o', 'u'].includes(e)).join('');
}