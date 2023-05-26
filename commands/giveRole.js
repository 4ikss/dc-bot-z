export default {
    name: "rol-ver",
    async execute(message) {
        if (!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Bu komutu kullanabilmek için `Rolleri Yönet` yetkisine ihtiyacın var.");

        const mentionedUser = message.mentions.users.first();

        if (!mentionedUser) return message.reply("Rol verilicek kullanıcı etiketleyiniz.");

        const mentionedRole = message.mentions.roles.first();

        if (!mentionedRole) return message.reply("Kullanıcıya verilicek rolü belirtiniz.");
        message.guild.members.fetch()
        const member = message.guild.members.cache.get(mentionedUser.id);

        if (!member) return message.reply("Etiketlenen kullanıcı sunucuda bulunumadı.");

        try {
            await member.roles.add(mentionedRole);
            message.channel.send(`${mentionedUser} kullanıcısına \`@${mentionedRole.name}\` rolü verildi.`);
        } catch (error) {
            console.error('Failed to add role:', error);
        }

    }
}