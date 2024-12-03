
# This file is a generated template, your changes will not be overwritten

BrawAnClass <- if (requireNamespace('jmvcore', quietly=TRUE)) R6::R6Class(
  "BrawAnClass",
  inherit = BrawAnBase,
  private = list(
    .init = function() {
      # initialization code 
      if (!exists("braw.env")) {
        BrawOpts(graphC="transparent",reducedOutput=TRUE,reportHTML=TRUE,autoShow=FALSE,
                 height=400,fullGraphSize=0.5)
        statusStore<-list(lastOutput="System",
                          showSampleType="Variables",
                          showInferParam="Basic",
                          showInferDimension="1D",
                          showMultipleParam="Basic",
                          showMultipleDimension="1D",
                          showExploreParam="Basic",
                          showExploreDimension="1D",
                          exploreMode="Design",
                          nrowTableLM=1,
                          nrowTableSEM=1
        )
        braw.env$statusStore<<-statusStore
      }
      
    },
    
    .run = function() {
      
      if (self$options$showHTML)  {
        assign("graphHTML",TRUE,braw.env)
        self$results$anGraph$setVisible(FALSE)
        self$results$anGraphHTML$setVisible(TRUE)
      } else   {
        assign("graphHTML",FALSE,braw.env)
        self$results$anGraph$setVisible(TRUE)
        self$results$anGraphHTML$setVisible(FALSE)
      }
      
      if (is.null(self$options$IV) || is.null(self$options$DV)) {
        if (self$options$showHTML)  {
          self$results$anGraphHTML$setContent(nullPlot())
        } else {
          self$results$anGraph$setContent(NULL)
        }
        self$results$anReport$setContent(nullPlot())
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
      outputNow<-self$options$showSampleType

      showInferDimension<-self$options$showInferDimension
      showInferParam<-paste0(self$options$singleVar1,";",self$options$singleVar2)
      if (outputNow=="Likelihood") {
        possible<-makePossible(UsePrior=self$options$likelihoodUsePrior,
                               prior=makeWorld(worldOn=TRUE,
                                               populationPDF=self$options$priorPDF,
                                               populationRZ=self$options$priorRZ,
                                               populationPDFk=self$options$priorLambda,
                                               populationNullp=self$options$priorNullP)
        )
        possibleResult<-doPossible(possible)
      }

      if (self$options$showHTML) {
        svgBox(height=350,aspect=1.5)
        # if (outputNow=="System") svgBox(aspect=1.5)
        # if (is.element(outputNow,c("Compact","Describe"))) svgBox(height=300)
        # if (outputNow=="Likelihood") svgBox(aspect=1.5)
        # if (is.element(outputNow,c("Infer","Multiple")) && is.element(showMultipleParam,c("Basic","Custom")) && showMultipleDimension=="2D") svgBox(height=250)
        # if (is.element(outputNow,c("Infer","Multiple")) && showMultipleDimension=="1D") svgBox(aspect=1.6)
        # if (outputNow=="Explore" && is.element(showExploreParam,c("Basic","Custom")) && showExploreDimension=="2D") svgBox(height=250)
        # if (outputNow=="Explore" && is.element(showExploreParam,c("Basic","Custom")) && showExploreDimension=="1D") svgBox(aspect=1.6)
        # if (outputNow=="Explore" && showExploreParam=="NHST") svgBox(aspect=1.6)
        assign("graphHTML",TRUE,braw.env)
        if (!is.null(braw.res$result))
          switch(self$options$showSampleType,
                 "Compact"= graphSample<-showDescription(),
                 "Variables" = graphSample<-showMarginals(style=self$options$showSample),
                 "Sample"= graphSample<-showMarginals(style=self$options$showSample),
                 "Describe"= graphSample<-showDescription(),
                 "Infer"= graphSample<-showInference(showType=showInferParam,dimension=showInferDimension),
                 "Likelihood"=graphSample<-showPossible(showType=self$options$likelihoodType,cutaway=likelihoodCutaway)
          )
        else graphSample<-nullPlot()
        self$results$anGraphHTML$setContent(graphSample)
      } else {
        assign("graphHTML",FALSE,braw.env)
        
        switch(outputNow,
               "System"= self$results$anGraph$setState(outputNow),
               "Compact"= self$results$anGraph$setState("Describe"),
               "Sample"= self$results$anGraph$setState(outputNow),
               "Describe"= self$results$anGraph$setState(outputNow),
               "Infer"= self$results$anGraph$setState(c(outputNow,showInferParam,showInferDimension)),
               "Likelihood"= self$results$anGraph$setState(c(outputNow,self$options$likelihoodType,likelihoodCutaway)),
               "Multiple"= self$results$anGraph$setState(c(outputNow,showMultipleParam,showMultipleDimension,whichShowMultipleOut)),
               "Explore"= self$results$anGraph$setState(c(outputNow,showExploreParam,showExploreDimension,whichShowExploreOut)),
               self$results$anGraph$setState(outputNow)
        )
        
        switch(outputNow,
               "System"= self$results$anReport$setContent(reportPlot(NULL)),
               "Compact"= self$results$anReport$setContent(reportInference()),
               "Sample"= self$results$anReport$setContent(reportSample()),
               "Describe"= self$results$anReport$setContent(reportDescription()),
               "Infer"= self$results$anReport$setContent(reportInference()),
               "Likelihood"=self$results$anReport$setContent(reportLikelihood()),
               "Multiple"= self$results$anReport$setContent(reportMultiple(showType=showMultipleParam,reportStats=self$options$reportInferStats)),
               "Explore"= self$results$anReport$setContent(reportExplore(showType=showExploreParam,reportStats=self$options$reportInferStats)),
               self$results$anReport$setContent(NULL)
        )
      }
      
    },
    
    .anPlotGraph=function(image, ...) {
      
      outputGraph <- image$state[1]
      if (!is.null(outputGraph)) {
        switch(outputGraph,
               "System"    =outputGraph<-showSystem(),
               "Hypothesis"=outputGraph<-showHypothesis(),
               "Design"    =outputGraph<-showDesign(),
               "Population"=outputGraph<-showPopulation(),
               "Prediction"=outputGraph<-showPrediction(),
               "Sample"    =outputGraph<-showMarginals(style="unsorted"),
               "Describe"  =outputGraph<-showDescription(),
               "Infer"     =outputGraph<-showInference(showType=image$state[2],dimension=image$state[3]),
               "Likelihood"=outputGraph<-showPossible(showType=image$state[2],cutaway=as.logical(image$state[3])),
               "Multiple"  =outputGraph<-showMultiple(showType=image$state[2],dimension=image$state[3],effectType=image$state[4]),
               "MetaSingle"  =outputGraph<-showMetaSingle(),
               "MetaMultiple"  =outputGraph<-showMetaMultiple(),
               "Explore"   =outputGraph<-showExplore(showType=image$state[2],dimension=image$state[3],effectType=image$state[4]),
               "LM" =outputGraph<-plotGLM(DV=braw.res$lm$DV,IVs=braw.res$lm$IVs,braw.res$lm$result,braw.res$lm$whichR),
               "SEM" =outputGraph<-plotPathModel(braw.res$sem)
        )
        print(outputGraph)
        return(TRUE)
      } else return(FALSE)
    }
      )
  )
  
