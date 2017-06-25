'use strict'
const http = require('http')
const fs = require('fs');
const Bot = require('messenger-bot')

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
    response = "Thank you for using the PrideBot - your assistant for connecting with friends at the Pride parade and for rating venues based on LGBTQ inclusivity! To get started, click on the 'See Map' button for a map view of all your facebook friends also using the PrideBot nearby. If you're currently at a venue you'd like to rate, click on the 'Rate Location' button."
  } else if (text == "RATE_LOCATION") {
    response = "TODO: get location from firebase, return list of nearby places"
  }
  reply({ text: response}, (err, info) => {})
})

// receives all other text
bot.on('message', (payload, reply) => {
  let text = payload.message.text

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
