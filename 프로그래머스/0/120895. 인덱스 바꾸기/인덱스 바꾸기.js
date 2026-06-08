function solution(my_string, num1, num2) {
    var my_string = [...my_string];
    var temp = '';
    
    temp = my_string[num1];
    my_string[num1] = my_string[num2];
    my_string[num2] = temp;
    
    return my_string.join('');
}