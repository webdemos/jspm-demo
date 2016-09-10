import 'font-awesome/css/font-awesome.css!';

import $ from 'jquery';
import moment from 'moment';
import _ from 'lodash-node';

import main from './css/style.css!';
import styles from './css/main.css!'
import styleScss from './styles/style.scss!'
import pkg from '../package.json!json';

import test from './test';

console.log('is this thing on?');

console.log('This is jquery: ' + $);
console.log('This is moment: ' + moment);
console.log('This is lodash: ' + _);

console.log('This is main style: ' + main);
console.log('This is package.json: ' + pkg);
console.log('This is cusotm styles: ' + styles);
console.log('This is cusotm styleScss: ' + styleScss);

console.log('This is cusotm test: ' + test);


$("body").append("<div>Ground control to major Tom. Created with $</div>");


export function init() {
    $("body").append("<div>Good morning!.</div>");
    $("body").append("<div>How are you?.</div>");
}

