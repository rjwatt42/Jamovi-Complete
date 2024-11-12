
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"planOptions","title":" ","type":"List","options":[{"name":"planH","title":"Hypothesis"},{"name":"planD","title":"Design"},{"name":"planA","title":"Analysis"},{"name":"planM","title":"More"}]},{"name":"presetDV","title":"","type":"List","options":[{"name":"Blank","title":"DV"},{"name":"IQ","title":"IQ"},{"name":"Diligence","title":"Diligence"},{"name":"Perfectionism","title":"Perfectionism"},{"name":"Happiness","title":"Happiness"},{"name":"ExamGrade","title":"ExamGrade"},{"name":"ExamPass","title":"ExamPass?"},{"name":"RiskTaking","title":"RiskTaking"},{"name":"Interesting","title":"Interesting"},{"name":"Musician","title":"Musician?"},{"name":"Smoker","title":"Smoker?"},{"name":"RiskTaker","title":"RiskTaker?"},{"name":"Treatment","title":"Treatment?"},{"name":"Phase","title":"Phase"},{"name":"StudySubject","title":"StudySubject"},{"name":"BirthOrder","title":"BirthOrder"}],"default":"Blank"},{"name":"presetIV","title":"","type":"List","options":[{"name":"Blank","title":"IV"},{"name":"IQ","title":"IQ"},{"name":"Diligence","title":"Diligence"},{"name":"Perfectionism","title":"Perfectionism"},{"name":"Happiness","title":"Happiness"},{"name":"ExamGrade","title":"ExamGrade"},{"name":"RiskTaking","title":"RiskTaking"},{"name":"Interesting","title":"Interesting"},{"name":"Musician","title":"Musician?"},{"name":"Smoker","title":"Smoker?"},{"name":"RiskTaker","title":"RiskTaker?"},{"name":"Treatment","title":"Treatment?"},{"name":"Phase","title":"Phase"},{"name":"StudySubject","title":"StudySubject"},{"name":"BirthOrder","title":"BirthOrder"}],"default":"Blank"},{"name":"presetIV2","title":"","type":"List","options":[{"name":"none","title":"none"},{"name":"IV2","title":"IV2"},{"name":"IQ","title":"IQ"},{"name":"Diligence","title":"Diligence"},{"name":"Perfectionism","title":"Perfectionism"},{"name":"Happiness","title":"Happiness"},{"name":"ExamGrade","title":"ExamGrade"},{"name":"RiskTaking","title":"RiskTaking"},{"name":"Interesting","title":"Interesting"},{"name":"Musician","title":"Musician?"},{"name":"Smoker","title":"Smoker?"},{"name":"RiskTaker","title":"RiskTaker?"},{"name":"Treatment","title":"Treatment?"},{"name":"Phase","title":"Phase"},{"name":"StudySubject","title":"StudySubject"},{"name":"BirthOrder","title":"BirthOrder"}],"default":"none"},{"name":"presetWorld","title":"Presets:","type":"List","options":[{"name":"psych","title":"psychology"},{"name":"simple","title":"simple"}],"default":"simple"},{"name":"DVname","title":"Name","type":"String","default":"DV"},{"name":"DVtype","title":"Type","type":"List","options":[{"name":"Interval","title":"Interval"},{"name":"Ordinal","title":"Ordinal"},{"name":"Categorical","title":"Categorical"}],"default":"Interval"},{"name":"DVmu","title":"mean","type":"Number","default":0},{"name":"DVsd","title":"sd","type":"Number","default":1},{"name":"DVskew","title":"skew","type":"Number","default":0},{"name":"DVkurt","title":"kurtosis","type":"Number","default":0},{"name":"DVnlevs","title":"no levels","type":"Number","default":7},{"name":"DViqr","title":"iqr","type":"Number","default":4},{"name":"DVncats","title":"no cases","type":"Number","default":2},{"name":"DVcases","title":"cases","type":"String","default":"C1,C2"},{"name":"DVprops","title":"proportions","type":"String","default":"1,1"},{"name":"IVname","title":"Name","type":"String","default":"IV"},{"name":"IVtype","title":"Type","type":"List","options":[{"name":"Interval","title":"Interval"},{"name":"Ordinal","title":"Ordinal"},{"name":"Categorical","title":"Categorical"}],"default":"Interval"},{"name":"IVmu","title":"mean","type":"Number","default":0},{"name":"IVsd","title":"sd","type":"Number","default":1},{"name":"IVskew","title":"skew","type":"Number","default":0},{"name":"IVkurt","title":"kurtosis","type":"Number","default":0},{"name":"IVnlevs","title":"no levels","type":"Number","default":7},{"name":"IViqr","title":"iqr","type":"Number","default":4},{"name":"IVncats","title":"no cases","type":"Number","default":2},{"name":"IVcases","title":"cases","type":"String","default":"C1,C2"},{"name":"IVprops","title":"proportions","type":"String","default":"1,1"},{"name":"IV2name","title":"Name","type":"String","default":"IV2"},{"name":"IV2type","title":"Type","type":"List","options":[{"name":"Interval","title":"Interval"},{"name":"Ordinal","title":"Ordinal"},{"name":"Categorical","title":"Categorical"}],"default":"Interval"},{"name":"IV2mu","title":"mean","type":"Number","default":0},{"name":"IV2sd","title":"sd","type":"Number","default":1},{"name":"IV2skew","title":"skew","type":"Number","default":0},{"name":"IV2kurt","title":"kurtosis","type":"Number","default":0},{"name":"IV2nlevs","title":"no levels","type":"Number","default":7},{"name":"IV2iqr","title":"iqr","type":"Number","default":4},{"name":"IV2ncats","title":"no cases","type":"Number","default":2},{"name":"IV2cases","title":"cases","type":"String","default":"C1,C2"},{"name":"IV2props","title":"proportions","type":"String","default":"1,1"},{"name":"EffectSize1","title":"IV->DV","type":"Number","default":0},{"name":"EffectSize2","title":"IV2->DV","type":"Number","default":0},{"name":"EffectSize3","title":"IV->IV2","type":"Number","default":0},{"name":"EffectSize12","title":"IV*IV2->DV","type":"Number","default":0},{"name":"Heteroscedasticity","title":"Heteroscedasticity","type":"Number","default":0},{"name":"Residuals","title":"Residuals","type":"List","options":[{"name":"normal","title":"normal"},{"name":"skewed","title":"skewed"},{"name":"uniform","title":"uniform"},{"name":"cauchy","title":"cauchy"}],"default":"normal"},{"name":"WorldOn","title":"","type":"Bool","default":false},{"name":"WorldPDF","title":"distribution","type":"List","options":[{"name":"Single","title":"Single"},{"name":"Double","title":"Double"},{"name":"Uniform","title":"Uniform"},{"name":"Gauss","title":"Gauss"},{"name":"Exp","title":"Exp"}],"default":"Single"},{"name":"WorldRZ","title":" ","type":"List","options":[{"name":"r","title":"r"},{"name":"z","title":"z"}]},{"name":"WorldLambda","title":"lambda","type":"Number","default":0.3},{"name":"WorldNullP","title":"p(null)","type":"Number","default":0.5},{"name":"SampleSize","title":"Sample Size","type":"Number","default":42},{"name":"SampleSizeM","title":"Median n","type":"Number","default":42},{"name":"SampleSpreadOn","title":" ","type":"Bool","default":false},{"name":"SampleGamma","title":"spread","type":"Number","default":1.56},{"name":"SampleMethod","title":"Method","type":"List","options":[{"name":"Random","title":"Random"},{"name":"Stratified","title":"Stratified"},{"name":"Cluster","title":"Cluster"},{"name":"Snowball","title":"Snowball"},{"name":"Convenience","title":"Convenience"}],"default":"Random"},{"name":"SampleUsage1","title":"Usage(IV)","type":"List","options":[{"name":"Between","title":"Between"},{"name":"Within","title":"Within"}],"default":"Between"},{"name":"SampleUsage2","title":"Usage(IV2)","type":"List","options":[{"name":"Between","title":"Between"},{"name":"Within","title":"Within"}],"default":"Between"},{"name":"Dependence","title":"Dependence","type":"Number","default":0},{"name":"Outliers","title":"Outliers","type":"Number","default":0},{"name":"NonResponse","title":"NonResponse","type":"Number","default":0},{"name":"LimitRange","title":"Limit range?","type":"List","options":[{"name":"yes","title":"yes"},{"name":"no","title":"no"}],"default":"no"},{"name":"RangeMin","title":"from","type":"Number","default":-3},{"name":"RangeMax","title":"to","type":"Number","default":3},{"name":"Cheating","title":"Cheating","type":"List","options":[{"name":"None","title":"None"},{"name":"Grow","title":"Grow"},{"name":"Prune","title":"Prune"},{"name":"Replace","title":"Replace"},{"name":"Retry","title":"Retry"}],"default":"None"},{"name":"CheatingAttempts","title":"Attempts","type":"Number","default":5},{"name":"ReplicationOn","title":"","type":"Bool","default":false},{"name":"ReplicationPower","title":"sample target power","type":"Number","default":0.8},{"name":"ReplicationPrior","title":"prior","type":"List","options":[{"name":"None","title":"None"},{"name":"World","title":"World"},{"name":"Prior","title":"Custom"}],"default":"None"},{"name":"ReplicationAttempts","title":"how many replications?","type":"Number","default":1},{"name":"ReplicationDecision","title":"decision","type":"List","options":[{"name":"Cautious","title":"Cautious"},{"name":"Last","title":"Last"},{"name":"Median","title":"Median"},{"name":"SmallP","title":"SmallP"},{"name":"LargeN","title":"LargeN"}],"default":"Cautious"},{"name":"ReplicationAlpha","title":"rep alpha","type":"Number","default":0.05},{"name":"ReplicationSign","title":"same sign","type":"List","options":[{"name":"yes","title":"yes"},{"name":"no","title":"no"}],"default":"yes"},{"name":"ReplicationSigOriginal","title":"significant original","type":"List","options":[{"name":"yes","title":"yes"},{"name":"no","title":"no"}],"default":"yes"},{"name":"alphaSig","title":"alpha","type":"Number","default":0.05},{"name":"ssq","title":"SSQ Type","type":"List","options":[{"name":"Type1","title":"Type1"},{"name":"Type2","title":"Type2"},{"name":"Type3","title":"Type3"}],"default":"Type3"},{"name":"interaction","title":"Interaction?","type":"List","options":[{"name":"no","title":"no"},{"name":"yes","title":"yes"}],"default":"no"},{"name":"equalVar","title":"Equal variance","type":"List","options":[{"name":"no","title":"no"},{"name":"yes","title":"yes"}],"default":"yes"},{"name":"Transform","title":"Transform the DV","type":"List","options":[{"name":"None","title":"None"},{"name":"Log","title":"Log"},{"name":"Exp","title":"Exp"}],"default":"None"},{"name":"likelihoodType","title":"possible","type":"List","options":[{"name":"Samples","title":"Samples"},{"name":"Populations","title":"Populations"}],"default":"Populations"},{"name":"likelihoodCutaway","title":"","type":"List","options":[{"name":"all","title":"all"},{"name":"cutaway","title":"cutaway"}],"default":"cutaway"},{"name":"likelihoodUsePrior","title":"prior","type":"List","options":[{"name":"none","title":"none"},{"name":"world","title":"world"},{"name":"prior","title":"custom"}],"default":"none"},{"name":"priorPDF","title":"PDF","type":"List","options":[{"name":"Single","title":"Single"},{"name":"Double","title":"Double"},{"name":"Uniform","title":"Uniform"},{"name":"Gauss","title":"Gauss"},{"name":"Exp","title":"Exp"}],"default":"Exp"},{"name":"priorRZ","title":" ","type":"List","options":[{"name":"r","title":"r"},{"name":"z","title":"z"}],"default":"z"},{"name":"priorLambda","title":"lambda","type":"Number","default":0.3},{"name":"priorNullP","title":"p(null)","type":"Number","default":0},{"name":"MetaAnalysisOn","title":"","type":"Bool","default":false},{"name":"MetaAnalysisType","title":" ","type":"List","options":[{"name":"random","title":"random"},{"name":"fixed","title":"fixed"}],"default":"random"},{"name":"MetaAnalysisNulls","title":"nulls","type":"List","options":[{"name":"yes","title":"yes"},{"name":"no","title":"no"}],"default":"yes"},{"name":"MetaAnalysisBias","title":"bias","type":"List","options":[{"name":"yes","title":"yes"},{"name":"no","title":"no"}],"default":"yes"},{"name":"MetaAnalysisNStudies","title":"no of studies","type":"Number","default":10},{"name":"MetaAnalysisStudiesSig","title":" ","type":"List","options":[{"name":"all","title":"all"},{"name":"sigOnly","title":"sigOnly"}],"default":"sigOnly"},{"name":"showHypothesisBtn","title":"show","type":"Action"},{"name":"makeSampleBtn","type":"Action","title":"single","default":false},{"name":"numberSamples","title":"no of samples","type":"Number","default":100},{"name":"makeMultipleBtn","title":"multiple","type":"Action"},{"name":"inferVar1","title":" show:","type":"List","options":[{"name":"rs","title":"rs"},{"name":"rp","title":"rp"},{"name":"re","title":"re"},{"name":"p","title":"p"},{"name":"n","title":"n"},{"name":"blank1","title":" "},{"name":"ws","title":"ws"},{"name":"wp","title":"wp"},{"name":"nw","title":"nw"},{"name":"blank2","title":" "},{"name":"ro","title":"ro"},{"name":"po","title":"po"},{"name":"no","title":"no"}],"default":"rs"},{"name":"inferVar2","title":" &","type":"List","options":[{"name":"rs","title":"rs"},{"name":"rp","title":"rp"},{"name":"re","title":"re"},{"name":"p","title":"p"},{"name":"n","title":"n"},{"name":"blank1","title":" "},{"name":"ws","title":"ws"},{"name":"wp","title":"wp"},{"name":"nw","title":"nw"},{"name":"blank2","title":" "},{"name":"ro","title":"ro"},{"name":"po","title":"po"},{"name":"no","title":"no"}],"default":"p"},{"name":"showSampleType","title":" show:","type":"List","options":[{"name":"Compact","title":"Compact"},{"name":"Variables","title":"Variables"},{"name":"Sample","title":"Sample"},{"name":"Describe","title":"Describe"},{"name":"Infer","title":"Infer"},{"name":"Likelihood","title":"Likelihood"}],"default":"Compact"},{"name":"showInferDimension","title":"","type":"List","options":[{"name":"1D","title":"1D"},{"name":"2D","title":"2D"}],"default":"1D"},{"name":"reportInferStats","title":" ","type":"List","options":[{"name":"Means","title":"(Means)"},{"name":"Medians","title":"(Medians)"}],"default":"Medians"},{"name":"showMultipleParam","title":" show as:","type":"List","options":[{"name":"Basic","title":"Basic"},{"name":"p(sig)","title":"p(sig)"},{"name":"NHST","title":"NHST"},{"name":"Hits","title":"Hits"},{"name":"Misses","title":"Misses"},{"name":"DV","title":"DV"},{"name":"Residuals","title":"Residuals"}],"default":"Basic"},{"name":"showMultipleDimension","title":"","type":"List","options":[{"name":"1D","title":"1D"},{"name":"2D","title":"2D"}],"default":"1D"},{"name":"exploreNPointsH","title":"using","type":"Number","default":13},{"name":"exploreNPointsD","title":"using","type":"Number","default":13},{"name":"exploreNPointsA","title":"using","type":"Number","default":13},{"name":"exploreNPointsM","title":"using","type":"Number","default":13},{"name":"exploreMinValH","title":"from","type":"String","default":"-0.9"},{"name":"exploreMaxValH","title":"to","type":"String","default":"0.9"},{"name":"exploreMinValD","title":"from","type":"String","default":"10"},{"name":"exploreMaxValD","title":"to","type":"String","default":"250"},{"name":"exploreMinValA","title":"from","type":"String","default":"0.001"},{"name":"exploreMaxValM","title":"to","type":"String","default":"0.5"},{"name":"exploreMinValM","title":"from","type":"String","default":"0.001"},{"name":"exploreMaxValA","title":"to","type":"String","default":"0.5"},{"name":"exploreXLogH","title":"log scale","type":"Bool","default":false},{"name":"exploreXLogD","title":"log scale","type":"Bool","default":false},{"name":"exploreXLogA","title":"log scale","type":"Bool","default":false},{"name":"exploreXLogM","title":"log scale","type":"Bool","default":false},{"name":"numberExplores","title":"no of samples","type":"Number","default":10},{"name":"makeExploreBtn","title":"explore","type":"Action"},{"name":"exploreMode","title":"","type":"List","options":[{"name":"hypothesisExplore","title":"Hypothesis"},{"name":"designExplore","title":"Design"},{"name":"analysisExplore","title":"Analysis"},{"name":"moreExplore","title":"More"}],"default":"designExplore"},{"name":"hypothesisExploreList","title":"explore:","type":"List","options":[{"name":"rIV","title":"EffectSize"},{"name":"rIVIV2","title":"Covariation"},{"name":"rIVIV2DV","title":"Interaction"},{"name":"Heteroscedasticity","title":"Hscedast"},{"name":"blank0h","title":" "},{"name":"IVType","title":"IVType"},{"name":"IVskew","title":"IVskew"},{"name":"IVkurtosis","title":"IVkurtosis"},{"name":"IVlevels","title":"IVlevels"},{"name":"IVcats","title":"IVcats"},{"name":"IVprops","title":"IVprops"},{"name":"DVType","title":"DVType"},{"name":"DVskew","title":"DVskew"},{"name":"DVkurtosis","title":"DVkurtosis"},{"name":"DVcats","title":"DVcats"},{"name":"DVprops","title":"DVprops"},{"name":"blank1h","title":" "},{"name":"lambda","title":"worldLambda"},{"name":"pNull","title":"worldPNull"},{"name":"blank2h"}]},{"name":"designExploreList","title":"explore:","type":"List","options":[{"name":"n","title":"SampleSize"},{"name":"Method","title":"Method"},{"name":"Usage","title":"Usage"},{"name":"blank1d","title":" "},{"name":"Dependence","title":"Dependence"},{"name":"Outliers","title":"Outliers"},{"name":"NonResponse","title":"NonResponse"},{"name":"IVRangeC","title":"IV RangeC"},{"name":"IVRangeE","title":"IV RangeE"},{"name":"blank1e","title":" "},{"name":"Cheating","title":"CheatMethod"},{"name":"CheatingAmount","title":"CheatAmount"}]},{"name":"analysisExploreList","title":"explore:","type":"List","options":[{"name":"Alpha","title":"Alpha"},{"name":"Transform","title":"Transform"},{"name":"Welch","title":"EqualVar"},{"name":"InteractionOn","title":"InteractionOn"}]},{"name":"moreExploreList","title":"explore:","type":"List","options":[{"name":"Power","title":"ReplPower"},{"name":"Keep","title":"ReplDecision"},{"name":"Repeats","title":"ReplAttempts"}]},{"name":"showExploreParam","title":"show as:","type":"List","options":[{"name":"Single","title":"Single"},{"name":"Basic","title":"Basic"},{"name":"p(sig)","title":"p(sig)"},{"name":"NHST","title":"NHST"},{"name":"Hits","title":"Hits"},{"name":"Misses","title":"Misses"},{"name":"DV","title":"DV"},{"name":"Residuals","title":"Residuals"}],"default":"Basic"},{"name":"showExploreDimension","title":"","type":"List","options":[{"name":"1D","title":"1D"},{"name":"2D","title":"2D"}],"default":"1D"},{"name":"whichShowMultiple","title":" ","type":"List","options":[{"name":"direct","title":"direct"},{"name":"unique","title":"unique"},{"name":"total","title":"total"},{"name":"all","title":"all"}],"default":"all"},{"name":"sendSample","title":"single","type":"Output","default":true},{"name":"sendMultiple","title":"multiple","type":"Output","default":false},{"name":"jamoviHelp","title":"Jamovi help?","type":"Bool","default":false},{"name":"brawHelp","title":"Main help?","type":"Bool","default":true},{"name":"demoHelp","title":"Demo help?","type":"Bool","default":true},{"name":"demoWhich","title":"","type":"List","options":[{"name":"d1","title":"d1"},{"name":"d2","title":"d2"},{"name":"d3","title":"d3"},{"name":"d4","title":"d4"},{"name":"d5","title":"d5"},{"name":"d6","title":"d6"},{"name":"d7","title":"d7"},{"name":"d8","title":"d8"}],"default":"d1"},{"name":"showHTML","title":"HTML graphics?","type":"Bool","default":true},{"name":"doProject1sBtn","title":"set up for me","type":"Action"},{"name":"doProject1aBtn","title":"do it for me","type":"Action"},{"name":"doProject1bBtn","title":"show me","type":"Action"},{"name":"doProject1cLst","title":"IV:","type":"List","options":[{"name":"IQ","title":"IQ"},{"name":"Diligence","title":"Diligence"},{"name":"Perfectionism","title":"Perfectionism"},{"name":"Happiness","title":"Happiness"},{"name":"RiskTaking","title":"RiskTaking"},{"name":"Interesting","title":"Interesting"},{"name":"Musician","title":"Musician?"},{"name":"Smoker","title":"Smoker?"},{"name":"RiskTaker","title":"RiskTaker?"},{"name":"StudySubject","title":"StudySubject"},{"name":"BirthOrder","title":"BirthOrder"}],"default":"Perfectionism"},{"name":"doProject1cLstA","title":"DV:","type":"List","options":[{"name":"ExamGrade","title":"ExamGrade"},{"name":"ExamPass","title":"ExamPass?"}],"default":"ExamGrade"},{"name":"doProject1cBtn","title":"do it","type":"Action"},{"name":"doProject2aBtn","title":"set up for me","type":"Action"},{"name":"doProject2bBtn","title":"do it for me","type":"Action"},{"name":"doProject2cBtn","title":"do it for me","type":"Action"},{"name":"doProject2dBtn","title":"do it for me","type":"Action"},{"name":"doProject3aBtn","title":"set up for me","type":"Action"},{"name":"doProject3bBtn","title":"do it for me","type":"Action"},{"name":"doProject3cBtn","title":"do it for me","type":"Action"},{"name":"doProject3dBtn","title":"do it for me","type":"Action"},{"name":"doProject4aBtn","title":"set up for me","type":"Action"},{"name":"doProject4bBtn","title":"do it for me","type":"Action"},{"name":"doProject4cBtn","title":"do it for me","type":"Action"},{"name":"doProject4dBtn","title":"do it for me","type":"Action"},{"name":"doProject5sBtn","title":"set up for me","type":"Action"},{"name":"doProject5aBtn","title":"do it for me","type":"Action"},{"name":"doProject5bBtn","title":"do it","type":"Action"},{"name":"doProject5bLst","title":"n:","type":"List","options":[{"name":"n21","title":"21"},{"name":"n42","title":"42"},{"name":"n84","title":"84"},{"name":"n168","title":"168"},{"name":"n336","title":"336"}],"default":"n42"},{"name":"doProject5cBtn","title":"do it for me","type":"Action"},{"name":"doProject5dBtn","title":"do it","type":"Action"},{"name":"doProject5dLst","title":"rp:","type":"List","options":[{"name":"r00","title":"0.0"},{"name":"r01","title":"0.1"},{"name":"r02","title":"0.2"},{"name":"r03","title":"0.3"},{"name":"r05","title":"0.5"},{"name":"r075","title":"0.75"}],"default":"r03"},{"name":"doProject6aBtn","title":"do it","type":"Action"},{"name":"doProject6aLst","title":"hyp:","type":"List","options":[{"name":"iii","title":"i~i*i"},{"name":"ici","title":"i~c*i"},{"name":"iic","title":"i~i*c"},{"name":"icc","title":"i~c*c"}],"default":"iii"},{"name":"doProject6bBtn","title":"do it","type":"Action"},{"name":"doProject6bLst","title":"rp:","type":"List","options":[{"name":"r00","title":"0.0"},{"name":"r01","title":"0.1"},{"name":"r02","title":"0.2"},{"name":"r03","title":"0.3"},{"name":"r05","title":"0.5"},{"name":"r075","title":"0.75"}],"default":"r03"},{"name":"doProject6cBtn","title":"do it","type":"Action"},{"name":"doProject6cLst","title":"rp:","type":"List","options":[{"name":"r00","title":"0.0"},{"name":"r01","title":"0.1"},{"name":"r02","title":"0.2"},{"name":"r03","title":"0.3"},{"name":"r05","title":"0.5"},{"name":"r075","title":"0.75"}],"default":"r03"},{"name":"doProject6dBtn","title":"do it","type":"Action"},{"name":"doProject6dLst","title":"rp:","type":"List","options":[{"name":"r00","title":"0.0"},{"name":"r01","title":"0.1"},{"name":"r02","title":"0.2"},{"name":"r03","title":"0.3"},{"name":"r05","title":"0.5"},{"name":"r075","title":"0.75"}],"default":"r03"},{"name":"doProject7aBtn","title":"do it","type":"Action"},{"name":"doProject7aLst","title":"hyp:","type":"List","options":[{"name":"iii","title":"i~i*i"},{"name":"ici","title":"i~c*i"},{"name":"iic","title":"i~i*c"},{"name":"icc","title":"i~c*c"}],"default":"iii"},{"name":"doProject7bBtn","title":"do it","type":"Action"},{"name":"doProject7bLst","title":"rp:","type":"List","options":[{"name":"r00","title":"0.0"},{"name":"r01","title":"0.1"},{"name":"r02","title":"0.2"},{"name":"r03","title":"0.3"},{"name":"r05","title":"0.5"},{"name":"r075","title":"0.75"}],"default":"r03"},{"name":"doProject7cBtn","title":"do it","type":"Action"},{"name":"doProject7cLst","title":"rp:","type":"List","options":[{"name":"r00","title":"0.0"},{"name":"r01","title":"0.1"},{"name":"r02","title":"0.2"},{"name":"r03","title":"0.3"},{"name":"r05","title":"0.5"},{"name":"r075","title":"0.75"}],"default":"r03"},{"name":"doProject8aBtn","title":"do it","type":"Action"},{"name":"doProject8aLst","title":"hyp:","type":"List","options":[{"name":"iii","title":"i~i*i"},{"name":"ici","title":"i~c*i"},{"name":"iic","title":"i~i*c"},{"name":"icc","title":"i~c*c"}],"default":"iii"},{"name":"doProject8bBtn","title":"do it","type":"Action"},{"name":"doProject8bLst","title":"rp:","type":"List","options":[{"name":"r00","title":"0.0"},{"name":"r01","title":"0.1"},{"name":"r02","title":"0.2"},{"name":"r03","title":"0.3"},{"name":"r05","title":"0.5"},{"name":"r075","title":"0.75"}],"default":"r03"},{"name":"doProject8cBtn","title":"do it","type":"Action"},{"name":"doProject8cLst","title":"rs:","type":"List","options":[{"name":"direct","title":"direct"},{"name":"unique","title":"unique"},{"name":"total","title":"total"}],"default":"direct"}];

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
			label: "1. Make a Plan: hypothesis, design & analysis",
			controls: [
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Plan",
					margin: "none",
					minWidth: 450,
					controls: [
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
															label: "Specify variables and their effects (relationships)"
														},
														{
															type: DefaultControls.CollapseBox,
															typeName: 'CollapseBox',
															collapsed: true,
															label: "Variables",
															margin: "none",
															verticalAlignment: "top",
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "Define the DV and 1 or 2 IVs: choose a preset or edit."
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	margin: "none",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "inline",
																			margin: "none",
																			minWidth: 140,
																			horizontalAlignment: "right",
																			controls: [
																				{
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "DV:",
																					margin: "none",
																					minWidth: 25
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "presetDV",
																					events: [
																						{ execute: require('./BrawSim.events').onChange_presetDV }
																					]
																				}
																			]
																		},
																		{
																			type: DefaultControls.CollapseBox,
																			typeName: 'CollapseBox',
																			collapsed: true,
																			label: "Edit",
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
																							minWidth: 120,
																							controls: [
																								{
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "DVname",
																									format: FormatDef.string,
																									margin: "none",
																									stretchFactor: 1
																								},
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
																									minWidth: 13
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
																									minWidth: 13
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
																									minWidth: 13
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
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "DVprops",
																									format: FormatDef.string,
																									enable: "(DVtype:Categorical)"
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
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "inline",
																			margin: "none",
																			minWidth: 140,
																			controls: [
																				{
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "IV:",
																					margin: "none",
																					minWidth: 25
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "presetIV",
																					events: [
																						{ execute: require('./BrawSim.events').onChange_presetIV }
																					]
																				}
																			]
																		},
																		{
																			type: DefaultControls.CollapseBox,
																			typeName: 'CollapseBox',
																			collapsed: true,
																			label: "Edit",
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
																							minWidth: 120,
																							controls: [
																								{
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "IVname",
																									format: FormatDef.string,
																									margin: "none",
																									stretchFactor: 1
																								},
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
																									minWidth: 13
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
																									minWidth: 13
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
																									minWidth: 13
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
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "IVprops",
																									format: FormatDef.string,
																									enable: "(IVtype:Categorical)"
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
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "inline",
																			margin: "none",
																			minWidth: 140,
																			controls: [
																				{
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "IV2:",
																					margin: "none",
																					minWidth: 25
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "presetIV2",
																					events: [
																						{ execute: require('./BrawSim.events').onChange_presetIV2 }
																					]
																				}
																			]
																		},
																		{
																			type: DefaultControls.CollapseBox,
																			typeName: 'CollapseBox',
																			collapsed: true,
																			label: "Edit",
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
																							minWidth: 120,
																							controls: [
																								{
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "IV2name",
																									format: FormatDef.string,
																									margin: "none",
																									stretchFactor: 1,
																									enable: "(!presetIV2:none)"
																								},
																								{
																									type: DefaultControls.ComboBox,
																									typeName: 'ComboBox',
																									name: "IV2type",
																									margin: "none",
																									enable: "(!presetIV2:none)"
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
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "IV2mu",
																									format: FormatDef.number,
																									enable: "(!presetIV2:none && IV2type:Interval)"
																								},
																								{
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "IV2sd",
																									format: FormatDef.number,
																									enable: "(!presetIV2:none && IV2type:Interval)"
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
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "IV2skew",
																									format: FormatDef.number,
																									enable: "(!presetIV2:none && IV2type:Interval)"
																								},
																								{
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "IV2kurt",
																									format: FormatDef.number,
																									enable: "(!presetIV2:none && IV2type:Interval)"
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
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "IV2nlevs",
																									format: FormatDef.number,
																									enable: "(!presetIV2:none && IV2type:Ordinal)"
																								},
																								{
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "IV2iqr",
																									format: FormatDef.number,
																									enable: "(!presetIV2:none && IV2type:Ordinal)"
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
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "IV2ncats",
																									format: FormatDef.number,
																									enable: "(!presetIV2:none && IV2type:Categorical)"
																								},
																								{
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "IV2cases",
																									format: FormatDef.string,
																									enable: "(!presetIV2:none && IV2type:Categorical)"
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
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "IV2props",
																									format: FormatDef.string,
																									enable: "(!presetIV2:none && IV2type:Categorical)"
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
															type: DefaultControls.CollapseBox,
															typeName: 'CollapseBox',
															collapsed: true,
															label: "Effects",
															margin: "none",
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "Set the effect each variable has on the others"
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
																					enable: "(!presetIV2:none)"
																				},
																				{
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "EffectSize3",
																					margin: "none",
																					format: FormatDef.number,
																					enable: "(!presetIV2:none)"
																				},
																				{
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "EffectSize12",
																					margin: "none",
																					format: FormatDef.number,
																					enable: "(!presetIV2:none)"
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
															label: "Decide how to sample from the population"
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
																			label: "Decide sample size, method and usage"
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
																					enable: "(!presetIV2:none && IV2type:Categorical)",
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
																				},
																				{
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "NonResponse",
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
																					name: "LimitRange"
																				},
																				{
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "RangeMin",
																					margin: "none",
																					format: FormatDef.number,
																					enable: "(LimitRange:yes)"
																				},
																				{
																					type: DefaultControls.TextBox,
																					typeName: 'TextBox',
																					name: "RangeMax",
																					margin: "none",
																					format: FormatDef.number,
																					enable: "(LimitRange:yes)"
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
															label: "Make decisions about: Effect Sizes, Inference and Likelihood (optional)"
														},
														{
															type: DefaultControls.CollapseBox,
															typeName: 'CollapseBox',
															label: "Describe",
															collapsed: true,
															margin: "none",
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "Process",
																	controls: [
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
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "Display",
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
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "whichShowMultiple"
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
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "Process",
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
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "Display",
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
																					margin: "small",
																					minWidth: 13
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "inferVar1"
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "inferVar2"
																				},
																				{
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "reportInferStats"
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
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "Process",
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
																},
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "Display",
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
															label: "Some more advanced options"
														},
														{
															type: DefaultControls.CollapseBox,
															typeName: 'CollapseBox',
															label: "World",
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
																					type: DefaultControls.ComboBox,
																					typeName: 'ComboBox',
																					name: "presetWorld",
																					events: [
																						{ execute: require('./BrawSim.events').onChange_presetWorld }
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
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					margin: "none",
																					controls: [
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "Vary effect sizes?",
																							margin: "none"
																						},
																						{
																							type: DefaultControls.CheckBox,
																							typeName: 'CheckBox',
																							name: "WorldOn"
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
																									name: "WorldPDF",
																									enable: "(WorldOn)"
																								},
																								{
																									type: DefaultControls.ComboBox,
																									typeName: 'ComboBox',
																									name: "WorldRZ",
																									enable: "(WorldOn)"
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
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "WorldLambda",
																									format: FormatDef.number,
																									enable: "(WorldOn)"
																								},
																								{
																									type: DefaultControls.TextBox,
																									typeName: 'TextBox',
																									name: "WorldNullP",
																									format: FormatDef.number,
																									enable: "(WorldOn)"
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
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					margin: "none",
																					controls: [
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "Vary sample sizes?",
																							margin: "none"
																						},
																						{
																							type: DefaultControls.CheckBox,
																							typeName: 'CheckBox',
																							name: "SampleSpreadOn"
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
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "SampleSizeM",
																							margin: "none",
																							format: FormatDef.number,
																							enable: "(SampleSpreadOn)"
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "SampleGamma",
																							margin: "none",
																							format: FormatDef.number,
																							enable: "(SampleSpreadOn)"
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
															label: "Replication",
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
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "ReplicationAttempts",
																							margin: "none",
																							format: FormatDef.number
																						},
																						{
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "ReplicationAlpha",
																							margin: "none",
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
																							type: DefaultControls.TextBox,
																							typeName: 'TextBox',
																							name: "ReplicationPower",
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
																							name: "ReplicationSigOriginal"
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
															label: "MetaAnalysis",
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
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "method:",
																							margin: "none"
																						},
																						{
																							type: DefaultControls.ComboBox,
																							typeName: 'ComboBox',
																							name: "MetaAnalysisType",
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
																							label: "expect:",
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
			label: "2. Make Data using the Plan",
			controls: [
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					label: "Single Sample",
					collapsed: true,
					minWidth: 450,
					margin: "none",
					controls: [
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "Inspect the data (Sample, Describe) and then the analysis (Infer, Likelihood)"
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
									name: "showInferDimension",
									minWidth: 50,
									enable: "(showSampleType:Infer)"
								}
							]
						}
					]
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
							label: "By running many samples, we can see the range of outcomes to expect"
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
									label: "- choose how many samples: more is better but slower"
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
												},
												{
													type: DefaultControls.ComboBox,
													typeName: 'ComboBox',
													name: "showMultipleDimension",
													minWidth: 50,
													enable: "(showMultipleParam:Basic)"
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
			label: "3. Explore plan decisions",
			controls: [
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
							label: "Explore will automatically vary decisions in the plan"
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
									label: "- you can change the range and the number of values to explore"
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
															name: "exploreNPointsH",
															margin: "none",
															format: FormatDef.number,
															suffix: "values",
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
															label: "",
															minWidth: 163
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMinValH",
															margin: "none",
															format: FormatDef.string,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMaxValH",
															margin: "none",
															format: FormatDef.string,
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
															name: "exploreNPointsD",
															margin: "none",
															format: FormatDef.number,
															suffix: "values",
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
															label: "",
															minWidth: 163
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMinValD",
															margin: "none",
															format: FormatDef.string,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMaxValD",
															margin: "none",
															format: FormatDef.string,
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
															name: "exploreNPointsA",
															margin: "none",
															format: FormatDef.number,
															suffix: "values",
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
															label: "",
															minWidth: 163
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMinValA",
															margin: "none",
															format: FormatDef.string,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMaxValA",
															margin: "none",
															format: FormatDef.string,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														}
													]
												}
											]
										},
										{
											type: DefaultControls.Content,
											typeName: 'Content',
											name: "moreExplore",
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
															name: "moreExploreList",
															events: [
																{ execute: require('./BrawSim.events').onChange_moreExploreList }
															]
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreNPointsM",
															margin: "none",
															format: FormatDef.number,
															suffix: "values",
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.CheckBox,
															typeName: 'CheckBox',
															name: "exploreXLogM",
															margin: "none",
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
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
															label: "",
															minWidth: 163
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMinValM",
															margin: "none",
															format: FormatDef.string,
															enable: "(!typeExplore:Keep && !typeExplore:Method && !typeExplore:Cheating && !typeExplore:Transform && !typeExplore:Usage && !typeExplore:PDF && !typeExplore:IVType && !typeExplore:DVType)"
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "exploreMaxValM",
															margin: "none",
															format: FormatDef.string,
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
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											style: "inline",
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
															name: "showExploreParam",
															type: DefaultControls.ComboBox,
															typeName: 'ComboBox'
														},
														{
															type: DefaultControls.ComboBox,
															typeName: 'ComboBox',
															name: "showExploreDimension",
															minWidth: 50,
															enable: "(showExploreParam:Basic)"
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
			label: "Extra",
			controls: [
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Demos",
					margin: "none",
					minWidth: 330,
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
									minWidth: 13
								},
								{
									type: DefaultControls.CollapseBox,
									typeName: 'CollapseBox',
									collapsed: true,
									label: "1. Make a sample & analyse it",
									margin: "none",
									minWidth: 230,
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											style: "list",
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
															label: "Set up",
															margin: "none",
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
																			minWidth: 370,
																			controls: [
																				{
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "Choose the variables"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.LayoutBox,
																							typeName: 'LayoutBox',
																							style: "list",
																							controls: [
																								{
																									type: DefaultControls.Label,
																									typeName: 'Label',
																									label: "- go to Plan/Hypothesis/Variables"
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
																											minWidth: 13
																										},
																										{
																											type: DefaultControls.Label,
																											typeName: 'Label',
																											label: "choose these variables from the presets:"
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
																											minWidth: 26
																										},
																										{
																											type: DefaultControls.Label,
																											typeName: 'Label',
																											label: "IV: RiskTaker?"
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
																											minWidth: 26
																										},
																										{
																											type: DefaultControls.Label,
																											typeName: 'Label',
																											label: "DV: ExamGrade"
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
																											minWidth: 26
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
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
																			minWidth: 370,
																			controls: [
																				{
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "Set the effect size"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.LayoutBox,
																							typeName: 'LayoutBox',
																							style: "list",
																							controls: [
																								{
																									type: DefaultControls.Label,
																									typeName: 'Label',
																									label: "- go to Plan/Hypothesis/Effects"
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
																											minWidth: 13
																										},
																										{
																											type: DefaultControls.Label,
																											typeName: 'Label',
																											label: "set the effect size:"
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
																											minWidth: 26
																										},
																										{
																											type: DefaultControls.Label,
																											typeName: 'Label',
																											label: "IV->DV: 0.3"
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
															name: "doProject1sBtn",
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															margin: "none",
															events: [
																{ execute: require('./BrawSim.events').onChange_project1s }
															],
															maxWidth: 80
														}
													]
												},
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "Steps",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "inline",
															controls: [
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "list",
																	minWidth: 370,
																	controls: [
																		{
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: "1. go to Data - Single Sample"
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
																					minWidth: 13
																				},
																				{
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "press the \"single\" button"
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
																					minWidth: 26
																				}
																			]
																		}
																	]
																},
																{
																	name: "doProject1aBtn",
																	type: DefaultControls.ActionButton,
																	typeName: 'ActionButton',
																	margin: "none",
																	maxWidth: 80,
																	events: [
																		{ execute: require('./BrawSim.events').onChange_project1a }
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
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "list",
																	minWidth: 370,
																	controls: [
																		{
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: "2. analyse the data in Jamovi"
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
																					minWidth: 13
																				},
																				{
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "go to Jamovi Instructions"
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
																					minWidth: 26
																				},
																				{
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "select the \"analysis\" tab"
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
																					minWidth: 13
																				},
																				{
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "follow the instructions"
																				}
																			]
																		}
																	]
																},
																{
																	name: "doProject1bBtn",
																	type: DefaultControls.ActionButton,
																	typeName: 'ActionButton',
																	margin: "none",
																	maxWidth: 80,
																	events: [
																		{ execute: require('./BrawSim.events').onChange_project1b }
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
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "list",
																	minWidth: 370,
																	controls: [
																		{
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: "3. some others to try"
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
																					minWidth: 13
																				},
																				{
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "try some other variables"
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
																					minWidth: 13
																				},
																				{
																					type: DefaultControls.Label,
																					typeName: 'Label',
																					label: "press the \"single\" button"
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
																					minWidth: 26
																				}
																			]
																		}
																	]
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "list",
																	minWidth: 80,
																	maxWidth: 80,
																	margin: "none",
																	controls: [
																		{
																			name: "doProject1cLst",
																			type: DefaultControls.ComboBox,
																			typeName: 'ComboBox',
																			margin: "none",
																			minWidth: 80,
																			maxWidth: 80
																		},
																		{
																			name: "doProject1cLstA",
																			type: DefaultControls.ComboBox,
																			typeName: 'ComboBox',
																			margin: "none",
																			minWidth: 80,
																			maxWidth: 80
																		},
																		{
																			type: DefaultControls.ActionButton,
																			typeName: 'ActionButton',
																			name: "doProject1cBtn",
																			margin: "none",
																			minWidth: 80,
																			maxWidth: 80,
																			events: [
																				{ execute: require('./BrawSim.events').onChange_project1c }
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
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									minWidth: 13
								},
								{
									type: DefaultControls.CollapseBox,
									typeName: 'CollapseBox',
									collapsed: true,
									label: "2. Check the quality of samples",
									margin: "none",
									minWidth: 230,
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											style: "inline",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "Set up",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															controls: [
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
																			minWidth: 370,
																			controls: [
																				{
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					controls: [
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "Choose two Interval variables"
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
																							label: "Set the effect-size to 0.3"
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
													name: "doProject2aBtn",
													type: DefaultControls.ActionButton,
													typeName: 'ActionButton',
													margin: "none",
													events: [
														{ execute: require('./BrawSim.events').onChange_project2a }
													],
													maxWidth: 80
												}
											]
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "Steps",
											controls: [
												{
													type: DefaultControls.LayoutBox,
													typeName: 'LayoutBox',
													style: "inline",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "1. make a sample"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- and view it as \"Variables\""
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- do this several times"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															name: "doProject2bBtn",
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															margin: "none",
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project2b }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "2. repeat this"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- and view it as \"Sample\""
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- do this several times"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															name: "doProject2cBtn",
															margin: "none",
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project2c }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "3. now set the sampling method to \"Convenience\""
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- and repeat steps 1 & 2 again"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- can you see a difference?"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															name: "doProject2dBtn",
															margin: "none",
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project2d }
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
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									minWidth: 13
								},
								{
									type: DefaultControls.CollapseBox,
									typeName: 'CollapseBox',
									collapsed: true,
									label: "3. So rs does not equal rp",
									margin: "none",
									minWidth: 230,
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											style: "inline",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "Set up",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															controls: [
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
																			minWidth: 370,
																			controls: [
																				{
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					controls: [
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "Choose two Interval variables"
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
																							label: "Set the effect-size to 0.3"
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
													name: "doProject3aBtn",
													type: DefaultControls.ActionButton,
													typeName: 'ActionButton',
													margin: "none",
													events: [
														{ execute: require('./BrawSim.events').onChange_project3a }
													],
													maxWidth: 80
												}
											]
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "Steps",
											controls: [
												{
													type: DefaultControls.LayoutBox,
													typeName: 'LayoutBox',
													style: "inline",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "1. make a sample"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- and view it as \"Describe\""
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "   - noting rs, the sample effect size"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- do this several times"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															name: "doProject3bBtn",
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															margin: "none",
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project3b }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "2. repeat with a bigger sample size"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- set the sample size to 500"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- and make some more samples"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															name: "doProject3cBtn",
															margin: "none",
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project3c }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "3. set the effect size to zero:"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- and make some more samples"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- notice rs can be quite big even though rp=0"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															name: "doProject3dBtn",
															margin: "none",
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project3d }
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
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									minWidth: 13
								},
								{
									type: DefaultControls.CollapseBox,
									typeName: 'CollapseBox',
									collapsed: true,
									label: "4. The role of lucky sampling",
									margin: "none",
									minWidth: 230,
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											style: "inline",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "Set up",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															controls: [
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
																			minWidth: 370,
																			controls: [
																				{
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					controls: [
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "Choose two Interval variables"
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
																							label: "Set the effect-size to 0.3"
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
													name: "doProject4aBtn",
													type: DefaultControls.ActionButton,
													typeName: 'ActionButton',
													margin: "none",
													events: [
														{ execute: require('./BrawSim.events').onChange_project4a }
													],
													maxWidth: 80
												}
											]
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "Steps",
											controls: [
												{
													type: DefaultControls.LayoutBox,
													typeName: 'LayoutBox',
													style: "inline",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "1. make a sample"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- and view it as \"Infer\""
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "   - noting the statistical significance"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- do this several times"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															name: "doProject4bBtn",
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															margin: "none",
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project4b }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "2. repeat this with a 2D graph of the results"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- do this several times"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- all the results lie on the same curve"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															name: "doProject4cBtn",
															margin: "none",
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project4c }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "4. do the same thing but with Multiple Samples"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- go to \"Multiple Samples\""
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- press \"multiple\""
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- you can do this several times"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															name: "doProject4dBtn",
															margin: "none",
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project4d }
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
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									minWidth: 13
								},
								{
									type: DefaultControls.CollapseBox,
									typeName: 'CollapseBox',
									collapsed: true,
									label: "5. Improving your chances",
									margin: "none",
									minWidth: 230,
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											style: "inline",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "Set up",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															controls: [
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
																			minWidth: 370,
																			controls: [
																				{
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					controls: [
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "Choose two Interval variables"
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
																							label: "Set the effect-size to 0.3"
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
													name: "doProject5sBtn",
													type: DefaultControls.ActionButton,
													typeName: 'ActionButton',
													margin: "none",
													events: [
														{ execute: require('./BrawSim.events').onChange_project5s }
													],
													maxWidth: 80
												}
											]
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "Steps",
											controls: [
												{
													type: DefaultControls.LayoutBox,
													typeName: 'LayoutBox',
													style: "inline",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "1. make multiple samples"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- and view it as \"p(sig)\""
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "   - note the probability of p<0.05"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															name: "doProject5aBtn",
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															margin: "none",
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project5a }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "2. repeat this with other sample sizes"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- try several different values for n"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- can you estimate what n would give p(sig)=0.8?"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 80,
															maxWidth: 80,
															margin: "none",
															controls: [
																{
																	name: "doProject5bLst",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80
																},
																{
																	type: DefaultControls.ActionButton,
																	typeName: 'ActionButton',
																	name: "doProject5bBtn",
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80,
																	events: [
																		{ execute: require('./BrawSim.events').onChange_project5b }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "3. do the same thing but with Explore"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- go to \"Explore\" and choose the \"Design\" tab"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- press \"explore\""
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- what is n(80) the sample size to give p(sig)=0.8 ?"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															name: "doProject5cBtn",
															margin: "none",
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project5c }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "4. now change the hypothesis effect size"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- try a few different effect sizes"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- what happens to n(80)?"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- note what happens when rp=0"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 80,
															maxWidth: 80,
															margin: "none",
															controls: [
																{
																	name: "doProject5dLst",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80
																},
																{
																	type: DefaultControls.ActionButton,
																	typeName: 'ActionButton',
																	name: "doProject5dBtn",
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80,
																	events: [
																		{ execute: require('./BrawSim.events').onChange_project5d }
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
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									minWidth: 13
								},
								{
									type: DefaultControls.CollapseBox,
									typeName: 'CollapseBox',
									collapsed: true,
									label: "6. More than 1 IV",
									margin: "none",
									minWidth: 230,
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											style: "inline",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "Set up",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															controls: [
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
																			minWidth: 370,
																			controls: [
																				{
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					controls: [
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "Choose three variables variables"
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
																							label: "Set all effect-sizes to 0.0"
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
																							label: "Set sample size to 1000"
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
													style: "list",
													minWidth: 80,
													maxWidth: 80,
													margin: "none",
													controls: [
														{
															name: "doProject6aLst",
															type: DefaultControls.ComboBox,
															typeName: 'ComboBox',
															margin: "none",
															minWidth: 80,
															maxWidth: 80
														},
														{
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															name: "doProject6aBtn",
															margin: "none",
															minWidth: 80,
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project6a }
															]
														}
													]
												}
											]
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "Steps",
											controls: [
												{
													type: DefaultControls.LayoutBox,
													typeName: 'LayoutBox',
													style: "inline",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "1. change main effect 1"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- set it to 0.3"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- make another sample"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- notice that the main effect2 and interaction"
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
																							minWidth: 26
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "remain close to zero"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 80,
															maxWidth: 80,
															margin: "none",
															controls: [
																{
																	name: "doProject6bLst",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80
																},
																{
																	type: DefaultControls.ActionButton,
																	typeName: 'ActionButton',
																	name: "doProject6bBtn",
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80,
																	events: [
																		{ execute: require('./BrawSim.events').onChange_project6b }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "2. change main effect 2"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- choose a value for it"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- set others to zero"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- make another sample"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 80,
															maxWidth: 80,
															margin: "none",
															controls: [
																{
																	name: "doProject6cLst",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80
																},
																{
																	type: DefaultControls.ActionButton,
																	typeName: 'ActionButton',
																	name: "doProject6cBtn",
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80,
																	events: [
																		{ execute: require('./BrawSim.events').onChange_project6c }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "3. change the interaction"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- choose a value for it"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- set others to zero"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- make another sample"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 80,
															maxWidth: 80,
															margin: "none",
															controls: [
																{
																	name: "doProject6dLst",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80
																},
																{
																	type: DefaultControls.ActionButton,
																	typeName: 'ActionButton',
																	name: "doProject6dBtn",
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80,
																	events: [
																		{ execute: require('./BrawSim.events').onChange_project6d }
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
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									minWidth: 13
								},
								{
									type: DefaultControls.CollapseBox,
									typeName: 'CollapseBox',
									collapsed: true,
									label: "7. Interactions as Moderators",
									margin: "none",
									minWidth: 230,
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											style: "inline",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "Set up",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															controls: [
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
																			minWidth: 370,
																			controls: [
																				{
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					controls: [
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "Choose three variables variables"
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
																							label: "Set all effect-sizes to 0.0"
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
																							label: "Set sample size to 1000"
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
													style: "list",
													minWidth: 80,
													maxWidth: 80,
													margin: "none",
													controls: [
														{
															name: "doProject7aLst",
															type: DefaultControls.ComboBox,
															typeName: 'ComboBox',
															margin: "none",
															minWidth: 80,
															maxWidth: 80
														},
														{
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															name: "doProject7aBtn",
															margin: "none",
															minWidth: 80,
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project7a }
															]
														}
													]
												}
											]
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "Steps",
											controls: [
												{
													type: DefaultControls.LayoutBox,
													typeName: 'LayoutBox',
													style: "inline",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "1. set up the interaction as on/off"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- set Interaction effect size"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- set M1 to same value"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- make a sample"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- notice how the effect of M1 is on for some and off for others"
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
																							minWidth: 26
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "remain close to zero"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 80,
															maxWidth: 80,
															margin: "none",
															controls: [
																{
																	name: "doProject7bLst",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80
																},
																{
																	type: DefaultControls.ActionButton,
																	typeName: 'ActionButton',
																	name: "doProject7bBtn",
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80,
																	events: [
																		{ execute: require('./BrawSim.events').onChange_project7b }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "2. set up the interaction as +/- switch"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- set Interaction effect size"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- set M1 & M2 to zero"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- make a sample"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- notice how the effect of M1 is +ve for some and -ve for others"
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
																							minWidth: 26
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "remain close to zero"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 80,
															maxWidth: 80,
															margin: "none",
															controls: [
																{
																	name: "doProject7cLst",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80
																},
																{
																	type: DefaultControls.ActionButton,
																	typeName: 'ActionButton',
																	name: "doProject7cBtn",
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80,
																	events: [
																		{ execute: require('./BrawSim.events').onChange_project7c }
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
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									minWidth: 13
								},
								{
									type: DefaultControls.CollapseBox,
									typeName: 'CollapseBox',
									collapsed: true,
									label: "8. Covariation",
									margin: "none",
									minWidth: 230,
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											style: "inline",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "Set up",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															controls: [
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
																			minWidth: 370,
																			controls: [
																				{
																					type: DefaultControls.LayoutBox,
																					typeName: 'LayoutBox',
																					style: "inline",
																					controls: [
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "Choose three variables variables"
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
																							label: "Set M1 & M2 effect-sizes to 0.5"
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
																							label: "Set sample size to 1000"
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
													style: "list",
													minWidth: 80,
													maxWidth: 80,
													margin: "none",
													controls: [
														{
															name: "doProject8aLst",
															type: DefaultControls.ComboBox,
															typeName: 'ComboBox',
															margin: "none",
															minWidth: 80,
															maxWidth: 80
														},
														{
															type: DefaultControls.ActionButton,
															typeName: 'ActionButton',
															name: "doProject8aBtn",
															margin: "none",
															minWidth: 80,
															maxWidth: 80,
															events: [
																{ execute: require('./BrawSim.events').onChange_project8a }
															]
														}
													]
												}
											]
										},
										{
											type: DefaultControls.Label,
											typeName: 'Label',
											label: "Steps",
											controls: [
												{
													type: DefaultControls.LayoutBox,
													typeName: 'LayoutBox',
													style: "inline",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "1. the result of covariation"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- make a sample"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "'- can you see any indication of the covariation?'"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 80,
															maxWidth: 80,
															margin: "none",
															controls: [
																{
																	name: "doProject8bLst",
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80
																},
																{
																	type: DefaultControls.ActionButton,
																	typeName: 'ActionButton',
																	name: "doProject8bBtn",
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80,
																	events: [
																		{ execute: require('./BrawSim.events').onChange_project8b }
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
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 370,
															controls: [
																{
																	type: DefaultControls.Label,
																	typeName: 'Label',
																	label: "2. varying the amount of covariation"
																},
																{
																	type: DefaultControls.LayoutBox,
																	typeName: 'LayoutBox',
																	style: "inline",
																	controls: [
																		{
																			type: DefaultControls.LayoutBox,
																			typeName: 'LayoutBox',
																			style: "list",
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- use the \"Explore\" function"
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
																							minWidth: 13
																						},
																						{
																							type: DefaultControls.Label,
																							typeName: 'Label',
																							label: "- look at direct, unique and total effect sizes"
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
																			type: DefaultControls.Label,
																			typeName: 'Label',
																			label: " ",
																			minWidth: 26
																		}
																	]
																}
															]
														},
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															style: "list",
															minWidth: 80,
															maxWidth: 80,
															margin: "none",
															controls: [
																{
																	type: DefaultControls.ComboBox,
																	typeName: 'ComboBox',
																	name: "doProject8cLst",
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80,
																	events: [
																		{ execute: require('./BrawSim.events').onChange_project8cLst }
																	]
																},
																{
																	type: DefaultControls.ActionButton,
																	typeName: 'ActionButton',
																	name: "doProject8cBtn",
																	margin: "none",
																	minWidth: 80,
																	maxWidth: 80,
																	events: [
																		{ execute: require('./BrawSim.events').onChange_project8c }
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
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					name: "Settings",
					collapsed: true,
					label: "Settings",
					margin: "none",
					minWidth: 330,
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
									label: "Help system:",
									horizontalAlignment: "right",
									minWidth: 90,
									maxWidth: 90
								},
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									minWidth: 13
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "brawHelp",
									minWidth: 100
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "jamoviHelp",
									minWidth: 100
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "demoHelp",
									minWidth: 100
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "demoWhich"
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
									label: "Link to Jamovi:",
									minWidth: 90,
									maxWidth: 90,
									horizontalAlignment: "right"
								},
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									minWidth: 13
								},
								{
									type: DefaultControls.Output,
									typeName: 'Output',
									name: "sendSample",
									minWidth: 100
								},
								{
									type: DefaultControls.Output,
									typeName: 'Output',
									name: "sendMultiple",
									minWidth: 100
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
									label: "Other Options:",
									minWidth: 90,
									maxWidth: 90,
									horizontalAlignment: "right"
								},
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: " ",
									minWidth: 13
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "showHTML",
									minWidth: 100
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
