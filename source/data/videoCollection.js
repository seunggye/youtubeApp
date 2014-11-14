enyo.kind({
	name:"youtube.videoCollection",
	kind:"enyo.Collection",
	model:"youtube.videoModel",
	defaultUrl : "https://www.googleapis.com/youtube/v3/search",
	published:{
		key:"AIzaSyDdxNORLF0UtA3eceZq1fSvWDPGeCqYK2E",
		params : null
	},
	create: function(){
		this.inherited(arguments);
		this.defaultUrl += "?key=" + this.getKey();
	},
	paramsChanged: function(prev, curr, prop){
		this.url = this.defaultUrl;
		for (param in curr) {
			this.url += "&"+param+"="+curr[param];
		};
		this.destroyAll();
		this.fetch();
	},
	parse: function(data){
		return data.items;
	}
});
