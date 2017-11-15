//printing Diamond with for loop
 const printDiamond = function(height, str) {
	if(height % 2 === 0) {
		height = height - 1;
	}
	const character = function(n, char) {
		let a = '';
		for(let i = 0; i < n; i=i+1) {
			a = a + char;
		}
		return a;
	};
	let spaceN = (height-1)/2;
	let strN = 1;
	for(let i = 1; i <= height; i=i+1){
		console.log(character(spaceN, ' ') + character(strN, str));
		if(i <= height/2) {
			spaceN = spaceN -1;
			strN = strN + 2;
		} else {
			spaceN = spaceN + 1;
			strN = strN - 2;
		}
	}
};
