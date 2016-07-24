require.config({
    baseUrl: './',
    paths: {
        knockout: 'js/libs/knockout/dist/knockout',
        app: 'js/app'
    },
    waitSeconds: 2
});
require(['knockout', 'app'], function (ko, appViewModel) {
    ko.applyBindings(new appViewModel());
});