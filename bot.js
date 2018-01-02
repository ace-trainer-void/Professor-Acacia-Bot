const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "d.";



client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (command === "dex") {
        if (args[0] === "fraterry") {
            message.channel.send("**Name:** Fraterry\n**Dex Number:** 001\n**Types:** Grass/Flying\n**Species:** The Fruit Bat Pokemon\n**Height:** [Height]\n**Weight:** [Weight]\n**Stats:** [stats]\n**Egg Group:** [Egg Group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[Pokémon Name]") {
            message.channel.send("**Name:** [Name]\n**Dex Number:** 002\n**Types:** Grass/Flying\n**Species:** The Fruit Bat Pokemon**\nHeight:** [Height]\n**Weight:** [Weight]\n**Stats:** [stats]\n**Egg Group:** [Egg Group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[Pokémon Name]") {
            message.channel.send("**Name:** [Name]\n**Dex Number:** 003\n**Types:** Grass/Dragon\n**Species:** The Fruit Bat Pokemon\n**Height:** [Height]\n**Weight:** [Weight]\n**Stats:** [stats]\n**Egg Group:** [Egg Group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "koaleak") {
            message.channel.send("**Name:** Koaleak\n**Dex Number:** 004\n**Types:** Water\n**Species:** The Chewing Pokemon\n**Height:** [Height]\n**Weight:** [Weight]\n**Stats:** [stats]\n**Egg Group:** [Egg Group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[Pokémon Name]") {
            message.channel.send("**Name:** [Name]\n**Dex Number:** 005\n**Types:** Water\n**Species:** [Species]\n**Height:** [Height]\n**Weight:** [Weight]\n**Stats:** [stats]\n**Egg Group:** [Egg Group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[Pokémon Name]") {
            message.channel.send("**Name:** [Name]\n**Dex Number:** 006\n**Types:** Water/Steel\n**Species:** [Species]\n**Height:** [Height]\n**Weight:** [Weight]\n**Stats:** [stats]\n**Egg Group:** [Egg Group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "platyplume") {
            message.channel.send("**Name:** Platyplume\n**Dex Number:** 007\n**Types:** Fire\n**Species:** [Species]\n**Height:** [Height]\n**Weight:** [Weight]\n**Stats:** [stats]\n**Egg Group:** [Egg Group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[Pokémon Name]") {
            message.channel.send("**Name:** [Name]\n**Dex Number:** 008\n**Types:** Fire\n**Species:** [Species]\n**Height:** [Height]\n**Weight:** [Weight]\n**Stats:** [stats]\n**Egg Group:** [Egg Group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[Pokémon Name]") {
            message.channel.send("**Name:** [Name]\n**Dex Number:** 009\n**Types:** Fire/Fairy\n**Species:** [Species]\n**Height:** [Height]\n**Weight:** [Weight]\n**Stats:** [stats]\n**Egg Group:** [Egg Group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "teslarve") {
            message.channel.send("**Name:** Teslarve\n**Dex Number:** 010\n**Types:** Bug/Electric\n **Species:** The Conducting Pokemon \n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "puplug") {
            message.channel.send("**Name:** Puplug\n**Dex Number:** 011\n**Types:** Bug/Electric\n **Species:** The Charging Pokemon \n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "mostracute") {
            message.channel.send("**Name:** Mostracute\n**Dex Number:** 012\n**Types:** Bug/Electric\n **Species:** The Electrifying Pokemon \n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "lapunt") {
            message.channel.send("**Name:** Lapunt\n**Dex Number:** 013\n**Types:** Normal/Fighting\n**Species:** The Strong Kick Pokemon\n**Height:** 3'5\n**Weight:** 12.7 lbs\n**Abilities:** Defiant, Huge Power, Guts (HA), Pure Power (HA) \n**Stats:** 50,60,45,60,20,35\n**Egg Group:** Field, Fairy\n**Dex Entry:** `\"Lapunts train day and night to make their legs stronger. Sometimes they will train until they have broken every bone in their legs\" `");
        } else
        if (args[0] === "whacalope") {
            message.channel.send("**Name:** Whacalope\n**Dex Number:** 014\n**Types:** Normal/Fighting\n**Species:** The Strong Punch Pokemon\n**Height:** 6'11\n**Weight:** 136.2 lbs\n **Abilities:** Bulk Boost, Iron Fist, Guts (HA), Pure Power (HA) \n**Stats:** 150,120,65,120,30,55\n**Egg Group:** Field, Fairy\n**Dex Entry:** `\"Whacalopes tend to roam wherever Lopunnies are found. They like to pick fights and show their strength.\"`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 015\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 016\n**Types:** [types]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 017\n**Types:** [types]\n**Species:** [species]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 018\n**Types:** [types]\n**Species:** [species]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
        } else
        if (args[0] === "[pokemon name]") {
            message.channel.send("**Name:** [name]\n**Dex Number:** 019\n**Types:** [types]\n**Species:** [species]\n**Height:** [height]\n**Weight:** [weight]\n**Stats:** [stats]\n**Egg Group:** [egg group]\n**Dex Entry:** `[dex entry]`");
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
       if (args[0] === "intro") {
           message.channel.send("Hello\, and welcome to the world of pokemon. My name is Acacia\, but you can call me the Pokemon Professor. I study the relationships between the lives and deaths of Pokemon.")
       }else
       if (args[0] === "help") {
           message.channel.send("`Command under construction`")
       }
    }
});
client.login(process.env.BOT_TOKEN);
