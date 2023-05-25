import { EmbedBuilder } from "discord.js";

export default {
    name: "ping",
    execute(message) {
        const embed = new EmbedBuilder()
            .setDescription(`**Discord Ping:** ${Math.abs(message.client.ws.ping)}ms\n**Bot Ping:** ${Math.abs(message.createdTimestamp - Date.now())}ms`)
            .setColor("Random");

        message.channel.send({ embeds: [embed] })
    }
}