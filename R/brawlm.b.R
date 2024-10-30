
# This file is a generated template, your changes will not be overwritten

BrawLMClass <- if (requireNamespace('jmvcore', quietly=TRUE)) R6::R6Class(
    "BrawLMClass",
    inherit = BrawLMBase,
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
            self$results$reportPlot$setState(NULL)
            return()
          }
          
          dataFull<-prepareSample(self$data)
          data<-dataFull$data[c("participant",self$options$DV,self$options$IV)]

          result<-generalAnalysis(data,InteractionOn=FALSE)
          braw.res$lm<<-list(result=result,DV=list(name=self$options$DV),IVs=list(name=self$options$IV),
                             whichR=self$options$whichR,p_or_r=self$options$inferWhich)
          
          lm<-braw.res$lm
          assign("graphHTML",TRUE,braw.env)
          outputGraph<-plotGLM(DV=lm$DV,IVs=lm$IVs,lm$result,lm$whichR)
          outputText<-reportGLM(DV=lm$DV,IVs=lm$IVs,lm$result,p_or_r=lm$p_or_r)
          self$results$graphHTML$setContent(outputGraph)
          self$results$reportPlot$setContent(outputText)

          tableOutput<-braw.env$table
          tableOutput<-rbind(list(AIC=lm$result$aic,Rsqr=lm$result$r.full[[1]]^2,r=lm$result$r.full[[1]],
                                  model=paste(lm$DV$name,"=",paste(lm$IVs$name,collapse="+")) ),
                             tableOutput
          )
          setBrawEnv("table",tableOutput)
          
          ne<-nrow(tableOutput)
          if (ne>15) {
            use1<-which.min(tableOutput$AIC[15:ne])
            use<-c(1:14,use1)
          } else {
            use<-1:ne
          }
          
          for (i in use) 
            self$results$reportTable$setRow(rowNo=i,values=tableOutput[i,])
          self$results$reportTable$setState(tableOutput)

        }
    )
)
