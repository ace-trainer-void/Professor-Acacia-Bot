const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "d.";



client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (command === "dex") {
        if (args[0] === "dowlputy") {
            message.channel.send("**Name:** Dowlputy\n**Dex Number:** 001\n**Types:** Flying\n**Species:** The Deputy Pokemon\n**Height:** 2'3\n**Weight:** 16 lbs\n**Stats:** [stats]\n**Egg Group:** Flying, Field\n**Dex Entry:** `[dex entry]`\nhttps://78.media.tumblr.com/1fc558f530b981f72f4245b566191422/tumblr_ozj7lrCTvk1wfcogao1_1280.png");
        } else
        if (args[0] === "owlficer") {
            message.channel.send("**Name:** Owlficer\n**Dex Number:** 002\n**Types:** Flying/Ghost\n**Species:** The Lookout Pokemon**\nHeight:** 3'6\n**Weight:** 95 lbs\n**Stats:** [stats]\n**Egg Group:** Flying, Field\n**Dex Entry:** `[dex entry]`\nhttps://78.media.tumblr.com/d1462bf64a6a47ed6839b6a6ae6e2be0/tumblr_ozj7lrCTvk1wfcogao2_1280.png");
        } else
        if (args[0] === "eaglective") {
            message.channel.send("**Name:** Eaglective\n**Dex Number:** 003\n**Types:** Flying/Ghost\n**Species:** The Gumshoe Pokemon\n**Height:** 6'0\n**Weight:** 140 lbs\n**Stats:** [stats]\n**Egg Group:** Flying, Field\n**Dex Entry:** `[dex entry]`\nhttps://78.media.tumblr.com/bc8060d13f9ba7e4e98bcf12e41b4f2d/tumblr_ozj7lrCTvk1wfcogao3_1280.png");
        } else
        if (args[0] === "racrook") {
            message.channel.send("**Name:** Racrook\n**Dex Number:** 004\n**Types:** Fighting\n**Species:** The Crooked Pokemon\n**Height:** 2'2\n**Weight:** 15 lbs\n**Stats:** [stats]\n**Egg Group:** Field\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "raconvict") {
            message.channel.send("**Name:** Raconvict\n**Dex Number:** 005\n**Types:** Fighting/Dark\n**Species:** The Jailbird Pokemon\n**Height:** 4'6\n**Weight:** 125 lbs\n**Stats:** [stats]\n**Egg Group:** Field\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "racriminal") {
            message.channel.send("**Name:** Racriminal\n**Dex Number:** 006\n**Types:** Fighting/Dark\n**Species:** The Dangerous Pokemon\n**Height:** 7'8\n**Weight:** 370 lbs\n**Stats:** [stats]\n**Egg Group:** Field\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "juvijuge") {
            message.channel.send("**Name:** Juvijuge\n**Dex Number:** 007\n**Types:** Rock/Psychic\n**Species:** The Judge Pokemon\n**Height:** 2'5\n**Weight:** 16.2 lbs\n**Stats:** [stats]\n**Egg Group:** Field, Dragon\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "dosfury") {
            message.channel.send("**Name:** Dosfury\n**Dex Number:** 008\n**Types:** Rock/Psychic\n**Species:** The Jury Pokemon\n**Height:** 5'7\n**Weight:** 46.3 lbs\n**Stats:** [stats]\n**Egg Group:** Field, Dragon\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "justydra") {
            message.channel.send("**Name:** Justydra\n**Dex Number:** 009\n**Types:** Rock/Psychic\n**Species:** The Exicutioner Pokemon\n**Height:** 10'7\n**Weight:** 450.5450.5 lbs\n**Stats:** [stats]\n**Egg Group:** Field, Dragon\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "jearbow") {
            message.channel.send("**Name:** Jearbow\n**Dex Number:** 010\n**Types:** Normal\n**Species:** The Long Eared Pokemon\n**Height:** 1'0\n**Weight:** 5.6 lbs\n**Stats:** [stats]\n**Egg Group:** Field, Fairy\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "euchairybow") {
            message.channel.send("**Name:** Euchairybow\n**Dex Number:** 011\n**Types:** Normal/Fairy\n**Species:** The Little Bow Pokemon\n**Height:** 2'3\n**Weight:** 10.6 lbs\n**Stats:** [stats]\n**Egg Group:** Field, Fairy\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 012\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 013\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 014\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 015\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 016\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "bumbolt") {
            message.channel.send("**Name:** Bumbolt\n**Dex Number:** 017\n**Types:** Bug/Electric\n**Species:** The Electric Bug Pokemon\n**Height:** 4\"\n**Weight:** .3 lbs\n**Stats:** [stats]\n**Egg Group:** Bug\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "batterbug") {
            message.channel.send("**Name:** Batterbug\n**Dex Number:** 018\n**Types:** Bug/Electric\n**Species:** The Charger Pokemon\n**Height:** 1'3\n**Weight:** 2 lbs\n**Stats:** [stats]\n**Egg Group:** Bug\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "gigavornet") {
            message.channel.send("**Name:** Gigavornet\n**Dex Number:** 019\n**Types:** Bug/Electric\n**Species:** The Voltage Hornet Pokemon\n**Height:** 4'9\n**Weight:** 15 lbs\n**Stats:** [stats]\n**Egg Group:** Bug\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 020\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 021\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 022\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** [number]\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        }
        else {
            message.channel.send("This Pokémon is not in the Dex (yet).")
        }
    }
    if (command === "professor") {
        message.chnnel.send("Hello\, and welcome to the world of pokemon. My name is Acacia\, but you can call me the Pokemon Professor.")
    }
});
client.login(process.env.BOT_TOKEN);
