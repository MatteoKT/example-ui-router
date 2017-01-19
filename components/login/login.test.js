describe('login', function () {
    beforeEach(module('hello'));

    beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should define the controller function', inject(function ($componentController) {
        var loginController = $componentController('login', {}, {});
        expect(loginController).toBeDefined();
    }));
});