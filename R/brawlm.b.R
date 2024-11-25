
# This file is a generated template, your changes will not be overwritten

BrawLMClass <- if (requireNamespace('jmvcore', quietly=TRUE)) R6::R6Class(
    "BrawLMClass",
    inherit = BrawLMBase,
    private = list(
      .init = function() {
        # initialization code 
        if (!exists("braw.env")) {
          BrawOpts(graphC="white",reducedOutput=TRUE,reportHTML=TRUE,autoShow=FALSE,
                   height=400,fullGraphSize=0.5)
          statusStore<-list(lastOutput="System",
                            showSampleType="Sample",
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

        statusStore<-braw.env$statusStore
        
        if (self$options$showHTML)  {
          assign("graphHTML",TRUE,braw.env)
          self$results$lmGraph$setVisible(FALSE)
          self$results$lmGraphHTML$setVisible(TRUE)
        } else   {
          assign("graphHTML",FALSE,braw.env)
          self$results$lmGraph$setVisible(TRUE)
          self$results$lmGraphHTML$setVisible(FALSE)
        }
        
        if (is.null(self$options$IV) || is.null(self$options$DV)) {
          if (self$options$showHTML) {
            self$results$lmGraphHTML$setContent(nullPlot())
          } else {
            self$results$lmGraph$setContent(NULL)
          }
          self$results$lmReport$setContent(nullPlot())
          return()
        }
        
          dataFull<-prepareSample(self$data)
          data<-dataFull$data[c("participant",self$options$DV,self$options$IV)]

          result<-generalAnalysis(data,InteractionOn=FALSE)
          braw.res$lm<<-list(result=result,DV=list(name=self$options$DV),IVs=list(name=self$options$IV),
                             whichR=self$options$whichR,p_or_r=self$options$inferWhich)
          
          lm<-braw.res$lm
          if (self$options$showHTML)    assign("graphHTML",TRUE,braw.env)
          else             assign("graphHTML",FALSE,braw.env)
          
          if (self$options$showHTML) {
            outputGraph<-plotGLM(DV=lm$DV,IVs=lm$IVs,lm$result,lm$whichR)
            self$results$lmGraphHTML$setContent(outputGraph)
          } else {
            assign("lm",lm,braw.res)
            self$results$lmGraph$setState("LM")
          }
          outputText<-reportGLM(DV=lm$DV,IVs=lm$IVs,lm$result,p_or_r=lm$p_or_r)
          self$results$lmReport$setContent(outputText)
          
          tableOutput<-braw.env$tableLM
          tableOutput<-rbind(list(AIC=lm$result$aic,Rsqr=lm$result$r.full[[1]]^2,r=lm$result$r.full[[1]],
                                  model=paste(lm$DV$name,"=",paste(lm$IVs$name,collapse="+")) ),
                             tableOutput
          )
          setBrawEnv("tableLM",tableOutput)
          
          ne<-nrow(tableOutput)
          if (ne>15) {
            use1<-which.min(tableOutput[15:ne,1])
            use<-c(1:14,use1)
          } else {
            use<-1:ne
          }
          
          for (i in 1:length(use))
            if (i>1) {
              self$results$reportTableLM$addRow(i,values=tableOutput[use[i],])
              statusStore$nrowTableLM<-statusStore$nrowTableLM+1
            }
          else  self$results$reportTableLM$setRow(rowNo=i,values=tableOutput[use[i],])
          
          self$results$reportTableLM$setState(tableOutput)
          a<-which.min(tableOutput[,1])
          self$results$reportTableLM$addFormat(rowNo=a,col=1,format=Cell.NEGATIVE)
          a<-which.max(tableOutput[,2])
          self$results$reportTableLM$addFormat(rowNo=a,col=2,format=Cell.NEGATIVE)
          
          braw.env$statusStore<<-statusStore
          
      },
      
      
      .lmPlotGraph=function(image, ...) {
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
                 "Multiple"  =outputGraph<-showExpected(showType=image$state[2],dimension=image$state[3],effectType=image$state[4]),
                 "MetaSingle"  =outputGraph<-showMetaSingle(),
                 "MetaMultiple"  =outputGraph<-showMetaMultiple(),
                 "Explore"   =outputGraph<-showExplore(showType=image$state[2],dimension=image$state[3],effectType=image$state[4]),
                 "LM" =outputGraph<-plotGLM(DV=braw.res$lm$DV,IVs=braw.res$lm$IVs,braw.res$lm$result,braw.res$lm$whichR),
                 "SEM" =outputGraph<-plotPathModel(braw.res$sem)
          )
          print(outputGraph)
          return(TRUE)
        } else {
          return(FALSE)
        }
      }
    )
)
