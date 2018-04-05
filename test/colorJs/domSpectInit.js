/// <reference path="../../node_modules/@types/jquery/index.d.ts" />


describe("colorJs - dom manipulation ", function () {

    it(" can we init the cJ class ", function () {
        var cJ = new colorJs().init();

        expect(cJ.name).toBe('color-js')
        expect(cJ.paletteID).toBe('cJ_pallet')
        expect(cJ.rootElemnentID).toBe('cJ_root_container')
        expect(cJ.styleAttr).toBe('data-cJ-style')
        
    });
    it(" can we init the cJ class ", function () {
        var cJ = new colorJs().init();

        var elem = $( '#' + cJ.rootElemnentID );
        expect (elem.length).toEqual(1);

    });
});