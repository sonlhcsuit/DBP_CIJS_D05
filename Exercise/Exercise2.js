function magicSigil(input_str){
	let vowels = 'aiueo';
    let chars = input_str
    .split(' ') // cat chuoi ngay dau cach
    .join('') // noi lai ko co dau cach
    .toLowerCase()
    .split('')
    .reverse();
    // console.log(chars)
	chars = new Array(...new Set(chars));
	return chars.filter((val)=>'ueoai'.indexOf(val)==-1).reverse().join('');
}
// console.log(magicSigil('I have a job i enjoy and it pays well!'))
Array.prototype.count = function (countValue){
	let ct = 0;
	// console.log(this);
	for(let value of this){
		ct=ct + ( value==countValue ? 1:0);
	}
	return ct;
};

function selfDescribe(number){
    if(number.toString().length %2==1) return false
    
	let str = number.toString();
	let digits = number.toString().split('');
	let counter = {};
	for(let dg of '0123456789'){
		counter[parseInt(dg)]=digits.count(dg);
	}
	for(let i=0;i<str.length;i=i+2){
		let x = str[i];
        let y = str[i+1];
        console.log(x,y);
        console.log(counter[x]);
		if(counter[y]!=x){
			return false;
		}
	}
	return true;
	
}
selfDescribe(10123331)