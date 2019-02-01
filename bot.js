Discord = require("discord.js");
const client = new Discord.Client();
require('./util/cmdloader.js')(client);//requires the command loader
let token = process.env.token;
let prefix = ".";
let cooldown = new Set();
let cdseconds = 1200;

client.on('ready', () => {
        client.user.setActivity(`Gen.Me Server `, { type: "Watching" });
        setTimeout(game2, 20000)
    });
    
    function game1() {
        client.user.setActivity(`To .gen`, { type: "Listening" });
        setTimeout(game2, 20000)
    }
    
    function game2() {
        client.user.setActivity(`In Gen.Me`, { type: "LISTENING" });
        setTimeout(game3, 20000)
    }
    
    function game3() {
       client.user.setActivity(`My Prefix Is . Type .gen <Fortnite/Origin/Uplay/SteamKeys> `, { type: "LISTENING" });
        setTimeout(game1, 20000);//these times are in ms, so 30,000 = 30 seconds
    } 

client.on('message', message => {

	
 
 
	
	
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);


  
 if(cooldown.has(message.author.id)){
	
    return message.reply("Duh You Should Wait 20 Minuts Before Using That")
  }

	if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }

  let messageArray = message.content.split(" ");

  

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1200000)     

        
        
//command handler
let commandfile = client.commands.get(command);
  let alias = client.aliases.get(command);

  if(commandfile){
	  commandfile.run(client,message,args);
  }
  if(alias){
	  alias.run(client,message,args);
  }
//end of handler


});

client.login(process.env.token);
