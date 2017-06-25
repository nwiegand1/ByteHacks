'use strict'
const http = require('http')
const fs = require('fs');
const Bot = require('messenger-bot')

var firebase = require('firebase');
var app = firebase.initializeApp({apiKey: "AIzaSyDRdXCbRNvSAQZ31f4lAXbrL_-4vNreHRA",
     authDomain: "friendslocation-15838.firebaseapp.com",
     databaseURL: "https://friendslocation-15838.firebaseio.com",
     projectId: "friendslocation-15838",
     storageBucket: "friendslocation-15838.appspot.com",
     messagingSenderId: "1046326063652"});
// var storage = firebase.storage();
// var database = firebase.database();
// var pos;
// var result;

function pullFromDB() {
        var userid, pos, picture;
        var ref = firebase.database().ref();
        ref.once("value")
        .then(function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            userid = childSnapshot.val();
            username = String(childSnapshot.child('username').val());
            pos = childSnapshot.child('pos').val();
            picture = childSnapshot.child('picture').val();
            //console.log(username);
            console.log(pos);
          });
        });
      }

function getPos(senderid) {
	var senderPos;
	var ref = firebase.database().ref();
	ref.once("value")
        .then(function(snapshot) {
          senderPos = snapshot.child(senderid).child('pos');
        });
	console.log(senderPos);
	return senderPos;
}		
						 	
let bot = new Bot({
  token: 'EAAZAsRtD1e0UBAM55DeZA4oq1pDx0tQj84vtqrC803ZA1ixEP1bdA8ErdrmndrllXZB1OoqF6IRZAkFYQf1EMOZBBsFNUGtvELWbdNkA1XgsVTlXet90p2mjypH7P9BG0IwBU9UzsVnIZBKa8RUVhpaESgR205dd82rZC2u3ZCgu9IAZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

// receives GETTING_STARTED and RATE_LOCATION payloads
bot.on('postback', (payload, reply, actions) => {
  let text = payload.postback.payload
  var response = ""
  if (text == "GET_STARTED") {
    response = "Thank you for using the PrideBot - your assistant for connecting with friends at the Pride parade and for rating venues based on LGBTQ inclusivity! To get started, click on the 'See Map' button for a map view of all your facebook friends also using the PrideBot nearby. If you're currently at a venue you'd like to rate, click on the 'Rate Location' button. Otherwise, I'll echo anything you say!"
  } else if (text == "RATE_LOCATION") {
    response = "Input your rating for Spotify HQ on a scale from 1-5"
    console.log(payload.sender.id)
    pullFromDB(payload.sender.id)
  }
  reply({ text: response}, (err, info) => {})
})

// receives all other text
var senderPos;
bot.on('message', (payload, reply) => {
  var msg = payload.message.text
  if (!isNaN(msg)) {
    msg = "You rated Spotify HQ a " + msg + ". Thank you!"
  }
  let text = msg

  console.log(payload.sender.id)
  senderPos = getPos(payload.sender.id);

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

// bot server
http.createServer(bot.middleware()).listen(process.env.PORT || 3000)
