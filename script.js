
//back end-business logic
let add = function (number1, number2) {
    return number1 + number2;
};


//user interface-front end
$("form#add").submit(function (event) {
    event.preventDefault();
    let number1 = parseInt($("#add1"));
    let number2 = parseInt($("#add2"));
    alert(add(number1, number2));
    $('#output').return (result);
});

