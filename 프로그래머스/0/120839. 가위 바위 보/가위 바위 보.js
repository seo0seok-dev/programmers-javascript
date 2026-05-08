function solution(rsp) {
    var answer = '';
    answer = String([...rsp].map((e) => e === "2" ? "0" : e === "5" ? "2" : "5").join(''));
    return answer;
}