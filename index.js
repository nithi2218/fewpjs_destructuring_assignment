const farmAnimals = 'cow horse sheep pig chicken';

const [ moo, neigh, baa, oink, cluck ] = farmAnimals.split(" ");
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");
const [blackAndWhite, , black, pink] = farmAnimals.split(" ")

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors
const[r, o, y, g, b, indg, v] = colors


const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const muppetName = muppet.muppetName;
const color = muppet.color;
const song = muppet.song;
const job = muppet.job;
const partner = muppet.partner;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedName: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {album: {theMuppetMovie: {song2}}} = nestedMuppet;
const {album: {theMuppetMovie: {song4}}} = nestedMuppet;
const {nestedPartner} = nestedMuppet;
const {nestedJob} = nestedMuppet;

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner