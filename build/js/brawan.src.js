
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"IV","title":"Independent Variables","type":"Variables"},{"name":"DV","title":"Dependent Variable","type":"Variable"},{"name":"alphaSig","title":"alpha","type":"Number","default":0.05},{"name":"ssq","title":"SSQ Type","type":"List","options":[{"name":"Type1","title":"Type1"},{"name":"Type2","title":"Type2"},{"name":"Type3","title":"Type3"}],"default":"Type3"},{"name":"interaction","title":"Interaction?","type":"List","options":[{"name":"no","title":"no"},{"name":"yes","title":"yes"}],"default":"no"},{"name":"equalVar","title":"Equal variance","type":"List","options":[{"name":"no","title":"no"},{"name":"yes","title":"yes"}],"default":"yes"},{"name":"Transform","title":"Transform","type":"List","options":[{"name":"None","title":"None"},{"name":"Log","title":"Log"},{"name":"Exp","title":"Exp"}],"default":"None"},{"name":"show","title":"Show","type":"List","options":[{"name":"Compact","title":"Compact"},{"name":"Sample","title":"Sample"},{"name":"Describe","title":"Describe"},{"name":"Infer","title":"Infer"},{"name":"Likelihood","title":"Likelihood"}],"default":"Compact"},{"name":"inferWhich","title":"Which Infer","type":"List","options":[{"name":"r","title":"r"},{"name":"p","title":"p"},{"name":"2D","title":"2D"}],"default":"2D"}];

const view = function() {
    
    this.handlers = { }

    View.extend({
        jus: "3.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "BrawStats:Analyze Data",
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
							maxItemCount: 2,
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			typeName: 'CollapseBox',
			collapsed: true,
			label: "Analysis",
			margin: "none",
			minWidth: 200,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					controls: [
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							style: "inline",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									verticalAlignment: "center",
									margin: "small",
									minWidth: 13
								},
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "inline",
									margin: "none",
									controls: [
										{
											type: DefaultControls.TextBox,
											typeName: 'TextBox',
											name: "alphaSig",
											format: FormatDef.number
										},
										{
											type: DefaultControls.ComboBox,
											typeName: 'ComboBox',
											name: "Transform"
										},
										{
											type: DefaultControls.ComboBox,
											typeName: 'ComboBox',
											name: "equalVar",
											enable: "(IVtype:Categorical && DVtype:Interval)"
										}
									]
								}
							]
						},
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							style: "inline",
							margin: "none",
							controls: [
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "ssq",
									format: FormatDef.number
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "interaction"
								}
							]
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
					name: "show"
				},
				{
					type: DefaultControls.ComboBox,
					typeName: 'ComboBox',
					name: "inferWhich",
					enable: "(show:Infer)"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
