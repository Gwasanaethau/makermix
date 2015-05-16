[![Build Status](https://travis-ci.org/Gwasanaethau/makermix.svg?branch=master)](https://travis-ci.org/Gwasanaethau/makermix)
[![Build Status](https://travis-ci.org/Gwasanaethau/makermix.svg?branch=travis3)](https://travis-ci.org/Gwasanaethau/makermix)

# Makermix #

Makermix is a small byte-level project designed to simulate working as a team on two completely seperate parts of the project. An API is used to integrate the backend with the frontend of the application.

User Stories
------------

```
As a maker
I want to be paired with someone
So that I can learn faster

As a bewildered maker
I want to see a list of everyone in my cohort
So that I know who these weird people are

As a promiscuous maker
I want to see a sorted list of people in my cohort that I have/have not paired with
So that I can keep pairing with more people

As a shy maker  
I want a pair partner to be randomly assigned to me  
So that I don’t have to ask them  

As an unfriendly maker  
I want to have a blacklist of students I will never be paired with  
So that I never have to listen to them speak
```

Optional User Stories
---------------------

```
As a security-conscious maker
I want to be able to log in with a password
So that nobody can see my lists

As a lazy security-conscious maker
I want to sign in through github
So that I don't have to remember another password

As a curious maker
I want to see other students' github commit history
So that I can compare my progress to theirs

As a maker with many commits
I want to be preferentially paired with someone who has fewer commits
So that I can accelerate our learning by pairing together
```

State
-----

```
List of People
Previous Pairs
User
Blacklist
```

Actions
-------

```
Be able to choose a pair from a list
Pair with everyone equally
Randomly assign a pair
Not be assigned a pair on my blacklist
```

MVP
---

```
MVp List of Makers
MVp Be able to add a Maker
MVp Be able to identify yourself as the Maker wanting to pair
MVp Be able to see Makers I have not paired with
MVP1
MVp Be able to get a random pair
MVP2
MVp Be able to add Makers to a blacklist
MVp Get a random pair not on a blacklist
MVP3
MVp Be able deal with current pairings in real time
MVP4
```

API Expectations
----------------

```
GET /makers => { makers: [ { id: 1, name: "Joe" }, { id: 2, name: "Mark" } ] }
POST /makers (name="Joe") => { id: 1, name: "Joe" }

GET /makers/session/:name => { id: 1, name: "Joe" }

GET /makers/:id => { pairedWith: [ {id: 1, name: "Joe"} ], notPairedWith: [ { id: 1, name: "Joe" }, { id: 2, name: "Mark" } ], id: 1, name: "Joe" }

GET /pairs => {pairs: [{pairPartner1: {id: 1, name: "Joe"}, pairPartner2: { id: 2, name: "Mark" }}] }
POST /pairs (pairPartner1 = 1, pairPartner2 = 2)
```

Technologies
------------

Front-end: AngularJS – Jade, Joe, Rob, Mark.

Back-end: NodeJS – Gus, Dan, Iciar, Илья.
