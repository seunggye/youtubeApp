enyo.kind({
	name:"youtube.categoryModel",
	kind:"enyo.Model",
	parse: function(data){
		return data.snippet;
	}
});

enyo.kind({
	name:"youtube.videoModel",
	kind:"enyo.Model",
	parse: function(result){
		var data = {};
		data.id = result.id.videoId;
		data.url = result.snippet.thumbnails.default.url;
		data.desc = result.snippet.description;
		data.title = result.snippet.title;
		return data;
	}
});