export const sayHello = (name) => {
    return `Hello, ${name}`;
}

export const website = () => {
    return `https://fikriyuwi.com`;
}

export const sum = (numbers) => {
    let total = 0;
    for(const number of numbers)
    {
        total += number;
    }
    return total;
}