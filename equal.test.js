
describe('Passed test Cases', ()=> {
      test('Is equal', () => {
        expect({}).toEqual({});
      });
      test('Is equal', () => {
        expect([]).toEqual([]);
      });
      test('have all the same properties', () => {
        expect({a: 1,b: 2}).toEqual({a: 1,b: 2});
      });
      test('have all the same properties', () => {
        expect([1,2,3]).toEqual([1,2,3]);
      });
      test('have all the same properties', () => {
        expect({ a: 1, b: { c: 1, d: 2 }}).toEqual({ a: 1, b: { c: 1, d: 2 }});
      });
      test('have all the same properties', () => {
        expect([ 1, 2, [ 1, 2 ] ]).toEqual([ 1, 2, [ 1, 2 ] ]);
      });
});

describe('Failed test Cases', () => {
    test('Not have all the same properties', () => {
        expect({ a: 1, b: { c: 1, d: 2 }}).toEqual({ a: 1, b: { e: 1, d: 2 }});
      });
      test('Not have all the same properties', () => {
        expect([ 1, 2, [ 1, 3] ] ).toEqual([ 1, 2, [ 1, 2]  ]);
      });
});
