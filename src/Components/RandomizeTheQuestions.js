function randomizeArray(array) {
  let count = array.length,
    randomnumber,
    temp;
  let temp_array = [...array];
  while (count) {
    randomnumber = (Math.random() * count--) | 0;
    temp = temp_array[count];
    temp_array[count] = temp_array[randomnumber];
    temp_array[randomnumber] = temp;
  }
  return temp_array;
}

const new_res = data => randomizeArray(data);
export default new_res;
