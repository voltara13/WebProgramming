import css from "../css/index.css"
import html from "../html/index.html"

import { calculate, onChangeDepositTerm, buttonCalculateSelector, depositTypeSelector } from "./calculator";
import { loadVacancies, buttonLoadVacanciesSelector } from "./parse"
import Swiper from "./swipper";

buttonLoadVacanciesSelector.click(function ()
{
    loadVacancies()
})

buttonCalculateSelector.click(function () {
    calculate()
})

depositTypeSelector.change(function () {
    onChangeDepositTerm()
})

$(document).ready(function () {
    onChangeDepositTerm()
})