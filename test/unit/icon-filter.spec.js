describe('Icons Filter', function() {

  beforeEach(module('App'));

  it('deberia regresar iconos', inject(function(iconsFilter) {
    expect(iconsFilter('rain')).toEqual('ion-ios-rainy');
    expect(iconsFilter('partly-cloudy-day')).toEqual('ion-ios-partlysunny');
    expect(iconsFilter('invalid')).toEqual('');
  }));
});
