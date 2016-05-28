require.config({
    baseUrl: './',
    paths: {
        knockout: 'bower_components/knockout/dist/knockout',
        text: 'bower_components/text/text',
        app: 'js/viewModels/app'
    },
    waitSeconds: 2
});
require(['knockout', 'app'], function (ko, app, text) {
    ko.applyBindings(new app());
});