export default client => {
    client.once("ready", () => {
        console.log("Bot Kullanıma Hazır!");
    });
}