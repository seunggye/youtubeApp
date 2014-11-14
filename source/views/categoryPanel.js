enyo.kind({
	name:"youtube.CategoryPanel",
	kind:"moon.Panel",
	title: "Welcome",
	titleBelow: "Korea youtube favorite...",
    events:{
        onNextPanel:""
    },
    handlers:{
        onListItemRendered : "listItemRendered"
    },
    headerComponents: [
        {name: "spinner", kind: "moon.Spinner", content: "Loading...", name: "spinner"}
    ],
    components: [
        {name:"categoryList", kind: "moon.DataList", components: [
            {kind: "youtube.CategoryItem"}
        ]}
    ],
    bindings:[
        {from:".categoryList", to:".$.categoryList.collection"},
        {from:".$.categoryList.selected", to:".category"}
    ], 
    categoryChanged: function(){
        if(this.category){
            this.videoList.setParams({part:"snippet", q:this.category.attributes.title});
            this.doNextPanel({title:this.category.attributes.title});
        }
    },
    listItemRendered: function(inSender, inEvent) {
        this.$.spinner.stop();
    }
});

enyo.kind({
    name:"youtube.CategoryItem",
    kind:"moon.Item",
    events: {
        onListItemRendered: ""
    },
    bindings: [
        {from: ".model.title", to: ".content"}
    ],
    rendered: enyo.inherit(function (sup) {
        return function() {
            sup.apply(this, arguments);
            this.doListItemRendered();
        }
    })
});