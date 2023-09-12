
//worker's event fired as like as listener 
onmessage = function (event) {
    let total = 0;
    for(let i=0;i<10000000000;i++)
        total+=i;

    // works as like callback
    postMessage(total)
}
