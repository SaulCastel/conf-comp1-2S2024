import { TokenLocation } from '@ts-jison/common';
import RuntimeError from '../../Exceptions/Runtime.js';

export default function getSum(
    left: any,
    right: any,
    location?: TokenLocation
) {
    const leftType = typeof left;
    const rightType = typeof right;
    switch (leftType) {
        case 'number':
        case 'string':
            switch (rightType) {
                case 'number':
                case 'string':
                    return left + right;
            }
        default:
            throw new RuntimeError(
                `Sum is undefined for types ${leftType} and ${rightType}`,
                location
            );
    }
}
