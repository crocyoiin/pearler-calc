import { getData, setData } from "./datastore.ts";

/**
 * sortData
 * sorts data by increasing total interest, then by alphabetical order
 * @params {*} dataArray
 * @returns {*} sortedArray
 */

export function sortData(dataArray) {
	let sortedArray = dataArray;
	sortedArray.sort(function(a,b){
		if (a.name.toLowerCase() < b.name.toLowerCase()) {
				return -1;
			}
			if (a.name.toLowerCase() > b.name.toLowerCase()) {
				return 1;
			}
			return 0;
	});

	sortedArray.sort(function(a,b) {
		return a.totalInterest - b.totalInterest;
	});
	return sortedArray; 
}

/**
 * viewData
 * Lists and prints top 5 options
 * @params sortedData array
 * @returns none
 */
export function viewData(sortedArray) {

	let data = getData();
	data.top.push(`The best option is ${sortedArray[0].name}, with a total interest charged of $${Math.round(sortedArray[0].totalInterest)}.`);
    console.log(`The best option is ${sortedArray[0].name}, with a total interest charged of $${Math.round(sortedArray[0].totalInterest)}.`);

		let max = 5;
		if (sortedArray.length < 5) {
			max = sortedArray.length;
		}

    for (let i = 1; i < max; i++) {
			let percDiff = Math.round(((sortedArray[i].totalInterest / sortedArray[0].totalInterest) - 1) * 100);
			data.top.push(`${sortedArray[i].name} is ${percDiff}% more expensive, with a total interest charged of $${Math.round(sortedArray[i].totalInterest)}.`);
			console.log(`${sortedArray[i].name} is ${percDiff}% more expensive, with a total interest charged of $${Math.round(sortedArray[i].totalInterest)}.`);
    }

	if (data.top.length == 0) {
		data.top.push(" ");
	}
	

	setData(data);

}

/**
 * viewAll
 * Lists all repayment type options in order of best to worst value for money
 * @param sortedArray 
 * @return none
 */
export function viewAll(sortedArray) {
	let i = 1;
	console.log('Rank || Repayment Type || Total Interest Charged');
	console.log();

	let data = getData();

	for (const item of sortedArray) {
		console.log(`${i}. ${item.name}: $${item.totalInterest}`);
		data.all.push(`${i}. ${item.name}: $${Math.round(item.totalInterest)}`);
		i++;
	}	

	setData(data);
}