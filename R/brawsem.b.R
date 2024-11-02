
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
                            graphHTML=TRUE
          )
          braw.env$statusStore<<-statusStore
        }
        
      },
      
      .run = function() {

          if (is.null(self$options$Stage1) && is.null(self$options$Stage2) &&
              is.null(self$options$Stage3)
              )  {
            self$results$reportPlot$setState(NULL)
            return()
          }
        dataFull<-prepareSample(self$data)
        # self$results$debug$setContent(dataFull$data[1,])
        # self$results$debug$setContent(c(self$options$Stage1,self$options$Stage2,self$options$Stage3))
        # dataFull$data<-dataFull$data[c(self$options$Stage1,self$options$Stage2,self$options$Stage3)]
        
        stages<-list()
        stagesString<-""
        rawStages<-list(self$options$Stage1,
                     self$options$Stage2,
                     self$options$Stage3,
                     self$options$Stage4,
                     self$options$Stage5)
        if (self$options$causalDirection=="up") rawStages<-rev(rawStages)
        for (stage in rawStages) {
          if (!is.null(stage)) {
            stages<-c(stages,list(stage))
            stagesString<-paste0(stagesString,paste0("{",paste(sapply(stage,substr,1,2),collapse=","),"}"))
          }
        }
        # self$results$debug$setVisible(TRUE)
        # self$results$debug$setContent(stages)
        # return()
        
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

        model_data<-list(pid=1:length(dataFull$data[,1]),
                         data=dataFull$data[,2:ncol(dataFull$data)],
                         varnames=dataFull$variables$name,
                         varcat=dataFull$variables$type=="Categorical"
        )
        
        st<-paste0(stagesString,addString,removeString)
        
        sem<-fit_sem_model(pathmodel,model_data)

        assign("graphHTML",TRUE,braw.env)
          outputGraph<-plotPathModel(sem)
          self$results$graphHTML$setContent(outputGraph)

          tableOutput<-braw.env$table
          tableOutput<-rbind(list(AIC=sem$eval$AIC,Rsqr=sem$eval$Rsquared,
                                  model=st
                                  ),
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
