HTMLWidget <- R6::R6Class("HTMLWidget",
                             public = list(
                                 initialize = function() {
                                 },
                                 # Funzione per generare un accordion HTML
                                 generate_accordion = function(title = "Help", content = "") {
                                     html_content <- paste0(
                                         '<style>',
                                         '.accordion {',
                                         '  background-color: #ffffff;',
                                         '  color: black;',
                                         '  cursor: pointer;',
                                         '  padding: 0px 0px;',
                                         '  width: 100%;',
                                         '  border: solid;',
                                         '  text-align: left;',
                                         '  outline: none;',
                                         '  font-size: 12px;',
                                         '  transition: 0.4s;',
                                         '  display: flex;',
                                         '  align-items: center;',
                                         '  position: relative;',
                                         '  border-top-left-radius: 0px;',
                                         '  border-top-right-radius: 0px;',
                                         '}',
                                         '.accordion svg {',
                                         '  margin-right: 15px;',
                                         '  transition: fill 0.4s;',
                                         '}',
                                         '.accordion svg .circle {',
                                         '  fill: white;',
                                         '}',
                                         '.accordion svg .horizontal,',
                                         '.accordion svg .vertical {',
                                         '  fill: #3498db;',
                                         '  transition: transform 0.8s ease-in-out;',
                                         '  transform-origin: center;',
                                         '}',
                                         '.accordion.active svg .vertical {',
                                         '  transform: scaleY(0);',
                                         '}',
                                         '.panel {',
                                         '  padding: 0 0px;',
                                         '  display: none;',
                                         '  background-color: white;',
                                         '  overflow: hidden;',
                                         '}',
                                         '</style>',
                                         '<script>',
                                         'var acc = document.getElementsByClassName("accordion");',
                                         'for (var i = 0; i < acc.length; i++) {',
                                         '  acc[i].addEventListener("click", function() {',
                                         '    this.classList.toggle("active");',
                                         '    var panel = this.nextElementSibling;',
                                         '    if (panel.style.display === "block") {',
                                         '      panel.style.display = "none";',
                                         '    } else {',
                                         '      panel.style.display = "block";',
                                         '    }',
                                         '  });',
                                         '}',
                                         '</script>',
                                         '<button class="accordion">',
                                         '  <svg width="20" height="15" viewBox="0 0 24 24" padding="0" >',
                                         '    <circle class="circle" cx="12" cy="12" r="11" />',
                                         '    <rect class="horizontal" x="5" y="11" width="15" height="3" />',
                                         '    <rect class="vertical" x="11" y="5" width="3" height="15" />',
                                         '  </svg>',
                                         '  <span style="font-size: 12px; padding:0px;">', title, '</span>',
                                         '</button>',
                                         '<div class="panel">',
                                         content,
                                         '</div>'
                                     )
                                     return(html_content)
                                 },
                                 generate_tab = function(title="Tab",tabs=c("1","2","3"),tabContents=c("a","b","c"),colours=c("red","orange")) {
                                   script<-paste0(
                                     '<script>',
                                     'function openTab(evt, tabName) {',
                                     'var i, tabcontent, tablinks;',
                                     'tabcontent = document.getElementsByClassName("tabcontent");',
                                     'for (i = 0; i < tabcontent.length; i++) {',
                                     'tabcontent[i].style.display = "none";',
                                     '}',
                                     'tablinks = document.getElementsByClassName("tablinks");',
                                     'for (i = 1; i < tablinks.length; i++) {',
                                     'tablinks[i].className = tablinks[i].className.replace(" active", "");',
                                     '}',
                                     'document.getElementById(tabName).style.display = "block";',
                                     'evt.currentTarget.className += " active";',
                                     '}',
                                     'document.getElementById("tabtitle").click();',
                                     '</script>'
                                   )
                                   
                                   style<-paste0(
                                     '<style>',
                                     # Style the tab 
                                       '.tab {overflow: hidden;',
                                       'border: none;',
                                       'background-color: inherit;',
                                       'border-bottom: solid ',colours[1],' 1px;',
                                       '}',

                                     # Style the buttons inside the tab 
                                     '.tab button {',
                                     'background-color: #ccc;',
                                     'float: left;',
                                     'border: none;',
                                     'outline: none;',
                                     'cursor: pointer;',
                                     'padding: 2px 10px;',
                                     'transition: 0.3s;',
                                     'font-size: 12px;',
                                     '  border-top-left-radius: 4px;',
                                     '  border-top-right-radius: 4px;',
                                     '}',

                                     # Change background color of buttons on hover 
                                       '.tab button:hover {',
                                         'background-color: #ddd;',
                                       '}',
                                     
                                     # Create an active/current tablink class 
                                     '.tab button.active {',
                                     'background-color: ',colours[1],';',
                                     'color: white;',
                                     '}',
                                     
                                     # Style the tab content 
                                       '.tabcontent {',
                                         'display: none;',
                                         'padding: 0px 0px;',
                                         'border: 1px solid ',colours[1],';',
                                         'border-top: none;',
                                       '}',
                                     '</style>'
                                   )
                                   
                                   buttons<-''
                                   panels<-''
                                   buttons <- paste0(buttons,
                                                     '  <button id="tabtitle" class="tablinks" onclick="openTab(event,\'',title,'\')">',
                                                     title,
                                                     '</button>')
                                   panels <- paste0(panels,
                                                    '  <div id="',title,'" class="tabcontent" style="display:block">',
                                                    '</div>')
                                   for (itab in 1:length(tabs)) {
                                     buttons <- paste0(buttons,
                                                       '  <button class="tablinks" onclick="openTab(event,\'',tabs[itab],'\')">',
                                                       tabs[itab],
                                                       '</button>')
                                     panels <- paste0(panels,
                                                      '  <div id="',tabs[itab],'" class="tabcontent">',
                                                      tabContents[itab],
                                                      '</div>')
                                   }
                                   buttons<-paste0('<div class="tab">',buttons,'</div>')
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

