describe("colorJs - naviGation bar ", function () {
    
    it("can we Change the toggle to right ", function () {
        var cJ = new colorJs().init();
        // var elem = $('#' + cJ.rootElemnentID);
        
        expect(cJ.getNavStatus()).toBe('left')
        // put the pattel to right
        cJ.toggleNavigationBarSide();
        expect($('#' + cJ.rootElemnentID).find('[' + cJ.NaviGationIdentifiyer + ']').attr(cJ.NaviGationIdentifiyer)).toEqual('true');
        expect($('#' + cJ.rootElemnentID).attr('style')).toBe('right: 0px; left: auto;');
            //chalk the status : right
        expect(cJ.getNavStatus()).toBe('right')
        // back to left
        cJ.toggleNavigationBarSide();
        expect($('#' + cJ.rootElemnentID).find('[' + cJ.NaviGationIdentifiyer + ']').attr(cJ.NaviGationIdentifiyer)).toEqual('false');
        expect($('#' + cJ.rootElemnentID).attr('style')).toBe('right: auto; left: 0px;');
        expect(cJ.getNavStatus()).toBe('left')
        // put the pattel to right
        cJ.toggleNavigationBarSide();
        expect($('#' + cJ.rootElemnentID).find('[' + cJ.NaviGationIdentifiyer + ']').attr(cJ.NaviGationIdentifiyer)).toEqual('true');
        expect($('#' + cJ.rootElemnentID).attr('style')).toBe('right: 0px; left: auto;');
        expect(cJ.getNavStatus()).toBe('right')
        // back to left
        cJ.toggleNavigationBarSide();
        expect($('#' + cJ.rootElemnentID).find('[' + cJ.NaviGationIdentifiyer + ']').attr(cJ.NaviGationIdentifiyer)).toEqual('false');
        expect($('#' + cJ.rootElemnentID).attr('style')).toBe('right: auto; left: 0px;');
        //
        expect(cJ.getNavStatus()).toBe('left')
    });
    it("can we trigger click event ", function () {
        var cJ = new colorJs().init();
        //chalk the status : right
        // console.log(cJ.getNavStatus())
        if(cJ.getNavStatus() === 'left'){
            $('#' + cJ.rootElemnentID).find('[' + cJ.NaviGationIdentifiyer + ']').trigger('click');
            expect(cJ.getNavStatus()).toEqual('right')

            $('#' + cJ.rootElemnentID).find('[' + cJ.NaviGationIdentifiyer + ']').trigger('click');
            expect(cJ.getNavStatus()).toEqual('left')
        }else {
            $('#' + cJ.rootElemnentID).find('[' + cJ.NaviGationIdentifiyer + ']').trigger('click');
            expect(cJ.getNavStatus()).toEqual('left')
            
            $('#' + cJ.rootElemnentID).find('[' + cJ.NaviGationIdentifiyer + ']').trigger('click');
            expect(cJ.getNavStatus()).toEqual('right')

            $('#' + cJ.rootElemnentID).find('[' + cJ.NaviGationIdentifiyer + ']').trigger('click');
            expect(cJ.getNavStatus()).toEqual('left')
        }
        
    });
});