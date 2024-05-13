
# This file is a generated template, your changes will not be overwritten

BrawLMClass <- if (requireNamespace('jmvcore', quietly=TRUE)) R6::R6Class(
    "BrawLMClass",
    inherit = BrawLMBase,
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
          
          dataFull<-prepareSample(self$data)
          data<-dataFull$data[c("participant",self$options$DV,self$options$IV)]

          result<-generalAnalysis(data,InteractionOn=FALSE)
          braw.res$lm<<-list(result=result,DV=list(name=self$options$DV),IVs=list(name=self$options$IV),
                             whichR=self$options$whichR,p_or_r=self$options$inferWhich)
          self$results$graphPlot$setState(TRUE)
          self$results$reportPlot$setState(TRUE)

          tableOutput<-braw.env$table
          tableOutput<-rbind(list(AIC=AIC(result$lmNormC),Rsqr=result$r.full[[1]]^2,
                                  model=paste(self$options$DV,"=",paste(self$options$IV,collapse="+")) ),
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

        },
        
        .plotGraph=function(image, ...) {
          
          outputGraph <- image$state
          if (!is.null(outputGraph)) {
            result<-braw.res$lm
            outputGraph<-plotGLM(DV=result$DV,IVs=result$IVs,result$result,result$whichR)
            print(outputGraph)
            return(TRUE)
          } else return(FALSE)
        },
        
        .plotReport=function(image, ...) {
          
          outputText <- image$state
          if (!is.null(outputText)) {
            result<-braw.res$lm
            outputText<-reportGLM(DV=result$DV,IVs=result$IVs,result$result,p_or_r=result$p_or_r)
            print(outputText)
            return(TRUE)
          } else return(FALSE)
          
        }
    )
)
