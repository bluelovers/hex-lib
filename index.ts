/**
 * Created by user on 2018/6/8/008.
 */

export function hexAndAny(n: number, p?: number, ...argv: number[]): number
export function hexAndAny(n: number, ...argv: number[])
{
	if (!argv.length)
	{
		return n;
	}

	for (let v of argv)
	{
		let r = (n & v);

		if (r)
		{
			return r;
		}
	}

	return 0;
}

export function hexAnd(n: number, p?: number, ...argv: number[]): number
export function hexAnd(n: number, ...argv: number[])
{
	if (argv.length)
	{
		let r = 0;

		for (let v of argv)
		{
			let p = n & v;

			if (!p)
			{
				return 0;
			}

			r |= v;
		}

		return r;
	}

	return n;
}

export function hexOr(n: number, p?: number, ...argv: number[]): number
export function hexOr(n: number, ...argv: number[])
{
	for (let v of argv)
	{
		n |= v;
	}

	return n;
}

export function toHex(p: number, padLen: number = 4)
{
	return '0x' + p
		.toString(16)
		.padStart(padLen || 0, '0')
		.toUpperCase()
		;
}

export function hexAdd(n: number, p?: number, ...argv: number[]): number
export function hexAdd(n: number, ...argv: number[]): number
{
	if (argv.length)
	{
		let r = n;

		for (let v of argv)
		{
			r |= v;
		}

		return r;
	}

	return n;
}

export function hexSub(n: number, p?: number, ...argv: number[]): number
export function hexSub(n: number, ...argv: number[]): number
{
	if (argv.length)
	{
		let r = n;

		for (let v of argv)
		{
			r ^= v;
		}

		return r;
	}

	return n;
}

export function hexHas(n: number, v: number, r?: number)
{
	if (typeof r === 'undefined' || r === null)
	{
		r = n;
	}

	return (n & v) || (v && v === r);
}

export function hexAndSub(n: number, p?: number, ...argv: number[]): number
export function hexAndSub(n: number, ...argv: number[]): number
{
	if (argv.length)
	{
		let r = n;

		for (let v of argv)
		{
			let p = hexHas(r, v);

			if (p)
			{
				r ^= v;
			}
		}

		return r;
	}

	return n;
}

import * as self from './index';
export default self;

