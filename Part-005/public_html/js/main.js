require.config({
    baseUrl: './',
    paths: {
        knockout: 'js/libs/knockout/dist/knockout',
        app: 'js/modules/app'
    },
    waitSeconds: 2
});
require(['knockout', 'app'], function (ko, app) {
    ko.applyBindings(new app());
});