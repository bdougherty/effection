import { Operation } from '@effection/core';

export type Subscriber<T,TReturn = undefined> = (publish: (value: T) => void) => Operation<TReturn>;

export interface Subscription<T,TReturn = undefined> {
  next(): Operation<IteratorResult<T,TReturn>>;
}
