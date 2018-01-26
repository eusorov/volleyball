/**
 * Mocking Dummy
 */
 import {Training} from './../entities/training';
 import {Participant} from './../entities/participant';

 export var PARTICIPANTS: Participant[] = [
 { "_id": "1",
 "name": "Mr. Profi",
 "email": "profi@volleyball.com"
 },
 { "_id": "2",
 "name": "Mr. Semiprofi ",
 "email": "semiprofi@volleyball.com"
 },
 { "_id": "3",
 "name": "Frau Anfaengerin",
 "email": "anfaengerin@volleyball.com"
 }
 ];

 export var TRAININGS: Training[] = [
 { "_id": "1",
 "weekday": "Mo",
 "timeFrom": "2010-01-01T18:00:00.000Z",
 "timeTill": "2010-01-01T18:00:00.000Z",
 "timeFromHour": 16,
 "timeFromMinute": 0,
 "timeTillHour": 20,
 "timeTillMinute": 0,
 "level": "F",
 "trainername": "Super Trainer",
 "capacity": 10,
 participants: PARTICIPANTS,
 availableFrom: "2010-01-01T18:00:00.000Z",
 availableTill: "2010-01-10T18:00:00.000Z",
 placeStr: "SouthBeach",
 showParticipants: false
},
{ "_id": "2",
"weekday": "Mo",
"timeFrom": "2010-01-01T18:00:00.000Z",
"timeTill": "2010-01-01T18:00:00.000Z",

"timeFromHour": 17,
"timeFromMinute": 0,
"timeTillHour": 21,
"timeTillMinute": 0,
"level": "A2",
"trainername": "Guter Trainer",
"capacity": 20,
 participants: PARTICIPANTS,
 availableFrom: "2010-01-01T18:00:00.000Z",
 availableTill: "2010-01-10T18:00:00.000Z",
 placeStr: "SouthBeach",
 showParticipants: false

},
{ "_id": "4",
"weekday": "Mo",
"timeFrom": "2010-01-01T18:00:00.000Z",
"timeTill": "2010-01-01T18:00:00.000Z",

"timeFromHour": 17,
"timeFromMinute": 0,
"timeTillHour": 21,
"timeTillMinute": 0,
"level": "A2",
"trainername": "Mr. Meister",
"capacity": 20,
 participants: PARTICIPANTS,
 availableFrom: "2010-01-01T18:00:00.000Z",
 availableTill: "2010-01-10T18:00:00.000Z",
 placeStr: "SouthBeach",
 showParticipants: false
},
{ "_id": "5",
"weekday": "Do",
"timeFrom": "2010-01-01T18:00:00.000Z",
"timeTill": "2010-01-01T18:00:00.000Z",
"timeFromHour": 17,
"timeFromMinute": 0,
"timeTillHour": 21,
"timeTillMinute": 0,
"level": "A2",
"trainername": "Mr. Meister",
"capacity": 20,
 participants: PARTICIPANTS,
 availableFrom: "2010-01-01T18:00:00.000Z",
 availableTill: "2010-01-10T18:00:00.000Z",
 placeStr: "SouthBeach",
 showParticipants: false
},
{ "_id": "6",
"weekday": "Do",
"timeFrom": "2010-01-01T18:00:00.000Z",
"timeTill": "2010-01-01T18:00:00.000Z",
"timeFromHour": 17,
"timeFromMinute": 0,
"timeTillHour": 21,
"timeTillMinute": 0,
"level": "F",
"trainername": "Mr. Meister",
"capacity": 20,
 participants: PARTICIPANTS,
 availableFrom: "2010-01-01T18:00:00.000Z",
 availableTill: "2010-01-10T18:00:00.000Z",
 placeStr: "SouthBeach",
 showParticipants: false
},
{ "_id": "7",
"weekday": "Do",
"timeFrom": "2010-01-01T12:00:00.000Z",
"timeTill": "2010-01-01T13:00:00.000Z",
"timeFromHour": 17,
"timeFromMinute": 0,
"timeTillHour": 21,
"timeTillMinute": 0,
"level": "F",
"trainername": "Mr. Meister",
"capacity": 20,
 participants: PARTICIPANTS,
 availableFrom: "2010-01-01T18:00:00.000Z",
 availableTill: "2010-01-10T18:00:00.000Z",
 placeStr: "SouthBeach",
 showParticipants: false
},
{ "_id": "8",
"weekday": "Fr",
"timeFrom": "2010-01-01T12:00:00.000Z",
"timeTill": "2010-01-01T13:00:00.000Z",
"timeFromHour": 17,
"timeFromMinute": 0,
"timeTillHour": 21,
"timeTillMinute": 0,
"level": "F",
"trainername": "Mr. Meister",
"capacity": 20,
 participants: PARTICIPANTS,
 availableFrom: "2010-01-01T18:00:00.000Z",
 availableTill: "2010-01-10T18:00:00.000Z",
 placeStr: "SouthBeach",
 showParticipants: false
}

];