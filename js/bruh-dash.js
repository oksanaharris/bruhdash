var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, val) {
    for (var i = 0; i < arr.length; i++){
      if(val == arr[i]){
        return i; 
      }
    }
    return -1;
  },

  // returns the index of the last matching element from left to right
  lastIndexOf: function (arr, val) {
    var index;  
    for (var i = 0; i < arr.length; i++){
     console.log('i '+ i + ' ' + arr[i]+ ' ' + val + ' ' + index);
      if(val === arr[i]){
        index = i;
        console.log('pass');
      }
    }
    if (index){
      return index;
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    return arr.slice(0,arr.length-1);
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var length = arr.length;
    for (var i = length; i > -1; i--){
      if (!arr[i]){
        arr.splice(i,1);
      }
    }
    return arr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, startIn, endIn) {
    var newArr = [];
    for (var i = startIn; i < endIn; i++){
      newArr.push(arr[i]);
    }
    return newArr;
  },

  // returns a slice of array with n elements dropped from the beignning

  drop: function(arr, n){
  if (n === undefined){
    arr.shift();
    return arr;
  }
  else {
    for (var i = 0; i < n; i++){
      arr.shift();
    }
    return arr;
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
  if (n === undefined){
    arr.pop();
    return arr;
  }
  else {
    for (var i = 0; i < n; i++){
      arr.pop();
    }
    return arr;
    }
  },


  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if (n === undefined){
      return arr.slice(0,1);
    }
    else {
    return arr.slice(0,n);
    }
  },


  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    if (n === undefined){
      return arr.slice(arr.length-1, arr.length);
    }
    else {
    return arr.slice(arr.length-n, arr.length);
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index

  fill: function(arr, val, startIndex, endIndex) {
    if (startIndex === undefined){
      startIndex = 0;
    }
    if (endIndex === undefined){
      endIndex = arr.length;
    }
    for (var i = startIndex; i < endIndex; i++){
      arr[i]=val;
    }
    return arr;
  },

  // removes all given values from an array
  // parameters: arr, and the values to remove
  // should be able to accept any number of parameters for the values to remove
  // returns the array - without the values

  pull: function (arr, val) {
    for (var i = arr.length - 1; i >= 0; i--){
      for (var j = 0; j < val.length; j++){
        if (arr[i] === val[j]){
          arr.splice(i, 1);
        }
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  // returns an array of removed elements

  pullAt: function (arr, ind) {
    var newarr = [];
    ind.sort((a, b) => a-b);
    for (var i = ind.length - 1; i >= 0; i--){
          newarr.push(arr[ind[i]]);
          arr.splice(ind[i], 1);
        }
    newarr.reverse();
    return newarr;

    //this should be returning the array of removed values rather than the original array without the removed values - per LoDash documentation
    //changed tests to check for newarr rather than arr
  },

  // creates an array excluding all the specified values

  without: function(arr, val) {
  for (var i = arr.length - 1; i >= 0; i--){
      for (var j = 0; j < val.length; j++){
        if (arr[i] === val[j]){
          arr.splice(i, 1);
        }
      }
    }
    return arr;
  },

  // returns an array with specified values excluded

  difference: function(arr, val) {
    for (var i = 0; i < arr.length; i++){
      for (var j = 0; j < val.length; j++){
        if (arr[i] === val[j]){
          arr.splice(i,1);
        }
      }
    }
    return arr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr1, arr2) {
    var newarr = [];
    for (var i = 0; i < arr1.length; i++){
      var newinnerarr = [];
      newinnerarr.push(arr1[i],arr2[i]);
      newarr.push(newinnerarr);
    }
    return newarr;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    var newarr = [];   
    var innerArrLength = arr[0].length; 
    for (var i = 0; i < innerArrLength; i++){ 
      var newinnerarr = []; 
      for (var j = 0; j < arr.length; j++){ 
        newinnerarr.push(arr[j][i]);
      }
      newarr.push(newinnerarr);
    }
    return newarr;
},

  // creates an array of elements into groups of length of specified size

  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};