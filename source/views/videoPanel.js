enyo.kind({
	name:"youtube.VideoPanel",
	kind:"moon.Panel",
	title: "Video List",
	titleBelow: "Thumbnail & Brief information",
    events:{
        onPlayVideo:""
    },
    handlers:{
        onListItemRendered : "listItemRendered"
    },
    headerComponents: [
        {name: "spinner", kind: "moon.Spinner", content: "Loading...", name: "spinner"}
    ],
    components: [
        {kind: "moon.DataList", name: "resultList", components: [
            {kind: "youtube.videoItem"}
        ]}
    ],
    bindings:[
        {from:".videoList", to:".$.resultList.collection"},
        {from:".$.resultList.selected", to:".video"}
    ],
    videoChanged: function(){
        if(this.video){
            var url = "http://www.youtube.com/embed/"+this.video.attributes.id+"?autoplay=1";
            this.doPlayVideo({url:url});
        }
    },
    listItemRendered: function(inSender, inEvent) {
        this.$.spinner.stop();
    }
});


enyo.kind({
    name:"youtube.videoItem",
    kind:"moon.Item",
    events: {
        onListItemRendered: ""
    },
    components:[
        {name:"item", kind:"moon.ImageItem", components:[
            {kind:"moon.Button", content:"watch"}
        ]}
    ],
    bindings: [
        {from: ".model.url", to:".$.item.source"},
        {from: ".model.title", to:".$.item.label"},
        {from: ".model.desc", to:".$.item.text"}
    ],
    rendered: enyo.inherit(function (sup) {
        return function() {
            sup.apply(this, arguments);
            this.doListItemRendered();
        }
    })
});