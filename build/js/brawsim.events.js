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
        case "moreExplore":
          value = ui.moreExploreList.value();
          var newRange = updateRange(value);
              ui.exploreMinValM.setValue(newRange.min);
              ui.exploreMaxValM.setValue(newRange.max);
              ui.exploreXLogM.setValue(newRange.xlog);
              ui.exploreNPointsM.setValue(newRange.np);
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
    onChange_moreExploreList: function(ui) {
          let value = ui.moreExploreList.value();
          let newRange = updateRange(value)
          ui.exploreMinValM.setValue(newRange.min);
          ui.exploreMaxValM.setValue(newRange.max);
          ui.exploreXLogM.setValue(newRange.xlog);
          ui.exploreNPointsM.setValue(newRange.np);
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
      let oldmu = ui.IVmu.value();
      let oldsd = ui.IVsd.value();
      let variable = makeVar(presetIV);
          ui.IVname.setValue(variable.name);
          ui.IVtype.setValue(variable.type);
          ui.IVmu.setValue(variable.mu);
          ui.IVsd.setValue(variable.sd);
          ui.IVskew.setValue(variable.skew);
          ui.IVkurt.setValue(variable.kurt);
          ui.IVnlevs.setValue(variable.nlevs);
          ui.IViqr.setValue(variable.iqr);
          ui.IVncats.setValue(variable.ncats);
          ui.IVcases.setValue(variable.cases)
          ui.IVprops.setValue(variable.props);
          ui.RangeMin.setValue(variable.mu+variable.sd*(ui.RangeMin.value()-oldmu)/oldsd);
          ui.RangeMax.setValue(variable.mu+variable.sd*(ui.RangeMax.value()-oldmu)/oldsd);
    },

    onChange_presetIV2: function(ui) {
      let presetIV2 = ui.presetIV2.value();
      if (presetIV2!="none") {
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
      }
    },

    onChange_presetWorld: function(ui) {
      let presetH = ui.presetWorld.value();
      switch(presetH) {
        case "psych":
          ui.WorldOn.setValue(true);
          ui.WorldPDF.setValue("Exp");
          ui.WorldRZ.setValue("z");
          ui.WorldLambda.setValue(0.3);
          ui.WorldNullP.setValue(0.75);
          ui.SampleSpreadOn.setValue(true);
          ui.SampleSizeM.setValue(52);
          ui.SampleGamma.setValue(1.56);
          break;
        case "simple":
          ui.WorldOn.setValue(true);
          ui.WorldPDF.setValue("Single");
          ui.WorldRZ.setValue("r");
          ui.WorldLambda.setValue(0.3);
          ui.WorldNullP.setValue(0.5);
          ui.SampleSpreadOn.setValue(false);
          break;
      }
    },
    
    onChange_Single: function(ui) {
      ui.whichGraph.setValue("Single")
    },
    
    onChange_project1s: function(ui) {
      let BtnOn = ui.doProject1sBtn.value();
      if (BtnOn==true) {
      defaultSetUp(ui)
      ui.presetDV.setValue("ExamGrade")
      ui.presetIV.setValue("RiskTaker")
      ui.demoWhich.setValue("d1")
      ui.showHypothesisBtn.setValue(true)
      }
    },
    
    onChange_project1a: function(ui) {
      let BtnOn = ui.doProject1aBtn.value();
      if (BtnOn==true) {
        ui.showSampleType.setValue("Compact")
        ui.makeSampleBtn.setValue(true)
      }
    },
    
    onChange_project1b: function(ui) {
      let BtnOn = ui.doProject1bBtn.value();
      if (BtnOn==true) {
      ui.jamoviHelp.setValue(true)
      }
    },
    
    onChange_project1c: function(ui) {
      let BtnOn = ui.doProject1cBtn.value();
      if (BtnOn==true) {
        let variable1 = ui.doProject1cLst.value();
        variable1 = variable1.replace("?","")
        ui.presetIV.setValue(variable1)
        let variable2 = ui.doProject1cLstA.value();
        variable2 = variable2.replace("?","")
        ui.presetDV.setValue(variable2)
        ui.showSampleType.setValue("Compact")
        ui.makeSampleBtn.setValue(true)
      }
    },
    
    onChange_project2a: function(ui) {
      let BtnOn = ui.doProject2aBtn.value();
      if (BtnOn==true) {
      ui.demoWhich.setValue("d2")
      defaultSetUp(ui)      
      ui.presetDV.setValue("ExamGrade")
      ui.presetIV.setValue("Perfectionism")
      ui.showHypothesisBtn.setValue(true)
      }
    },
    
    onChange_project2b: function(ui) {
      let BtnOn = ui.doProject2bBtn.value();
      if (BtnOn==true) {
        ui.showSampleType.setValue("Variables")
      ui.makeSampleBtn.setValue(true)
      }
    },
    
    onChange_project2c: function(ui) {
      let BtnOn = ui.doProject2cBtn.value();
      if (BtnOn==true) {
        ui.showSampleType.setValue("Sample")
      ui.makeSampleBtn.setValue(true)
      }
    },
    
    onChange_project2d: function(ui) {
      let BtnOn = ui.doProject2dBtn.value();
      if (BtnOn==true) {
        ui.SampleMethod.setValue("Convenience")
      }
    },
    
    onChange_project3a: function(ui) {
      let BtnOn = ui.doProject3aBtn.value();
      if (BtnOn==true) {
      ui.demoWhich.setValue("d3")
      defaultSetUp(ui)
      ui.presetDV.setValue("ExamGrade")
      ui.presetIV.setValue("Happiness")
      ui.showHypothesisBtn.setValue(true)
      }
    },
    
    onChange_project3b: function(ui) {
      let BtnOn = ui.doProject3bBtn.value();
      if (BtnOn==true) {
        ui.showSampleType.setValue("Describe")
      ui.makeSampleBtn.setValue(true)
      }
    },
    
    onChange_project3c: function(ui) {
      let BtnOn = ui.doProject3cBtn.value();
      if (BtnOn==true) {
        ui.SampleSize.setValue(500)
        ui.showSampleType.setValue("Describe")
      ui.makeSampleBtn.setValue(true)
      }
    },
    
    onChange_project3d: function(ui) {
      let BtnOn = ui.doProject3dBtn.value();
      if (BtnOn==true) {
        ui.EffectSize1.setValue(0.0)
        ui.showSampleType.setValue("Describe")
      ui.makeSampleBtn.setValue(true)
      }
    },
    
    onChange_project4a: function(ui) {
      let BtnOn = ui.doProject4aBtn.value();
      if (BtnOn==true) {
      ui.demoWhich.setValue("d4")
      defaultSetUp(ui)
      ui.presetDV.setValue("ExamGrade")
      ui.presetIV.setValue("RiskTaking")
      ui.showHypothesisBtn.setValue(true)
      }
    },
    
    onChange_project4b: function(ui) {
      let BtnOn = ui.doProject4bBtn.value();
      if (BtnOn==true) {
        ui.showSampleType.setValue("Infer")
        ui.showInferDimension.setValue("1D")
      ui.makeSampleBtn.setValue(true)
      }
    },
        
    onChange_project4c: function(ui) {
      let BtnOn = ui.doProject4cBtn.value();
      if (BtnOn==true) {
        ui.showMultipleDimension.setValue("1D")
        ui.showMultipleParam.setValue("Basic")
      ui.makeMultipleBtn.setValue(true)
      }
    },
    
    onChange_project4d: function(ui) {
      let BtnOn = ui.doProject4dBtn.value();
      if (BtnOn==true) {
        ui.showMultipleDimension.setValue("2D")
      ui.makeMultipleBtn.setValue(true)
      }
    },
    
    onChange_Project5s: function(ui) {
      let BtnOn = ui.doProject5sBtn.value();
      if (BtnOn==true) {
      ui.demoWhich.setValue("d5")
      defaultSetUp(ui)
      ui.WorldOn.setValue(true)
      ui.WorldPDF.setValue("Single")
      ui.WorldLambda.setValue(0.3)
      ui.WorldNullP.setValue(0.5)
      ui.showHypothesisBtn.setValue(true)
      }
    },
    
    onChange_Project5a: function(ui) {
      let BtnOn = ui.doProject5aBtn.value();
      if (BtnOn==true) {
        ui.showSampleType.setValue("Infer")
      ui.makeSampleBtn.setValue(true)
      }
    },
        
    onChange_Project5b: function(ui) {
      let BtnOn = ui.doProject5bBtn.value();
      if (BtnOn==true) {
        ui.showMultipleParam.setValue("Basic")
      ui.makeMultipleBtn.setValue(true)
      }
    },
    
    onChange_Project5c: function(ui) {
      let BtnOn = ui.doProject5cBtn.value();
      if (BtnOn==true) {
        ui.showMultipleParam.setValue("NHST")
      ui.makeMultipleBtn.setValue(true)
      }
    },
    
    onChange_Project5d: function(ui) {
      let BtnOn = ui.doProject5dBtn.value();
      if (BtnOn==true) {
        ui.SampleSize.setValue(210)
        ui.showMultipleParam.setValue("NHST")
      ui.makeMultipleBtn.setValue(true)
      }
    },

    onChange_project6s: function(ui) {
      let BtnOn = ui.doproject6sBtn.value();
      if (BtnOn==true) {
      ui.demoWhich.setValue("d5")
      defaultSetUp(ui)
      ui.presetDV.setValue("ExamGrade")
      ui.presetIV.setValue("RiskTaking")
      ui.showHypothesisBtn.setValue(true)
      }
    },

    onChange_project6a: function(ui) {
      let BtnOn = ui.doproject6aBtn.value();
      if (BtnOn==true) {
        ui.showMultipleParam.setValue("p(sig)")
      ui.makeMultipleBtn.setValue(true)
      }
    },
    
    onChange_project6b: function(ui) {
      let BtnOn = ui.doproject6bBtn.value();
      if (BtnOn==true) {
      let nVal = ui.doproject6bLst.value();
      switch(nVal) {
        case "n21": ui.SampleSize.setValue(21); break;
        case "n42": ui.SampleSize.setValue(42); break;
        case "n84": ui.SampleSize.setValue(84); break;
        case "n168": ui.SampleSize.setValue(168); break;
        case "n336": ui.SampleSize.setValue(336); break;
      }
        ui.showMultipleParam.setValue("p(sig)")
      ui.makeMultipleBtn.setValue(true)
      }
    },
    
    onChange_project6c: function(ui) {
      let BtnOn = ui.doproject6cBtn.value();
      if (BtnOn==true) {
        ui.showExploreParam.setValue("p(sig)")
        ui.exploreMode.setValue("designExplore")
        ui.designExploreList.setValue("n")
      ui.makeExploreBtn.setValue(true)
      }
    },
    
    onChange_project6d: function(ui) {
      let BtnOn = ui.doproject6dBtn.value();
      if (BtnOn==true) {
      let rVal = ui.doproject6dLst.value();
      switch(rVal) {
        case "r00": ui.EffectSize1.setValue(0.0); break;
        case "r01": ui.EffectSize1.setValue(0.1); break;
        case "r02": ui.EffectSize1.setValue(0.2); break;
        case "r03": ui.EffectSize1.setValue(0.3); break;
        case "r05": ui.EffectSize1.setValue(0.5); break;
        case "r075": ui.EffectSize1.setValue(0.75); break;
      }
        ui.showExploreParam.setValue("p(sig)")
        ui.exploreMode.setValue("designExplore")
        ui.designExploreList.setValue("n")
      ui.makeExploreBtn.setValue(true)
      }
    },

    onChange_project7a: function(ui) {
      let BtnOn = ui.doproject7aBtn.value();
      if (BtnOn==true) {
      let hyp = ui.doproject7aLst.value();
      defaultSetUp(ui)
      ui.demoWhich.setValue("d6")
      ui.presetIV2.setValue("IV2");
      ui.IV2name.setValue("IV2"); 
      ui.interaction.setValue("yes");
      switch(hyp) {
        case "iii": 
          ui.DVtype.setValue("Interval"); 
          ui.IVtype.setValue("Interval"); 
          ui.IV2type.setValue("Interval"); 
        break;
        case "ici": 
          ui.DVtype.setValue("Interval"); 
          ui.IVtype.setValue("Categorical"); 
          ui.IV2type.setValue("Interval"); 
        break;
        case "iic": 
          ui.DVtype.setValue("Interval"); 
          ui.IVtype.setValue("Interval"); 
          ui.IV2type.setValue("Categorical"); 
        break;
        case "icc": 
          ui.DVtype.setValue("Interval"); 
          ui.IVtype.setValue("Categorical"); 
          ui.IV2type.setValue("Categorical"); 
        break;
      }
      ui.EffectSize1.setValue(0.0)
      ui.EffectSize2.setValue(0.0)
      ui.EffectSize12.setValue(0.0)
      ui.SampleSize.setValue(420)
      ui.showHypothesisBtn.setValue(true)
      }
    },
    
    onChange_project7b: function(ui) {
      let BtnOn = ui.doproject7bBtn.value();
      if (BtnOn==true) {
      let rVal = ui.doproject7bLst.value();
      switch(rVal) {
        case "r00": ui.EffectSize1.setValue(0.0); break;
        case "r01": ui.EffectSize1.setValue(0.1); break;
        case "r02": ui.EffectSize1.setValue(0.2); break;
        case "r03": ui.EffectSize1.setValue(0.3); break;
        case "r05": ui.EffectSize1.setValue(0.5); break;
        case "r075": ui.EffectSize1.setValue(0.75); break;
      }
      ui.EffectSize2.setValue(0.0)
      ui.EffectSize12.setValue(0.0)
        ui.showSampleType.setValue("Describe")
      ui.makeSampleBtn.setValue(true)
      }
    },
    
    onChange_project7c: function(ui) {
      let BtnOn = ui.doproject7cBtn.value();
      if (BtnOn==true) {
      let rVal = ui.doproject7cLst.value();
      switch(rVal) {
        case "r00": ui.EffectSize2.setValue(0.0); break;
        case "r01": ui.EffectSize2.setValue(0.1); break;
        case "r02": ui.EffectSize2.setValue(0.2); break;
        case "r03": ui.EffectSize2.setValue(0.3); break;
        case "r05": ui.EffectSize2.setValue(0.5); break;
        case "r075": ui.EffectSize2.setValue(0.75); break;
      }
      ui.EffectSize1.setValue(0.0)
      ui.EffectSize12.setValue(0.0)
        ui.showSampleType.setValue("Describe")
      ui.makeSampleBtn.setValue(true)
      }
    },
    
    onChange_project7d: function(ui) {
      let BtnOn = ui.doproject7dBtn.value();
      if (BtnOn==true) {
      let rVal = ui.doproject7dLst.value();
      switch(rVal) {
        case "r00": ui.EffectSize12.setValue(0.0); break;
        case "r01": ui.EffectSize12.setValue(0.1); break;
        case "r02": ui.EffectSize12.setValue(0.2); break;
        case "r03": ui.EffectSize12.setValue(0.3); break;
        case "r05": ui.EffectSize12.setValue(0.5); break;
        case "r075": ui.EffectSize12.setValue(0.75); break;
      }
      ui.EffectSize1.setValue(0.0)
      ui.EffectSize2.setValue(0.0)
        ui.showSampleType.setValue("Describe")
      ui.makeSampleBtn.setValue(true)
      }
    },

    onChange_project8a: function(ui) {
      let BtnOn = ui.doproject8aBtn.value();
      if (BtnOn==true) {
      let hyp = ui.doproject8aLst.value();
      defaultSetUp(ui)
      ui.demoWhich.setValue("d7")
      ui.presetIV2.setValue("IV2");
      ui.IV2name.setValue("IV2"); 
      ui.interaction.setValue("yes");
      switch(hyp) {
        case "iii": 
          ui.DVtype.setValue("Interval"); 
          ui.IVtype.setValue("Interval"); 
          ui.IV2type.setValue("Interval"); 
        break;
        case "ici": 
          ui.DVtype.setValue("Interval"); 
          ui.IVtype.setValue("Categorical"); 
          ui.IV2type.setValue("Interval"); 
        break;
        case "iic": 
          ui.DVtype.setValue("Interval"); 
          ui.IVtype.setValue("Interval"); 
          ui.IV2type.setValue("Categorical"); 
        break;
        case "icc": 
          ui.DVtype.setValue("Interval"); 
          ui.IVtype.setValue("Categorical"); 
          ui.IV2type.setValue("Categorical"); 
        break;
      }
      ui.EffectSize1.setValue(0.0)
      ui.EffectSize2.setValue(0.0)
      ui.EffectSize12.setValue(0.0)
      ui.SampleSize.setValue(1000)
      ui.showHypothesisBtn.setValue(true)
      }
    },
    
    onChange_project8b: function(ui) {
      let BtnOn = ui.doproject8bBtn.value();
      if (BtnOn==true) {
      let rVal = ui.doproject8bLst.value();
      switch(rVal) {
        case "r00": 
          ui.EffectSize1.setValue(0.0); 
          ui.EffectSize12.setValue(0.0); 
          break;
        case "r01": 
          ui.EffectSize1.setValue(0.1); 
          ui.EffectSize12.setValue(0.1); 
          break;
        case "r02": 
          ui.EffectSize1.setValue(0.2); 
          ui.EffectSize12.setValue(0.2); 
          break;
        case "r03": 
          ui.EffectSize1.setValue(0.3); 
          ui.EffectSize12.setValue(0.3); 
          break;
        case "r05": 
          ui.EffectSize1.setValue(0.5); 
          ui.EffectSize12.setValue(0.5); 
          break;
        case "r075": 
          ui.EffectSize1.setValue(0.75); 
          ui.EffectSize12.setValue(0.75); 
          break;
      }
      ui.EffectSize2.setValue(0.0)
        ui.showSampleType.setValue("Describe")
      ui.makeSampleBtn.setValue(true)
      }
    },
    
    onChange_project8c: function(ui) {
      let BtnOn = ui.doproject8cBtn.value();
      if (BtnOn==true) {
      let rVal = ui.doproject8cLst.value();
      switch(rVal) {
        case "r00": 
          ui.EffectSize12.setValue(0.0); 
          break;
        case "r01": 
          ui.EffectSize12.setValue(0.1); 
          break;
        case "r02": 
          ui.EffectSize12.setValue(0.2); 
          break;
        case "r03": 
          ui.EffectSize12.setValue(0.3); 
          break;
        case "r05": 
          ui.EffectSize12.setValue(0.5); 
          break;
        case "r075": 
          ui.EffectSize12.setValue(0.75); 
          break;
      }
          ui.EffectSize1.setValue(0.0); 
      ui.EffectSize2.setValue(0.0)
        ui.showSampleType.setValue("Describe")
      ui.makeSampleBtn.setValue(true)
      }
    },

    onChange_Project9s: function(ui) {
      let BtnOn = ui.doProject9sBtn.value();
      if (BtnOn==true) {
      let hyp = ui.doProject9sLst.value();
      defaultSetUp(ui)
      ui.demoWhich.setValue("d9")
      ui.presetIV2.setValue("IV2");
      ui.IV2name.setValue("IV2"); 
      ui.interaction.setValue("no");
      switch(hyp) {
        case "iii": 
          ui.DVtype.setValue("Interval"); 
          ui.IVtype.setValue("Interval"); 
          ui.IV2type.setValue("Interval"); 
        break;
        case "ici": 
          ui.DVtype.setValue("Interval"); 
          ui.IVtype.setValue("Categorical"); 
          ui.IV2type.setValue("Interval"); 
        break;
        case "iic": 
          ui.DVtype.setValue("Interval"); 
          ui.IVtype.setValue("Interval"); 
          ui.IV2type.setValue("Categorical"); 
        break;
        case "icc": 
          ui.DVtype.setValue("Interval"); 
          ui.IVtype.setValue("Categorical"); 
          ui.IV2type.setValue("Categorical"); 
        break;
      }
      ui.EffectSize1.setValue(0.5)
      ui.EffectSize2.setValue(0.5)
      ui.EffectSize3.setValue(0.3)
      ui.SampleSize.setValue(1000)
      ui.showHypothesisBtn.setValue(true)
      }
    },
    
    onChange_project9a: function(ui) {
      let BtnOn = ui.doproject9aBtn.value();
      if (BtnOn==true) {
        ui.showSampleType.setValue("Describe")
      ui.makeSampleBtn.setValue(true)
      }
    },
    
    onChange_project9b: function(ui) {
      let BtnOn = ui.doproject9bBtn.value();
      if (BtnOn==true) {
      let rVal = ui.doproject9bLst.value();
      switch(rVal) {
        case "r00": 
          ui.EffectSize3.setValue(0.0); 
          break;
        case "r01": 
          ui.EffectSize3.setValue(0.1); 
          break;
        case "r02": 
          ui.EffectSize3.setValue(0.2); 
          break;
        case "r03": 
          ui.EffectSize3.setValue(0.3); 
          break;
        case "r05": 
          ui.EffectSize3.setValue(0.5); 
          break;
        case "r075": 
          ui.EffectSize3.setValue(0.75); 
          break;
      }
        ui.showSampleType.setValue("Describe")
      ui.makeSampleBtn.setValue(true)
      }
    },
    
    onChange_project9cLst: function(ui) {
      let showVal = ui.doproject9cLst.value();
      ui.whichShowMultiple.setValue(showVal)
    },
    
    onChange_project9c: function(ui) {
      let BtnOn = ui.doproject9cBtn.value();
      if (BtnOn==true) {
        ui.SampleSize.setValue(42)
        let showVal = ui.doproject9cLst.value();
        ui.whichShowMultiple.setValue(showVal)
        ui.exploreMode.setValue("hypothesisExplore")
        ui.hypothesisExploreList.setValue("rIVIV2")
        ui.showExploreParam.setValue("Single")
      ui.makeExploreBtn.setValue(true)
      }
    }
}

