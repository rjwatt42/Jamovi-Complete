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
