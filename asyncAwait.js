console.log("person1:Shows ticket");
console.log("person2:Shows ticket");

async function preMovie(){

    const buyTickets = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I buy your tickets")
        },1000)
    })

    const buySamosa = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I buy your Samosa")
        },2000)
    })
    const butColdDrinks = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I buy your cold drikcn")
        },3000)
    })
    const buynudulus = new Promise((resolve,reject)=>{
        reject("No i dont have nuduks");
    })

    //use of promise all:-
    try {
        let [gTickets,gSamosa,gColdDrink] = await Promise.all([buyTickets,buySamosa,butColdDrinks])

        console.log(`${gTickets} ${gSamosa} ${gColdDrink}`)

        let gbuynuduls = await buynudulus
        console.log(`${gbuynuduls}`);
        
    } catch (error) {
      console.log(error);
        
    }
   


    // let gticket = await buyTickets
    // console.log('DONE',gticket)
    // let gSamosa= await buySamosa
    // console.log('DONE',gSamosa)
    // let gColdDrink = await butColdDrinks
    // console.log('DONE',gColdDrink)

//    return [gticket,gSamosa,gColdDrink]
}

preMovie().then();

console.log("person3:Shows ticket");
console.log("person4:Shows ticket");