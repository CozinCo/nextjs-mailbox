// let main = async () => {
//     await c.connect();

//     await c.mailboxOpen('inbox');
//     for await (let msg of c.fetch('1:*', { uid: true },{binary: true})) {
//         console.log(msg);
//     }     

//     await c.idle();
// };

// main().catch(err => console.error(err));