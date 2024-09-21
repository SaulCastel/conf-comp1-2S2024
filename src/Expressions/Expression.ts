import { TokenLocation } from '@ts-jison/common';

export default interface Expression {
    location: TokenLocation;
    interpret: () => any;
}
