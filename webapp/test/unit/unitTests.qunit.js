/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"smc/AB_testing/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});