function bubbleSort(arr){
  let swapped
  do {
    swapped = false
    for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] > arr[i+1]) {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
    }
  } while (swapped)
}

export default bubbleSort
