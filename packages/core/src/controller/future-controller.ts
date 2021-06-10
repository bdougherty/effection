import { Controller } from './controller';
import { Task } from '../task';
import { createFuture, FutureLike } from '../future';

export function createFutureController<TOut>(task: Task<TOut>, future: FutureLike<TOut>): Controller<TOut> {
  let { future: inner, resolve } = createFuture<TOut>();

  function start() {
    future.consume(resolve);
  }

  function halt() {
    resolve({ state: 'halted' });
  }

  return { start, halt, future: inner, type: 'future' };
}
