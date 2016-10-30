define(['ojs/ojcore', 'knockout', 'ojs/ojknockout', 'ojs/ojtable'
   ], function(oj, ko) {
        function homeContentViewModel() {
            var self = this;
            var deptArray = [
                {DepartmentId: 10, DepartmentName: 'History'},
                {DepartmentId: 20, DepartmentName: 'Geography'},
                {DepartmentId: 30, DepartmentName: 'Biology'}];
            self.datasource =
                    new oj.ArrayTableDataSource(
                            deptArray,
                            {idAttribute: 'DepartmentId'});
            self.currentRowListener = function (event, ui) {
                var newCurrentRow = ui.currentRow;
                self.datasource.at(newCurrentRow['rowIndex']).
                        then(function (rowObj) {
                            var obj = rowObj['data'];
                            $('#selectedDepartmentId').text(obj.DepartmentId);
                            $('#selectedDepartmentName').text(obj.DepartmentName);
                        });
            };
        }
   return homeContentViewModel;
});
