explainBrawStats<-function(whichExplain="none",outputPlain=FALSE) {
  
  nc=3
  switch(whichExplain,
         "none"={outputText<-c()},
         "Plan"={outputText<-
           c(
             "\bMake a Plan"," "," ",
             "A plan has 2 parts:"," "," ",
             " ","Specify a Hypothesis:"," ",
             " "," ","define variables",
             " "," ","specify relationships between variables",
             " ","Set a Design:"," ",
             " "," ","set sample size",
             " "," ","choose sampling method",
             " "," ","choose usage (between/within)"
           )},
         "Hypothesis"={outputText<-
           c(
             "\bSpecify a Hypothesis"," "," ",
             "A hypothesis has 2 parts:"," "," ",
             " ","Define Variables:","DV plus 1 or 2 IVs",
             " "," ","name (anything)",
             " "," ","type (interval/ordinal/categorical)",
             " "," ","parameters (eg. mean & sd or number of categories)",
             " ","Specify Relationships:","r: effect size (-1 to +1; typical ~0.3)",
             " "," ","between each pair of variables"
           )},
         "Design"={outputText<-
           c(
             "\bSet a Design"," "," ",
             "A design has 3 parts:"," "," ",
             " ","Set Sample Size:","any value (typical 42)",
             " ","Choose Sampling Method:","random is ideal",
             " "," ","others are practical",
             " ","Choose Usage:","only when IV is categorical"
           )}
  )
  
  if (outputPlain) return(outputText)
  nr=length(outputText)/nc
  reportPlot(outputText,nc,nr,fontSize=1,maxRows=20)
}

