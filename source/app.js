/**
	Define and instantiate your enyo.Application kind in this file.  Note,
	application rendering should be deferred until DOM is ready by wrapping
	it in a call to enyo.ready().
*/

enyo.kind({
	name: "youtube.Application",
	kind: "enyo.Application",
	view: "youtube.MainView"
});

enyo.ready(function () {
	new youtube.Application({name: "app"});
});