const { Message } = require("discord.js")

module.exports = {
    name: 'suggerimento',
    description: 'Comando suggerimento',
    data : {
 description : `suggerimento`,
    name : `suggerimento`,
    options : [
        {
            name: 'testo',
            description: 'testo',
            type: `STRING`,
            required: true // Obbligatorio?
        },
        ],
},
    execute(interaction) {
        interaction.deferReply()
        interaction.deleteReply()

        var autore = interaction.member.id;

        var testo = interaction.options.getString(`testo`)

const nuovoembed = new Discord.MessageEmbed()
.setAuthor({ name: `NOME DEL TUO SERVER • Sistema suggerimenti`, iconURL: `LINK DEL LOGO DEL TUO SERVER` }) // Settare correttamente nome e link per far si che il comando funzioni correttamente.
.setTitle("Suggerimento 💭")
.setColor("GREEN")
.setDescription(`<@`+autore+`> ha appena lasciato un suggerimento!\n\nSuggerimento: `+testo)
.setThumbnail("https://images-ext-2.discordapp.net/external/hodlKmkDiZrUkiWHOCw-juEItcQ_vs1hTsO8-rhgqCo/https/cdn.discordapp.com/avatars/648959321668845569/3fc9b9cfe952182034c9d9f8ab85236a.webp")
.setFooter(`BOT Sviluppato da loris189`, `https://images-ext-2.discordapp.net/external/hodlKmkDiZrUkiWHOCw-juEItcQ_vs1hTsO8-rhgqCo/https/cdn.discordapp.com/avatars/648959321668845569/3fc9b9cfe952182034c9d9f8ab85236a.webp`);

if(interaction.channel.id == config.logchat.comandibot) {

    interaction.channel.send({embeds: [nuovoembed]}).then(sentMessage => {
        sentMessage.react("👍");  
        sentMessage.react("👎");  
})
}}}

// Si prega di non cambiare i crediti. (Il Thumbnail potete cambiarlo tranquillamente.)