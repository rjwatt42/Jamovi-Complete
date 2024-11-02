
# This file is a generated template, your changes will not be overwritten

BrawAnClass <- if (requireNamespace('jmvcore', quietly=TRUE)) R6::R6Class(
  "BrawAnClass",
  inherit = BrawAnBase,
  private = list(
    .init = function() {
      # initialization code 
      if (!exists("braw.env")) {
        BrawOpts(graphC="white",reducedOutput=TRUE,reportHTML=TRUE,autoShow=FALSE,fullGraphSize=0.5)
        statusStore<-list(lastOutput="System",
                          showSampleType="Sample",
                          showInferParam="Basic",
                          showInferDimension="1D",
                          showMultipleParam="Basic",
                          showMultipleDimension="1D",
                          showExploreParam="Basic",
                          showExploreDimension="1D",
                          exploreMode="Design",
                          showJamovi=FALSE,
                          showHelp=FALSE,
                          graphHTML=TRUE
        )
        braw.env$statusStore<<-statusStore
      }
      
    },
    
    .run = function() {
      
      if (is.null(self$options$IV) || is.null(self$options$DV)) {
        self$results$graphHTML$setContent(NULL)
        self$results$reportPlot$setContent(NULL)
        return()
      }
      
      # debug information
      # self$results$debug$setVisible(TRUE)
      # self$results$debug$setContent((levels(self$data[[1]])))
      
      evidence<-makeEvidence(rInteractionOn=self$options$interaction=="yes",
                             ssqType=self$options$ssq,
                             Welch=self$options$equalVar=="no",
                             Transform=self$options$Transform,
                             caseOrder="AsStated"
      )
      braw.env$alphaSig<<-self$options$alphaSig
      
      sample<-readSample(self$data,DV=self$options$DV,IV=self$options$IV)
      result<-doAnalysis(sample,evidence=evidence)
      braw.res$result<<-result
      outputNow<-self$options$show
      
      svgBox(height=350)
      if (is.element(outputNow,c("Compact","Describe"))) svgBox(height=300)
      if (outputNow=="Likelihood") svgBox(aspect=1.5)
      if (outputNow=="Infer" && is.element(showMultipleParam,c("Basic","Custom")) && showExploreDimension=="2D") svgBox(height=250)
      if (outputNow=="Infer" && showExploreDimension=="1D") svgBox(aspect=1.6)
      assign("graphHTML",TRUE,braw.env)
      switch(outputNow,
             "Compact"= self$results$graphHTML$setContent(showDescription()),
             "Sample"= self$results$graphHTML$setContent(showSample()),
             "Describe"= self$results$graphHTML$setContent(showDescription()),
             "Infer"= self$results$graphHTML$setContent(showInference(showType=showInferParam,dimension=showInferDimension)),
             "Likelihood"=self$results$graphHTML$setContent(showPossible(showType=self$options$likelihoodType,cutaway=likelihoodCutaway)),
             self$results$reportPlot$graphHTML$setContent(NULL)
      )
      svgBox(300)
      
      switch(outputNow,
             "Compact"= self$results$reportPlot$setContent(reportInference()),
             "Sample"= self$results$reportPlot$setContent(reportSample()),
             "Describe"= self$results$reportPlot$setContent(reportDescription()),
             "Infer"= self$results$reportPlot$setContent(reportInference()),
             "Likelihood"=self$results$reportPlot$setContent(reportLikelihood()),
             self$results$reportPlot$setContent(NULL)
      )
      
    },
    
    .plotGraph=function(image, ...) {
      
      outputGraph <- image$state[1]
      if (!is.null(outputGraph)) {
        switch(self$options$show,
               "Sample"=   outputGraph<-showSample(),
               "Describe"= outputGraph<-showDescription(),
               "Infer"=    outputGraph<-showInference(showType=image$state[2])
        )
        print(outputGraph)
        return(TRUE)
      } else return(FALSE)
    },
    
    .plotReport=function(image, ...) {
      
      outputText <- image$state
      if (!is.null(outputText)) {
        switch(self$options$show,
               "Sample"=   outputText<-reportSample(),
               "Describe"= outputText<-reportDescription(),
               "Infer"=    outputText<-reportInference()
        )
        print(outputText)
        return(TRUE)
      } else return(FALSE)
      
    }
      )
  )
  