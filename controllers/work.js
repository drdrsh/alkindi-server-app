'use strict';

var EntityController = require(framework.helpers.path.controllers('entity', true));

function WorkController(app, router) {
    this.getEntityName = function() {
        return "work";
    };
    EntityController.call(this, app, router);
}

require("util").inherits(WorkController, EntityController);
module.exports = WorkController;