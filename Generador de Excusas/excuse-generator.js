#!/usr/bin/env node

// excuse-generator.js
// Simple CLI to generate random excuses.
// Usage: node excuse-generator.js [count]

const who = [
  "My boss",
  "My uncle",
  "My friend",
  "My neighbor"
];

const action = [
  "called me",
  "sent a message",
  "asked for a favor",
  "reminded me",
  "texted me"
];

const what = [
  "the meeting",
  "the report",
  "the presentation",
  "the deadline",
  "the project"
];

const when = [
  "today",
  "yesterday",
  "this morning",
  "this afternoon",
  "last night"
];

const excuses = [
  "my alarm didn't go off",
  "got caught in traffic",
  "had a family emergency",
  "had medical issues",
  "was feeling sick",
  "had his computer crash",
  "got lost on the way",
  "the internet was down",
  "had to take care of an urgent call",
  "was stuck in a long meeting"
];
const randomWho = who[Math.floor(Math.random() * who.length)];

function getRandomExcuse() {
  const whoIndex = Math.floor(Math.random() * who.length);
  const actionIndex = Math.floor(Math.random() * action.length);
  const whatIndex = Math.floor(Math.random() * what.length);
  const whenIndex = Math.floor(Math.random() * when.length);
  const excuseIndex = Math.floor(Math.random() * excuses.length);
  const subject = who[whoIndex];
  const verb = action[actionIndex];
  const object = what[whatIndex];
  const time = when[whenIndex];
  const reason = excuses[excuseIndex];
  const excuse = `${subject} ${verb} about ${object} ${time} because ${reason}.`;
  return excuse;
}

function main(argv) {
  // Generate and print exactly one excuse.
  console.log(getRandomExcuse());
}

if (require.main === module) {
  main(process.argv);
}

module.exports = {
  getRandomExcuse,
  excuses,
};
