function distanceToNearestVowel(input_str){
    let vowels = 'ueoai';
	let vowel_indexes = input_str.split('').map((element,ind)=>{
		if(vowels.indexOf(element)!=-1){
			return ind;
		}else{
			return -1;
		}
	}).filter((element)=>element!=-1);
	console.log('vowel_indexes');
	return input_str.split('').map((_,ind)=>{
		return vowel_indexes.reduce((min_dist,indexOfVowel)=>{
			return Math.min(min_dist,Math.abs(indexOfVowel-ind));
		},1000000000000);
	});
}
function oddSquarePatch(matrix){
	let size = Math.min(matrix.length,matrix[0].length);
	let bit_matrix = matrix.map((row)=>row.map((ele)=>ele%2==1?0:1));
	while(size !=0){
		// console.log(size)
		for(let i=0;i<=matrix.length - size;i++){
			for(let j=0;j<=matrix[0].length - size;j++){
				// console.log(`${i} ${j}`);
				if(sum_sub_matrix(i,j,size,bit_matrix)==0){
					return size;
				}
			}
		}
		size-=1;
	}
	return 0 ;
	
}
function sum_sub_matrix(row,col,size,matrix){
	let s = 0;
	for(let i = row;i<row+size;i++){
		for(let j=col;j<col+size;j++){
			s+=matrix[i][j];
		}
			
	}
	return s;
}


// let a  = oddSquarePatch([
//   [1, 2, 4, 9],
//   [4, 5, 5, 7],
//   [3, 6, 1, 7]
// ]);
// console.log(a);


// let a = oddSquarePatch([[2, 4, 6]]) ;
// console.log(a);

function junctionOfSelf(number){
	let n = number.toString().length;
	let juncs = [];
	for(let i = number-n*9;i<number;i++){
		if(i+i.toString().split('').reduce((acc,val)=>acc+parseInt(val),0)==number){
			juncs.push(i);
		}
	}
	if(juncs.length ==0){
		return 'Self';
	}else{
		return juncs;
	}
}
// let a = junctionOfSelf(818);
// console.log(a);


function morse(message){
	morseToDots = {
  		".-":"A", "-...":"B", "-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
  		"--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
		"--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
  		"...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
 		"-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
  		"...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
  		"---..":"8", "----.":"9", "-.-.--":"!", "   ":" ", "..--..":"?",
  		".-.-.-":".", ".----.":"\"", "---..." :":", "--..--":", ", " ":""
		};
	return message.split(' ').map(e=>morseToDots[e]).join('');
}

// console.log(morse(".... . .-.. .--.   -- .   -.-.--"));
function getFrame(col,row,char){
	let frame = [];
	let row_head = [char.repeat(col)];
	frame.push(row_head);
	for(let i =0;i<row-2;i++){
		frame.push([`${char}${' '.repeat(col-2)}${char}`]);
	}
	frame.push(row_head);
	return frame;
}