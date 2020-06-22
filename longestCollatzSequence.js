

function longestCollatz(max) {

    let count = 1
    let maxLength = 1
    let cache = 1

    for (let i = 2; i < max; i++) {

        count = 1
        let x = i
        while (x !== 1) {
            if (x % 2 === 0) {
                x /= 2
            } else {
                x = x * 3 + 1
                count += 1
            }
        }
        if (count > maxLength) {
            maxLength = count
            cache = i
        }
    }
    console.log('The start number for longest collatz squence is :', cache, "with", maxLength, "sequences")
}

longestCollatz(1000000)