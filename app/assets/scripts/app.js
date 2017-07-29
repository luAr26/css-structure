import $ from 'jquery';
import Person from './modules/Person';

const jane = new Person('Jane Smith');

console.log(jane.name);
jane.greet();
$('h1').css({color: '#B43F6B'});