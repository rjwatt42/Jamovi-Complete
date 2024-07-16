const events =  {

    // in here is where the event functions go
    onChange_exploreMode: function(ui) {
      var newRange = {min:0.3,max:0.7,xlog:false,np:8};
      let mode = ui.exploreMode.value();
      let value="n";
      switch(mode) {
        case "hypothesisExplore":
          value = ui.hypothesisExploreList.value();
          var newRange = updateRange(value);
              ui.exploreMinValH.setValue(newRange.min);
              ui.exploreMaxValH.setValue(newRange.max);
              ui.exploreXLogH.setValue(newRange.xlog);
              ui.exploreNPointsH.setValue(newRange.np);
          break;
        case "designExplore":
          value = ui.designExploreList.value();
          var newRange = updateRange(value);
              ui.exploreMinValD.setValue(newRange.min);
              ui.exploreMaxValD.setValue(newRange.max);
              ui.exploreXLogD.setValue(newRange.xlog);
              ui.exploreNPointsD.setValue(newRange.np);
          break;
        case "analysisExplore":
          value = ui.analysisExploreList.value();
          var newRange = updateRange(value);
              ui.exploreMinValA.setValue(newRange.min);
              ui.exploreMaxValA.setValue(newRange.max);
              ui.exploreXLogA.setValue(newRange.xlog);
              ui.exploreNPointsA.setValue(newRange.np);
          break;
      };
      return;
  },

    onChange_hypothesisExploreList: function(ui) {
          let value = ui.hypothesisExploreList.value();
          let newRange = updateRange(value)
          ui.exploreMinValH.setValue(newRange.min);
          ui.exploreMaxValH.setValue(newRange.max);
          ui.exploreXLogH.setValue(newRange.xlog);
          ui.exploreNPointsH.setValue(newRange.np);
      return;
  },
    onChange_designExploreList: function(ui) {
          let value = ui.designExploreList.value();
          let newRange = updateRange(value)
          ui.exploreMinValD.setValue(newRange.min);
          ui.exploreMaxValD.setValue(newRange.max);
          ui.exploreXLogD.setValue(newRange.xlog);
          ui.exploreNPointsD.setValue(newRange.np);
      return;
  },
    onChange_analysisExploreList: function(ui) {
          let value = ui.analysisExploreList.value();
          let newRange = updateRange(value)
          ui.exploreMinValA.setValue(newRange.min);
          ui.exploreMaxValA.setValue(newRange.max);
          ui.exploreXLogA.setValue(newRange.xlog);
          ui.exploreNPointsA.setValue(newRange.np);
  },

    onChange_presetDV: function(ui) {
      let presetDV = ui.presetDV.value();
      let variable = makeVar(presetDV);
          ui.DVname.setValue(variable.name);
          ui.DVtype.setValue(variable.type);
          ui.DVmu.setValue(variable.mu);
          ui.DVsd.setValue(variable.sd);
          ui.DVskew.setValue(variable.skew);
          ui.DVkurt.setValue(variable.kurt);
          ui.DVnlevs.setValue(variable.nlevs);
          ui.DViqr.setValue(variable.iqr)
          ui.DVncats.setValue(variable.ncats);
          ui.DVcases.setValue(variable.cases)
          ui.DVprops.setValue(variable.props);
    },

    onChange_presetIV: function(ui) {
      let presetIV = ui.presetIV.value();
      let variable = makeVar(presetIV);
          ui.IVname.setValue(variable.name);
          ui.IVtype.setValue(variable.type);
          ui.IVmu.setValue(variable.mu);
          ui.IVsd.setValue(variable.sd);
          ui.IVskew.setValue(variable.skew);
          ui.IVkurt.setValue(variable.kurt);
          ui.IVnlevs.setValue(variable.nlevs);
          ui.IViqr.setValue(variable.iqr)
          ui.IVncats.setValue(variable.ncats);
          ui.IVcases.setValue(variable.cases)
          ui.IVprops.setValue(variable.props);
    },

    onChange_presetIV2: function(ui) {
      let presetIV2 = ui.presetIV2.value();
      let variable = makeVar(presetIV2);
          ui.IV2name.setValue(variable.name);
          ui.IV2type.setValue(variable.type);
          ui.IV2mu.setValue(variable.mu);
          ui.IV2sd.setValue(variable.sd);
          ui.IV2skew.setValue(variable.skew);
          ui.IV2kurt.setValue(variable.kurt);
          ui.IV2nlevs.setValue(variable.nlevs);
          ui.IV2iqr.setValue(variable.iqr)
          ui.IV2ncats.setValue(variable.ncats);
          ui.IV2cases.setValue(variable.cases)
          ui.IV2props.setValue(variable.props);
    },

    onChange_presetHypothesis: function(ui) {
      let presetH = ui.presetHypothesis.value();
      switch(presetH) {
        case "psych":
          ui.WorldOn.setValue(true);
          ui.WorldPDF.setValue("Exp");
          ui.WorldRZ.setValue("z");
          ui.WorldLambda.setValue(0.3);
          ui.WorldNullP.setValue(0.75);
          break;
        case "simple":
          ui.WorldOn.setValue(false);
          ui.rIV.setValue(0.3);
          break;
      }
    },
    onChange_presetDesign: function(ui) {
      let presetD = ui.presetDesign.value();
      switch(presetD) {
        case "psych":
          ui.SampleSize.setValue(52);
          ui.SampleSpread.setValue("yes");
          ui.SampleGamma.setValue(1.56);
          break;
        case "simple":
          ui.SampleSize.setValue(42);
          ui.SampleSpread.setValue("no");
          break;
      }
    }
}

