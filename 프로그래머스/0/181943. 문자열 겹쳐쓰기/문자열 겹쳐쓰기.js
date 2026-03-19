function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    a = my_string.substring(0,s)
    b = my_string.substring(a.length+overwrite_string.length,my_string.length+1)
    
    answer = a + overwrite_string + b;
    return answer;
}