// problem-1: You have an odd array (array with od numbers.) [1, 3, 5, 7, 9]. Now convert htis array into an even array (arrat with even number). [2, 4, 6, 8, 10]. Do this using for loop  & array.map() method. Hints: add one to any odd number and it will become an even number.
const fiveTimes = [1, 2, 3, 4, 5].map(x => x + 1);
console.log(fiveTimes);


// problem-2: You are given an array say: [33, 54, 50, 78, 74, 50, 101, 30]. Now return/get all the elements which are divisiable by 10 using array.filter() method.
const number1 = [ 33, 50, 48, 75, 69, 50]
const result = number1.filter(num => num % 10 === 0);
console.log(result);


// problem-3: Now do the same task of question 2. But do this using array.find() method. Then compare the output of question 2 & question 3;
const number2 = [ 33, 50, 48, 75, 69, 50]
const result2 = number2.find(num => num % 10 === 0);
console.log(result2);


// 1) How will you access Sophia’s secondary school location?

let data = {
        Sophia: {
            id: 33,
            study: [
                {
                    primary:
                        [
                            { school_name: "ABC primary school" },
                            { location: "Peters burg" }
                        ]
                },
                {
                    secondary:
                        [
                            { school_name: "ABC secondary school"

                            },

                            { location: "St Lorence" }
                        ]
                },
                    ]
                }
        } 

const sophiaSecondarySchoolLocation = data.Sophia.study[1].secondary[1]['location'];
console.log(sophiaSecondarySchoolLocation);



// How will you get the output
//  a) abc
//  b) xyz

let activities = {
activity1 : [
{
name : "listen on spotify",

song_list: {

song_1 : "abc",
song_2 : "bcd"

},
id : 1
},
{
name : "listen music through bot",

song_list: {
song_1 : "wxy",
song_2 : "xyz"

},
id : 2
}
]
}

const activity1 = activities.activity1;
const song1Activity1 = activity1[0].song_list.song_1;
const song1Activity2 = activity1[1].song_list.song_1;

console.log(song1Activity1);
console.log(song1Activity2);