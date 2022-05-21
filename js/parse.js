import axios from "axios";
import $ from "jquery";

export const buttonLoadVacanciesSelector = $('#vacancy-button')

const vacancyIdSelector = $('#vacancy-id')
const vacancyAmountSelector = $('#vacancy-amount')
const vacancyResultSelector = $('#vacancy-result')

export const loadVacancies = () => {
    vacancyResultSelector.empty()
    api.getVacancy(vacancyIdSelector.val(), vacancyAmountSelector.val()).then(data => {
        data.items.map(item => {
            if (item.salary)
                vacancyResultSelector.append(`<p><a target="_blank" href="https://novosibirsk.hh.ru/vacancy/${item.id}">${item.name} зарплата: ${item.salary.from} ${item.salary.currency}</a></p>`)
            else
                vacancyResultSelector.append(`<p><a target="_blank" href="https://novosibirsk.hh.ru/vacancy/${item.id}">${item.name}</a></p>`)
        });
    })
}

const instance = axios.create({
    baseURL: "https://api.hh.ru/",
})

const api = {
    getVacancy(vacancy, amount) {
        return instance.get(`vacancies?text=${vacancy}&per_page=${amount}`).then(response => response.data)
    }
}