app.models.eventSummaryView.eventSummaryViewForm = (function() {
    var viewModel = kendo.observable({
        model: {
            seniorManager: undefined,
            eventName: undefined,
            middleManager: undefined,
        },
        submit: function() {},
        cancel: function() {}
    });
    return viewModel;
})();