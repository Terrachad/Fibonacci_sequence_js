const inputBox = document.getElementById('fibbo');
const result = document.getElementById('result');


var x = 0;
function getValue(){
    result.innerText = "";
    x = inputBox.value;
    
    toFibbo(x);

}


let fibbArray = [0,1];

function toFibbo(num){
    result.innerText = " ";
    
    for(let i=2; i < num; i++){
        
        let fibNext = fibbArray[i - 2] + fibbArray [i - 1];
        fibbArray.push(fibNext);
    }

    console.log(fibbArray);
    result.innerText = fibbArray;
    fibbArray = [0,1];
}



//0.1.1.2.3.5.8.13