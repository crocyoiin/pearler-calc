import { getData, setData } from "./datastore";


/**
 * sortData
 * sorts data by increasing total interest, then by alphabetical order
 * @params {*} dataArray
 * @returns {*} sortedArray
 */
function sortData(dataArray) {

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
 * @returns
 */
function viewData(sortedArray) {

    console.log(`The best option is ${sortedArray[0].name}, with a total interest charged of $${sortedArray[0]}.`);

    for (let i = 1; i < sortedArray.length; i++) {
			let percDiff = (sortedArray[i].totalInterest / sortedArray[0].totalInterest) * 100 - sortedArray[0].totalInterest;
			console.log(`${sortedArray[i].name} is ${percDiff}% more expensive, with a total Interest charged of $${sortedArray[i].totalInterest}. `;)
    }
	}

	/**
	 * viewAll
	 * Lists all repayment type options in order of best to worst value for money
	 * @param sortedArray 
	 * @return none
	 */
	function viewAll(sortedArray) {
		let i = 1;
		console.log('Rank || Repayment Type || Total Interest Charged');
		console.log();

		for (const item of sortedArray) {
			console.log(`${i}. ${item.name}: $${item.totalInterest}`);
			i++;
		}
	}