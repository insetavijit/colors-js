describe("test - tesing", function () {
  jasmine.getFixtures().fixturesPath = 'base/test/fixture';
  it("return true | testing is jQuery is installed and up and working", function() {
    var p =  $('<p>hi</p>') ;
    expect(p.text()).toEqual('hi');
  });
  it("return true | testing is jQuery  we ccan get the fixture ?", function() {
    setFixtures('<div id="grid">ok</div>');
    
    expect($('#grid').text()).toEqual('ok');
  });
  
  it("Can we Load the Fixture file ?", function() {
    loadFixtures('index.html')
    expect($('#cJ-root').text()).toEqual('hi');
  });
});