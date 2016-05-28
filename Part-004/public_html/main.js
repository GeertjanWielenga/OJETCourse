require.config({
    baseUrl: './',
    paths: {
        knockout: 'bower_components/knockout/dist/knockout',
        appViewModel: 'js/appViewModel'
    },
    waitSeconds: 2
});
require(['knockout', 'appViewModel'], function (ko, appViewModel) {
    ko.applyBindings(new appViewModel());
});