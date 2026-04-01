const fs = require('fs');

const quotes = [
  `"You are not your job, you're not how much money you have in the bank. You are not the car you drive. You're not the contents of your wallet. You are not your fucking khakis. You are all singing, all dancing crap of the world."`,
  `"The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness, for he is truly his brother's keeper."`,
  `"This is your last chance. After this, there is no turning back. You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes."`,
  `"I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die."`,
  `"I love the smell of napalm in the morning. You know, one time we had a hill bombed, for 12 hours. When it was all over, I walked up. We didn't find one of 'em, not one stinkin' dink body. The smell, you know that gasoline smell? The whole hill. Smelled like... victory."`,
  `"As far back as I can remember, I always wanted to be a gangster. To me, being a gangster was better than being President of the United States. Even before I first wandered into the cabstand for an after-school job, I knew I wanted to be a part of them."`,
  `"Introduce a little anarchy. Upset the established order, and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair. The joker's card is wild."`,
  `"My name is Lt. Aldo Raine and I'm putting together a special team, and I need me eight soldiers. Eight Jewish-American soldiers. Now, y'all might've heard rumors about the armada happening soon. Well, we'll be leaving a little earlier."`,
  `"Gentlemen, you had my curiosity, but now you have my attention. I've been looking for you for a long time. Now the shoe is on the other foot. You tell me what you know, and maybe I'll let you live."`,
  `"You know the thing about a shark, he's got lifeless eyes. Black eyes. Like a doll's eyes. When he comes at ya, he doesn't even seem to be livin'... 'til he bites ya, and those black eyes roll over white and then... ah then you hear that terrible high-pitched screamin'."`
];

const files = [
  "01-obstacle-parting.tsx",
  "02-line-by-line-cascade.tsx",
  "03-fluid-container-morph.tsx",
  "04-word-gravity.tsx",
  "05-live-typewriter.tsx",
  "06-dragon-follower.tsx",
  "07-paragraph-breath.tsx",
  "08-highlight-beam.tsx",
  "09-scroll-reveal.tsx",
  "10-magnetic-word-pull.tsx"
];

let replaced = 0;
for(let i=0; i < files.length; i++) {
   const path = `./components/ui/pretext/${files[i]}`;
   let code = fs.readFileSync(path, 'utf8');
   const match = code.match(/text = "([^"]*)",/);
   if (match) {
     code = code.replace(match[0], `text = ${quotes[i]},`);
     fs.writeFileSync(path, code);
     replaced++;
   } else {
     console.log("Could not find text property in", files[i]);
   }
}
console.log("Replaced quotes in", replaced, "files");

const codes = {};
for (const f of files) {
  codes[f.replace(".tsx", "")] = fs.readFileSync(`./components/ui/pretext/${f}`, "utf8");
}
fs.writeFileSync("./components/ui/pretext/codes.json", JSON.stringify(codes, null, 2));
