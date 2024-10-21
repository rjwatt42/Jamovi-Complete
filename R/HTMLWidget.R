HTMLWidget <- R6::R6Class("HTMLWidget",
                             public = list(
                                 initialize = function() {
                                 },

                                 generate_tab = function(title="Tab",tabs=c("1","2","3"),tabContents=c("a","b","c"),open=0,colours=c("#3498db","#80CCFF"),fontSize="12px",plain=FALSE,width=550,height=NULL) {
                                   if (is.null(height)) ht<-'' else ht<-paste0('height: ',height,'px;')
                                   script<-paste0(
                                     '<script>',
                                     'function openTab(evt, tabName) {',
                                     '  var tabState;',
                                     '  if (tabName!="tabtitle") {',
                                     '    tabState = document.getElementById(tabName).style.display;',
                                     '    closeTabs(evt, tabName);',
                                     '    if (tabState!="block") {',
                                     '      document.getElementById(tabName).style.display = "block";',
                                     '      evt.currentTarget.className += " active";',
                                     '    }',
                                     '  }',
                                     '}',
                                     'function closeTabs(evt, tabName) {',
                                     '  var i, tabID, panelID, tabcontent, tablinks;',
                                     '    tabID = tabName.split("||",1);',
                                     '    tablinks = document.getElementsByClassName("tablinks");',
                                     '    tabcontent = document.getElementsByClassName("tabcontent");',
                                     '    for (i = 0; i < tabcontent.length; i++) {',
                                     '      panelID=tabcontent[i].id.split("||",1);',
                                     '      if (panelID[0]==tabID[0]) {',
                                     '        tabcontent[i].style.display = "none";',
                                     '        tablinks[i].className = tablinks[i].className.replace(" active", "");',
                                     '      }',
                                     '    }',
                                     '}',
                                     'openTab(evt, "',paste0(title,tabs[2]),'") ',
                                     '</script>'
                                   )
                                   
                                   style<-paste0(
                                     '<style>',
                                     # Style the tab 
                                       '.tab {overflow: hidden;',
                                       'border: none;',
                                       'background-color: inherit;',
                                       'border-bottom: solid ',colours[1],' 1px;',
                                     'width: ',svgBoxX(),'px;',
                                     'margin: none;',
                                       '}',

                                     # Style the buttons inside the tab 
                                     '.tab button {',
                                     'background-color: #ccc;',
                                     'float: left;',
                                     'border: none;',
                                     'outline: none;',
                                     'cursor: pointer;',
                                     'padding: 2px 10px;',
                                     'margin: 0px 1px;',
                                     'transition: 0.3s;',
                                     'font-size: ',fontSize,';',
                                     '  border-top-left-radius: 4px;',
                                     '  border-top-right-radius: 4px;',
                                     '}',

                                     # Change background color of buttons on hover 
                                       '.tab button:hover {',
                                         'background-color: #ddd;',
                                       '}',

                                     # Create an active/current tablink class 
                                     '.tab button.active {',
                                     'background-color: ',colours[2],';',
                                     'color: white;',
                                     '}',
                                     
                                     # Style the null tab content 
                                     '.tabnullcontent {',
                                     'display: none;',
                                     'padding: 0px 0px;',
                                     'margin: 0px;',
                                     'border: 1px solid ',colours[1],';',
                                     'border-top: none;',
                                     'width: ',width,'px;',
                                     'height: 0px;',
                                     '}',
                                     
                                     # Style the tab content 
                                     '.tabcontent {',
                                     'display: none;',
                                     'padding: 0px 0px;',
                                     'margin: 0px;',
                                     'border: 1px solid ',colours[1],';',
                                     'border-top: none;',
                                     'width: ',width,'px;',
                                     ht,
                                     '}',
                                     '</style>'
                                   )
                                   
                                   buttons<-''
                                   panels<-''
                                   buttons <- paste0(buttons,
                                                     '  <button id="tabtitle" class="tablinks" onclick="closeTabs(event,\'',title,'\')" style="background-color:',colours[1],';color:white;cursor:default;">',
                                                     title,
                                                     '</button>')
                                   panels <- paste0(panels,
                                                    '  <div id="',title,'" class="tabcontent" style="display:none">',
                                                    '</div>')
                                   for (itab in 1:length(tabs)) {
                                     panelID<-paste0(title,'||',tabs[itab])
                                     buttons <- paste0(buttons,
                                                       '  <button class="tablinks" onclick="openTab(event,\'',panelID,'\')">',
                                                       tabs[itab],
                                                       '</button>')
                                     if (itab==open) display<-'style="display:block"' else display<-'style="display:none"' 
                                     panels <- paste0(panels,
                                                      '  <div id="',panelID,'" class="tabcontent"',display,'>',
                                                      tabContents[itab],
                                                      '</div>')
                                   }
                                   buttons<-paste0('<div class="tab">',buttons,'</div>')
                                   if (plain)
                                     html_content <- paste0(
                                       buttons,
                                       panels
                                     )
                                   else
                                     html_content <- paste0(
                                       style,
                                       buttons,
                                       panels,
                                       script
                                     )
                                   return(html_content)
                                 }
                                 
                             )
)

