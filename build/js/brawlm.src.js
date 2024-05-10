
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"IV","title":"Independent Variable","type":"Variables"},{"name":"DV","title":"Dependent Variable","type":"Variable"},{"name":"inferWhich","title":"report","type":"List","options":[{"name":"r","title":"r"},{"name":"p","title":"p"}],"default":"r"},{"name":"whichR","title":"graph","type":"List","options":[{"name":"Direct","title":"Direct"},{"name":"Unique","title":"Unique"},{"name":"Total","title":"Total"},{"name":"Full","title":"Full Model"}],"default":"Unique"}];

const view = function() {
    
    this.handlers = { }

    View.extend({
        jus: "3.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "BrawStats:Linear Models",
    jus: "3.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			typeName: 'VariableSupplier',
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Dependent Variable",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "DV",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Independent Variable",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "IV",
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			style: "inline",
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					typeName: 'ComboBox',
					name: "whichR"
				},
				{
					type: DefaultControls.ComboBox,
					typeName: 'ComboBox',
					name: "inferWhich"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
