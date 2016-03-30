'use strict';

var EntityController = require(framework.helpers.path.controllers('entity', true));

function AuthorityController(app, router) {
    this.getEntityName = function() {
        return "authority";
    };
    EntityController.call(this, app, router);
}

require("util").inherits(AuthorityController, EntityController);
module.exports = AuthorityController;