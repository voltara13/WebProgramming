import css from "../css/index.css"
import html from "../html/main.html"

import swiper from "./swipper";

import { calculate, onChangeDepositTerm, buttonCalculateSelector, depositTypeSelector } from "./calculator";

buttonCalculateSelector.click(function () {
    calculate()
})

depositTypeSelector.change(function () {
    onChangeDepositTerm()})

$(document).ready(function () {
    onChangeDepositTerm()
})