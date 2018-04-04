class colorJs {
    public rootElement;
    public rootElemnentID;
    public BaseBox;
    public baseBoxId;
    public styleAttr;
    public styleString;
    constructor(parameters) {
        this.rootElemnentID = 'cJ_root_container'
        this.baseBoxId = 'cJ_Base_container'
        this.styleAttr = 'data-cJ-style'
        this.styleString = 'body{background:red;}';
    }
    private dropTheSeed() {
        /**
         * @description create a rootChild in dom so we can manupulate it as we want
         * @returns htmlNode of root
         */
        //1. create the seed htmlNode
        var seed = document.createElement('div');
        seed.setAttribute("id" , this.rootElemnentID );
        // 3. putting the htmlNode to body
        document.body.appendChild(seed);
        //4. return the seed
        return seed ;
    }
    private getRootItem(){
        /**
         * @description set the root element in object 
         */
        var rootElem = document.getElementById(this.rootElemnentID);
        
        return this.rootElement = rootElem ;        
    }
    public dropStyle(){
        var style = document.createElement('style');

        style.setAttribute('data-cJ-style', 'cJ')
        style.type = 'text/css';
        
        var cssNode = document.createTextNode(this.styleString);
        style.appendChild(cssNode);

        //putting the style in dom
        document.head.appendChild(style);
        return this;
    }
    
}

