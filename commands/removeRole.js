export default {
    name: "rol-al",
    async execute(message) {
        if (!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Bu komutu kullanabilmek için `Rolleri Yönet` yetkisine ihtiyacın var.");

        const mentionedUser = message.mentions.users.first();

        if (!mentionedUser) return message.reply("Rolü alınıcak kullanıcı etiketleyiniz.");

        const mentionedRole = message.mentions.roles.first();

        if (!mentionedRole) return message.reply("Kullanıcıdan alınacak rolü belirtiniz.");
        message.guild.members.fetch()
        const member = message.guild.members.cache.get(mentionedUser.id);

        if (!member) return message.reply("Etiketlenen kullanıcı sunucuda bulunumadı.");

        try {
            await member.roles.remove(mentionedRole);
            message.channel.send(`${mentionedUser} kullanıcısından \`@${mentionedRole.name}\` rolü alındı.`);
        } catch (error) {
            console.error('Failed to remove role:', error);
        }

    }
}