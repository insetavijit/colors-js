describe("colorJs - public variable chaking", function () {
    // jasmine.getFixtures().fixturesPath = 'base/test/fixture';
    it("is the root id same ad - #cJ_root_container - ", function () {
        // loadFixtures('index.html')
        var cJ = new colorJs();
        expect(cJ.rootElemnentID).toEqual('cJ_root_container');
    });
    it("is the base box id same ad - #cJ_root_container - ", function () {
        // loadFixtures('index.html')
        var cJ = new colorJs();
        expect(cJ.baseBoxId).toEqual('cJ_Base_container');
    });
});

