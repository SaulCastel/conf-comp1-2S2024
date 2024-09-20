import { TsCalcParser } from './ts-calculator.js';

const input = '1 + 1';
const result = new TsCalcParser().parse(input);
console.log(result);
