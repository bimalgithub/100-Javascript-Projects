function convert(){
    const binary = document.getElementById("b-input").value;
    console.log("The binary value is : "+ binary);
    if (binary === '')
        return 0;
    binary.split('').map((char) => {
        if (char !== '0' && char !== '1' ){
            document.getElementById("b-input").value = '';
            document.getElementById('d-output').value = '';
            alert("Please enter valid binary number");
            return false;
        }
    });

    const decimal = parseInt(binary, 2);
    document.getElementById('d-output').value = decimal;
    return true;
}

function clearInput(){
    console.log("clear clicked");
    document.getElementById("b-input").value = '';
    document.getElementById('d-output').value = '';
    return true;
}