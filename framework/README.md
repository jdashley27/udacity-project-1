Author: Justin Ashley
Created: October 13th, 2014

#Project 1: Online Portfolio

##Background 
A quick, brief background about myself. I've been working with HTML/CSS since 2009, having first started out reading reference books on the subject. I've earned an Associate's Degree for Web Design, and have over 3 years professional experience in the field; 2 of which is in a company environment on an e-commerce system (and still currently working for). For me, this course will help fill in some areas I may be weak in, while building up my credentials as a professional developer. Also, I would like to see a program such as this become a standard within the industry for training. 

##Description 
For this project, I wanted to lay down a foundation to build upon. I wanted to make sure to address the core assignment (Replicate the PDF using my own design elements, responsive design, and include pieces of my work). I also wanted to include additional functionality to give a better presentation. The following is a brief explanation of the tech I used for this project, and why:


###JavaScript Libraries
* jQuery.js: I utilized the jQuery library so I can add custom animation to the project.

* JavaScript Scroll Into View: I used a function from a Scott Dowding from [Stack Overflow](http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling) for determining when an element has been scrolled into view.

* jquery-rotate.js: This is a custom library by Wilq32 (Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009 [Website] (http://code.google.com/p/jqueryrotate/) ), which allows me to utilize a rotation effect upon the logo as it first comes into view (jQuery has a bug where this doesn't work without a patch fix).

* velocity.js: This is a custom library provided by Julian Shapiro. This file works in conjunction with the jQuery library. It optimizes the .animation() method, which speeds up the rendering, as-well-as allowing for additional functionality. An example is the use of the bouncy easing for displaying my individual portfolio pieces. [Website] (http://julian.com/research/velocity/)

* Custom Javascript: I wrote the rest of the Javascript to create the animations on the page. Each function has an explanation with it to explain what it does. Some of the functionality has been adapted from my other projects, as I try to write code in a modular fashion which makes it easier to reuse in various projects (as-well-as maintain)

* jQuery Closure: While not necessary for this project, I've found it good practice to write the jQuery initialization by passing in the $ by a closure, as it helps prohibit library collisions (I work with the Magento system, which includes Prototype.js and Scriptaculous.js and clashes heavily with jQuery's $ alias).

###Sass
I pulled in all of the CSS files through the Sass compiler so there is only the need for one file to be read for the page. While this is a small application, I broke the files out into several smaller files, so it is easier to manage. For instance, I put all colors in a _colors.scss file. I've found this helps keep things organized as I expand upon the application (plus, as with other areas of my code, it makes it easier for me to replicate new projects by using these files as a boilerplate). Included in the files that I pull together are the bootstrap, jQuery, jQuery-rotator, and velocity files; which serves on keeping the page requests down. All of these files are compiled together into a single css page, which the system then pulls in.