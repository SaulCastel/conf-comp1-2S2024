import { TokenLocation } from '@ts-jison/common';
import RuntimeError from '../../Exceptions/Runtime.js';

export default function getDifference(
    left: any,
    right: any,
    location?: TokenLocation
) {
    const leftType = typeof left;
    const rightType = typeof right;
    switch (leftType) {
        case 'number':
            switch (rightType) {
                case 'number':
                    return left - right;
            }
        default:
            throw new RuntimeError(
                `Substraction is undefined for types ${leftType} and ${rightType}`,
                location
            );
    }
}
