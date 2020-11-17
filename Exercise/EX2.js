function magicSigil(input_str) {
	let vowels = 'aiueo';
	let chars = input_str
		.split(' ') // cat chuoi ngay dau cach
		.join('') // noi lai ko co dau cach
		.toLowerCase() // biến về chữ thường
		.split('') // biến thành mảng
		.reverse(); // đổi thành mảng 
	// console.log(chars)
	chars = new Array(...new Set(chars)); // dùng Set thì sẽ giữ lại phần tử đầu tiên(do mảng ngược lại nên => giữ phần tử cuối )
	return chars.filter((val) => 'ueoai'.indexOf(val) == -1).reverse().join('');
}
// console.log(magicSigil('I have a job i enjoy and it pays well!'))
Array.prototype.count = function (countValue) {
	let ct = 0;
	// console.log(this);
	for (let value of this) {
		ct = ct + (value == countValue ? 1 : 0);
	}
	return ct;
};

function selfDescribe(number) {
	if (number.toString().length % 2 == 1) return false
	let str = number.toString();
	let digits = number.toString().split('');
	let counter = {};
	for (let dg of '0123456789') {
		counter[parseInt(dg)] = digits.count(dg);
	}
	for (let i = 0; i < str.length; i = i + 2) {
		let x = str[i];
		let y = str[i + 1];
		// console.log(x,y);
		// console.log(counter[x]);
		if (counter[y] != x) {
			return false;
		}
	}
	return true;
}
// selfDescribe(10123331)
function isMagicSquare(matrix) {
	if (matrix.length != Math.min(...matrix.map(ar => ar.length))) return false
	let n = matrix.length -1
	let rows=[...matrix]
	let cols=[]
	let diag=[[],[]]
	for (let i = 0; i < matrix.length; i++) {
		let col = []
		for (let j = 0; j < matrix[i].length; j++) {
			col.push(matrix[j][i])
			if(i==j){
				diag[0].push(matrix[j][i])
			}
			if(j==n-i){
				diag[1].push(matrix[j][i])
			}
		}
		cols.push(col)
	}
	let lines = [...rows,...cols,...diag].map(line=>line.reduce((acc,val)=>acc+val,0))
	return lines.every(val=>val==lines[0])
}
// let a =isMagicSquare([
// 	[2, 7, 6],
// 	[9, 3, 1],
// 	[4, 3, 8]
// ])

function arrange(str){ // re arrange consonant vs vowel to the order
	let _str = str.toLowerCase();
	let cons = _str.split('').filter(val=>'ueoai'.indexOf(val) == -1).join('');
	// console.log(cons)
	let vows = _str.split('').filter(val=>'ueoai'.indexOf(val) != -1).join('');
	return `${cons}_${vows}xxx`;
}

function fiscalCode({name,surname,gender,dob}){
	const MONTHS = {
    	1: "A",
    	2: "B",
    	3: "C",
    	4: "D",
    	5: "E",
    	6: "H",
    	7: "L",
    	8: "M",
    	9: "P",
		10: "R",
    	11: "S",
    	12: "T"
	};
	let code = '';
	let nameArranged = arrange(name);
	let surnameArranged = arrange(surname);
	// console.log(surnameArranged);
	if(surnameArranged.split('_')[0].length < 3){
		surnameArranged = surnameArranged.replace('_','');
	}
	code = code + surnameArranged[0] + surnameArranged[1] + surnameArranged[2];
	console.log(code);
	switch(nameArranged.split('_')[0].length){
		case 0:
		case 1:
		case 2:
		nameArranged = nameArranged.replace('_','');
		code = code + nameArranged[0]+ nameArranged[1]+nameArranged[2];
			break;
		case 3:
		code = code + nameArranged[0]+nameArranged[1]+nameArranged[2];
			break;
		default:
		code = code + nameArranged[0]+nameArranged[2]+nameArranged[3];
	}
	code = code + dob[dob.length-2] + dob[dob.length-1];
	code = code + MONTHS[parseInt(dob.split('/')[1])]	;
	console.log(code);
	if(gender == 'M'){
		let day = parseInt(dob.split('/')[0]);
		code = code + (day<10?`0${day}`:`${day}`);
			
	}
	if(gender =='F'){
		let day = parseInt(dob.split('/')[0]);
		code = code + `${day+40}`;
	}

	return code ;
}
function boomerang(arr){
	let ct = 0;
	for(let i=0;i<arr.length -2 ;i++){
		x = arr[i];
		y = arr[i+1];
		z = arr[i+2];
		ct = ct + (x==z && x!=y?1:0);
	}
	return ct ;

}