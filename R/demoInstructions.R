demoInstructions <- function(HelpType="1") {
  

  switch(HelpType,
         "1"={output<-c(
           '<b>Demo 1a</b>',
           '<br>',
           'A simple demo to show how basic statistics is easy.',
           '<ul style=margin:0px;>',
           '<li> Make a sample of data.',
           '<li> Let BrawStats automatically analyse it.',
           '<li> Follow instructions to repeat the analysis in Jamovi.',
           '<li> And get the same result.',
           '</ul>'
         )
         },
         
         "2"={output<-c(
           '<b>Demo 1b</b>',
           '<br>',
           "A demo about samples - what they should and shouldn't look like.",
           '<ul style=margin:0px;>',
           '<li> Make samples of data.',
           '<li> Look at the distributions of values that are produced by random sampling.',
           '<li> Repeat this with "convenience" sampling.',
           '<li> And see how this differs.',
           '</ul>'
         )
         },
         
         "3"={output<-c(
           '<b>Demo 1c</b>',
           '<br>',
           'A demo about variability and uncertainty - how much samples can randomly differ from the population.',
           'This is the fundamental issue that statistics has to deal with.',
           '<ul style=margin:0px;>',
           '<li> Make a population with known <i>r<sub>p</sub></i>.',
           '<li> Draw samples from it and see how much <i>r<sub>s</sub></i> differs from <i>r<sub>p</sub></i>.',
           '<li> Repeat this with <i>r<sub>p</sub></i> set to zero.',
           '<li> And now see what sample effect sizes are produced.',
           '</ul>'
         )
         },
         
         "4"={output<-c(
           '<b>Demo 2a</b>',
           '<br>',
           'A demo to see how far getting a significant result depends on luck.',
           '<ul style=margin:0px;>',
           '<li> Make individual samples and see whether they are significant or not.',
           '<li> Use the "Multiple" function to make a large number of samples.',
           '<li> For any <i>n</i>, there is a fixed relationship between <i>r<sub>s</sub></i> and <i>p</i>.',
           '</ul>'
         )
         },
         
         "5"={output<-c(
           '<b>Demo 2b</b>',
           '<br>',
           'A demo about the uncertainty in NHST - is the inference correct or an error.',
           '<ul style=margin:0px;>',
           '<li> Make a world where 50% of samples are null effects.',
           '<li> Try and guess whether any sample has a null effect or not.',
           '<li> See how sample size changes this.',
           '</ul>'
         )
         },
         
         "6"={output<-c(
           '<b>Demo 2c</b>',
           '<br>',
           'A demo about the importance of design.',
           '<ul style=margin:0px;>',
           '<li> Use the "Multiple" function to make a large number of samples.',
           '<li> Repeat this with different sample sizes. Larger samples give more chance of a significant result.',
           '<li> Use the "Explore" function to see how p(sig) varies with sample size.',
           '</ul>'
         )
         },
         
         "7"={output<-c(
           '<b>Demo 3a</b>',
           '<br>',
           'A demo about using multiple IVs. ',
           'In linear models, these are treated as separate, additive effects.',
           'We can see that these effects behave quite independently.',
           '<ul style=margin:0px;>',
           '<li> Change <i>r<sub>p</sub></i> for the main effect of IV on DV.',
           '<li> Change <i>r<sub>p</sub></i> for the main effect of IV2 on DV.',
           '<li> Change <i>r<sub>p</sub></i> for the interaction effect of IVxIV2 on DV.',
           '</ul>'
         )
         },
         
         "8"={output<-c(
           '<b>Demo 3b</b>',
           '<br>',
           'A demo about interactions as moderators. ',
           'Technically an interaction is the product (multiplication) or two variables. ',
           'It is easier and better to think of it as a situation where one variable affects the strength of an effect between two other variables. ',
           'An interaction or moderation is a switch that can switch effects on or off. ',
           '<ul style=margin:0px;>',
           '<li> See how interactions can be seen as an on/off switch.',
           '<li> See how interactions can be seen as an +/- switch.',
           '</ul>'
         )
         },
         
         "9"={output<-c(
           '<b>Demo 3c</b>',
           '<br>',
           'A demo about covariation between IV and IV2. ',
           'Covariation is when the two IVs are themselves related/correlated. ',
           'As we will see, this has consequences for the total effect of each and the unique effect of each. ',
           'The website has more examples. ',
           '<ul style=margin:0px;>',
           '<li> Make samples from a population with covariation.',
           '<li> See what the covariation looks like in in the scatter plots.',
           '<li> See what the covariation does to the effect sizes of the main effects.',
           '</ul>'
         )
         },
         
         "10"={output<-c(
           '<b>Demo 4a</b>',
           '<br>',
           'A demo about mediation effects. ',
           'We say that the effect of IV on DV is fully mediated by IV2, when there is no direct link from IV to DV, but instead links from IV to IV2 and IV2 to DV.',
           '<ul style=margin:0px;>',
           '<li> Make a basic mediation model - with quite strong effect sizes for clarity.',
           '<li> We can see the pattern of total effects in the data.',
           '<li> We might also notice that the covariation and its meaning are rather hidden.',
           '<li> Now link IV to DV directly as well and see what happens.',
           '</ul>'
         )
         }
         
  )
    extras<-paste0('<br>',
                   'More information ',
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