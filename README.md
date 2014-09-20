AngularGPALab
===============
There are several goals in this lab:
   * Understand how to use Angular to create views and view-models
   * Understand the structure of an Angular app that makes sense
   * Understand how the HTML and Angular parts of the view relate to each other
   * Writing at least a couple tests in Mocha or Jasmine that can test your Angular code
   * Continue using HTML and CSS to make a page look decent and contain information you care about
   * Continue using Mocha tests (or, if you find it simpler, you may switch to another language or framework for testing)

This starter code is meant to give you a structure where you can put your work. Your job is to create a fairly basic GPA calculator that allows a user to enter the grades and number of credits for 4-6 classes and displays the correct GPA for the user. This week, your main struggle should be figuring out how to test Angular code. The 20 points for writing two tests shoudl be an indication of how important I think this struggle really is. I have a start of a test here from the video linked below, but I am still getting an error about the window not being defined. My test may be something you end up completely ignoring, but I wanted to at least put something there as a start.

How you will be graded for this lab
===================================
You will earn points for:
   * (3 points) Consistent commits with pushes every-so-often
      * Commit and push right away to make sure everything worked correctly for your clone.
      * Your commits should be small - every time you make a test pass, every time you add a feature, every time you update your textual description of your code with details about the Angular... commit!
   * (3) Good commit statements - This is a little bit subjective, but I'm looking for commits that actually explain how the project is different as a result fo the work you did.
   * (10 points) You allow a user to enter information about 4-6 courses (using Angular).
   * (10 points) You utilize the data supplied by the user to calculate and display the correct GPA (using Angular).
   * (20 points) Make tests for at least two of your Angular features.
   * (4 points) Explain a little bit about what your tests are checking.
   * (4 points) Include a list of at least 4 specific resources you found useful for completing the work in this lab (1 point for each). You may include more, but you will only get points for 4.

Setup
=====
   * Fork this project
   * Clone your forked repo to open the project in WebStorm
   * in the terminal: <code>npm install</code>
   * in the terminal: <code>bower install</code> (might need to be this> <code>./node_modules/bower/bin/bower install</code>)
   * set up nodemon:
      * A link to the github project can be found here: https://github.com/remy/nodemon
      * In this project, we have already installed nodemon, and it should be listed in package.json. If not: Install nodemon: <code>npm install --save-dev nodemon</code>
      * Configuration
        * You need to edit your configurations to create a nodemon configuration. Click the edit configurations in the upper right of the window (or under the 'Run' menu in the menubar).
        * Start by adding a new configuration (click the '+') with a node.js template. Set the javascript application to app.js (or server.js, depending on what you call it). You then need to have it run with the CoffeeScript plugin (even though we are not using CoffeeScript).
        * Set the path to the coffee executable to /node_modules/nodemon/bin/nodemon.js
        * Make sure you set the CoffeeScript parameters to <code>-e html,js,css,json</code> This tells nodemon to restart the server whenever a file with one of these extensions changes. (You may want to add other extensions if you use them frequently).

Some resources
==============
   * https://thinkster.io/egghead/testing-overview/ - video of testing a filter

GPA Calculator Image Examples
=============================

![A basic GPA calculator](basicGPA.png)
![A fancy and more advanced GPA calculator](fancyGPA.png)


Resources we found helpful!
===========================
http://jsfiddle.net/cojahmetov/3DS49/
http://angular-ui.github.io/bootstrap/
http://www.back2college.com/gpa.htm
http://angularjs4u.com/bootstrap/angularjs-bootstrap-ui-drop-demo/
http://stackoverflow.com/questions/15090185/angularjs-bootstrap-dropdown-cant-do-ng-click-in-ng-repeat


Tests that would've tried!
==========================
Trying different values inputed and see if it displayed the correct result. We would test this to make sure that
our GPA calculations are correct, also to see if the numbers were being pulled through all the way.

Testing if the button selected is the correct one.  We would test this to make sure that the user, when selecting
a button, is selecting the correct one.

Test if selecting in the button from the menu worked.  We would test this to make sure that the correct value has
changed in the courses array and to see if it changed correctly displaying on the button itself.

