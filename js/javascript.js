function changeHtml(){
    var arr = [] ;
    for (let i = 0 ; i <= 4 ; i ++){
        arr[i] = Math.floor(Math.random() * 11); 
    }

    var value = "";
    for (let index = 0; index < arr.length; index++) {
        value += arr[index] + " ";
    }

    document.getElementById("clicked").innerHTML = value;

    var sum = 0;
    arr.forEach(() => {
        sum += element;
    });


    alert(sum);
}


