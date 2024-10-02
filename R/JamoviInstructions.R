makeInstructions <- function(hypothesis=braw.def$hypothesis,design=braw.def$design,HelpType="Analysis") {
  
  to_char="to"
  # to_char="\u21D2"
  
  if (is.null(hypothesis$IV2)) {
    switch(hypothesis$DV$type,
           "Interval"={
             switch(hypothesis$IV$type,
                    "Interval"=test<-"correlationPearson",
                    "Ordinal"=test<-"correlationSpearman",
                    "Categorical"={
                      if (hypothesis$IV$ncats==2) test<-"t-test"
                      else                        test<-"anova"
                      repeated<-(design$sIV1Use=="Within")
                    }
             )
           },
           "Ordinal"={
             switch(hypothesis$IV$type,
                    "Interval"=test<-"correlationSpearman",
                    "Ordinal"=test<-"correlationSpearman",
                    "Categorical"={
                      if (hypothesis$IV$ncats==2) test<-"u-test"
                      else                        test<-"kw-test"
                      repeated<-(design$sIV1Use=="Within")
                    }
             )
           },
           "Categorical"={
             switch(hypothesis$IV$type,
                    "Interval"=test<-"logisticRegression",
                    "Ordinal"=test<-"logisticRegression",
                    "Categorical"={
                      test<-"chisqr"
                      repeated<-(design$sIV1Use=="Within")
                    }
             )
           }
    )
    optionsGroup=c()
    options=c()
    switch(test,
           "correlationPearson"={
             ribbon="Regression"
             menu="Correlation Matrix"
             IVgoes="Variables"
             DVgoes="Variables"
             options=paste0("<b>Correlation Coefficients</b> ",to_char," <b>Pearson</b>")
             if (HelpType=="Graph") menu="ScatterPlot"
             IVGraph="X-Axis"
             DVGraph="Y-Axis"
             graphOptions=paste0("<b>Regression Line</b> ",to_char," <b>Linear</b>")
           },
           "correlationSpearman"={
             ribbon="Regression"
             menu="Correlation Matrix"
             IVgoes="Variables"
             DVgoes="Variables"
             options=paste0("<b>Correlation Coefficients</b> ",to_char," <b>Spearman</b>")
             if (HelpType=="Graph") menu="ScatterPlot"
             IVGraph="X-Axis"
             DVGraph="Y-Axis"
             graphOptions=paste0("<b>Regression Line</b> ",to_char," <b>Linear</b>")
           },
           "t-test"={
             ribbon="T-Tests"
             if (repeated) menu="Paired Samples T-Test"
             else menu="Independent Samples T-Test"
             IVgoes="Grouping Variable"
             DVgoes="Dependent Variables"
             options=paste0("<b>Tests</b> ",to_char," <b>Student's</b>")
             if (HelpType=="Graph") menu="Descriptives"
             IVGraph="Split by"
             DVGraph="Variables"
             graphOptions=paste0("<b>Box Plots</b> ",to_char," <b>Data</b>")
           },
           "anova"={
             ribbon="ANOVA"
             if (repeated) menu="Repeated Measures ANOVA"
             else menu="One-way ANOVA"
             IVgoes="Grouping Variable"
             DVgoes="Dependent Variables"
             if (!repeated) 
                options=paste0("<b>Variances</b> ",to_char," <b>Assume equal (Fisher's)</b>")
             if (HelpType=="Graph") menu="Descriptives"
             IVGraph="Split by"
             DVGraph="Variables"
             graphOptions=paste0("<b>Box Plots</b> ",to_char," <b>Data</b>")
           },
           "u-test"={
             ribbon="T-Tests"
             if (repeated) menu="Paired Samples T-Test"
             else menu="Independent Samples T-Test"
             IVgoes="Grouping Variable"
             DVgoes="Dependent Variables"
             if (repeated)
               options=paste0("<b>Tests</b> ",to_char," <b>Wilcoxon rank</b>")
             else
               options=paste0("<b>Tests</b> ",to_char," <b>Mann-Whitney U</b>")
             if (HelpType=="Graph") menu="Descriptives"
             IVGraph="Split by"
             DVGraph="Variables"
             graphOptions=paste0("<b>Box Plots</b> ",to_char," <b>Data</b>")
           },
           "kw-test"={
             ribbon="ANOVA"
             if (repeated) menu="Repeated Measures ANOVA (Friedman)"
             else menu="One-way ANOVA (Kruskal Wallace)"
             IVgoes="Grouping Variable"
             DVgoes="Dependent Variables"
             if (HelpType=="Graph") menu="Descriptives"
             IVGraph="Split by"
             DVGraph="Variables"
             graphOptions=paste0("<b>Box Plots</b> ",to_char," <b>Data</b>")
           },
           "logisticRegression"={
             ribbon="Regression"
             menu="2 Outcomes"
             IVgoes="Covariates"
             DVgoes="Dependent Variable"
             optionsGroup="<b>Model Fit</b>"
             options=c(
               paste0("<b>Fit Measures</b> ",to_char," <b>Overall model test</b>"),
               paste0("<b>Psuedo R<sup>2</sup></b> ",to_char," <b>McFadden's R<sup>2</sup></b>")
             )
             if (HelpType=="Graph") menu="ScatterPlot"
             IVGraph="X-Axis"
             DVGraph="Y-Axis"
             graphOptions=paste0("<b>Regression Line</b> ",to_char," <b>Smooth</b>")
           },
           "chisqr"={
             ribbon="Frequencies"
             menu="Independent Samples"
             IVgoes="Rows"
             DVgoes="Columns"
             if (HelpType=="Graph") menu="Pareto Chart"
             IVGraph="X-Axis"
             DVGraph="Counts"
             graphOptions=c()
           },
    )
  } else {
    switch(hypothesis$DV$type,
           "Interval"=test<-"generalLinear",
           "Ordinal"=test<-"generalLinear",
           "Categorical"=test<-"generalizedLinear"
    )
    if(hypothesis$IV$type=="Categorical") repeated1<-(design$sIV1Use=="Within")
    if(hypothesis$IV2$type=="Categorical") repeated2<-(design$sIV2Use=="Within")
    switch(test,
           "generalLinear"={
             ribbon="Regression"
             menu="Linear Regression"
             DVgoes="Dependent Variable"
             if (hypothesis$IV$type=="Categorical") IVgoes="Factors"
             else                                   IVgoes="Covariates"
             if (hypothesis$IV2$type=="Categorical") IV2goes="Factors"
             else                                    IV2goes="Covariates"
             if (HelpType=="Graph") menu=c()
           },
           "generalizedLinear"={
             ribbon="Regression"
             menu="2 Outcomes"
             DVgoes="Dependent Variable"
             if (hypothesis$IV$type=="Categorical") IVgoes="Factors"
             else                                   IVgoes="Covariates"
             if (hypothesis$IV2$type=="Categorical") IV2goes="Factors"
             else                                    IV2goes="Covariates"
             if (HelpType=="Graph") menu=c()
           }
    )
    DVgoes="Dependent Variable"
    if (hypothesis$IV$type=="Categorical") IVgoes="Factors"
    else IVgoes="Covariates"
    if (hypothesis$IV2$type=="Categorical") IV2goes="Factors"
    else IV2goes="Covariates"
  }
  
  if (HelpType=="EffectSize") {
      if (hypothesis$DV$type=="Categorical") {
        menu="2 Outcomes"
        optionsGroup="Model Fit"
        options=c(paste0("Pseudo R2 ",to_char," McFadden's R2"))
        warningLogistic="Take the square root of the R2 effect size."
      } else {
        menu="Linear Regression"
        optionsGroup="Model Fit"
        options=c(paste0("Fit Measures ",to_char," R"))
        warningLogistic=""
      }
    }
  
  output<-c("<div style='border: none; padding: 4px;'>")
  output<-c(output,paste0("<ol><li>Select the <b>Analyses</b> tab at the top of the window.",
                          "<br>",
                          " Just beneath this tab, you will see a set of icons for the different possible analyses:",
                          " Exploration, T-Tests, ANOVA etc."
  )
  )
  
  output<-c(output,paste0("<li>Press the <b>",ribbon,"</b> icon",
                          "<br> & choose <b>",menu,"</b> from the drop down menu</li>"))
  
  switch(HelpType,
         "Analysis"={
           list1<-paste0("<ul><li><b style=color:red>",hypothesis$DV$name,"</b> to <b>",DVgoes,"</b></li>")
           list1<-paste0(list1,"<li><b style=color:red>",hypothesis$IV$name,"</b> to <b>",IVgoes,"</b></li>")
           if (!is.null(hypothesis$IV2))
             list1<-paste0(list1,"<li><b>",hypothesis$IV2$name,"</b> to <b>",IV2goes,"</b></li>")
           list1<-paste0(list1,"</ul>")
           output<-c(output,paste0("<li>Now move",list1,"</li>"))
           
           if (!is.null(options)) {
             if (!is.null(optionsGroup)) 
                output<-c(output,paste0("<li>Select ",optionsGroup," options group and set"))
             else 
                output<-c(output,paste0("<li>Set the option "))
             list2<-paste0("<ul>")
                for (option in options)
                  list2<-paste0(list2,"<li>",option,"</li>")
                list2<-paste0(list2,"</ul>")
              output<-c(output,list2,paste0("</li>"))
           }
           
           output<-c(output,paste0("</ol>"))
           output<-c(output,paste0("Then Jamovi does the analysis for you."))
           output<-c(output,paste0("</div>"))
         },
         "Graph"={
           if (is.null(menu)) {
             output<-c("<div style='border: 1px solid black; padding: 4px;'>")
             output<-c(output,"Equivalent graphs not available")
             output<-c(output,paste0("</div>"))
           } else {
           list1<-paste0("<ul><li><b style=color:red>",hypothesis$DV$name,"</b> to <b>",DVGraph,"</b></li>")
           list1<-paste0(list1,"<li><b style=color:red>",hypothesis$IV$name,"</b> to <b>",IVGraph,"</b></li>")
           if (!is.null(hypothesis$IV2))
             list1<-paste0(list1,"<li><b>",hypothesis$IV2$name,"</b> to <b>",IV2Graph,"</b></li>")
           list1<-paste0(list1,"</ul>")
           output<-c(output,paste0("<li>Now move",list1,"</li>"))
           
           if (!is.null(graphOptions)) {
             output<-c(output,paste0("<li>Set the option ",graphOptions,"</li>"))
           }
           
           output<-c(output,paste0("</ol>"))
           output<-c(output,paste0("Then Jamovi does the graph for you."))
           output<-c(output,paste0("</div>"))
           }
         },
         "EffectSize"={
           DVgoes="Dependent Variable"
           if (hypothesis$IV$type=="Categorical") IVgoes="Factors"
           else                                   IVgoes="Covariates"
           if (!is.null(hypothesis$IV2)) {
             if (hypothesis$IV2$type=="Categorical") IV2goes="Factors"
             else                                   IV2goes="Covariates"
           }
           list1<-paste0("<ul><li><b style=color:red>",hypothesis$DV$name,"</b> to <b>",DVgoes,"</b></li>")
           list1<-paste0(list1,"<li><b style=color:red>",hypothesis$IV$name,"</b> to <b>",IVgoes,"</b></li>")
           if (!is.null(hypothesis$IV2))
             list1<-paste0(list1,"<li><b>",hypothesis$IV2$name,"</b> to <b>",IV2goes,"</b></li>")
           list1<-paste0(list1,"</ul>")
           output<-c(output,paste0("<li>Now move",list1,"</li>"))
           
           if (!is.null(options)) {
             if (!is.null(optionsGroup)) 
               output<-c(output,paste0("<li>Select ",optionsGroup," options group and set"))
             else 
               output<-c(output,paste0("<li>Set the option "))
             list2<-paste0("<ul>")
             for (option in options)
               list2<-paste0(list2,"<li>",option,"</li>")
             list2<-paste0(list2,"</ul>")
             output<-c(output,list2,paste0("</li>"))
           }
           output<-c(output,paste0("</ol>"))
           output<-c(output,paste0("Then Jamovi shows the effect size. ",warningLogistic))
           output<-c(output,paste0("</div>"))
         }
         )
  
  wholePanel<-paste0(output,collapse="")
  return(wholePanel)

}