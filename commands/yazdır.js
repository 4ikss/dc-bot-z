export default {
    name: "yaz",
    execute(message) {
        const prefix = process.env.prefix;
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        args.shift();
        if (!args[0]) return message.reply("Ne söylememi istersiniz?");

        const text = args.join(" ");

        message.delete();

        message.channel.send({ content: text.toString() });
    }
}