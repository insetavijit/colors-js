class colorJs {
    public rootElement;
    public rootElemnentID;
    public BaseBox;
    public paletteID;
    public styleAttr;
    // public styleString;
    public colors;
    constructor(parameters) {
        this.rootElemnentID = 'cJ_root_container';
        this.paletteID = 'cJ_pallet';
        this.styleAttr = 'data-cJ-style';
        // this.SetStyleSting();
        
    }
    public register(){
        // if no seed createted then only create one
        
        this.rootElement = this.getRootElem();
        
        if (this.getRootElem() === null){
            this.setColors();
            this.dropStyle();
            this.dropTheSeed();
            this.rootElement = this.getRootElem();            
        }
        // before we get rootItem we need to inisialise dropTheSeed . for this above code is written
        
        return this;
    }
    private dropTheSeed() {
        /**
         * @description create a rootChild in dom so we can manupulate it as we want
         * @returns htmlNode of root
         */
        //1. create the seed htmlNode
        var seed = document.createElement('div');
        seed.setAttribute("id", this.rootElemnentID);
        // 3. putting the htmlNode to body
        document.body.appendChild(seed);
        //4. return the seed
        return seed;
    }
    private getRootElem() {
        /**
         * @description set the root element in object 
         */
        var rootElem = document.getElementById(this.rootElemnentID);
        // this.rootElement = rootElem;

        return rootElem;
    }
    public dropStyle() {
        var style = document.createElement('style');

        style.setAttribute('data-cJ-style', 'cJ')
        style.type = 'text/css';

        var cssNode = document.createTextNode(this.SetStyleSting());
        style.appendChild(cssNode);

        //putting the style in dom
        document.head.appendChild(style);
        return this;
    }
    public dropNavigationToRoot(){
        var naviGationBar = document.createElement('header');
        var naviGationBarChilds 
                ='<samp>'
                        +'<span>&times;</span>'
                        +'<span data-cj-toggle-right="true" style="right:0">&lsaquo; - &rsaquo;</span>'
                    +'</samp>';
        
        naviGationBar.innerHTML = naviGationBarChilds;
        // naviGationBar.innerHTML = '<h1> fuck </h1>';
        this.rootElement.appendChild(naviGationBar);
        // return this;
    }
    public SetStyleSting (){
        /**
         * @description includes style sting in the var StyleStings so we can use it leater
         */
        return    '#' + this.paletteID +' {border-radius:4px;box-shadow:0 4px 10px -3px #263238;overflow:hidden;}'
                + '#' + this.rootElemnentID +' {position:fixed;bottom:0;width:350px;}'
                + '#' + this.rootElemnentID +' span{padding:0 10px;cursor:pointer;border-left:1px solid #d7ccc8;}'
                + '#' + this.rootElemnentID +' span:first-child{border:none;}'
                + '#' + this.rootElemnentID +' samp{background:#fce4ec;border-radius:6px;cursor:pointer;}'
                + '#' + this.rootElemnentID +' header{transition:cubic-bezier(.895,.03,.685,.22);}'
                + '#' + this.paletteID +' .cJRow{display: flex;}'
            + '#' + this.paletteID + ' .cJRow .cJCell{min-height: 1.5em; flex: 1;}';
        // return 'body{background:#cccccc}'
        
    }
    public getNavigationElem() {
        var root = this.getRootElem();
        return root.firstChild;
    }
    public createColorPattel(){
        var colorPalett = document.createElement('div');
        colorPalett.setAttribute('id' , this.paletteID );
        colorPalett.innerHTML = this.createCellColors();
        // this.rootElement.appendChild(colorPalett);
        // this.getNavigationElem().parentNode.insertBefore(colorPalett, this.getNavigationElem().nextSibling
        return this.appedAfter( this.getNavigationElem () , colorPalett );
    }
    public appedAfter(elem :Node  , appenThis : Node ){
        elem.parentNode.insertBefore( appenThis , elem.nextSibling )
    }
    public setFooterText(){
        var footer = document.createElement('footer');
        footer.innerHTML = '<p> do it faster ! </p>'
        this.appedAfter( this.getRootElem().lastChild , footer );
        
    }
    public createCellColors() {
        /**
         * @description support instance for this.createColorPattel
         */
        var colorList = this.setColors();
        var htmlStringCollect = '';
        colorList.forEach(colorMain => {
            var htmlString = "<div class='cJRow'>";
            var cos = Object.keys(colorMain);
            cos.forEach(color => {
                htmlString += "<div class='cJCell' data-name='" + color + "' style='background: " + colorMain[color] + "'></div>";
            });

            htmlString += "</div>";
            htmlStringCollect += htmlString;
        });
        return htmlStringCollect;
    }
    public setColors() {
        return this.colors =
            [
                {
                    "red-5": "#ffebee",
                    "red-10": "#ffcdd2",
                    "red-20": "#ef9a9a",
                    "red-30": "#e57373",
                    "red-40": "#ef5350",
                    "red-50": "#f44336",
                    "red-60": "#e53935",
                    "red-70": "#d32f2f",
                    "red-80": "#c62828",
                    "red-90": "#b71c1c",
                    "red-a10": "#ff8a80",
                    "red-a20": "#ff5252",
                    "red-a40": "#ff1744",
                    "red-a70": "#d50000"
                },
                {
                    "pink-5": "#fce4ec",
                    "pink-10": "#f8bbd0",
                    "pink-20": "#f48fb1",
                    "pink-30": "#f06292",
                    "pink-40": "#ec407a",
                    "pink-50": "#e91e63",
                    "pink-60": "#d81b60",
                    "pink-70": "#c2185b",
                    "pink-80": "#ad1457",
                    "pink-90": "#880e4f",
                    "pink-a10": "#ff80ab",
                    "pink-a20": "#ff4081",
                    "pink-a40": "#f50057",
                    "pink-a70": "#c51162"

                },
                {
                    "purple-5": "#f3e5f5",
                    "purple-10": "#e1bee7",
                    "purple-20": "#ce93d8",
                    "purple-30": "#ba68c8",
                    "purple-40": "#ab47bc",
                    "purple-50": "#9c27b0",
                    "purple-60": "#8e24aa",
                    "purple-70": "#7b1fa2",
                    "purple-80": "#6a1b9a",
                    "purple-90": "#4a148c",
                    "purple-a10": "#ea80fc",
                    "purple-a20": "#e040fb",
                    "purple-a40": "#d500f9",
                    "purple-a70": "#aa00ff"
                },
                {
                    "deep-purple-5": "#ede7f6",
                    "deep-purple-10": "#d1c4e9",
                    "deep-purple-20": "#b39ddb",
                    "deep-purple-30": "#9575cd",
                    "deep-purple-40": "#7e57c2",
                    "deep-purple-50": "#673ab7",
                    "deep-purple-60": "#5e35b1",
                    "deep-purple-70": "#512da8",
                    "deep-purple-80": "#4527a0",
                    "deep-purple-90": "#311b92",
                    "deep-purple-a10": "#b388ff",
                    "deep-purple-a20": "#7c4dff",
                    "deep-purple-a40": "#651fff",
                    "deep-purple-a70": "#6200ea"
                },
                {
                    "indigo-5": "#e8eaf6",
                    "indigo-10": "#c5cae9",
                    "indigo-20": "#9fa8da",
                    "indigo-30": "#7986cb",
                    "indigo-40": "#5c6bc0",
                    "indigo-50": "#3f51b5",
                    "indigo-60": "#3949ab",
                    "indigo-70": "#303f9f",
                    "indigo-80": "#283593",
                    "indigo-90": "#1a237e",
                    "indigo-a10": "#8c9eff",
                    "indigo-a20": "#536dfe",
                    "indigo-a40": "#3d5afe",
                    "indigo-a70": "#304ffe"
                },
                {
                    "blue-5": "#e3f2fd",
                    "blue-10": "#bbdefb",
                    "blue-20": "#90caf9",
                    "blue-30": "#64b5f6",
                    "blue-40": "#42a5f5",
                    "blue-50": "#2196f3",
                    "blue-60": "#1e88e5",
                    "blue-70": "#1976d2",
                    "blue-80": "#1565c0",
                    "blue-90": "#0d47a1",
                    "blue-a10": "#82b1ff",
                    "blue-a20": "#448aff",
                    "blue-a40": "#2979ff",
                    "blue-a70": "#2962ff"
                },
                {
                    "light-blue-5": "#e1f5fe",
                    "light-blue-10": "#b3e5fc",
                    "light-blue-20": "#81d4fa",
                    "light-blue-30": "#4fc3f7",
                    "light-blue-40": "#29b6f6",
                    "light-blue-50": "#03a9f4",
                    "light-blue-60": "#039be5",
                    "light-blue-70": "#0288d1",
                    "light-blue-80": "#0277bd",
                    "light-blue-90": "#01579b",
                    "light-blue-a10": "#80d8ff",
                    "light-blue-a20": "#40c4ff",
                    "light-blue-a40": "#00b0ff",
                    "light-blue-a70": "#0091ea"
                },
                {
                    "cyan-5": "#e0f7fa",
                    "cyan-10": "#b2ebf2",
                    "cyan-20": "#80deea",
                    "cyan-30": "#4dd0e1",
                    "cyan-40": "#26c6da",
                    "cyan-50": "#00bcd4",
                    "cyan-60": "#00acc1",
                    "cyan-70": "#0097a7",
                    "cyan-80": "#00838f",
                    "cyan-90": "#006064",
                    "cyan-a10": "#84ffff",
                    "cyan-a20": "#18ffff",
                    "cyan-a40": "#00e5ff",
                    "cyan-a70": "#00b8d4"
                },
                {
                    "teal-5": "#e0f2f1",
                    "teal-10": "#b2dfdb",
                    "teal-20": "#80cbc4",
                    "teal-30": "#4db6ac",
                    "teal-40": "#26a69a",
                    "teal-50": "#009688",
                    "teal-60": "#00897b",
                    "teal-70": "#00796b",
                    "teal-80": "#00695c",
                    "teal-90": "#004d40",
                    "teal-a10": "#a7ffeb",
                    "teal-a20": "#64ffda",
                    "teal-a40": "#1de9b6",
                    "teal-a70": "#00bfa5"
                },
                {
                    "green-5": "#e8f5e9",
                    "green-10": "#c8e6c9",
                    "green-20": "#a5d6a7",
                    "green-30": "#81c784",
                    "green-40": "#66bb6a",
                    "green-50": "#4caf50",
                    "green-60": "#43a047",
                    "green-70": "#388e3c",
                    "green-80": "#2e7d32",
                    "green-90": "#1b5e20",
                    "green-a10": "#b9f6ca",
                    "green-a20": "#69f0ae",
                    "green-a40": "#00e676",
                    "green-a70": "#00c853"
                },
                {
                    "light-green-5": "#f1f8e9",
                    "light-green-10": "#dcedc8",
                    "light-green-20": "#c5e1a5",
                    "light-green-30": "#aed581",
                    "light-green-40": "#9ccc65",
                    "light-green-50": "#8bc34a",
                    "light-green-60": "#7cb342",
                    "light-green-70": "#689f38",
                    "light-green-80": "#558b2f",
                    "light-green-90": "#33691e",
                    "light-green-a10": "#ccff90",
                    "light-green-a20": "#b2ff59",
                    "light-green-a40": "#76ff03",
                    "light-green-a70": "#64dd17"
                },
                {
                    "lime-5": "#f9fbe7",
                    "lime-10": "#f0f4c3",
                    "lime-20": "#e6ee9c",
                    "lime-30": "#dce775",
                    "lime-40": "#d4e157",
                    "lime-50": "#cddc39",
                    "lime-60": "#c0ca33",
                    "lime-70": "#afb42b",
                    "lime-80": "#9e9d24",
                    "lime-90": "#827717",
                    "lime-a10": "#f4ff81",
                    "lime-a20": "#eeff41",
                    "lime-a40": "#c6ff00",
                    "lime-a70": "#aeea00"
                },
                {
                    "yellow-5": "#fffde7",
                    "yellow-10": "#fff9c4",
                    "yellow-20": "#fff59d",
                    "yellow-30": "#fff176",
                    "yellow-40": "#ffee58",
                    "yellow-50": "#ffeb3b",
                    "yellow-60": "#fdd835",
                    "yellow-70": "#fbc02d",
                    "yellow-80": "#f9a825",
                    "yellow-90": "#f57f17",
                    "yellow-a10": "#ffff8d",
                    "yellow-a20": "#ffff00",
                    "yellow-a40": "#ffea00",
                    "yellow-a70": "#ffd600"
                },
                {
                    "amber-5": "#fff8e1",
                    "amber-10": "#ffecb3",
                    "amber-20": "#ffe082",
                    "amber-30": "#ffd54f",
                    "amber-40": "#ffca28",
                    "amber-50": "#ffc107",
                    "amber-60": "#ffb300",
                    "amber-70": "#ffa000",
                    "amber-80": "#ff8f00",
                    "amber-90": "#ff6f00",
                    "amber-a10": "#ffe57f",
                    "amber-a20": "#ffd740",
                    "amber-a40": "#ffc400",
                    "amber-a70": "#ffab00"
                },
                {
                    "orange-5": "#fff3e0",
                    "orange-10": "#ffe0b2",
                    "orange-20": "#ffcc80",
                    "orange-30": "#ffb74d",
                    "orange-40": "#ffa726",
                    "orange-50": "#ff9800",
                    "orange-60": "#fb8c00",
                    "orange-70": "#f57c00",
                    "orange-80": "#ef6c00",
                    "orange-90": "#e65100",
                    "orange-a10": "#ffd180",
                    "orange-a20": "#ffab40",
                    "orange-a40": "#ff9100",
                    "orange-a70": "#ff6d00"
                },
                {
                    "deep-orange-5": "#fbe9e7",
                    "deep-orange-10": "#ffccbc",
                    "deep-orange-20": "#ffab91",
                    "deep-orange-30": "#ff8a65",
                    "deep-orange-40": "#ff7043",
                    "deep-orange-50": "#ff5722",
                    "deep-orange-60": "#f4511e",
                    "deep-orange-70": "#e64a19",
                    "deep-orange-80": "#d84315",
                    "deep-orange-90": "#bf360c",
                    "deep-orange-a10": "#ff9e80",
                    "deep-orange-a20": "#ff6e40",
                    "deep-orange-a40": "#ff3d00",
                    "deep-orange-a70": "#dd2c00"
                },
                {
                    "brown-5": "#efebe9",
                    "brown-10": "#d7ccc8",
                    "brown-20": "#bcaaa4",
                    "brown-30": "#a1887f",
                    "brown-40": "#8d6e63",
                    "brown-50": "#795548",
                    "brown-60": "#6d4c41",
                    "brown-70": "#5d4037",
                    "brown-80": "#4e342e",
                    "brown-90": "#3e2723"
                },
                {
                    "grey-5": "#fafafa",
                    "grey-10": "#f5f5f5",
                    "grey-20": "#eeeeee",
                    "grey-30": "#e0e0e0",
                    "grey-40": "#bdbdbd",
                    "grey-50": "#9e9e9e",
                    "grey-60": "#757575",
                    "grey-70": "#616161",
                    "grey-80": "#424242",
                    "grey-90": "#212121"
                },
                {
                    "blue-grey-5": "#eceff1",
                    "blue-grey-10": "#cfd8dc",
                    "blue-grey-20": "#b0bec5",
                    "blue-grey-30": "#90a4ae",
                    "blue-grey-40": "#78909c",
                    "blue-grey-50": "#607d8b",
                    "blue-grey-60": "#546e7a",
                    "blue-grey-70": "#455a64",
                    "blue-grey-80": "#37474f",
                    "blue-grey-90": "#263238"
                }
            ];
    }
    
}

