Author: Justin Ashley
Created: October 13th, 2014

Description: For this project, I wanted to lay down a foundation to build upon. I wanted to make sure to address the core assignment (Replicate the PDF using my own design elements, responsive design, and include pieces of my work). I also wanted to include additional functionality to give a better presentation. The following is a brief explanation of the tech I used for this project, and why:

jQuery.js: I utilized the jQuery library so I can add custom animation to the project.
jquery-rotate.js: This is a custom library by Wilq32 (Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009 Website: http://code.google.com/p/jqueryrotate/ ), which allows me to 
                  utilize a rotation effect upon the logo as it first comes into view (jQuery has a bug where this doesn't work without a patch fix).
velocity.js: This is a custom library provided by Julian Shapiro. This file works in conjunction with the jQuery library. It optimizes the .animation() method, which speeds up the
             rendering, as-well-as allowing for additional functionality. An example is the use of the bouncy easing for displaying my individual portfolio pieces.
Custom Javascript: I wrote the rest of the Javascript to create the animations on the page. Each function has an explanation with it to explain what it does.
jQuery Closure: While not necessary for this project, I've found it good practice to write the jQuery initialization by passing in the $ by a closure, as it helps prohibit library
                collisions (I work with the Magento system, which includes Prototype.js and Scriptaculous.js).

SASS:
I pulled in all of the CSS files through the Sass compiler so there is only the need for one file to be read for the page. While this is a small application, I broke the files out into several smaller files, so it is easier to manage. For instance, I put all colors and set variables within the _var.scss file. Included in the files that I pull together are the bootstrap
and bootstrap theme files, which I used as a grid for the responsive framework.