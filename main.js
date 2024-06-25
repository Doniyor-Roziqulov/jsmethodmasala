{
    // 1-misol
    let numbers = [-5, 3, 5, -2];
    let result = [];

    let arrow = () => {
        numbers.forEach((son) => {
            if (son > 0) {
                result.push(son);
            }
        });
        return result;
    };

    // console.log(arrow());
}

{
    // 2-misol

    let arrow = (str) => str.split("").reverse().join("");

    // console.log(arrow("salom"));
}

{
    // 3-misol

    let arrow = (number) => {
        let num = number.toString();
        return num.split("").reverse().join("");
    };

    // console.log(arrow(123));
}

{
    // 4-misol
    let array = [false, true, false];
    let result = [];
    let arrow = () => {
        array.forEach((Bool) => {
            if (Bool == false) {
                result.push(Bool);
            }
        });
        return result;
    };
    // console.log(arrow());
}

{
    // 5-misol
    let array = [1, 2, 3, 4, 5];
    let sum = 0;
    let arrow = () => {
        array.forEach((juft) => {
            if (juft % 2 == 0) {
                sum += juft;
            }
        });
        return `sum = ${sum}`;
    };
    // console.log(arrow());
}
{
    // 6-misol
    let array = [5, 2, 3];
    let result = [];
    let arrow = () => {
        array.forEach((son) => {
            son = son ** 2;
            result.push(son);
        });
        return result;
    };
    // console.log(arrow());
}

{
    // 7-misol
    let result = [];
    let arrow = (n) => {
        for (let i = 1; i <= n; i++) {
            result.push(i);
        }
        return result;
    };
    // console.log(arrow(5));
}

{
    // 8-misol
    let result = [];
    let arrow = (a, b) => {
        for (let i = a; i <= 9; i++) {
            if (i % 2 == 0) {
                result.push(i);
            }
        }
        return result;
    };
    // console.log(arrow(2, 9));
}

{
    // 9-dars
    let arrow = (str) => {
        a = str.split("");
        let array = [];
        for (let value of a) {
            if (array.length == 0) {
                array.push(value.toUpperCase());
            } else {
                array.push(value.toLocaleLowerCase());
            }
        }
        return array.join("");
    };
    // console.log(arrow("salom"));
}

{
    // 10-misol
    let arrow = (str, n) => {
        return str.repeat(n);
    };
    // console.log(arrow("salom", 20));
}

{
    // 11-misol
    let array = [1, 2, 3];
    let arrow = () => {
        return array.reverse();
    };
    // console.log(arrow());
}

{
    // 12-misol
    let array = [2, 1, 13, 4];
    let arrow = () => {
        return array.sort((x, y) => x-y);
    };
    // console.log(arrow());
}
