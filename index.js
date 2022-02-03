const { str } = require("ajv")
const { interfaces } = require("mocha")
const {assert, range}  = require("bsert")
const { ServerUnaryCall } = require("grpc")

//brute force method 
function brute_force_min(goal, numbers) {
    let sequences = brute_force_all_sequences(goal, numbers)
    console.log("Sequences: ", sequences)
        if (sequences.length == 0) {
            return -1
        } else {
            return Math.min(sequences.map(s => calcute_num_operations(s)))
        }
}

function brute_force_all_sequences(goal, numbers, curr = 0) {
    let sequences = []
    //base case 
    let temp_seq = "*".repeat(numbers.length)
    let temp_num = calculate_from_seq(numbers, temp_seq)
    if (temp_num == goal && curr == 0) {
        sequences.push(temp_seq)
        return sequences
    }

    if (curr == goal) {
        sequences.push(temp_seq)
        return sequences
    }
    if (numbers.length <= 1) {
        return sequences
    }

    let i = 1
    while (i < numbers.length) {
        let temp_seq = "*".repeat(i)
        let temp_numbers = numbers.slice(0, i)
        let temp_num = calculate_from_seq(temp_numbers, temp_seq)
        let temp_ending_numbers = numbers.slice(i)
        let temp_sequences_plus = brute_force_all_sequences(goal, temp_ending_numbers, curr + temp_num)
        if (temp_sequences_plus.length > 0) {
        for (var seq of temp_sequences_plus) {
            console.log("Seq: ", seq)
            sequences.push("*".repeat(i) + "+" + seq)
        }
    }

        let temp_sequences_minus = brute_force_all_sequences(goal, temp_ending_numbers, temp_num - curr)
        if (temp_sequences_minus.length > 0) {
        for (var seq of temp_sequences_minus) {
            console.log("Seq: ", seq)
            sequences.push("*".repeat(i) + "-" + seq)
        }
        }

        i++;
    }
    console.log(sequences)
    return sequences
}
//fastest way to get to x from "..."

//sequence "321", find fewest operations to get number 6
//"*+*+*"
//"4321"



function calcute_num_operations(seq) {
    //console.log(seq, seq.length, seq.split("*").length)
    return seq.length - (seq.split("*").length - 1)
}

function calculate_from_seq(numbers, seq) {
    assert((seq.split("*").length - 1), numbers.length, "Must have the same number of '*' as numbers")
    let plus_index = seq.includes("+") ? seq.indexOf("+") : seq.length
    let minus_index = seq.includes("-") ? seq.indexOf("-") : seq.length

    let operation_index = Math.min(plus_index, minus_index)//min of first occurance of + and -
    //console.log(seq, operation_index)
    let operation_char = seq.charAt(operation_index);
    let val = 0
    if (operation_index == -1 || operation_index == seq.length) {
        return parseInt(numbers)
    }
    if (operation_index != 0) {
        val = parseInt(numbers.slice(0, operation_index))
    }
    let new_numbers = numbers.slice(operation_index)
    let new_seq = seq.slice(operation_index+1)
    let new_val = calculate_from_seq(new_numbers, new_seq)
    switch (operation_char) {
        case "+": 
            val += new_val 
            break 
        case "-":
            val -= new_val
            break
    }
     return val 
}

assert(calculate_from_seq("321", "***"), 321)
assert(calculate_from_seq("1", "*"), 1)
assert(calculate_from_seq("321", "**+*"), 33)
assert(calculate_from_seq("321", "*+*+*"), 6)
assert(calculate_from_seq("54321", "**+**+*"), 87)
assert(calcute_num_operations("**+**+*"), 2)
console.log(brute_force_min(1, "21"))
assert(brute_force_min(1, "1") == 0, true)
assert(brute_force_min(1, "21") == 1, true)
assert(brute_force_min(33, "321") == 1, true)
// //assert(brute_force_min(1, "321") == 2, true)
//console.log(brute_force_min(1, "321"))
//console.log(brute_force_min(100, "987654321"))