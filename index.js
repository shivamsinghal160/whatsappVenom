const venom = require("venom-bot");

venom
  .create({
    session: "123456789", //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
    setTimeout(async () => {
        console.log('Logging out')
        await client.logout();
        console.log('Logout Successfull');
    }, 5000);
  client.onMessage((message) => {
    if (message.body === "Hi" && message.isGroupMsg === false) {
      client
        .sendText(message.from, "Welcome Venom 🕷")
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }
  });
}