let makeVar = function(name) {
  switch (name) {
    case "IQ":
      var variable={name:"IQ",type:"Interval",mu:100,sd:15,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"C1,C2",props:"1,1"};
      break;
    case "Diligence":
      var variable={name:"Diligence",type:"Interval",mu:0,sd:2,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"C1,C2",props:"1,1"};
      break;
    case "Perfectionism":
      var variable={name:"Perfectionism",type:"Interval",mu:0,sd:2,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"C1,C2",props:"1,1"};
      break;
    case "Happiness":
      var variable={name:"Happiness",type:"Interval",mu:50,sd:12,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"C1,C2",props:"1,1"};
      break;
    case "ExamGrade":
      var variable={name:"ExamGrade",type:"Interval",mu:55,sd:10,skew:-0.6,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"C1,C2",props:"1,1"};
      break;
    case "RiskTaking":
      var variable={name:"RiskTaking",type:"Interval",mu:30,sd:6,skew:0.5,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"C1,C2",props:"1,1"};
      break;
    case "Interesting":
      var variable={name:"Interesting",type:"Interval",mu:10,sd:2,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"C1,C2",props:"1,1"};
      break;
    case "Musician":
      var variable={name:"Musician?",type:"Categorical",mu:0,sd:1,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"yes,no",props:"1,1"};
      break;
    case "RiskTaker":
      var variable={name:"RiskTaker?",type:"Categorical",mu:0,sd:1,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"yes,no",props:"1,1"};
      break;
    case "Smoker":
      var variable={name:"Smoker?",type:"Categorical",mu:0,sd:1,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"yes,no",props:"1,1"};
      break;
    case "StudySubject":
      var variable={name:"StudySubject",type:"Categorical",mu:0,sd:1,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:3,cases:"psych,phil,sports",props:"1.5,1,2"};
      break;
    case "BirthOrder":
      var variable={name:"BirthOrder",type:"Categorical",mu:0,sd:1,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:4,cases:"first,middle,last,only",props:"1,0.4,0.6,0.2"};
      break;
    case "Treatment":
      var variable={name:"Treatment?",type:"Categorical",mu:0,sd:1,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"yes,no",props:"1,1"};
      break;
    case "Phase":
      var variable={name:"Phase",type:"Categorical",mu:0,sd:1,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"before,after",props:"1,1"};
      break;
  }
  return variable;
}

let makeRange = function(min,max,xlog,np) {
  this.min=min;
  this.max=max;
  this.xlog=xlog;
  this.np=np;
}

  let  updateRange = function(value) {
      switch (value) {
        case "n":
           var range={min:10,max:250,xlog:false,np:13};
          break;
        case "rIV":
        case "rIV2":
        case "rIVIV2":
        case "rIVIV2DV":
           var range={min:-0.9,max:0.9,xlog:false,np:13};
          break;
        case "IVskew":
        case "DVskew":
        case "Heteroscedasticity":
        case "Dependence":
        case "Outliers":
        case "IVRange":
        case "DVRange":
             var range={min:0,max:1,xlog:false,np:13};
          break;
        case "IVkurtosis":
        case "DVkurtosis":
           var range={min:1.5,max:100000,xlog:true,np:13};
          break;
        case "IVprop":
        case "DVprop":
             var range={min:0.2,max:0.8,xlog:false,np:13};
          break;
        case "IVcats":
        case "DVcats":
             var range={min:2,max:6,xlog:false,np:5};
          break;
        case "IVlevels":
        case "DVlevels":
             var range={min:3,max:10,xlog:false,np:8};
          break;
        case "WithinCorr":
             var range={min:0,max:1,xlog:false,np:13};
          break;
        case "Alpha":
             var range={min:0.001,max:0.5,xlog:true,np:13};
          break;
        case "Power":
             var range={min:0.1,max:0.9,xlog:false,np:13};
          break;
        case "Repeats":
             var range={min:0,max:8,xlog:false,np:9};
          break;
        case "pNull":
             var range={min:0,max:1,xlog:false,np:13};
          break;
        case "lambda":
             var range={min:0.1,max:1,xlog:false,np:13};
          break;
        case "CheatingAmount":
             var range={min:0,max:0.8,xlog:false,np:13};
          break;
        case "ClusterRad":
             var range={min:0,max:1,xlog:false,np:13};
          break;
        case "SampleGamma":
             var range={min:1,max:10,xlog:false,np:13};
          break;
        case "IVType":
             var range={min:"",max:"",xlog:false,np:5};
          break;
        case "DVType":
             var range={min:"",max:"",xlog:false,np:5};
          break;
        case "PDF":
             var range={min:"",max:"",xlog:false,np:7};
          break;
        case "Method":
             var range={min:"",max:"",xlog:false,np:5};
          break;
        case "Usage":
             var range={min:"",max:"",xlog:false,np:2};
          break;
        case "Cheating":
             var range={min:"",max:"",xlog:false,np:6};
          break;
        case "Transform":
             var range={min:"",max:"",xlog:false,np:3};
          break;
        case "Welch":
             var range={min:"",max:"",xlog:false,np:2};
          break;
        case "Keep":
             var range={min:"",max:"",xlog:false,np:5};
          break;
        default: 
             var range={min:0,max:1,xlog:false,np:13};
          break;
      }
      return range;
    };

module.exports = events;
