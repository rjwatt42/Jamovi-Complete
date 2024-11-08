
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"Stage5","title":"Stage 5","type":"Variables"},{"name":"Stage4","title":"Stage 4","type":"Variables"},{"name":"Stage3","title":"Stage 3","type":"Variables"},{"name":"Stage2","title":"Stage 3","type":"Variables"},{"name":"Stage1","title":"Stage 1","type":"Variables"},{"name":"Stage5On","title":"","type":"Bool","default":true},{"name":"Stage4On","title":"","type":"Bool","default":true},{"name":"Stage3On","title":"","type":"Bool","default":true},{"name":"Stage2On","title":"","type":"Bool","default":true},{"name":"Stage1On","title":"","type":"Bool","default":true},{"name":"causalDirection","title":"Direction","type":"List","options":[{"name":"up","title":"up"},{"name":"down","title":"down"}],"default":"down"},{"name":"Depth","title":"Depth","type":"List","options":[{"name":"d1","title":"d1"},{"name":"d2","title":"d2"},{"name":"all","title":"all"}],"default":"d1"},{"name":"ShowType","title":"","type":"List","options":[{"name":"CF","title":"coefficients"},{"name":"ES","title":"effect sizes"},{"name":"cov","title":"covariance"}]},{"name":"addDest","title":"Add Dest","type":"Variables"},{"name":"addSource","title":"Add Source","type":"Variables"},{"name":"removeDest","title":"Add Dest","type":"Variables"},{"name":"removeSource","title":"Add Source","type":"Variables"},{"name":"onlySource","title":"only Source","type":"Variables"},{"name":"onlyDest","title":"only Dest","type":"Variables"},{"name":"showHTML","title":"HTML?","type":"Bool","default":true}];

