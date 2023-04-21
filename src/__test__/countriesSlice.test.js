const fetchCountries = () => {
    return [{name:"Pakistan", continent:"asia"}];
}

describe('fetchCountries', () => {
    test('fetchCountries function', () => {
      expect(fetchCountries()).toEqual([{name:"Pakistan", continent:"asia"}]);
    });
  });