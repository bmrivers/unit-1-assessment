

$('#add').on('click', addInputNum);
$('#sub').on('click', subInputNum);

function render() {
    
}

function addInputNum() {
    let inputNum = Number($('input').val());
    let value = Number($('#value').html());

    if (inputNum === inputNum) {
        redValue(value + inputNum);
        $('#value').html(value + inputNum);
    } else {
        $('#value').html(value);
    }
}

function subInputNum() {
    let inputNum = Number($('input').val());
    let value = Number($('#value').html());
    
    if (inputNum === inputNum) {
        redValue(value - inputNum);
        $('#value').html(value - inputNum);
    } else {
        $('#value').html(value);
    }
}

function redValue(val) {
    if (val < 0) {
        $('#value').css('color', 'red');
    } else {
        $('#value').css('color', 'black');
    }
}