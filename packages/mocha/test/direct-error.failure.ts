import { describe, it } from '../src/index';

describe('@effection/mocha', () => {
  it('throws error directly', function*() {
    throw new Error('boom');
  });
});
