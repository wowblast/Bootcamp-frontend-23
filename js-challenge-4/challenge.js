 function delay (ms) {
    let promise =   New Promise(resolve => {
setTimeout(()=> resolve(console.log("done")),ms)
    });
}

delay(3000).then(()=> alert('run after 3 s'))