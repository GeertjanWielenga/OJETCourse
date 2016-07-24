define(['knockout'], function (ko) {
    return function appViewModel() {
        ko.components.register("userName", {
            viewModel: function (params) {
                this.firstName = ko.observable('Bert');
                this.firstNameCaps = ko.pureComputed(function () {
                    return this.firstName().toUpperCase();
                }, this);
            },
            template:
                    "<p>First name: <input data-bind='value: firstName' /></p>\n\
                     <p>First name capitalized: <strong data-bind='text: firstNameCaps'></strong></p>"
        });
    };
});