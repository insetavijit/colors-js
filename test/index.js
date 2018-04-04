describe("test - tesing", function () {
  it("return true | testing is jQuery is installed and up and working", function() {
    var p =  $('<p>hi</p>') ;
    expect(p.text()).toEqual('hi');
  });
});