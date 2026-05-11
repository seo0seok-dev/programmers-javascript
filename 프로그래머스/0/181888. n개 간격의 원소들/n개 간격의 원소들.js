function solution(num_list, n) {
    var answer = [];
    num_list.map((num, i) => i % n === 0 ? answer.push(num) : null);
    return answer;
}