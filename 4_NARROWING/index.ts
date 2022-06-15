// RECURSO PARA IDENTIFICAR O TIPO DE DADO

// => TYPE GUARD - identificar por meio de typeof

type value = string | number;

function soma(a: value, b: value) {

    if (typeof (a) === 'string' && typeof (b) === 'string') {

        console.log(parseFloat(a) + parseFloat(b));

    } else if (typeof (a) === 'number' && typeof (b) === 'number') {

        console.log(a + b);

    } else {

        console.log('Não é possível realizar a operação!');

    }

}

soma(2, 5);
soma('15', '3');
soma('20', 2);

/**********************************************/

// => Checagem se valor existe

function operation(arr: number[], operator: string | undefined) {

    if (operator) {

        if (operator === 'sum') {

            const sum = arr.reduce((i, total) => i + total);
            console.log('Soma é = ' + sum);

        } else if (operator === 'mult') {

            const mult = arr.reduce((i, total) => i * total);
            console.log('Mult. é = ' + mult);

        }

    } else {
        console.log('Defina um operador!')
    }

}

operation([1, 5, 6], 'sum');
operation([5, 8, 2], 'mult');

/***************************************************/

// => DESAFIO

type Review = number | boolean;

function review(note: Review) {

    if (typeof (note) === 'number') {

        console.log(`Sua nota foi: ${note}`);

    } else if (typeof (note) === 'boolean') {

        if(note === true) {

            prompt('Informe a nota: ');

        } else {

            console.log('Usuário não quer dar nota!');

        }

    }

}

review(false);
review(3);
//review(true);