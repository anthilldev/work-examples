
let changeColor = () => {
    let newColor = makeColor();
    let box = document.getElementById('box').style.backgroundColor = newColor;
    document.getElementById('box').innerHTML = newColor;

}

let makeColor = () => {
    let arr = [];
    for(let i = 0; i < 3; i++){
        let num = Math.floor(Math.random() * 256);
        arr.push(num);
    }

    let newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
    return newRgb
}