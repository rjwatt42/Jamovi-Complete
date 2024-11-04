
# This file is a generated template, your changes will not be overwritten

BrawSEMClass <- if (requireNamespace('jmvcore', quietly=TRUE)) R6::R6Class(
    "BrawSEMClass",
    inherit = BrawSEMBase,
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
        
        stages<-list()
        stagesString<-""
        rawStages<-list(self$options$Stage1,
                     self$options$Stage2,
                     self$options$Stage3,
                     self$options$Stage4,
                     self$options$Stage5)
        rawStagesOn<-c(self$options$Stage1On,
                       self$options$Stage2On,
                       self$options$Stage3On,
                       self$options$Stage4On,
                       self$options$Stage5On)
        if (self$options$causalDirection=="up") {
          rawStages<-rev(rawStages)
          rawStagesOn<-rev(rawStagesOn)
        }
        for (ist in 1:length(rawStages)) {
          stage<-rawStages[[ist]]
          if (!is.null(stage) && rawStagesOn[ist]) {
            stages<-c(stages,list(stage))
            stagesString<-paste0(stagesString,paste0("{",paste(sapply(stage,substr,1,2),collapse=","),"}"))
          }
        }
        
        addSource<-self$options$addSource
        addDest<-self$options$addDest
        add<-list()
        addString<-""
        nAdd<-min(length(addSource),length(addDest))
        if (nAdd>0) {
          addString<-" + "
          for (i in 1:nAdd) {
            thisAdd<-list(c(addSource[i],addDest[i]))
            add<-c(add,thisAdd)
            addString<-paste0(addString,"(",paste(sapply(thisAdd,substr,1,2),collapse=":"),")")
          }
        }

        removeSource<-self$options$removeSource
        removeDest<-self$options$removeDest
        remove<-list()
        removeString<-""
        nRemove<-min(length(removeSource),length(removeDest))
        if (nRemove>0){
          removeString<-" - "
          for (i in 1:nRemove){
            thisRemove<-list(c(removeSource[i],removeDest[i]))
            remove<-c(remove,thisRemove)
            removeString<-paste0(removeString,"(",paste(sapply(thisRemove,substr,1,2),collapse=":"),")")
          }
        }
        pathmodel<-list(path=
                   list(
                        stages=stages,
                        depth=self$options$Depth,
                        only_ivs=self$options$onlySource,
                        only_dvs=self$options$onlyDest,
                        within_stage=0,
                        add=add,
                        remove=remove
                   )
        )
        
        assign("graphHTML",TRUE,braw.env)
        if (length(stages)<2) {
          self$results$graphSEM$setContent(nullPlot())
          self$results$reportSEM$setContent(nullPlot())
          # self$results$reportTableSEM$setContent(nullPlot())
          return()
        }
        
        dataFull<-prepareSample(self$data)

        model_data<-list(pid=1:length(dataFull$data[,1]),
                         data=dataFull$data[,2:ncol(dataFull$data)],
                         varnames=dataFull$variables$name,
                         varcat=dataFull$variables$type=="Categorical"
        )
        
        st<-paste0(stagesString,addString,removeString)
        
        sem<-fit_sem_model(pathmodel,model_data)

          outputGraph<-plotPathModel(sem)
          self$results$graphSEM$setContent(outputGraph)

          outputReport<-reportPathModel(sem,self$options$ShowType)
          self$results$reportSEM$setContent(outputReport)
          
          tableOutput<-braw.env$tableSEM
          tableOutput<-rbind(list(AIC=sem$eval$AIC,AICc=sem$eval$AICc,BIC=sem$eval$BIC,
                                  Rsqr=sem$eval$Rsquared,r=sqrt(sem$eval$Rsquared),
                                  model=st
                                  ),
                             tableOutput
          )
          setBrawEnv("tableSEM",tableOutput)
          # self$results$debug$setVisible(TRUE)
          # self$results$debug$setContent(tableOutput[,1])
          
          ne<-nrow(tableOutput)
          if (ne>15) {
            use1<-which.min(tableOutput[15:ne,1])
            use<-c(1:14,use1[1])
          } else {
            use<-1:ne
          }
          
          for (i in 1:length(use))
            if (i>1) {
              self$results$reportTableSEM$addRow(i,values=tableOutput[use[i],])
              statusStore$nrowTableSEM<-statusStore$nrowTableSEM+1
            }
            else  self$results$reportTableSEM$setRow(rowNo=i,values=tableOutput[use[i],])

          self$results$reportTableSEM$setState(tableOutput)
          
          for (col in 1:4) {
            a<-which.min(tableOutput[,col])
            self$results$reportTableSEM$addFormat(rowNo=a,col=col,format=Cell.NEGATIVE)
          }

          braw.env$statusStore<<-statusStore
          
        }
    )
)
