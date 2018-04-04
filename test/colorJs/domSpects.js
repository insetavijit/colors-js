/// <reference path="../../node_modules/@types/jquery/index.d.ts" />


describe("colorJs - dom manipulation ", function () {
    it("can we create a new seed element for cJ ", function () {
        // loadFixtures('index.html')
        var cJ = new colorJs();
        expect(cJ.dropTheSeed()).toEqual($('#' + cJ.rootElemnentID));
    });
    it("can we put custom css in header section", function () {
        // loadFixtures('index.html')
        var cJ = new colorJs();
        cJ.dropStyle();
        expect($('style['+cJ.styleAttr+']').attr(cJ.styleAttr)).toEqual('cJ');
    });
});