reportPathModel<-function(sem,showType) {
  digits<-2
  
  switch(showType,
         "CF"={showData<-sem$CF_table;title="coefficients"},
         "ES"={showData<-sem$ES_table;title="effect sizes"},
         "cov"={showData<-sem$covariance;title="covariance"}
  )
  showData<-t(showData)
  
  useVars<-unlist(sem$stages)
  nc<-ncol(showData)+1
  outputText<-c(paste0("\b",title),rep(" ",nc-1))
  outputText<-c(outputText,rep(" ",nc))
  outputText<-c(outputText,"!H!C ",useVars)
  
  for (i in 1:nrow(showData)) {
    iu<-which(rownames(showData)==useVars[i])
    if (any(!is.na(showData[iu,]))) {
      outputText<-c(outputText,rownames(showData)[iu])
      for (j in 1:ncol(showData)) {
        ju<-which(rownames(showData)==useVars[j])
        if (is.na(showData[iu,ju])) outputText<-c(outputText," ")
        else outputText<-c(outputText,brawFormat(showData[iu,ju],digits=digits))
      }
    }
  }
  
  nr<-length(outputText)/nc
  reportPlot(outputText,nc,nr)
  
}