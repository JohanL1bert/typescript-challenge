// First solution
// type First<T extends any[]> = T extends never[] ? never : T[0];

// Second solution
type First<T extends any[]> = T extends [infer T, ...infer R] ? T : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];
