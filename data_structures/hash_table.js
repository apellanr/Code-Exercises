/* Hash Table */

/* ========================
Hash Function
- pass in string to hash
- max is number of buckets using to store values
=========================*/

var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i); // convert letter to numeric val
    }
    return hash % max;
}

let HashTable = function() {
    let storage = [];
    const storageLimit = 14;

    this.print = function() {
        console.log(storage);
    }

    this.add = function(key, value) {
        var index = hash(key, storageLimit);
        if(storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if(storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if(inserted === false) {
                storage[index].push([key, value]); // multiple entries into one bucket
            }
        }
    };

    this.remove = function(key) {
        var index = hash(key, storageLimit);
        if(storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index]; i++) {
                if(storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function(key) {
        var index = hash(key, storageLimit);
        if(storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if(storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };
}

console.log(hash('ryan', 10));

let ht = new HashTable();
ht.add('apples', 'person');
ht.add('mia', 'dog');
ht.add('rex', 'dinosaur');
ht.add('nemo', 'fish');
console.log(ht.lookup('nemo'));
ht.print();