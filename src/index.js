module.exports = function getZerosCount(number, base) {
  // your implementation
	var divisors = [];
	var index = base;
	var simpleDiv = 2;
	while(index != 1){
		if(index % simpleDiv != 0){
			simpleDiv++;
		}
		else{
			index = index / simpleDiv;
			divisors.push(simpleDiv);
		}
	}
	var exp = 0;
	var max = divisors[0];
	for(var i = 0; i < divisors.length; i++){
		if(max < divisors[i]){
			max = divisors[i];
		}
	}
  	
	for(var i = 0; i < divisors.length; i++){
	 if (max == divisors[i]){
			exp = exp+1;
		}
	
	}
	

	
	
	var tmp = max;
	var result = 0;
	while(number > max){
		result = result + Math.floor(number / max);
		max= max * tmp;
	}
	if  (exp>0)
		{
	result = Math.floor(result/exp);
	}
	//console.log(exp);
	//console.log(divisors);
//	console.log(max);

	return result;
}
  
  