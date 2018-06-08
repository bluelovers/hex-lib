/**
 * Created by user on 2018/6/8/008.
 */

import { hexAndAny, toHex, hexAnd, hexAdd, hexSub, hexAndSub } from '../index';
import POSTAG from './_postag';

let r;
let padLen = 8;

r = hexAndAny(POSTAG.D_N, POSTAG.D_N);

console.log(toHex(r, padLen), r === POSTAG.D_N, r);

r = hexAndAny(POSTAG.D_N | POSTAG.D_T, POSTAG.D_N, POSTAG.D_T);

console.log(toHex(r, padLen), r === POSTAG.D_N, r);

r = hexAndAny(POSTAG.D_N | POSTAG.D_T, POSTAG.D_T, POSTAG.D_N);

console.log(toHex(r, padLen), r === POSTAG.D_T, r);

r = hexAdd(0, POSTAG.D_T, POSTAG.D_N);

console.log(toHex(r, padLen), r === (POSTAG.D_T | POSTAG.D_N), r);

r = hexSub((POSTAG.D_T | POSTAG.D_N), POSTAG.D_T);

console.log(toHex(r, padLen), r === (POSTAG.D_N), r);

r = hexAndSub((POSTAG.D_T | POSTAG.D_N), POSTAG.D_T, POSTAG.BAD);

console.log(toHex(r, padLen), r === (POSTAG.D_N), r);

r = hexAndSub((POSTAG.D_T | POSTAG.D_N), POSTAG.D_T, POSTAG.BAD, POSTAG.D_N);

console.log(toHex(r, padLen), r === (0), r);
