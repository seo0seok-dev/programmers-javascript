function solution(num_list, n) {
    return num_list.filter(e => e === n).length >= 1 ? 1 : 0;
}