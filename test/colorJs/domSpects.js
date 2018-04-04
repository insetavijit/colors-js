/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />


describe("colorJs - dom manipulation ", function () {
    // jasmine.getFixtures().fixturesPath = 'base/test/fixture';
    // beforeEach(function () {
    //     loadFixtures('index.html')
    // });
    // afterEach(function () {
    //     // fixture.cleanup('index.html');
    // })
    it("can we create a new seed element for cJ ", function () {
        // loadFixtures('index.html')
        var cJ = new colorJs();
        var drop = cJ.dropTheSeed();
        var tarGet = '#' + cJ.rootElemnentID ;
        expect(drop).toEqual(tarGet);
    });
    it("can we put custom css in header section", function () {
        // loadFixtures('index.html')
        var cJ = new colorJs();
        cJ.dropStyle();
        expect($('style['+cJ.styleAttr+']').attr(cJ.styleAttr)).toEqual('cJ');
    });
    it("can we get the root of cJ seed", function () {
        // loadFixtures('index.html')
        var cJ = new colorJs();
        var rootId = $('#' + cJ.rootElemnentID);
        expect(cJ.register().getRootElem()).toEqual(rootId[0]);
    });
    
});