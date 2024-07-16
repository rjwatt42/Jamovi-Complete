
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"planOptions","title":" ","type":"List","options":[{"name":"planH","title":"Hypothesis"},{"name":"planD","title":"Design"},{"name":"planA","title":"Analysis"},{"name":"planM","title":"More"}]},{"name":"varOptions","title":" ","type":"List","options":[{"name":"DV","title":"DV"},{"name":"IV","title":"IV"},{"name":"IV2","title":"IV2"}],"default":"DV"},{"name":"presetDV","title":"Presets:","type":"List","options":[{"name":"Blank","title":" "},{"name":"IQ","title":"IQ"},{"name":"Diligence","title":"Diligence"},{"name":"Perfectionism","title":"Perfectionism"},{"name":"Happiness","title":"Happiness"},{"name":"ExamGrade","title":"ExamGrade"},{"name":"RiskTaking","title":"RiskTaking"},{"name":"Interesting","title":"Interesting"},{"name":"Musician","title":"Musician?"},{"name":"Smoker","title":"Smoker?"},{"name":"RiskTaker","title":"RiskTaker?"},{"name":"Treatment","title":"Treatment?"},{"name":"Phase","title":"Phase"},{"name":"StudySubject","title":"StudySubject"},{"name":"BirthOrder","title":"BirthOrder"}],"default":"Blank"},{"name":"presetIV","title":"Presets:","type":"List","options":[{"name":"Blank","title":" "},{"name":"IQ","title":"IQ"},{"name":"Diligence","title":"Diligence"},{"name":"Perfectionism","title":"Perfectionism"},{"name":"Happiness","title":"Happiness"},{"name":"ExamGrade","title":"ExamGrade"},{"name":"RiskTaking","title":"RiskTaking"},{"name":"Interesting","title":"Interesting"},{"name":"Musician","title":"Musician?"},{"name":"Smoker","title":"Smoker?"},{"name":"RiskTaker","title":"RiskTaker?"},{"name":"Treatment","title":"Treatment?"},{"name":"Phase","title":"Phase"},{"name":"StudySubject","title":"StudySubject"},{"name":"BirthOrder","title":"BirthOrder"}],"default":"Blank"},{"name":"presetIV2","title":"Presets:","type":"List","options":[{"name":"Blank","title":" "},{"name":"IQ","title":"IQ"},{"name":"Diligence","title":"Diligence"},{"name":"Perfectionism","title":"Perfectionism"},{"name":"Happiness","title":"Happiness"},{"name":"ExamGrade","title":"ExamGrade"},{"name":"RiskTaking","title":"RiskTaking"},{"name":"Interesting","title":"Interesting"},{"name":"Musician","title":"Musician?"},{"name":"Smoker","title":"Smoker?"},{"name":"RiskTaker","title":"RiskTaker?"},{"name":"Treatment","title":"Treatment?"},{"name":"Phase","title":"Phase"},{"name":"StudySubject","title":"StudySubject"},{"name":"BirthOrder","title":"BirthOrder"}],"default":"Blank"},{"name":"effectOptions","title":" ","type":"List","options":[{"name":"simple","title":"simple"},{"name":"world","title":"world"}]},{"name":"presetHypothesis","title":"Presets:","type":"List","options":[{"name":"psych","title":"psychology"},{"name":"simple","title":"simple"}],"default":"simple"},{"name":"presetDesign","title":"Presets:","type":"List","options":[{"name":"psych","title":"psychology"},{"name":"simple","title":"simple"}],"default":"simple"},{"name":"DVname","title":"Name","type":"String","default":"DV"},{"name":"DVtype","title":"Type","type":"List","options":[{"name":"Interval","title":"Interval"},{"name":"Ordinal","title":"Ordinal"},{"name":"Categorical","title":"Categorical"}],"default":"Interval"},{"name":"DVmu","title":"mean","type":"Number","default":0},{"name":"DVsd","title":"sd","type":"Number","default":1},{"name":"DVskew","title":"skew","type":"Number","default":0},{"name":"DVkurt","title":"kurtosis","type":"Number","default":3},{"name":"DVnlevs","title":"no levels","type":"Number","default":7},{"name":"DViqr","title":"iqr","type":"Number","default":4},{"name":"DVncats","title":"no cases","type":"Number","default":2},{"name":"DVcases","title":"cases","type":"String","default":"C1,C2"},{"name":"DVprops","title":"proportions","type":"String","default":"1,1"},{"name":"IVname","title":"Name","type":"String","default":"IV"},{"name":"IVtype","title":"Type","type":"List","options":[{"name":"Interval","title":"Interval"},{"name":"Ordinal","title":"Ordinal"},{"name":"Categorical","title":"Categorical"}],"default":"Interval"},{"name":"IVmu","title":"mean","type":"Number","default":0},{"name":"IVsd","title":"sd","type":"Number","default":1},{"name":"IVskew","title":"skew","type":"Number","default":0},{"name":"IVkurt","title":"kurtosis","type":"Number","default":3},{"name":"IVnlevs","title":"no levels","type":"Number","default":7},{"name":"IViqr","title":"iqr","type":"Number","default":4},{"name":"IVncats","title":"no cases","type":"Number","default":2},{"name":"IVcases","title":"cases","type":"String","default":"C1,C2"},{"name":"IVprops","title":"proportions","type":"String","default":"1,1"},{"name":"IV2on","title":" ","type":"Bool","default":false},{"name":"IV2name","title":"Name","type":"String","default":"IV2"},{"name":"IV2type","title":"Type","type":"List","options":[{"name":"Interval","title":"Interval"},{"name":"Ordinal","title":"Ordinal"},{"name":"Categorical","title":"Categorical"}],"default":"Interval"},{"name":"IV2mu","title":"mean","type":"Number","default":0},{"name":"IV2sd","title":"sd","type":"Number","default":1},{"name":"IV2skew","title":"skew","type":"Number","default":0},{"name":"IV2kurt","title":"kurtosis","type":"Number","default":3},{"name":"IV2nlevs","title":"no levels","type":"Number","default":7},{"name":"IV2iqr","title":"iqr","type":"Number","default":4},{"name":"IV2ncats","title":"no cases","type":"Number","default":2},{"name":"IV2cases","title":"cases","type":"String","default":"C1,C2"},{"name":"IV2props","title":"proportions","type":"String","default":"1,1"},{"name":"EffectSize1","title":"IV->DV","type":"Number","default":0},{"name":"EffectSize2","title":"IV2->DV","type":"Number","default":0},{"name":"EffectSize3","title":"IV->IV2","type":"Number","default":0},{"name":"EffectSize12","title":"IV*IV2->DV","type":"Number","default":0},{"name":"Heteroscedasticity","title":"Heteroscedasticity","type":"Number","default":0},{"name":"Residuals","title":"Residuals","type":"List","options":[{"name":"normal","title":"normal"},{"name":"skewed","title":"skewed"},{"name":"uniform","title":"uniform"},{"name":"cauchy","title":"cauchy"}],"default":"normal"},{"name":"WorldOn","title":"","type":"Bool","default":false},{"name":"WorldPDF","title":"PDF","type":"List","options":[{"name":"Single","title":"Single"},{"name":"Double","title":"Double"},{"name":"Uniform","title":"Uniform"},{"name":"Gauss","title":"Gauss"},{"name":"Exp","title":"Exp"}],"default":"Single"},{"name":"WorldRZ","title":" ","type":"List","options":[{"name":"r","title":"r"},{"name":"z","title":"z"}]},{"name":"WorldLambda","title":"lambda","type":"Number","default":0.3},{"name":"WorldNullP","title":"p(null)","type":"Number","default":0.5},{"name":"SampleSize","title":"Sample Size","type":"Number","default":42},{"name":"SampleSpread","title":"spread?","type":"List","options":[{"name":"no","title":"no"},{"name":"yes","title":"yes"}],"default":"no"},{"name":"SampleGamma","title":" ","type":"Number","default":1.56},{"name":"SampleMethod","title":"Method","type":"List","options":[{"name":"Random","title":"Random"},{"name":"Stratified","title":"Stratified"},{"name":"Cluster","title":"Cluster"},{"name":"Convenience","title":"Convenience"}],"default":"Random"},{"name":"SampleUsage1","title":"Usage(IV)","type":"List","options":[{"name":"Between","title":"Between"},{"name":"Within","title":"Within"}],"default":"Between"},{"name":"SampleUsage2","title":"Usage(IV2)","type":"List","options":[{"name":"Between","title":"Between"},{"name":"Within","title":"Within"}],"default":"Between"},{"name":"Dependence","title":"Dependence","type":"Number","default":0},{"name":"Outliers","title":"Outliers","type":"Number","default":0},{"name":"Cheating","title":"Cheating","type":"List","options":[{"name":"None","title":"None"},{"name":"Grow","title":"Grow"},{"name":"Prune","title":"Prune"},{"name":"Replace","title":"Replace"},{"name":"Retry","title":"Retry"}],"default":"None"},{"name":"CheatingAttempts","title":"Attempts","type":"Number","default":5},{"name":"ReplicationOn","title":"","type":"Bool","default":false},{"name":"ReplicationPower","title":"power","type":"Number","default":0.8},{"name":"ReplicationPrior","title":"Prior","type":"List","options":[{"name":"None","title":"None"},{"name":"World","title":"World"},{"name":"Prior","title":"Prior"}],"default":"None"},{"name":"ReplicationAttempts","title":"Attempts","type":"Number","default":1},{"name":"ReplicationDecision","title":"Decision","type":"List","options":[{"name":"Cautious","title":"Cautious"},{"name":"Last","title":"Last"},{"name":"Median","title":"Median"},{"name":"SmallP","title":"SmallP"},{"name":"LargeN","title":"LargeN"}],"default":"Cautious"},{"name":"ReplicationAlpha","title":"alpha","type":"Number","default":0.05},{"name":"ReplicationSign","title":"same sign","type":"List","options":[{"name":"yes","title":"yes"},{"name":"no","title":"no"}],"default":"yes"},{"name":"alphaSig","title":"alpha","type":"Number","default":0.05},{"name":"ssq","title":"SSQ Type","type":"List","options":[{"name":"Type1","title":"Type1"},{"name":"Type2","title":"Type2"},{"name":"Type3","title":"Type3"}],"default":"Type3"},{"name":"interaction","title":"Interaction?","type":"List","options":[{"name":"no","title":"no"},{"name":"yes","title":"yes"}],"default":"yes"},{"name":"equalVar","title":"Equal variance","type":"List","options":[{"name":"no","title":"no"},{"name":"yes","title":"yes"}],"default":"yes"},{"name":"Transform","title":"Transform","type":"List","options":[{"name":"None","title":"None"},{"name":"Log","title":"Log"},{"name":"Exp","title":"Exp"}],"default":"None"},{"name":"likelihoodType","title":"Display","type":"List","options":[{"name":"Samples","title":"Samples"},{"name":"Populations","title":"Populations"}],"default":"Populations"},{"name":"likelihoodCutaway","title":"","type":"List","options":[{"name":"all","title":"all"},{"name":"cutaway","title":"cutaway"}],"default":"cutaway"},{"name":"likelihoodUsePrior","title":"prior","type":"List","options":[{"name":"none","title":"none"},{"name":"world","title":"world"},{"name":"prior","title":"prior"}],"default":"none"},{"name":"priorPDF","title":"PDF","type":"List","options":[{"name":"Single","title":"Single"},{"name":"Double","title":"Double"},{"name":"Uniform","title":"Uniform"},{"name":"Gauss","title":"Gauss"},{"name":"Exp","title":"Exp"}],"default":"Exp"},{"name":"priorRZ","title":" ","type":"List","options":[{"name":"r","title":"r"},{"name":"z","title":"z"}],"default":"z"},{"name":"priorLambda","title":"lambda","type":"Number","default":0.3},{"name":"priorNullP","title":"p(null)","type":"Number","default":0},{"name":"MetaAnalysisOn","title":"","type":"Bool","default":false},{"name":"MetaAnalysisType","title":" ","type":"List","options":[{"name":"random","title":"random"},{"name":"fixed","title":"fixed"}],"default":"random"},{"name":"MetaAnalysisNulls","title":"expect nulls","type":"List","options":[{"name":"yes","title":"yes"},{"name":"no","title":"no"}],"default":"yes"},{"name":"MetaAnalysisBias","title":"expect bias","type":"List","options":[{"name":"yes","title":"yes"},{"name":"no","title":"no"}],"default":"yes"},{"name":"MetaAnalysisNStudies","title":"no of studies","type":"Number","default":10},{"name":"MetaAnalysisStudiesSig","title":" ","type":"List","options":[{"name":"all","title":"all"},{"name":"sigOnly","title":"sigOnly"}],"default":"sigOnly"},{"name":"showHypothesisBtn","title":"show","type":"Action"},{"name":"makeSampleBtn","type":"Action","title":"single","default":false},{"name":"numberSamples","title":"no of samples","type":"Number","default":100},{"name":"makeMultipleBtn","title":"multiple","type":"Action"},{"name":"singleVar1","title":" show:","type":"List","options":[{"name":"rs","title":"rs"},{"name":"rp","title":"rp"},{"name":"re","title":"re"},{"name":"p","title":"p"},{"name":"n","title":"n"},{"name":"blank1","title":" "},{"name":"ws","title":"ws"},{"name":"wp","title":"wp"},{"name":"nw","title":"nw"},{"name":"blank2","title":" "},{"name":"ro","title":"ro"},{"name":"po","title":"po"},{"name":"no","title":"no"}],"default":"rs"},{"name":"singleVar2","title":" &","type":"List","options":[{"name":"rs","title":"rs"},{"name":"rp","title":"rp"},{"name":"re","title":"re"},{"name":"p","title":"p"},{"name":"n","title":"n"},{"name":"blank1","title":" "},{"name":"ws","title":"ws"},{"name":"wp","title":"wp"},{"name":"nw","title":"nw"},{"name":"blank2","title":" "},{"name":"ro","title":"ro"},{"name":"po","title":"po"},{"name":"no","title":"no"}],"default":"p"},{"name":"multipleVar1","title":" show:","type":"List","options":[{"name":"rs","title":"rs"},{"name":"rp","title":"rp"},{"name":"re","title":"re"},{"name":"p","title":"p"},{"name":"n","title":"n"},{"name":"blank1","title":" "},{"name":"ws","title":"ws"},{"name":"wp","title":"wp"},{"name":"nw","title":"nw"},{"name":"blank2","title":" "},{"name":"ro","title":"ro"},{"name":"po","title":"po"},{"name":"no","title":"no"}],"default":"rs"},{"name":"multipleVar2","title":" &","type":"List","options":[{"name":"rs","title":"rs"},{"name":"rp","title":"rp"},{"name":"re","title":"re"},{"name":"p","title":"p"},{"name":"n","title":"n"},{"name":"blank1","title":" "},{"name":"ws","title":"ws"},{"name":"wp","title":"wp"},{"name":"nw","title":"nw"},{"name":"blank2","title":" "},{"name":"ro","title":"ro"},{"name":"po","title":"po"},{"name":"no","title":"no"}],"default":"p"},{"name":"showSampleType","title":" show:","type":"List","options":[{"name":"Sample","title":"Sample"},{"name":"Describe","title":"Describe"},{"name":"Infer","title":"Infer"},{"name":"Likelihood","title":"Likelihood"}],"default":"Sample"},{"name":"showInferParam","title":" as:","type":"List","options":[{"name":"Basic","title":"Basic"},{"name":"Custom","title":"Custom"}],"default":"Basic"},{"name":"showInferDimension","title":"","type":"List","options":[{"name":"1D","title":"1D"},{"name":"2D","title":"2D"}],"default":"1D"},{"name":"showMultipleParam","title":" show as:","type":"List","options":[{"name":"Basic","title":"Basic"},{"name":"NHST","title":"NHST"},{"name":"Hits","title":"Hits"},{"name":"Misses","title":"Misses"},{"name":"Custom","title":"Custom"}],"default":"Basic"},{"name":"showMultipleDimension","title":"","type":"List","options":[{"name":"1D","title":"1D"},{"name":"2D","title":"2D"}],"default":"1D"},{"name":"whichShowMultiple","title":" ","type":"List","options":[{"name":"direct","title":"direct"},{"name":"unique","title":"unique"},{"name":"total","title":"total"},{"name":"all","title":"all"}],"default":"all"},{"name":"exploreNPointsH","title":"no of values","type":"Number","default":13},{"name":"exploreNPointsD","title":"no of values","type":"Number","default":13},{"name":"exploreNPointsA","title":"no of values","type":"Number","default":13},{"name":"exploreMinValH","title":"        ","type":"String","default":"-0.9"},{"name":"exploreMaxValH","title":"to","type":"String","default":"0.9"},{"name":"exploreMinValD","title":"        ","type":"String","default":"10"},{"name":"exploreMaxValD","title":"to","type":"String","default":"250"},{"name":"exploreMinValA","title":"        ","type":"String","default":"0.001"},{"name":"exploreMaxValA","title":"to","type":"String","default":"0.5"},{"name":"exploreXLogH","title":"log scale","type":"Bool","default":false},{"name":"exploreXLogD","title":"log scale","type":"Bool","default":false},{"name":"exploreXLogA","title":"log scale","type":"Bool","default":false},{"name":"numberExplores","title":"no of samples","type":"Number","default":50},{"name":"makeExploreBtn","title":"explore","type":"Action"},{"name":"exploreMode","title":"","type":"List","options":[{"name":"hypothesisExplore","title":"Hypothesis"},{"name":"designExplore","title":"Design"},{"name":"analysisExplore","title":"Analysis"}],"default":"designExplore"},{"name":"hypothesisExploreList","title":"","type":"List","options":[{"name":"rIV","title":"EffectSize"},{"name":"rIVIV2","title":"Covariation"},{"name":"Heteroscedasticity","title":"Hscedast"},{"name":"blank1h","title":" "},{"name":"PDF","title":"worldPDF"},{"name":"lambda","title":"worldLambda"},{"name":"pNull","title":"worldPNull"},{"name":"blank2h","title":" "},{"name":"IVType","title":"IVType"},{"name":"IVskew","title":"IVskew"},{"name":"IVkurtosis","title":"IVkurtosis"},{"name":"IVlevels","title":"IVlevels"},{"name":"IVcats","title":"IVcats"},{"name":"IVprops","title":"IVprops"},{"name":"DVType","title":"DVType"},{"name":"DVskew","title":"DVskew"},{"name":"DVkurtosis","title":"DVkurtosis"},{"name":"DVprops","title":"DVprops"}]},{"name":"designExploreList","title":"","type":"List","options":[{"name":"n","title":"SampleSize"},{"name":"Method","title":"Method"},{"name":"Usage","title":"Usage"},{"name":"blank1d","title":" "},{"name":"Dependence","title":"Dependence"},{"name":"Outliers","title":"Outliers"},{"name":"Cheating","title":"Cheating"},{"name":"CheatingAmount","title":"CheatAmount"},{"name":"blank2d","title":" "},{"name":"Power","title":"ReplPower"},{"name":"Keep","title":"ReplDecision"},{"name":"Repeats","title":"ReplAttempts"}]},{"name":"analysisExploreList","title":"","type":"List","options":[{"name":"Alpha","title":"Alpha"},{"name":"Transform","title":"Transform"},{"name":"Welch","title":"EqualVar"}]},{"name":"showExploreParam","title":"show as:","type":"List","options":[{"name":"Basic","title":"Basic"},{"name":"p(sig)","title":"p(sig)"},{"name":"NHST","title":"NHST"},{"name":"Hits","title":"Hits"},{"name":"Misses","title":"Misses"},{"name":"Custom","title":"Custom"}],"default":"Basic"},{"name":"exploreVar1","title":" show:","type":"List","options":[{"name":"rs","title":"rs"},{"name":"rp","title":"rp"},{"name":"re","title":"re"},{"name":"p","title":"p"},{"name":"n","title":"n"},{"name":"blank1","title":" "},{"name":"ws","title":"ws"},{"name":"wp","title":"wp"},{"name":"nw","title":"nw"},{"name":"blank2","title":" "},{"name":"ro","title":"ro"},{"name":"po","title":"po"},{"name":"no","title":"no"}],"default":"rs"},{"name":"exploreVar2","title":" &","type":"List","options":[{"name":"rs","title":"rs"},{"name":"rp","title":"rp"},{"name":"re","title":"re"},{"name":"p","title":"p"},{"name":"n","title":"n"},{"name":"blank1","title":" "},{"name":"ws","title":"ws"},{"name":"wp","title":"wp"},{"name":"nw","title":"nw"},{"name":"blank2","title":" "},{"name":"ro","title":"ro"},{"name":"po","title":"po"},{"name":"no","title":"no"}],"default":"p"},{"name":"showExploreDimension","title":"","type":"List","options":[{"name":"1D","title":"1D"},{"name":"2D","title":"2D"}],"default":"1D"},{"name":"whichShowExplore","title":" ","type":"List","options":[{"name":"direct","title":"direct"},{"name":"unique","title":"unique"},{"name":"total","title":"total"},{"name":"all","title":"all"}],"default":"all"},{"name":"sendSample","title":"single","type":"Output","default":true},{"name":"sendMultiple","title":"multiple","type":"Output","default":true}];

