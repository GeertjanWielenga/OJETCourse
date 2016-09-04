require.config({
    baseUrl: './',
    paths: {
        knockout: 'js/libs/knockout/dist/knockout',
        text: 'js/libs/text/text',
        app: 'js/viewModels/app'
    },
    waitSeconds: 2
});
require(['knockout', 'app', 'text'], function (ko, app, text) {
    ko.applyBindings(new app());
});
