type HelloWorld = string;

const helloWorld: HelloWorld = 'Hello world';

import type { Equal, Expect, NotAny } from '@type-challenges/utils';

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