const view = function() {
    
    this.handlers = { }

    View.extend({
        jus: "3.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "BrawStats:Simulate Data",
    jus: "3.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.Label,
			typeName: 'Label',
			label: "1. Make a Plan",
			controls: [
				{
					type: DefaultControls.Label,
					typeName: 'Label',
					label: "Start by making a research plan"
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Plan",
					margin: "none",
					minWidth: 450,
					controls: [
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "A plan has 3 parts: a hypothesis, a design and an analysis"
						},
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
									minWidth: 2
								},
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "- make each of these in turn"
								}
							]
						},
						{
							name: "planOptions",
							type: DefaultControls.ModeSelector,
							typeName: 'ModeSelector',
							margin: "none",
							controls: [
								{
									type: DefaultControls.Content,
									typeName: 'Content',
									name: "planH",
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
															label: "A hypothesis has 2 components: variables and their effects"
														},
														{
															type: DefaultControls.CollapseBox,
															typeName: 'CollapseBox',
															collapsed: true,
															label: "Variables",
															margin: "none",
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "Define the DV and 1 or 2 IVs"
																},
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
																			minWidth: 2
																		},
																		{
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: "- edit the form or choose a preset variable"
																		}
																	]
																},
																{
																	type: DefaultControls.ModeSelector,
																	typeName: 'ModeSelector',
																	name: "varOptions",
																	margin: "none",
																	controls: [
																		{
																			type: DefaultControls.Content,
																			typeName: 'Content',
																			name: "DV",
																			controls: [
																				{
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					margin: "none",
																					minWidth: 120,
																					controls: [
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "DVname",
																							format: FormatDef.string,
																							margin: "none",
																							stretchFactor: 1
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
																							name: "DVtype",
																							margin: "none"
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
																							minWidth: 35
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "DVmu",
																							format: FormatDef.number,
																							enable: "(DVtype:Interval)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "DVsd",
																							format: FormatDef.number,
																							enable: "(DVtype:Interval)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "DVskew",
																							format: FormatDef.number,
																							enable: "(DVtype:Interval)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "DVkurt",
																							format: FormatDef.number,
																							enable: "(DVtype:Interval)"
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
																							minWidth: 35
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "DVnlevs",
																							format: FormatDef.number,
																							enable: "(DVtype:Ordinal)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "DViqr",
																							format: FormatDef.number,
																							enable: "(DVtype:Ordinal)"
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
																							minWidth: 35
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "DVncats",
																							format: FormatDef.number,
																							enable: "(DVtype:Categorical)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "DVcases",
																							format: FormatDef.string,
																							enable: "(DVtype:Categorical)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "DVprops",
																							format: FormatDef.string,
																							enable: "(DVtype:Categorical)"
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
																							name: "presetDV",
																							events: [
																								{ execute: require('./BrawSim.events').onChange_presetDV }
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			type: DefaultControls.Content,
																			typeName: 'Content',
																			name: "IV",
																			controls: [
																				{
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					margin: "none",
																					minWidth: 120,
																					controls: [
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IVname",
																							format: FormatDef.string,
																							margin: "none",
																							stretchFactor: 1
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
																							name: "IVtype",
																							margin: "none"
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
																							minWidth: 35
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IVmu",
																							format: FormatDef.number,
																							enable: "(IVtype:Interval)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IVsd",
																							format: FormatDef.number,
																							enable: "(IVtype:Interval)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IVskew",
																							format: FormatDef.number,
																							enable: "(IVtype:Interval)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IVkurt",
																							format: FormatDef.number,
																							enable: "(IVtype:Interval)"
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
																							minWidth: 35
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IVnlevs",
																							format: FormatDef.number,
																							enable: "(IVtype:Ordinal)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IViqr",
																							format: FormatDef.number,
																							enable: "(IVtype:Ordinal)"
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
																							minWidth: 35
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IVncats",
																							format: FormatDef.number,
																							enable: "(IVtype:Categorical)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IVcases",
																							format: FormatDef.string,
																							enable: "(IVtype:Categorical)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IVprops",
																							format: FormatDef.string,
																							enable: "(IVtype:Categorical)"
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
																							name: "presetIV",
																							events: [
																								{ execute: require('./BrawSim.events').onChange_presetIV }
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			type: DefaultControls.Content,
																			typeName: 'Content',
																			name: "IV2",
																			controls: [
																				{
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					controls: [
																						{
																							type: DefaultControls.CheckBox,
																							typeName: 'CheckBox',
																							name: "IV2on",
																							margin: "none"
																						}
																					]
																				},
																				{
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					margin: "none",
																					minWidth: 120,
																					controls: [
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IV2name",
																							format: FormatDef.string,
																							margin: "none",
																							stretchFactor: 1,
																							enable: "(IV2on)"
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
																							name: "IV2type",
																							margin: "none",
																							enable: "(IV2on)"
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
																							minWidth: 35
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IV2mu",
																							format: FormatDef.number,
																							enable: "(IV2on && IV2type:Interval)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IV2sd",
																							format: FormatDef.number,
																							enable: "(IV2on && IV2type:Interval)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IV2skew",
																							format: FormatDef.number,
																							enable: "(IV2on && IV2type:Interval)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IV2kurt",
																							format: FormatDef.number,
																							enable: "(IV2on && IV2type:Interval)"
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
																							minWidth: 35
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IV2nlevs",
																							format: FormatDef.number,
																							enable: "(IV2on && IV2type:Ordinal)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IV2iqr",
																							format: FormatDef.number,
																							enable: "(IV2on && IV2type:Ordinal)"
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
																							minWidth: 35
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IV2ncats",
																							format: FormatDef.number,
																							enable: "(IV2on && IV2type:Categorical)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IV2cases",
																							format: FormatDef.string,
																							enable: "(IV2on && IV2type:Categorical)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "IV2props",
																							format: FormatDef.string,
																							enable: "(IV2on && IV2type:Categorical)"
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
																							name: "presetIV2",
																							events: [
																								{ execute: require('./BrawSim.events').onChange_presetIV2 }
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
															type: DefaultControls.CollapseBox,
															typeName: 'CollapseBox',
															collapsed: true,
															label: "Effects",
															margin: "none",
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "set the effect each variable has on the others"
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
																			minWidth: 2
																		},
																		{
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: "- these are r and range between -1 and +1"
																		}
																	]
																},
																{
																	type: DefaultControls.ModeSelector,
																	typeName: 'ModeSelector',
																	name: "effectOptions",
																	margin: "none",
																	controls: [
																		{
																			type: DefaultControls.Content,
																			typeName: 'Content',
																			name: "simple",
																			controls: [
																				{
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					margin: "none",
																					controls: [
																						{
																							type: DefaultControls.LayoutBox,
																							typeName: 'LayoutBox',
																							style: "list",
																							controls: [
																								{
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "EffectSize1",
																									margin: "none",
																									format: FormatDef.number
																								}
																							]
																						},
																						{
																							type: DefaultControls.LayoutBox,
																							typeName: 'LayoutBox',
																							style: "list",
																							controls: [
																								{
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "EffectSize2",
																									margin: "none",
																									format: FormatDef.number,
																									enable: "(IV2on)"
																								},
																								{
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "EffectSize3",
																									margin: "none",
																									format: FormatDef.number,
																									enable: "(IV2on)"
																								},
																								{
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "EffectSize12",
																									margin: "none",
																									format: FormatDef.number,
																									enable: "(IV2on)"
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			type: DefaultControls.Content,
																			typeName: 'Content',
																			name: "world",
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
																							label: "on?",
																							margin: "none"
																						},
																						{
																							type: DefaultControls.CheckBox,
																							typeName: 'CheckBox',
																							name: "WorldOn"
																						},
																						{
																							type: DefaultControls.ComboBox,
																							typeName: 'ComboBox',
																							name: "WorldPDF"
																						},
																						{
																							type: DefaultControls.ComboBox,
																							typeName: 'ComboBox',
																							name: "WorldRZ"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "WorldLambda",
																							format: FormatDef.number
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "WorldNullP",
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
																							type: DefaultControls.ComboBox,
																							typeName: 'ComboBox',
																							name: "presetHypothesis",
																							events: [
																								{ execute: require('./BrawSim.events').onChange_presetHypothesis }
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
															type: DefaultControls.CollapseBox,
															typeName: 'CollapseBox',
															collapsed: true,
															label: "Anomalies",
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
																			name: "Residuals",
																			margin: "none"
																		},
																		{
																			type: DefaultControls.TextBox,
																			typeName: 'TextBox',
																			name: "Heteroscedasticity",
																			margin: "none",
																			format: FormatDef.number
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
									type: DefaultControls.Content,
									typeName: 'Content',
									name: "planD",
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
															label: "A design requires decisions about sampling"
														},
														{
															type: DefaultControls.CollapseBox,
															typeName: 'CollapseBox',
															label: "Sampling",
															collapsed: true,
															margin: "none",
															controls: [
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "list",
																	margin: "none",
																	controls: [
																		{
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: "Sampling has 3 elements: sample size, method and usage"
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
																					name: "SampleSize",
																					margin: "none",
																					format: FormatDef.number
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "SampleSpread",
																					margin: "none"
																				},
																				{
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "SampleGamma",
																					margin: "none",
																					format: FormatDef.number,
																					enable: "(SampleSpread:yes)"
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
																					name: "SampleMethod",
																					margin: "none"
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
																					name: "SampleUsage1",
																					enable: "(IVtype:Categorical)",
																					margin: "none"
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "SampleUsage2",
																					enable: "(IV2on && IV2type:Categorical)",
																					margin: "none"
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
															label: "Anomalies",
															collapsed: true,
															margin: "none",
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
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "Dependence",
																					margin: "none",
																					format: FormatDef.number
																				},
																				{
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "Outliers",
																					margin: "none",
																					format: FormatDef.number
																				}
																			]
																		}
																	]
																},
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
																					name: "Cheating",
																					margin: "none"
																				},
																				{
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "CheatingAttempts",
																					margin: "none",
																					format: FormatDef.number
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.ComboBox,
															typeName: 'ComboBox',
															name: "presetDesign",
															events: [
																{ execute: require('./BrawSim.events').onChange_presetDesign }
															]
														}
													]
												}
											]
										}
									]
								},
								{
									type: DefaultControls.Content,
									typeName: 'Content',
									name: "planA",
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
															label: "An analysis involves decisions about: NHST and Likelihood (optional)"
														},
														{
															type: DefaultControls.CollapseBox,
															typeName: 'CollapseBox',
															label: "Sample Effect Sizes",
															collapsed: true,
															margin: "none",
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "Choose which effect size to show:"
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
																			name: "whichShowMultiple",
																			enable: "(IV2on)"
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.CollapseBox,
															typeName: 'CollapseBox',
															label: "NHST",
															collapsed: true,
															margin: "none",
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "Null hypothesis test involves: alpha (0.05) and some assumptions"
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
																			enable: "(IV2on)"
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
																			enable: "(IV2on)"
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
																	label: "These options control likelihood graphs"
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
									type: DefaultControls.Content,
									typeName: 'Content',
									name: "planM",
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
															label: "Some more options"
														},
														{
															type: DefaultControls.CollapseBox,
															typeName: 'CollapseBox',
															label: "Replication",
															collapsed: true,
															margin: "none",
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
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "on?",
																					margin: "none"
																				},
																				{
																					type: DefaultControls.CheckBox,
																					typeName: 'CheckBox',
																					name: "ReplicationOn"
																				},
																				{
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "ReplicationPower",
																					margin: "none",
																					format: FormatDef.number
																				},
																				{
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "ReplicationAttempts",
																					margin: "none",
																					format: FormatDef.number
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "ReplicationPrior",
																					margin: "none"
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
																					name: "ReplicationDecision",
																					margin: "none"
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "ReplicationSign",
																					margin: "none"
																				},
																				{
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "ReplicationAlpha",
																					margin: "none",
																					format: FormatDef.number
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
															label: "MetaAnalysis",
															collapsed: true,
															margin: "none",
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
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "on?",
																					margin: "none"
																				},
																				{
																					type: DefaultControls.CheckBox,
																					typeName: 'CheckBox',
																					name: "MetaAnalysisOn"
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "MetaAnalysisType",
																					margin: "none"
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "MetaAnalysisNulls",
																					margin: "none"
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "MetaAnalysisBias",
																					margin: "none"
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
																					label: "source:",
																					margin: "none"
																				},
																				{
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "MetaAnalysisNStudies",
																					margin: "none",
																					format: FormatDef.number
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "MetaAnalysisStudiesSig",
																					margin: "none"
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
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							style: "inline",
							controls: [
								{
									type: DefaultControls.ActionButton,
									typeName: 'ActionButton',
									name: "showHypothesisBtn",
									maxWidth: 75
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
			label: "2. Make a Sample",
			controls: [
				{
					type: DefaultControls.Label,
					typeName: 'Label',
					label: "Then carry out the plan"
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					label: "Sample",
					collapsed: true,
					minWidth: 450,
					margin: "none",
					controls: [
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "make a single sample and see the data and analysis"
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
									minWidth: 2
								},
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "- there are various display options to try"
								}
							]
						},
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							style: "inline",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									margin: "small",
									minWidth: 165
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "singleVar1",
									enable: "((showSampleType:Infer && showInferParam:Custom) || (showMultipleParam:Custom))"
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "singleVar2",
									enable: "((showSampleType:Infer && showInferParam:Custom) || (showMultipleParam:Custom))"
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "showInferDimension"
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
									type: DefaultControls.ActionButton,
									typeName: 'ActionButton',
									name: "makeSampleBtn",
									maxWidth: 75
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "showSampleType"
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "showInferParam",
									enable: "(showSampleType:Infer)"
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
			label: "3. Expected",
			controls: [
				{
					type: DefaultControls.Label,
					typeName: 'Label',
					label: "By running many samples, we can see the range of outcomes to expect"
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					label: "Multiple Samples",
					collapsed: true,
					margin: "none",
					minWidth: 450,
					controls: [
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "make many samples to see the range of possible outcomes"
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
									minWidth: 2
								},
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "- there are various display options to try"
								}
							]
						},
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							style: "inline",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									margin: "small",
									minWidth: 165
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "multipleVar1",
									enable: "(showMultipleParam:Custom)"
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "multipleVar2",
									enable: "(showMultipleParam:Custom)"
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "showMultipleDimension",
									enable: "(showMultipleParam:Custom || showMultipleParam:Basic)"
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
									name: "makeMultipleBtn",
									type: DefaultControls.ActionButton,
									typeName: 'ActionButton',
									maxWidth: 75
								},
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "inline",
									controls: [
										{
											name: "numberSamples",
											type: DefaultControls.TextBox,
											typeName: 'TextBox',
											format: FormatDef.number
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											style: "inline",
											controls: [
												{
													name: "showMultipleParam",
													type: DefaultControls.ComboBox,
													typeName: 'ComboBox'
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
							label: "Suggestions",
							collapsed: true,
							margin: "none",
							minWidth: 450,
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
											label: " ",
											minWidth: 13
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "Change the sampling method"
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
											minWidth: 30
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "- do this with an effect size of r=0 to see false positives"
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
											minWidth: 13
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "Change the types of the variables"
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
											minWidth: 30
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "- do this with an effect size of r=0.3 to see misses"
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
											minWidth: 13
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "Try and find a sample size that gives you 80% significant results"
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
											minWidth: 30
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "- do this with an effect size of r=0.3 and then r=0.1"
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
			label: "4. Explore plan decisions",
			controls: [
				{
					type: DefaultControls.Label,
					typeName: 'Label',
					label: "Explore the decisions that are in the plan"
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					label: "Explore",
					collapsed: true,
					margin: "none",
					minWidth: 450,
					controls: [
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "Explore by automatically varying any decision in the plan"
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
									minWidth: 2
								},
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "- in each case set the range and the number of values to explore"
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
									minWidth: 2
								},
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "- there are various display options to try"
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
									minWidth: 13
								},
								{
									type: DefaultControls.ModeSelector,
									typeName: 'ModeSelector',
									name: "exploreMode",
									margin: "none",
									verticalAlignment: "bottom",
									events: [
										{ execute: require('./BrawSim.events').onChange_exploreMode }
									],
									controls: [
										{
											type: DefaultControls.Content,
											typeName: 'Content',
											name: "hypothesisExplore",
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
															name: "hypothesisExploreList",
															events: [
																{ execute: require('./BrawSim.events').onChange_hypothesisExploreList }
															]
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMinValH",
															margin: "none",
															format: FormatDef.string,
															minWidth: 350,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMaxValH",
															margin: "none",
															format: FormatDef.string,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreNPointsH",
															margin: "none",
															format: FormatDef.number,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.CheckBox,
															typeName: 'CheckBox',
															name: "exploreXLogH",
															margin: "none",
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														}
													]
												}
											]
										},
										{
											type: DefaultControls.Content,
											typeName: 'Content',
											name: "designExplore",
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
															name: "designExploreList",
															events: [
																{ execute: require('./BrawSim.events').onChange_designExploreList }
															]
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMinValD",
															margin: "none",
															format: FormatDef.string,
															minWidth: 350,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMaxValD",
															margin: "none",
															format: FormatDef.string,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreNPointsD",
															margin: "none",
															format: FormatDef.number,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.CheckBox,
															typeName: 'CheckBox',
															name: "exploreXLogD",
															margin: "none",
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														}
													]
												}
											]
										},
										{
											type: DefaultControls.Content,
											typeName: 'Content',
											name: "analysisExplore",
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
															name: "analysisExploreList",
															events: [
																{ execute: require('./BrawSim.events').onChange_analysisExploreList }
															]
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMinValA",
															margin: "none",
															format: FormatDef.string,
															minWidth: 350,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMaxValA",
															margin: "none",
															format: FormatDef.string,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreNPointsA",
															margin: "none",
															format: FormatDef.number,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.CheckBox,
															typeName: 'CheckBox',
															name: "exploreXLogA",
															margin: "none",
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
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
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							style: "inline",
							margin: "none",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
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
									name: "numberExplores",
									type: DefaultControls.TextBox,
									typeName: 'TextBox',
									format: FormatDef.number
								},
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "inline",
									controls: [
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: " ",
											margin: "small",
											minWidth: 13
										},
										{
											type: DefaultControls.ComboBox,
											typeName: 'ComboBox',
											name: "exploreVar1",
											enable: "(showExploreParam:Custom)"
										},
										{
											type: DefaultControls.ComboBox,
											typeName: 'ComboBox',
											name: "exploreVar2",
											enable: "(showExploreParam:Custom)"
										},
										{
											type: DefaultControls.ComboBox,
											typeName: 'ComboBox',
											name: "showExploreDimension",
											enable: "(showExploreParam:Custom)"
										},
										{
											name: "whichShowExplore",
											type: DefaultControls.ComboBox,
											typeName: 'ComboBox',
											enable: "(IV2on)"
										}
									]
								}
							]
						},
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
											name: "makeExploreBtn",
											type: DefaultControls.ActionButton,
											typeName: 'ActionButton',
											maxWidth: 75
										},
										{
											type: DefaultControls.ComboBox,
											typeName: 'ComboBox',
											name: "showExploreParam"
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
			label: "Send Samples to Jamovi",
			controls: [
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					style: "inline",
					margin: "none",
					controls: [
						{
							type: DefaultControls.Output,
							typeName: 'Output',
							name: "sendSample"
						},
						{
							type: DefaultControls.Output,
							typeName: 'Output',
							name: "sendMultiple"
						}
					]
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
