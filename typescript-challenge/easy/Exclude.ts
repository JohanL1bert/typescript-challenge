type MyExclude<T, U> = T extends U ? never : T;
// if T extends U than exclude value, othervise left

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<
    Equal<
      MyExclude<'a' | 'b' | 'c', 'a' | 'b'>,
      Exclude<'a' | 'b' | 'c', 'a' | 'b'>
    >
  >,
  Expect<
    Equal<
      MyExclude<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >
];
