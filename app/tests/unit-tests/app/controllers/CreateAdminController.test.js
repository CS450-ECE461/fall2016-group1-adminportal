var requirePath = '../../../app/';

var chai = require('chai');
var spies = require('chai-spies');
var blueprint = require ('@onehilltech/blueprint');
var CreateAdminController = require(requirePath + 'controllers/CreateAdminController');

chai.use(spies);
var assert = chai.assert;
var should = chai.should();
var spy = chai.spy;

var controller;
var res;

describe('CreateAdminController', function() {
    beforeEach(function() {
        controller = new CreateAdminController();
        res = {
            redirect: spy()
        };
    });

    describe('constructor', function() {
        it('inherits from BaseController', function() {
            var callSpy = spy.on(blueprint.BaseController, 'call');

            var cont = new CreateAdminController();

            callSpy.should.have.been.called.with.exactly(cont);
        });
    });

    describe('signup', function() {
        it('returns a function that redirects to the dashboard', function() {
            controller.signup().should.be.a('function');
        });

        describe('returned function', function() {
            it('redirects to the createOrgs', function() {
                controller.signup(null, res);

                res.redirect.should.have.been.called.with.exactly('/CreateOrganization');
            });
        });
    });

});
