//constract worker by file path
const worker = new Worker('worker.js');

function onCalculate() {
    console.log('giving instruction to worker...')
    //firing worker's event
    worker.postMessage('hello')
}

//receive worker's event fired by worker
worker.onmessage = function (event) {
    console.log('got data from worker...')
    const elm = document.getElementById('container');
    elm.innerHTML = event?.data
}

function onChangeBg() {
    if(document.body.style.backgroundColor === "red")
        document.body.style.backgroundColor  = 'green'
    else document.body.style.backgroundColor = "red"
}