const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
    token: "MTE5OTc1ODg5ODExOTMzMTg3MA.Gv7IEb.OZP_REH9-tJSKcpDfEsb-Sf7dzLxmuTLV_YCss",
    prefix: "!", 
    intents: ["Guilds", "GuildMessages", "MessageContent"], 
    events: ["onMessage", "onInteractionCreate"], 
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});




const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/") 






bot.readyCommand({ 
    code: `
    $log[$userDisplayName[$clientID] Aktif!]
    `
})



