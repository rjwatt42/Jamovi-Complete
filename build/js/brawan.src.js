
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"IV","title":"Independent Variables","type":"Variables"},{"name":"DV","title":"Dependent Variable","type":"Variable"},{"name":"alphaSig","title":"alpha","type":"Number","default":0.05},{"name":"ssq","title":"SSQ Type","type":"List","options":[{"name":"Type1","title":"Type1"},{"name":"Type2","title":"Type2"},{"name":"Type3","title":"Type3"}],"default":"Type3"},{"name":"interaction","title":"Interaction?","type":"List","options":[{"name":"no","title":"no"},{"name":"yes","title":"yes"}],"default":"no"},{"name":"equalVar","title":"Equal variance","type":"List","options":[{"name":"no","title":"no"},{"name":"yes","title":"yes"}],"default":"yes"},{"name":"Transform","title":"Transform the DV","type":"List","options":[{"name":"None","title":"None"},{"name":"Log","title":"Log"},{"name":"Exp","title":"Exp"}],"default":"None"},{"name":"likelihoodType","title":"possible","type":"List","options":[{"name":"Samples","title":"Samples"},{"name":"Populations","title":"Populations"}],"default":"Populations"},{"name":"likelihoodCutaway","title":"","type":"List","options":[{"name":"all","title":"all"},{"name":"cutaway","title":"cutaway"}],"default":"cutaway"},{"name":"likelihoodUsePrior","title":"prior","type":"List","options":[{"name":"none","title":"none"},{"name":"world","title":"world"},{"name":"prior","title":"custom"}],"default":"none"},{"name":"priorPDF","title":"PDF","type":"List","options":[{"name":"Single","title":"Single"},{"name":"Double","title":"Double"},{"name":"Uniform","title":"Uniform"},{"name":"Gauss","title":"Gauss"},{"name":"Exp","title":"Exp"}],"default":"Exp"},{"name":"priorRZ","title":" ","type":"List","options":[{"name":"r","title":"r"},{"name":"z","title":"z"}],"default":"z"},{"name":"priorLambda","title":"lambda","type":"Number","default":0.3},{"name":"priorNullP","title":"p(null)","type":"Number","default":0},{"name":"showSampleType","title":"Show","type":"List","options":[{"name":"Compact","title":"Compact"},{"name":"Sample","title":"Sample"},{"name":"Describe","title":"Describe"},{"name":"Infer","title":"Infer"},{"name":"Likelihood","title":"Likelihood"}],"default":"Compact"},{"name":"singleVar1","title":" ","type":"List","options":[{"name":"rs","title":"rs"},{"name":"rp","title":"rp"},{"name":"re","title":"re"},{"name":"p","title":"p"},{"name":"n","title":"n"},{"name":"blank1","title":" "},{"name":"ws","title":"ws"},{"name":"wp","title":"wp"},{"name":"nw","title":"nw"},{"name":"blank2","title":" "},{"name":"ro","title":"ro"},{"name":"po","title":"po"},{"name":"no","title":"no"}],"default":"rs"},{"name":"singleVar2","title":" &","type":"List","options":[{"name":"rs","title":"rs"},{"name":"rp","title":"rp"},{"name":"re","title":"re"},{"name":"p","title":"p"},{"name":"n","title":"n"},{"name":"blank1","title":" "},{"name":"ws","title":"ws"},{"name":"wp","title":"wp"},{"name":"nw","title":"nw"},{"name":"blank2","title":" "},{"name":"ro","title":"ro"},{"name":"po","title":"po"},{"name":"no","title":"no"}],"default":"p"},{"name":"showInferDimension","title":"","type":"List","options":[{"name":"1D","title":"1D"},{"name":"2D","title":"2D"}],"default":"1D"},{"name":"showHTML","title":"HTML?","type":"Bool","default":true}];

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
			type: DefaultControls.Label,
			typeName: 'Label',
			label: "Layout:",
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
											style: "list",
											margin: "none",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "Make decisions about: Effect Sizes, NHST and Likelihood (optional)"
												},
												{
													type: DefaultControls.CollapseBox,
													typeName: 'CollapseBox',
													label: "Describe",
													collapsed: true,
													margin: "none",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "inline",
															margin: "none",
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "Which type of effect size to show:"
																}
															]
														},
														{
															type: DefaultControls.ComboBox,
															typeName: 'ComboBox',
															name: "Transform"
														},
														{
															type: DefaultControls.ComboBox,
															typeName: 'ComboBox',
															name: "interaction",
															enable: "(!presetIV2:none)"
														}
													]
												},
												{
													type: DefaultControls.CollapseBox,
													typeName: 'CollapseBox',
													label: "Infer",
													collapsed: true,
													margin: "none",
													controls: [
														{
															type: DefaultControls.Label,
															typeName: 'Label',
															label: "Decide alpha, some analysis options and some assumptions"
														},
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "inline",
															margin: "none",
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
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "alphaSig",
																	format: FormatDef.number
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
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: " ",
																	verticalAlignment: "center",
																	margin: "small",
																	minWidth: 13
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
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: " ",
																	verticalAlignment: "center",
																	margin: "small",
																	minWidth: 13
																},
																{
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	name: "equalVar",
																	enable: "(IVtype:Categorical && DVtype:Interval)"
																},
																{
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	name: "ssq",
																	format: FormatDef.number,
																	enable: "(!presetIV2:none)"
																}
															]
														}
													]
												},
												{
													type: DefaultControls.CollapseBox,
													typeName: 'CollapseBox',
													label: "Likelihood",
													collapsed: true,
													margin: "none",
													controls: [
														{
															type: DefaultControls.Label,
															typeName: 'Label',
															label: "Decide what prior to use"
														},
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "inline",
															margin: "none",
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
																	name: "likelihoodUsePrior",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	enable: "(likelihoodType:Populations)"
																},
																{
																	name: "priorPDF",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	enable: "(likelihoodType:Populations && likelihoodUsePrior:prior)"
																},
																{
																	name: "priorRZ",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	enable: "(likelihoodType:Populations && likelihoodUsePrior:prior)"
																},
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "priorLambda",
																	format: FormatDef.number,
																	enable: "(likelihoodType:Populations && likelihoodUsePrior:prior)"
																},
																{
																	name: "priorNullP",
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	enable: "(likelihoodType:Populations && likelihoodUsePrior:prior)",
																	format: FormatDef.number
																}
															]
														},
														{
															type: DefaultControls.Label,
															typeName: 'Label',
															label: "Display"
														},
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "inline",
															margin: "none",
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
																	name: "likelihoodType",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox'
																},
																{
																	name: "likelihoodCutaway",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	enable: "(likelihoodType:Samples)"
																}
															]
														}
													]
												}
											]
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
					margin: "none",
					controls: [
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							style: "inline",
							margin: "none",
							controls: [
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "showSampleType"
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "showInferDimension",
									enable: "(showSampleType:Infer)"
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "singleVar1",
									enable: "(showSampleType:Infer)"
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "singleVar2",
									enable: "(showSampleType:Infer)"
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
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "showHTML"
								}
							]
						}
					]
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
