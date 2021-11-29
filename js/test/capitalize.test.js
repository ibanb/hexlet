    import capitalize from "../src/capitalize.js";
    
    if (capitalize("hello") !== "Hello") {
        throw Error ('Function is not correct');
    }

    // if (capitalize('') !== '') {
    //     throw new Error('Функция работает неверно!');
    // }

    console.log('all tests done');