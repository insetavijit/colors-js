describe("colorJs - public variable chaking", function () {
    
    it("is the root id same ad - #cJ_root_container - ", function () {
        // loadFixtures('index.html')
        var cJ = new colorJs();
        expect(cJ.rootElemnentID).toEqual('cJ_root_container');
    });
    it("is the base box id same ad - #cJ_root_container - ", function () {
        // loadFixtures('index.html')
        var cJ = new colorJs();
        expect(cJ.palette).toEqual('cJ_pallet');
    });
});

