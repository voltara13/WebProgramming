import $ from 'jquery';

import css from "../css/index.css"
import html from "../html/index.html"

import Swiper from "./swipper";

import { calculate, onChangeDepositTerm, buttonCalculateSelector, depositTypeSelector } from "./calculator";
import { loadVacancies, buttonLoadVacanciesSelector } from "./parse"

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