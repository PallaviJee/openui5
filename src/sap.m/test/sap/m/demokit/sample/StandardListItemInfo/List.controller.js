jQuery.sap.require("sap.m.sample.StandardListItemInfo.Formatter");

sap.ui.controller("sap.m.sample.StandardListItemInfo.List", {

	onInit : function (evt) {

		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/products.json"));
		this.getView().setModel(oModel);

	}
});
