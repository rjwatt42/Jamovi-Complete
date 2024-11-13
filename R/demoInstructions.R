demoInstructions <- function(HelpType="1") {
  

  switch(HelpType,
         "1"={output<-c(
           '<b>Demo 1</b>',
           '<br>',
           'A simple demo to show how the basic statistics is easy.',
           ' The basic operation is to:',
           '<ul style=margin:0px;>',
           '<li> Make a sample of data.',
           '<li> Let BrawStats automatically analyse it.',
           '<li> Follow instructions to repeat the analysis in Jamovi.',
           '<li> And get the same result.',
           '</ul>'
         )
         },
         
         "2"={output<-c(
           '<b>Demo 2</b>',
           '<br>',
           'A demo about samples - what they should look like.',
           ' The basic operation is to:',
           '<ul style=margin:0px;>',
           '<li> Make samples of data.',
           '<li> Look at the distributions of values that are produced by random sampling.',
           '<li> Repeat this with "convenience" sampling.',
           '<li> And see how this differs.',
           '</ul>'
         )
         },
         
         "3"={output<-c(
           '<b>Demo 3</b>',
           '<br>',
           'A demo about variability and uncertainty - how much samples can randomly differ from the population.',
           ' The basic operation is to:',
           '<ul style=margin:0px;>',
           '<li> Make a population with known rp.',
           '<li> Draw samples from it and see how much rs differs from rp.',
           '<li> Repeat this with rp set to zero.',
           '<li> And now see what sample effect sizes are produced.',
           '</ul>',
           'This is the fundamental issue that statistics has to deal with.',
           '<br>'
         )
         },
         
         "4"={output<-c(
           '<b>Demo 4</b>',
           '<br>',
           'A demo to see how far getting a significant result depends on luck.',
           ' The basic operation is to:',
           '<ul style=margin:0px;>',
           '<li> Make individual samples and see whether they are significant or not.',
           '<li> Use the "Multiple" function to make a large number of samples.',
           '<li> And see what this shows.',
           '</ul>'
         )
         },
         
         "5"={output<-c(
           '<b>Demo 5</b>',
           '<br>',
           'A demo about the importance of design.',
           ' The basic operation is to:',
           '<ul style=margin:0px;>',
           '<li> Use the "Multiple" function to make a large number of samples.',
           '<li> Repeat this with different sample sizes. Larger samples give more chance of a significant result.',
           '<li> Use the "Explore" function to see how p(sig) varies with sample size.',
           '</ul>'
         )
         },
         
         "6"={output<-c(
           '<b>Demo 6</b>',
           '<br>',
           'A demo about using multiple IVs.',
           ' The basic operation is to:',
           '<ul style=margin:0px;>',
           '<li> Change rp for the main effect (M1).',
           '<li> Change rp for the main effect (M2).',
           '<li> Change rp for the interaction effect (M1).',
           '</ul>',
           'We see that these effects behave quite independently.',
           '<br>'
         )
         },
         
         "7"={output<-c(
           '<b>Demo 7</b>',
           '<br>',
           'A demo about interactions.',
           ' The basic operation is to:',
           '<ul style=margin:0px;>',
           '<li> See how interactions can be seen as an on/off switch.',
           '<li> See how interactions can be seen as an +/- switch.',
           '</ul>'
         )
         },
         
         "8"={output<-c(
           '<b>Demo 8</b>',
           '<br>',
           'A demo about covariation between IV2.',
           ' The basic operation is to:',
           '<ul style=margin:0px;>',
           '<li> Make samples from a population with covariation.',
           '<li> See what the covariation results in.',
           '</ul>',
           'See how covariation affects the main effect sizes.',
           '<br>'
         )
         }
  )
    extras<-paste0('More information ',
                    '<a href=',
                   '"https://doingpsychstats.wordpress.com/demonstration-',HelpType,'/"',
                   ' target="_blank">',
                   'here',
                   '</a>',
                   ' and leave any comments ',
                   '<a href=',
                   '"https://doingpsychstats.wordpress.com/demonstration-',HelpType,'/#respond"',
                   ' target="_blank">',
                   'here',
                   '</a>'
                   )
    output<-c(output,extras)
    output<-c("<div style='border: none; padding: 4px;'>",output,"</div>")
    
    wholePanel<-paste0(output,collapse=" ")
    return(wholePanel)
    
}