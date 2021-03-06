# ByteHacks

## Inspiration

Inspired by Pride Month and the NYC Pride Parade tomorrow, we wanted to make a project that would provide resources and connect people supportive of the LGBTQ community.

## What it does

PrideBot is a Facebook bot that allows users to rate different types of locations like businesses, parks, museums on their inclusivity and uses the users location to prompt them with rating places close to them. Our bot also allows users to see their supportive facebook friends locations so that during large events like the Pride Parade, you can find your friends and have fun!

## How We built it

This bot was built with Javascript and uses the Facebook api and the GoogleMaps api, with a firebase database, and is hosted by heroku

We used the Facebook api and login to get a list of the users friends, and if their friends also use pride bot, their location is displayed on a map with the Pride Parade map outlined to facilitate finding your friends more easily.

Our firebase db saves users' latest location so that it can be displayed on the map.

We used the Facebook messenger platform to enable users from both Android and iOS devices to engage with eachother and for it's ability to embed webapps and use the Facebook friends feature

## Challenges We ran into

we ran into a lot of Github challenges when we were creating a new ssh key!! We also strugged through the messenger "get started" walk-through because it is a little out of order! But we made it!!

## Accomplishments that We're proud of

We are proud of building a functional bot with a simple user interface and sleek map graphics that display users pictures and locations on the map and displaying the Pride Parade route! We're also proud of the 

## What We learned

We learned so much!! We loved learning from the mentors and hearing about their experiences in the panels and in talking to them afterwards. We learned about how to create a facebook bot, how to do post requests in javascript, how to connect different api's 

## What's next for PrideBot

Next for the Pride Map is to allow users to donate to the different organizations that are walking in the parade and learn more about them as they walk by. Also next for the PrideBot is the ability to routinely ask users to rate locations so that it is a more simplified experience. Having the rating system in Facebook messenger allows users to rate locations in a place that they use often, messenger, making it a more intuitive experience. We would also like our bot to be able to respond to users questions about issues surrounding the LGBTQ community and how to best continue to foster inclusivity and support everyone in their community.
