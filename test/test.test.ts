/**
 * Created by user on 2018/6/8/008.
 */

/// <reference types="mocha" />
/// <reference types="benchmark" />
/// <reference types="chai" />
/// <reference types="node" />

import { hexAdd, hexAndAny, hexAndSub, hexSub } from '../index';
import { chai, relative, expect, path, assert, util, mochaAsync } from './_local-dev';

// @ts-ignore
import { ITest } from 'mocha';
import POSTAG from './_postag';

// @ts-ignore
describe(relative(__filename), () =>
{
	let currentTest: ITest;

	beforeEach(function ()
	{
		currentTest = this.currentTest as ITest;

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	// @ts-ignore
	describe(`suite`, () =>
	{
		// @ts-ignore
		it(`hexAndAny(POSTAG.D_N, POSTAG.D_N)`, function ()
		{
//			console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let actual = hexAndAny(POSTAG.D_N, POSTAG.D_N);
			let expected = POSTAG.D_N | POSTAG.D_N;

//			console.log(actual);

			expect(actual).to.be.deep.equal(expected);
		});

		it(`hexAndAny(POSTAG.D_N | POSTAG.D_T, POSTAG.D_N, POSTAG.D_T)`, function ()
		{
			let actual = hexAndAny(POSTAG.D_N | POSTAG.D_T, POSTAG.D_N, POSTAG.D_T);
			let expected = POSTAG.D_N;

			expect(actual).to.be.deep.equal(expected);
		});

		it(`hexAndAny(POSTAG.D_N | POSTAG.D_T, POSTAG.D_T, POSTAG.D_N)`, function ()
		{
			let actual = hexAndAny(POSTAG.D_N | POSTAG.D_T, POSTAG.D_T, POSTAG.D_N);
			let expected = POSTAG.D_T;

			expect(actual).to.be.deep.equal(expected);
		});

		it(`hexAdd(0, POSTAG.D_T, POSTAG.D_N)`, function ()
		{
			let actual = hexAdd(0, POSTAG.D_T, POSTAG.D_N);
			let expected = (POSTAG.D_T | POSTAG.D_N);

			expect(actual).to.be.deep.equal(expected);
		});

		it(`hexSub((POSTAG.D_T | POSTAG.D_N), POSTAG.D_T)`, function ()
		{
			let actual = hexSub((POSTAG.D_T | POSTAG.D_N), POSTAG.D_T);
			let expected = POSTAG.D_N;

			expect(actual).to.be.deep.equal(expected);
		});

		it(`hexAndSub((POSTAG.D_T | POSTAG.D_N), POSTAG.D_T, POSTAG.BAD)`, function ()
		{
			let actual = hexAndSub((POSTAG.D_T | POSTAG.D_N), POSTAG.D_T, POSTAG.BAD);
			let expected = POSTAG.D_N;

			expect(actual).to.be.deep.equal(expected);
		});

		it(`hexAndSub((POSTAG.D_T | POSTAG.D_N), POSTAG.D_T, POSTAG.BAD, POSTAG.D_N)`, function ()
		{
			let actual = hexAndSub((POSTAG.D_T | POSTAG.D_N), POSTAG.D_T, POSTAG.BAD, POSTAG.D_N);
			let expected = 0;

			expect(actual).to.be.deep.equal(expected);
		});
	});
});
