var requirePath = '../../../app/';

var chai = require('chai');
var spies = require('chai-spies');
var blueprint = require ('@onehilltech/blueprint');
var AdminLoginController = require(requirePath + 'controllers/AdminLogin');

chai.use(spies);
var assert = chai.assert;
var should = chai.should();
var spy = chai.spy;

var controller;
var res;

describe('AdminLoginController', function() {
    beforeEach(function() {
        controller = new AdminLoginController();
        res = {
            redirect: spy()
        };
    });

    describe('constructor', function() {
        it('inherits from BaseController', function() {
            var callSpy = spy.on(blueprint.BaseController, 'call');

            var cont = new AdminLoginController();

            callSpy.should.have.been.called.with.exactly(cont);
        });
    });

    describe('checkBody',function(){
      it('test if body is true or not'),function(){
      assert.isTrue(controller.checkBody(5),"body contains value");
      assert.isFalse(controller.checkBody(null),"Body is empty");
    });
  });

});
