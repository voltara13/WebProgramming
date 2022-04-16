export const buttonCalculateSelector = $('#calculate-button')
export const depositTypeSelector = $('#deposit-type')

const textResultSelector = $('#text-result')
const depositTermSelector = $('#deposit-term')
const depositAmountSelector = $('#deposit-amount')

const variants = [
    [
        {percent: 5, text: "3 месяца - 20%"},
        {percent: 11, text: "6 месяцев - 22%"},
        {percent: 17.25, text: "9 месяцев - 23%"},
        {percent: 24, text: "1 год - 24%"},
        {percent: 27, text: "1,5 года - 18%"},
        {percent: 30, text: "2 года - 15%"}
    ],
    [
        {percent: 10, text: "6 месяцев - 20%"},
        {percent: 22, text: "1 год - 22%"},
        {percent: 22.5, text: "1,5 года - 15%"},
        {percent: 20, text: "2 года - 10%"}
    ]
]

export function calculate() {
    const depositAmount = parseFloat(depositAmountSelector.val())
    if (depositAmount > 0) {
        const percent = depositTermSelector.val() / 100
        const depositResult = Math.round((depositAmount + depositAmount * percent) * 100) / 100
        textResultSelector.html(
            `Вид вклада: ${depositTypeSelector.find('option:selected').text()}<br>
            Срок и годовая ставка: ${depositTermSelector.find('option:selected').text()}<br>
            Сумма вклада в начале срока: ${depositAmount} руб.<br>
            Сумма вклада в конце срока: ${depositResult} руб.<br>`
        )
    }
    else {
        textResultSelector.text('Введите верное значение')
    }
}

export function onChangeDepositTerm() {
    const chosen = depositTypeSelector.val()
    const list = variants[chosen]

    depositTermSelector.find('option').remove()

    for (let i = 0; i < list.length; i++){
        depositTermSelector.append('<option value=' + list[i].percent + '>' + list[i].text + '</option>>') }
}
