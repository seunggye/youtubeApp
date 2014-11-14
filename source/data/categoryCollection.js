enyo.kind({
	name:"youtube.categoryCollection",
	kind:"enyo.Collection",
	model:"youtube.categoryModel",
	defaultUrl : "https://www.googleapis.com/youtube/v3/videoCategories",
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
		this.fetch();
	},
	parse: function(result){
		// for(i in result.items){
		// 	var url = "https://www.googleapis.com/youtube/v3/search";
		// 	url += "?key="+this.getKey();
		// 	url += "&part=snippet&maxResults=1&q="+result.items[i].snippet.title;
		// 	var ajax = new enyo.Ajax({
		// 		url:url
		// 	});
		// 	ajax.go();
		// 	ajax.response(this.bindSafely(function(inSender, inResponse) {
		// 		result.items[i].thumbnail = inResponse.items[0].snippet.thumbnails.default.url;
		// 	}));
		// }
		return result.items;

	}
});