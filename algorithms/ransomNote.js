// Linear Time Complexity | O(n)
// two loops present, but not nested so not exponential

function ransomNote(noteText, magText) {
    var noteArr = noteText.split(' ');
    var magArr = magText.split(' ');
    var magObj = {};

    magArr.forEach(word => {
        if(!magObj[word]) magObj[word] = 0;
        magObj[word]++;
    });

    var notePossible = true;
    noteArr.forEach(word => {
        // if current word exists in magazine obj
        // decrement by 1
        if(magObj[word]) {
            magObj[word]--;
            if(magObj[word] < 0) notePossible = false;
        } else notePossible = false;
    });
    return notePossible;
}

console.log(ransomNote(
    'this is a secret note for you from a secret admirer', 
    'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
));
