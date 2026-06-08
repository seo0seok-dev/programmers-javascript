function solution(num_list) {
    var answer = 0;
    let even = [];
    let odd = [];
    
    num_list.map((e) => e % 2 === 0 ? even.push(e) : odd.push(e));
    
    answer = Number(even.join('')) + Number(odd.join(''));
    
    return answer;
}