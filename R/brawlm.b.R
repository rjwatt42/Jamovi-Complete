
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
                            graphHTML=TRUE,
                            nrowTableLM=1,
                            nrowTableSEM=1
          )
          braw.env$statusStore<<-statusStore
        }
        
      },
      
      .run = function() {

        statusStore<-braw.env$statusStore
        
          if (is.null(self$options$IV) || is.null(self$options$DV)) {
            self$results$graphHTML$setContent(nullPlot())
            self$results$reportPlot$setContent(nullPlot())
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

          tableOutput<-braw.env$tableLM
          tableOutput<-rbind(list(AIC=lm$result$aic,Rsqr=lm$result$r.full[[1]]^2,r=lm$result$r.full[[1]],
                                  model=paste(lm$DV$name,"=",paste(lm$IVs$name,collapse="+")) ),
                             tableOutput
          )
          setBrawEnv("tableLM",tableOutput)
          
          ne<-nrow(tableOutput)
          if (ne>15) {
            use1<-which.min(tableOutput$AIC[15:ne])
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
          
        }
    )
)
