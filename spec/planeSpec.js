'use strict';

describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding','clearForTakeOff']);
  });

  it('can land in the airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off form the airport', function() {
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});
