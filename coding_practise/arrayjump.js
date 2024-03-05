function arrayJump(arr) {
    console.log(arr);
    const indexOfLargest = arr.indexOf(Math.max(...arr));
    let currentIndex = indexOfLargest;
    console.log(currentIndex);
    let jump = 0;

    while (true) {
        const jumpSize = arr[currentIndex];
        console.log("jumpSize", jumpSize);

        if (jumpSize <= 0) {
            return -1;
        }

        currentIndex = (currentIndex + jumpSize) % arr.length;
        jump++;

        if (currentIndex === indexOfLargest) {
            return jump;
        }

        console.log("jump", jump);
        console.log(arr.length);

        // If you've looped through the entire array and haven't reached the same index, it's impossible
        if (jump >= arr.length) {
            return -1;
        }
    }
}

console.log(arrayJump([2, 3, 5, 6, 1]));
