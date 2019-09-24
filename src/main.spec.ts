import { toTest } from './main';
import { expect } from 'chai';
import 'mocha';

describe('Our First test', () => {
  it('returns true', () => {
    const result = toTest();
    expect(result).to.equal(true);
  });
});