let defaultSetUp = function(ui) {
      ui.DVtype.setValue("Interval")
        ui.presetIV2.setValue("none")
        ui.IVtype.setValue("Interval")
      ui.EffectSize1.setValue(0.3)
        ui.EffectSize2.setValue(0)
        ui.EffectSize3.setValue(0)
        ui.EffectSize12.setValue(0)
        ui.WorldOn.setValue(false)
      ui.SampleSpreadOn.setValue(false)
      ui.SampleSize.setValue(42)
        ui.SampleMethod.setValue("Random")
      ui.showInferDimension.setValue("1D")
        ui.showMultipleDimension.setValue("1D")
}

let makeVar = function(name) {
  switch (name) {
    case "DV":
      var variable={name:"DV",type:"Interval",mu:0,sd:1,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"C1,C2",props:"1,1"};
      break;
    case "IV":
      var variable={name:"IV",type:"Interval",mu:0,sd:1,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"C1,C2",props:"1,1"};
      break;
    case "IV2":
      var variable={name:"IV2",type:"Interval",mu:0,sd:1,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"C1,C2",props:"1,1"};
      break;
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
    case "SelfConfidence":
      var variable={name:"SelfConfidence",type:"Interval",mu:50,sd:12,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"C1,C2",props:"1,1"};
      break;
    case "ExamGrade":
      var variable={name:"ExamGrade",type:"Interval",mu:55,sd:10,skew:-0.6,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"C1,C2",props:"1,1"};
      break;
    case "ExamPass":
      var variable={name:"ExamPass?",type:"Categorical",mu:55,sd:10,skew:-0.6,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"no,yes",props:"1,3"};
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
      ncats:2,cases:"no,yes",props:"1,1"};
      break;
    case "RiskTaker":
      var variable={name:"RiskTaker?",type:"Categorical",mu:0,sd:1,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"no,yes",props:"1,1"};
      break;
    case "Smoker":
      var variable={name:"Smoker?",type:"Categorical",mu:0,sd:1,skew:0,kurt:3,
      nlevs:7,iqr:3,
      ncats:2,cases:"no,yes",props:"2,1"};
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
      ncats:2,cases:"no,yes",props:"1,1"};
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
        case "IVRangeC":
             var range={min:0.1,max:3,xlog:false,np:13}
          break;
        case "IVRangeE":
             var range={min:-3,max:3,xlog:false,np:13}
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
