let balance = 10000

let name = prompt('Как вас зовут?');
switch (name) {
    default:
        console.log('Нет такова пользователя');
        break
    case 'Alex': {
        let account = prompt('Номер счёта?');
        switch (account) {
            default:
                console.log('Неправелный пороль');
                break
            case '7777': {
                let money = +prompt('Сколько обноличить?');
                switch (money) {
                    default:
                        console.log(balance - money, money);
                        break

                }

            }

        }

    }

} 