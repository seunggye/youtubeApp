enyo.kind({
	name: "youtube.MainView",
	classes: "moon enyo-fit",
    handlers:{
        onNextPanel: "nextPanel",
        onPlayVideo: "playVideo"
    },
	components: [
        {name: "videoPlayer", tag:"iframe", classes:"enyo-fill enyo-fit", style:"border:none;"},
		{name: "panels", kind: "moon.Panels", pattern: "alwaysviewing", classes: "enyo-fit", components: [
			{name:"categoryPanel", kind: "youtube.CategoryPanel"},
            {name:"videoPanel", kind:"youtube.VideoPanel"}
		]}
	],
    bindings:[
        {from:".categoryList", to:".$.categoryPanel.categoryList"},
        {from:".videoList", to:".$.categoryPanel.videoList"},
        {from:".videoList", to:".$.videoPanel.videoList"}
    ],
    create: function(){
        this.inherited(arguments);
        this.set("categoryList", new youtube.categoryCollection());
        this.set("videoList", new youtube.videoCollection());
        this.categoryList.setParams({part:"snippet", regionCode:"KR"});
    },
    nextPanel: function(inSender, inEvent) {
        this.$.videoPanel.setTitle(inEvent.title);
        this.$.panels.next();
        return true;
    },
    playVideo: function(inSender, inEvent){
        this.$.videoPlayer.setSrc(inEvent.url);
        this.$.panels.set("showing", false);
    }
});