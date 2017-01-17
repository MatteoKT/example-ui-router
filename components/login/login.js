/**
 * Created by Giulio on 17/01/2017.
 */
myApp.component('login', {
    templateUrl: 'components/login/loginView.html',
    controller: function () {
        var $ctrl = this;
        $ctrl.$postLink = function () {

        }

        // $ctrl.$onInit = function () {
        //     $ctrl.items = $ctrl.resolve.items;
        //     $ctrl.selected = {
        //         item: $ctrl.items[0]
        //     };
        // };

        $ctrl.ok = function () {
            $ctrl.close({$value: $ctrl.selected.item});
        };

        $ctrl.cancel = function () {
            $ctrl.dismiss({$value: 'cancel'});
        };
    }
});