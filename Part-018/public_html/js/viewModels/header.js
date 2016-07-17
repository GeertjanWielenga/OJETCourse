define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojdialog',
    'ojs/ojtoolbar', 'ojs/ojbutton', 'ojs/ojmenu'
], function (oj, ko, $) {
    function headerContentViewModel() {
        var self = this;
        // Media Queries for repsonsive header
        var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
        self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
    }
    return headerContentViewModel;
});
