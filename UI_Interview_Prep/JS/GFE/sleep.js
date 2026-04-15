async function sleep(duration) {
   return new Promise(res => setTimeout(res , duration))
}

async function greeting() {
    console.log('Hello!');
    await sleep(2000);
    console.log('Bye.'); 
  }
  
greeting();
  