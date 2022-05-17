Package.describe({
	name: 'wreiske:c3',
	summary: "Reactive C3 charting library based on D3",
	version: "1.1.1",
	git: "https://github.com/wreiske/meteor-c3.git"
});

// Before Meteor 0.9?
if(!Package.onUse) Package.onUse = Package.on_use;

Package.onUse(function (api) {
	if(api.versionsFrom) {
		api.versionsFrom('METEOR@0.9.0');
	}

	api.use("d3js:d3@3.5.8", 'client');
	api.use('templating');

	api.addFiles('c3/c3.js', "client");
	api.addFiles('c3/c3.css', "client");
	api.addFiles('template.html', "client");
	api.addFiles('template.js', "client");

	api.export('c3charts', "client");
});
