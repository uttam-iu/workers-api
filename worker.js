
//worker's event fired as like as listener 
onmessage = function (event) {
    console.log('Worker has started working...')
    let total = 0;
    for(let i=0;i<10000000000;i++)
        total+=i;

    console.log('Worker has finished working...')
    // works as like callback
    postMessage(total)
}
