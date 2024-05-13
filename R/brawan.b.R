
# This file is a generated template, your changes will not be overwritten

BrawAnClass <- if (requireNamespace('jmvcore', quietly=TRUE)) R6::R6Class(
  "BrawAnClass",
  inherit = BrawAnBase,
  private = list(
    .run = function() {
      
      if (!exists("braw.env")) {
        BrawOpts(fontScale = 1.35,graphC="white",graphicsSize=17)
        braw.env$graphicsSize<<-braw.env$graphicsSize*0.6
        statusStore<-list(lastOutput="System",
                          showSampleType="Sample",
                          showInferParam="Basic",
                          showInferDimension="1D",
                          showMultipleParam="Basic",
                          showMultipleDimension="1D",
                          showExploreParam="r",
                          showExploreDimension="1D"
        )
        braw.env$statusStore<<-statusStore
        braw.env$table<<-NULL
        braw.res$lm<<-NULL
      }
      
      if (is.null(self$options$IV) || is.null(self$options$DV)) {
        self$results$reportPlot$setState(NULL)
        return()
      }
      
      # debug information
      # self$results$debug$setVisible(TRUE)
      # self$results$debug$setContent((levels(self$data[[1]])))
      
      evidence<-makeEvidence(rInteractionOn=self$options$interaction=="yes",
                             ssqType=self$options$ssq,
                             Welch=self$options$equalVar=="no",
                             Transform=self$options$Transform
      )
      braw.env$alphaSig<<-self$options$alphaSig
      
      sample<-readSample(self$data,DV=self$options$DV,IV=self$options$IV)
      result<-doAnalysis(sample,evidence=evidence)
      braw.res$result<<-result
      
      self$results$reportPlot$setState(self$options$show)
      self$results$graphPlot$setState(c(self$options$show,self$options$inferWhich))
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
  