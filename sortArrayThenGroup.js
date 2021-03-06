/**
 * Challenge 6 in zero to mastery course
 * Question 1: Clean the room function.
 * Given an array [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
 * make a function that organizes these into individual array that is ordered.
 * For example: answer = [[1,1,1],[2,2,2],4,5,10,[20,20],391,392,591]
 * Bonus: Make it so it organizes strings differently from number types 
 * i.e: [[1,1,1],2,3,['a','b','c']] 
 * 
 */

let alphaGrp = /[^a-zA-Z]/g;
let numGrp = /[^0-9]/g;

/**
 * Sort function for Numeric and Alphanumeric and grouping them together
 * @param {array} arr - takes in an array of strings and numbers
 * @returns {array} newArray - sorted and group by numbers then alphanumeric
 * @author Paul Caoile
 */

function sortNumAlpha(arr) {
    let newArray = [];              //final results will be put into this array
    let alphaArray = [];            //only alphanumeric characters or words goes in this array
    let counter = 0;                //counter to use for repeating items
    let newGrp = new Array();       //an array for the recurring numeric groups
    let tempArray = new Array();    //temporary array holder (sorted)
    
    tempArray = arr.sort(compSortByNumAlpha);
    tempArray.forEach((item, i) => { 
        if(typeof item !== 'string') {
            if(item === tempArray[i+1]) {                                       //compares if current item is strictly equal
                counter++;                                                      //to the next item
            } else if(item !== tempArray[i+1] && counter > 1) {                 //when no repeating items found,
                newGrp = tempArray.slice(i-counter, i+1);                       //group all repeating item into an array
                newArray.push(newGrp);                                          //push newGrp array to newArray
                counter = 0;                                                    //reset counter if no duplicates found
                } else {
                    newArray.push(item);                                        //push non-repeating to the new Array
                    newGrp = [];                                                //reset newGrp array for new group
                }
        } else {
            alphaArray.push(item);                                              //push all found alphabets into separate array
        }
    });
    if(alphaArray.length !== 0) {
        newArray.push(alphaArray);      //push alphabet array towards the end of the new Array if not empty 
    }
    return newArray;
}

/**
 * Improving the sort function
 * determines if parameters are either number or alphanumeric
 * then sorts them accordingly
 * @param {string, number} a - takes either a string or a number
 * @param {string, number} b - takes either a string or a number
 * @returns {number} 1 or -1 
 */
function compSortByNumAlpha(a, b) {
    let AInt = parseInt(a, 10);
    let BInt = parseInt(b, 10);
    
    if(isNaN(AInt) && isNaN(BInt)) {
        let aAlpha = a.replace(alphaGrp, '');
        let bAlpha = b.replace(alphaGrp, '');
        
        if(aAlpha === bAlpha) {
            let aNum = parseInt(a.replace(numGrp, ''), 10);
            let bNum = parseInt(b.replace(numGrp, ''), 10);
        } else {
            return aAlpha > bAlpha ? 1 : -1;
        }
    } else if(isNaN(AInt)) {
        return 1;
    } else if(isNaN(BInt)) {
        return -1;
    } else {
        return AInt > BInt ? 1 : -1;
    }
}
//for Jest testing only
module.exports = sortNumAlpha;

/**
 * Running the function
 * @example
 * //returns
 * [ [ 1, 1, 1, 1 ],2,[ 3, 3, 3, 3 ],[ 4, 4, 4, 4 ],5,7,8,9,11,23,34,44,55,
 * [ 'a', 'b', 'c', 'cat', 'dog', 'e' ] ]
 */
