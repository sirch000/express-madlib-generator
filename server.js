'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

let madLib;

const buildMadLib = (params) => {
  const {
    adjective1,
    adjective2,
    adjective3,
    adverb,
    name,
    place,
    noun
  } = params;
  
madLib = `There's a ${adjective1} new ${name} in ${place} and everyone's talking. 
  Stunningly ${adjective2} and ${adverb} ${adjective3}, all the cool kids know it. 
  However, ${name} has a secret - ${name}'s a vile vampire. 
  Will it end with a bite, or with a stake through the ${noun}?`;
};

app.get('/',(req, res) => {
  buildMadLib(req.query);
  res.send(madLib);
});

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));