 function delay (ms) {
  return new Promise(resolve => {
setTimeout(()=> resolve(console.log("done")),ms)
    });
}

delay(3000).then(()=> console.log('run after 3 s'))