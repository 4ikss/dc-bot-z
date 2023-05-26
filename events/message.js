export default client => {
    const prefix = process.env.prefix;
    client.on("messageCreate", message => {

        
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift();
        const command = client.commands.get(commandName);
        if (!command) return;


        try {
            command.execute(message);
        } catch (e) {
            console.log(e);
            message.reply("Bu komut şuan kullanım dışıdır. Daha sonra tekrar deneyiniz.");
        }

    })
}