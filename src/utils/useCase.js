export const formatNumberWithSuffix = (x) => {
  if (x === undefined) {
    return 0;
  }
  if (x >= 1000000) {
    return (x / 1000000).toFixed(1) + "M";
  } else if (x >= 1000) {
    return (x / 1000).toFixed(1) + "K";
  }
  return x.toString();
};

export const formatTime = (time) => {
  let a = new Date();
  let b = new Date(time);
  let c = a - b;
  let e = c / (24 * 60 * 60 * 1000).toFixed();
  return e;
};

export const timeDuration = (isoDuration) => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let minutesIndex;
  let hoursIndex;

  if (isoDuration.includes("H")) {
    hoursIndex = isoDuration?.indexOf("H");
    hours = parseInt(isoDuration.slice(2, hoursIndex));
  }

  if (!hoursIndex) {
    hoursIndex = 1;
  }

  if (isoDuration.includes("M")) {
    minutesIndex = isoDuration?.indexOf("M");
    minutes = parseInt(isoDuration.slice(hoursIndex + 1, minutesIndex));
  }
  if (!minutesIndex) {
    minutesIndex = 1;
  }
  const secondsIndex = isoDuration?.indexOf("S");
  if (secondsIndex !== -1) {
    seconds = parseInt(isoDuration.slice(minutesIndex + 1, secondsIndex));
  }

  // Format the time
  if (!hours) {
    const formattedTime = `${padZero(minutes)}:${padZero(seconds)}`;
    return formattedTime;
  } else {
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}`;
    return formattedTime;
  }

  // Function to pad single-digit numbers with leading zeros
  function padZero(num) {
    return num < 10 ? `0${num}` : num;
  }
};

var nameList = [
  "Prajval",
  "Asmita",
  "Omkar",
  "Arun",
  "karthik",
  "Ronak",
  "Pratik",
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

const characters =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var sentences = [
  "This video is so entertaining, I couldn't stop watching!",
  "I learned something new today, thanks to this video.",
  "The editing in this video is on point! 👌",
  "Who else can't get enough of this content?",
  "I can't believe I've never seen this channel before; it's amazing!",
  "This deserves way more views and likes!",
  "The information here is so helpful. You've got a new subscriber!",
  "I was laughing so hard at [timestamp]. 😂",
  "The visuals and graphics in this video are stunning!",
  "This video made my day! Thank you for sharing.",
  "Amazing 🕺",
  "This is mind-blowing!",
  "I can't stop watching your videos!",
  "You're doing an amazing job with your content.",
  "I'm addicted to this channel now.",
  "I've learned so much from your videos.",
  "Every video is a masterpiece.",
  "The humor in your videos always brightens my day.",
  "I'm hitting the like button before even watching - that's how much I trust your content!",
  "Your channel is a hidden gem on YouTube.",
  "I've binge-watched your entire playlist!",
];
