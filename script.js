console.log("Hello World!")

function getComputerChoice(){
    const choice = Math.round((Math.random() * 3 + 0.5));
    console.log(choice)
    switch (choice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "error!";
    }
}

console.log(getComputerChoice());


// ones = 0
// twos = 0
// threes = 0
// for (i = 0; i < 10000; i++){
//     const choice = Math.round((Math.random() * 3 + 0.5));
//     switch (choice){
//         case 1:
//             ones++;
//             break;
//         case 2:
//             twos++;
//             break;
//         case 3:
//             threes++;
//             break;
//         default:
//             console.log("error!");
//     }
// }
// console.log(ones);
// console.log(twos);
// console.log(threes);