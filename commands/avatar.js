import { EmbedBuilder } from "discord.js";

export default {
    name: "avatar",
    execute(message) {
        let user = message.mentions.users.first();
        if (!user) {
            user = message.member;
        }

        const name = user.username == undefined ? user.displayName : user.username;

        const avatar = user.displayAvatarURL({ size: 4096 });

        const embed = new EmbedBuilder()
            .setImage(avatar)
            .setTitle(`${name} Kullanıcısının Avatarı`)
            .setTimestamp()
            .setColor("Random")
            .setURL(avatar)
            .setFooter({text: `${message.author.username}#${message.author.discriminator} kullanıcısı tarafından istendi.`, iconURL: message.author.displayAvatarURL()})

        message.reply({ embeds: [embed] });
    }
}