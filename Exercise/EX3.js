function cycle(year) {
    const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
    const animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep', 'Monkey', 'Rooster', 'Dog', 'Pig'];
    const remainder = (year % 60) + 56;
    const element = elements[Math.floor(remainder / 2) % elements.length];
    const animal = animals[remainder % animals.length];

    return `${element} ${animal}`;
}
Array.prototype.count = function (countValue) {
	let ct = 0;
	// console.log(this);
	for (let value of this) {
		ct = ct + (value == countValue ? 1 : 0);
	}
	return ct;
};
function pokerFlush(handcards, deskcards) {
    let cards = handcards.concat(deskcards);
    console.log(cards);
    let NoS = cards.count('S');
    let NoH = cards.count('H');
    let NoD = cards.count('D');
    let NoC = cards.count('C');

    if (NoD >= 5) {
        return `diamond flush`;
    } else if (NoS >= 5) {
        return `spade flush`;
    }
    else if (NoH >= 5) {
        return `heart flush`;
    }
    else if (NoC >= 5) {
        return `club flush`;
    } else {
        return false;
    }
}
function diceGambling(roll_result) {
    return roll_result.reduce((acc, val) => {
        acc.sum = acc.sum + acc.base*val
        acc.base = val == 6 ? 2 : val == 1 ? 0 : 1
        return acc
    }, { sum: 0, base: 1 }).sum

}
// console.log(diceGambling([1,2,3]))
function digitalDrome(number){
    let temp = number.toString();
    // console.log(temp);
    let arr = temp.split("");
    let checktrung = 0;
    let checkduong = 0;
    let checkam = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (i + 1 < arr.length) {
            let checkhieu = parseInt(arr[i + 1]) - parseInt(arr[i]);
            if (checkhieu > 0) {
                checkduong += 1;
            }
            if (checkhieu < 0) {
                checkam += 1;
            }
            if (checkhieu == 0) {
                checktrung += 1;
            }
        }
    }
    if (checktrung == 0) {
        if (checkduong > 0 && checkam == 0) {
            // alert("is Metadrome")
            return `${number} is Metadrome`;
        }
        if (checkduong == 0 && checkam > 0) {
            // alert("is Katadrome");
            return `${number} is Katadrome`;
        }
    } else if (checktrung > 0) {
        if (checkduong > 0 && checkam == 0) {
            // alert("is Plaindrome")
            return `${number} is Plaindrome`;
        }
        if (checkduong == 0 && checkam > 0) {
            // alert("is Nialpdrome");
            return `${number} is Nialpdrome`;
        }
        if (checkduong == 0 && checkam == 0) {
            // alert("is Repdrome")
            return `${number} is Repdrome`;
        }
    }
    // alert("is Nondrome")
    return `${number} is Nondrome`;
}