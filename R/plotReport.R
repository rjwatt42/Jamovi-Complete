
reportPlot<-function(outputText,nc,nr,fontSize=0.85,maxRows=14,renderAsHTML=braw.env$reportHTML){
  
  doVerticalLines=FALSE
  doItalic=FALSE
  indentSize="30px"
  lineColour="#446688"
  rowColour="#88BBFF"
  cellPadding="padding:5px;padding-top:1px;padding-bottom:1px;"
  blankLineStyle="padding-top:20px;"
  
  if (renderAsHTML) {
    mainStyle<-paste0("font-size:",format(braw.env$labelSize*fontSize*3) ,"px;font-weight:normal;text-align: left;")
    
    preText<-""
    outputFront<-paste0("<div style=padding:10px;",mainStyle,">")
    outputBack<-'</div>'
    if (!is.null(outputText)) {
      outputFront<-paste0(outputFront,"<div style=padding:1px;><table>")
      index<-0
      col1Use<-0
      col2Use<-0
      col1Style<-""
      col2Style<-""
      blankStyle<-blankLineStyle
      headerRow<-FALSE
      for (j in 1:nr) {
        paste0(outputFront,"<tr>")
        rowStyle<-paste0("font-size:",format(braw.env$labelSize*fontSize*3),"px;")
        if (any(grepl("!H",outputText[index+(1:nc)]))) {
          doubleHeaderTop<-FALSE
          doubleHeaderBottom<-headerRow
          if (index+nc*2<=length(outputText)) {
            if (any(grepl("!H",outputText[index+nc+(1:nc)]))) doubleHeaderTop<-TRUE
          }
          if (index-nc>=0) {
            if (any(grepl("!H",outputText[index-nc+(1:nc)]))) doubleHeaderBottom<-TRUE
          }
          headerRow<-TRUE
          
          rowStyle<-paste0(rowStyle,"font-weight:bold;")
          rowStyle<-paste0(rowStyle,"text-align:center;")
          if (!doubleHeaderTop)
          rowStyle<-paste0(rowStyle,"border-bottom:solid;border-bottom-color:",lineColour,";border-bottom-width:1px;")
          if (!doubleHeaderBottom)
            rowStyle<-paste0(rowStyle,"border-top:solid;border-top-color:",lineColour,";border-top-width:1px;")
          rowStyle<-paste0(rowStyle,"padding-top:0px;padding-bottom:0px;")
          rowStyle<-paste0(rowStyle," bgcolor='",rowColour,"';")
          outputText[index+(1:nc)]<-sub("!H","",outputText[index+(1:nc)])
        } else 
          headerRow<-FALSE
        
        if (any(grepl("!C",outputText[index+(1:nc)]))) {
          col1Use<-which(grepl("!C",outputText[index+(1:nc)]))
          col1Style<-paste0(col1Style,"min-width:",indentSize,";")
          col1Style<-paste0(col1Style,"text-align:right;padding-right:5px;")
          outputText[index+(1:nc)]<-sub("!C","",outputText[index+(1:nc)])
        }
        if (any(grepl("!D",outputText[index+(1:nc)]))) {
          col2Use<-which(grepl("!D",outputText[index+(1:nc)]))
          col2Style<-paste0(col2Style,"text-align:right;padding-right:5px;")
          outputText[index+(1:nc)]<-sub("!D","",outputText[index+(1:nc)])
        }
        if (any(grepl("!T",outputText[index+(1:nc)]))) {
          rowStyle<-paste0(rowStyle,"font-weight:bold;")
          blankStyle<-"padding-top:1px;"
          outputText[index+(1:nc)]<-sub("!T","",outputText[index+(1:nc)])
        }
        for (i in 1:nc) {
            index<-index+1
            cellStyle<-""
            cellStyle<-paste0(cellStyle,cellPadding)
            if (any(i==col1Use)) cellStyle<-col1Style
            if (any(i==col2Use)) cellStyle<-col2Style
            if (headerRow && any(i==col1Use))
              cellStyle<-paste0(cellStyle,"text-align:left;")
            if (grepl("\b",outputText[index])) {
              cellStyle<-paste0(cellStyle,"font-weight:bold;")
              outputText[index]<-sub("\b","",outputText[index])
            }
            if (grepl("!b",outputText[index])) {
              cellStyle<-paste0(cellStyle,"font-weight:bold;")
              outputText[index]<-sub("!b","",outputText[index])
            }
            if (grepl("!i",outputText[index])) {
              if (doItalic)
                cellStyle<-paste0(cellStyle,"font-style:italic;")
              outputText[index]<-sub("!i","",outputText[index])
            }
            if (grepl("!j",outputText[index])) {
              cellStyle<-paste0(cellStyle,"text-align:right;")
              outputText[index]<-sub("!j","",outputText[index])
            }
            if (grepl("!l",outputText[index])) {
              cellStyle<-paste0(cellStyle,"text-align:left;")
              outputText[index]<-sub("!l","",outputText[index])
            }
            if (grepl("!c",outputText[index])) {
              cellStyle<-paste0(cellStyle,"text-align:center;")
              outputText[index]<-sub("!c","",outputText[index])
            }
            if (grepl("!n",outputText[index])) {
              cellStyle<-paste0(cellStyle,"min-width:",indentSize,";")
              outputText[index]<-sub("!n","",outputText[index])
            }
            if (grepl("!u",outputText[index])) {
              cellStyle<-paste0(cellStyle,"border-bottom:solid;border-bottom-color:#882222;border-bottom-width:1px;")
              cellStyle<-paste0(cellStyle,"border-top:solid;border-top-color:#882222;border-top-width:1px;")
              outputText[index]<-sub("!u","",outputText[index])
            }
            if (grepl("!r",outputText[index])) {
              if (doVerticalLines)
              cellStyle<-paste0(cellStyle,"border-right:solid;border-right-color:#888888;border-right-width:1px;")
              outputText[index]<-sub("!r","",outputText[index])
            }

            outputText[index]<-gsub("\\[([a-zA-Z0-9_+-]*)\\]","<sub>\\1</sub>",outputText[index])
            outputText[index]<-gsub("\\^([a-zA-Z0-9_+-]*)([a-zA-Z0-9_]*)","<sup>\\1</sup>",outputText[index])
            
            if (nchar(outputText[index])>0)
                 outputFront<-paste0(outputFront,"<td style=",cellStyle,rowStyle,">",outputText[index],"</td>")
            else outputFront<-paste0(outputFront,"<td style=height:1px;",rowStyle,"></td>")
          }
        outputFront<-paste0(outputFront,"</tr>")
        if (index+nc<=length(outputText))
        if (all(sapply(outputText[index+(1:nc)],nchar)==0)) {
          outputFront<-paste0(outputFront,"</table></div><div style=padding:1px;",blankStyle,"><table>")
          colStyle<-""
          colUse<-0
          blankStyle<-blankLineStyle
        }
      }
        outputBack<-paste0("</table>",outputBack)
    }

    return(paste0(preText,outputFront,outputBack))
  }
  
  if (is.null(outputText)) return(nullPlot())
  
  bg<-braw.env$plotColours$graphC
  margin=0.5
  colSpace=1.5
  
  font_size=braw.env$labelSize*fontSize
  characterWidth=font_size/15
  
  top=max(nr,maxRows)
  edge=100*characterWidth

  oT<-matrix(outputText,ncol=nc,byrow=TRUE)
  nT<-nchar(oT) # no of characters per cell
  nrT<-rowSums(nT) # no characters per row
  # now break into blocks separated by empty rows
  blockEnds<-unique(c(0,which(nrT==0),nrow(nT)))
  colX<-c()
  cellSize<-c()
  if (length(blockEnds)>1) {
  for (i in 2:length(blockEnds)){
    block<-nT[(blockEnds[i-1]+1):blockEnds[i],]
    if (is.null(dim(block))){
      # empty block
      colSize<-block+colSpace
      colOffset<-cumsum(c(0,colSize))
      colX<-c(colX,rep(colOffset[1:length(block)],1))
      cellSize<-c(cellSize,colSize)
    }
    else     {
      colSize<-apply(block,2,max)+colSpace
      colOffset<-cumsum(c(0,colSize))
      colX<-c(colX,rep(colOffset[1:ncol(block)],nrow(block)))
      cellSize<-c(cellSize,rep(colSize,nrow(block)))
    }
  }
  }
  cellSize<-cellSize*characterWidth
  x_gap1<-colX*characterWidth
  
  d<-expand.grid(x=1:nc,y=1:nr)

  boldlabels<-grepl("\b",outputText)
  outputText<-sub("\b","",outputText)
  italiclabels<-grepl("!i",outputText)
  outputText<-sub("!i","",outputText)
  rightlabels<-grepl("!j",outputText)
  outputText<-sub("!j","",outputText)
  
  redlabels<-grepl("!r",outputText)
  outputText<-sub("!r","",outputText)
  greenlabels<-grepl("!g",outputText)
  outputText<-sub("!g","",outputText)
  bluelabels<-grepl("!b",outputText)
  outputText<-sub("!b","",outputText)
  
  xlargelabels<-grepl("!>>>",outputText)
  outputText<-sub("!>>>","",outputText)
  vlargelabels<-grepl("!>>",outputText)
  outputText<-sub("!>>","",outputText)
  largelabels<-grepl("!>",outputText)
  outputText<-sub("!>","",outputText)
  
  pts<-data.frame(x=x_gap1,y=d$y)
  g<-nullPlot()

  for (i in 1:length(outputText)) {
    x<-x_gap1[i]+1
    y<-d$y[i]
    label<-outputText[i]
    parse<-FALSE
    switch(label,
           "Alpha"={label<-braw.env$alphaChar},
           "pNull"={label<-deparse(braw.env$Plabel)},
           "Lambda"={label<-deparse(braw.env$Llabel)},
           "p(sig)"={label<-deparse(braw.env$pSigLabel)}
           )
    fontface<-"plain"
    if (boldlabels[i]) fontface<-"bold" 
    if (italiclabels[i]) fontface<-"italic" 
    if (boldlabels[i] && italiclabels[i]) fontface<-"bold.italic" 
    if (rightlabels[i]) hjust<- 1 else hjust<- 0
    if (rightlabels[i]) {
      x<-x+cellSize[i]-characterWidth
    }
    fill<-bg
    col<-"black"
    if (bluelabels[i]) col="#0000DD"
    if (greenlabels[i]) col="#00DD00"
    if (redlabels[i]) col="#DD0000"
    sz<-1
    if (xlargelabels[i]) sz<-1.8 
    if (vlargelabels[i]) sz<-1.5 
    if (largelabels[i]) sz<-1.2 
    
    mathlabel<-grepl("['^']{1}",label) || grepl("['[']{1}",label)
    if (any(mathlabel)) parse<-TRUE
    pts<-data.frame(x=x,y=top+1-y)
    g<-g+geom_label(data=pts,aes(x=x, y=y), label=label,fontface=fontface, 
                                         hjust=hjust, vjust=0, 
                                         size=font_size*sz, 
                                         col=col,fill=fill,
                                         parse=parse,
                                         label.size=NA,label.padding=unit(0,"lines"))
  }
  
  g<-g+labs(x="  ",y="  ")+theme(legend.position = "none")
  g<-g+coord_cartesian(xlim = c(1-margin,edge+margin), ylim = c(1-margin,top+margin))
  return(g)
}
