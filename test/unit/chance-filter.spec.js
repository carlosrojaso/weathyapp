describe('Filtro Chance', function() {

  beforeEach(module('App'));

  it('Debe redondear cualquier decimal porcentaje hacia su valor de 10', inject(function(chanceFilter) {
    expect(chanceFilter(0.01)).toEqual(0);
    expect(chanceFilter(0.05)).toEqual(10);
    expect(chanceFilter(0.44)).toEqual(40);
    expect(chanceFilter(0.46)).toEqual(50);
    expect(chanceFilter(0.95)).toEqual(100);
    expect(chanceFilter(undefined)).toEqual(0);
  }));
});
