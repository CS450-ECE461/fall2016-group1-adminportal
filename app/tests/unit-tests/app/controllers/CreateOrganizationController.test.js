var requirePath = '../../../app/';

var chai = require('chai');
var spies = require('chai-spies');
var blueprint = require ('@onehilltech/blueprint');
var CreateOrganizationController = require(requirePath + 'controllers/CreateOrganizationController');

chai.use(spies);
var assert = chai.assert;
var should = chai.should();
var spy = chai.spy;

var controller;
var res;

describe('CreateOrganizationController', function() {
    beforeEach(function() {
        controller = new CreateOrganizationController();
        res = {
            redirect: spy()
        };
    });

    describe('constructor', function() {
        it('inherits from BaseController', function() {
            var callSpy = spy.on(blueprint.BaseController, 'call');

            var cont = new CreateOrganizationController();

            callSpy.should.have.been.called.with.exactly(cont);
        });
    });

    describe('checkBody',function(){
      it('test if body is true or not'),function(){
      assert.isTrue(controller.checkBody(5),"body contains value");
      assert.isFalse(controller.checkBody(null),"Body is empty");
    });
  });


    describe('isSame', function() {
        it('checks if values are same or not', function() {
          assert.isTrue(controller.isSame("true","true"),"Items are equal");
          assert.isFalse(controller.isSame("true","false"),"Items are not equal")
        });
    });

    describe('isSame', function() {
        it('checks if values are same or not', function() {
          assert.isTrue(controller.isSame("true","true"),"Items are equal");
          assert.isFalse(controller.isSame("true","false"),"Items are not equal")
        });
    });

});