const view = function() {
    
    this.handlers = { }

    View.extend({
        jus: "3.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "BrawStats:Path Models",
    jus: "3.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.Label,
			typeName: 'Label',
			label: "Layout:",
			minWidth: 600,
			controls: [
				{
					type: DefaultControls.VariableSupplier,
					typeName: 'VariableSupplier',
					persistentItems: false,
					minWidth: 300,
					stretchFactor: 1,
					controls: [
						{
							type: DefaultControls.TargetLayoutBox,
							typeName: 'TargetLayoutBox',
							label: "",
							margin: "none",
							controls: [
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "inline",
									controls: [
										{
											type: DefaultControls.VariablesListBox,
											typeName: 'VariablesListBox',
											name: "Stage1",
											ghostText: "stage 1",
											isTarget: true,
											height: "small",
											minWidth: 200
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "Stage1On"
										}
									]
								}
							]
						},
						{
							type: DefaultControls.TargetLayoutBox,
							typeName: 'TargetLayoutBox',
							label: "",
							margin: "none",
							controls: [
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "inline",
									controls: [
										{
											type: DefaultControls.VariablesListBox,
											typeName: 'VariablesListBox',
											name: "Stage2",
											ghostText: "stage 2",
											isTarget: true,
											height: "small",
											minWidth: 200
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "Stage2On"
										}
									]
								}
							]
						},
						{
							type: DefaultControls.TargetLayoutBox,
							typeName: 'TargetLayoutBox',
							label: "",
							margin: "none",
							controls: [
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "inline",
									controls: [
										{
											type: DefaultControls.VariablesListBox,
											typeName: 'VariablesListBox',
											name: "Stage3",
											ghostText: "stage 3",
											isTarget: true,
											height: "small",
											minWidth: 200
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "Stage3On"
										}
									]
								}
							]
						},
						{
							type: DefaultControls.TargetLayoutBox,
							typeName: 'TargetLayoutBox',
							label: "",
							margin: "none",
							controls: [
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "inline",
									controls: [
										{
											type: DefaultControls.VariablesListBox,
											typeName: 'VariablesListBox',
											name: "Stage4",
											ghostText: "stage 4",
											isTarget: true,
											height: "small",
											minWidth: 200
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "Stage4On"
										}
									]
								}
							]
						},
						{
							type: DefaultControls.TargetLayoutBox,
							typeName: 'TargetLayoutBox',
							label: "",
							margin: "none",
							controls: [
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "inline",
									controls: [
										{
											type: DefaultControls.VariablesListBox,
											typeName: 'VariablesListBox',
											name: "Stage5",
											ghostText: "stage 5",
											isTarget: true,
											height: "small",
											minWidth: 200
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "Stage5On"
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
							name: "Depth"
						},
						{
							type: DefaultControls.ComboBox,
							typeName: 'ComboBox',
							name: "causalDirection"
						}
					]
				}
			]
		},
		{
			type: DefaultControls.Label,
			typeName: 'Label',
			label: "Links:",
			minWidth: 600,
			controls: [
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Add",
					margin: "none",
					minWidth: 450,
					controls: [
						{
							type: DefaultControls.VariableSupplier,
							typeName: 'VariableSupplier',
							persistentItems: true,
							stretchFactor: 1,
							controls: [
								{
									type: DefaultControls.TargetLayoutBox,
									typeName: 'TargetLayoutBox',
									label: "Source:",
									margin: "none",
									controls: [
										{
											type: DefaultControls.VariablesListBox,
											typeName: 'VariablesListBox',
											name: "addSource",
											isTarget: true
										}
									]
								},
								{
									type: DefaultControls.TargetLayoutBox,
									typeName: 'TargetLayoutBox',
									label: "Dest:",
									margin: "none",
									controls: [
										{
											type: DefaultControls.VariablesListBox,
											typeName: 'VariablesListBox',
											name: "addDest",
											isTarget: true
										}
									]
								}
							]
						}
					]
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Remove",
					margin: "none",
					minWidth: 450,
					controls: [
						{
							type: DefaultControls.VariableSupplier,
							typeName: 'VariableSupplier',
							persistentItems: true,
							stretchFactor: 1,
							controls: [
								{
									type: DefaultControls.TargetLayoutBox,
									typeName: 'TargetLayoutBox',
									label: "Source:",
									margin: "none",
									controls: [
										{
											type: DefaultControls.VariablesListBox,
											typeName: 'VariablesListBox',
											name: "removeSource",
											isTarget: true
										}
									]
								},
								{
									type: DefaultControls.TargetLayoutBox,
									typeName: 'TargetLayoutBox',
									label: "Dest:",
									margin: "none",
									controls: [
										{
											type: DefaultControls.VariablesListBox,
											typeName: 'VariablesListBox',
											name: "removeDest",
											isTarget: true
										}
									]
								}
							]
						}
					]
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Isolate",
					margin: "none",
					minWidth: 450,
					controls: [
						{
							type: DefaultControls.VariableSupplier,
							typeName: 'VariableSupplier',
							persistentItems: true,
							stretchFactor: 1,
							controls: [
								{
									type: DefaultControls.TargetLayoutBox,
									typeName: 'TargetLayoutBox',
									label: "Only sources:",
									margin: "none",
									controls: [
										{
											type: DefaultControls.VariablesListBox,
											typeName: 'VariablesListBox',
											name: "onlySource",
											isTarget: true
										}
									]
								},
								{
									type: DefaultControls.TargetLayoutBox,
									typeName: 'TargetLayoutBox',
									label: "Only dests:",
									margin: "none",
									controls: [
										{
											type: DefaultControls.VariablesListBox,
											typeName: 'VariablesListBox',
											name: "onlyDest",
											isTarget: true
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			type: DefaultControls.Label,
			typeName: 'Label',
			label: "Show:",
			controls: [
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					style: "list",
					margin: "large",
					controls: [
						{
							type: DefaultControls.ComboBox,
							typeName: 'ComboBox',
							name: "ShowType"
						},
						{
							type: DefaultControls.CheckBox,
							typeName: 'CheckBox',
							name: "showHTML"
						}
					]
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
