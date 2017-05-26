/**
 * Created by gmh on 2017/5/26 0026.
 */
export const CALU_ADD = 'CALU_ADD';
export const CALU_REDUCE = 'CALU_REDUCE';

export function add(number) {
	return {
		type: CALU_ADD,
		number: number
	}
}

export function reduce() {
	return {
		type: CALU_REDUCE
	}
}