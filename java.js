let name = 'Alex'
let money = 10000
let account = 7777


let first_q = prompt(
    'Whats your name?'
)
if(
    first_q === 'Alex'
    ) 
{
console.log(
    'Введите номер счета'
    )
} 
else{
    console.log(
    "Пользователь не найден"
    );
}

let second_q = prompt(
    'Введите номер  счета'
)
if(
    second_q === 7777
) {
console.log(
    'Сколько обналичить?'
    );
}
else if (
    second_q > 10000
    ё) 
{
    console.log(
        'Пользователь не найден'
    );
}

let third_q = prompt(
    'Сколько обналичить?'
)
if(
    third_q <= 10000
    )
{
    console.log(
        'Все отлично!'
    );
}
else {
    console.log(
        'Не достачно средств!'
    )
}

let fourth_q = prompt(
    'Сколько снял? Сколько осталось?'
)
if(
    fourth_q = money - third_q
)
{
    console.log(
                
    )
}
