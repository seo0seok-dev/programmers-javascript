function solution(n, numlist) {
    var answer = [];
    numlist.map((e) => e % n === 0 ? answer.push(e) : '');
    return answer;
}