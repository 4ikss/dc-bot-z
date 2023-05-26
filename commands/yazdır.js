export default {
    name: "yaz",
    execute(message) {
        const prefix = process.env.prefix;
        const text = message.content.slice(prefix.length).trim().split(/ +/);
        text.shift();
        if (!text[0]) return message.reply("Ne söylememi istersiniz?");
        message.delete();

        message.channel.send({ content: text.toString() });
    }
}