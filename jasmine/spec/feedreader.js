/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URL defined & not empty', function() {
           for (var i = 0; i < allFeeds.length; i++) {
           expect(allFeeds[i].url).toBeDefined(); // Checks if URL is defined
           expect(allFeeds[i].url.length).not.toBe(''); // Check if URL is not empty
         }
        });

         it('name defined & not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].name).toBeDefined(); // Checks if name is defined
            expect(allFeeds[i].url.length).not.toBe(''); // Check if name is not empty
          }
        });
    });

    describe("The Menu", function(){
        var menuIcon; //declare menuIcon element

        beforeEach(function(){
          menuIcon = $(".menu-icon-link");
        });

        it('Menu element hidden by default', function(){
          expect($('body').hasClass("menu-hidden")).toBeDefined(); //Checks if menu element hidden by default
        });

        it('Menu changes visibility when clicked', function(){
          menuIcon.click();
          expect($('body').hasClass("menu-hidden")).toBe(false); //Checks if menu displays when clicked
          menuIcon.click();
          expect($('body').hasClass("menu-hidden")).toBe(true); //Checks if menu hides when clicked again
        });
      });

    describe("Initial Entries", function(){

       beforeEach(function(done){ // asynchronous function to handle loadFeed
         loadFeed(0, done);
       });

       it('loadFeed contains single .entry element in .feed container', function() {
         expect($('.feed .entry').length).toBeGreaterThan(0); //Checks if there is at least one entry
       });
     });

    describe("New Feed Selection", function(){
      var feed1, feed2;

      beforeEach(function(done) { // asynchronous function to declare first feed
          loadFeed(0, function() {
              feed1 = $('.feed').html();
              done();
          });
      });

      it('Content changes when loadFeed runs a new feed', function(done) {
          loadFeed(1, function() {
              feed2 = $('.feed').html();
              expect(feed2).not.toBe(feed1); // Checks if feeds are different, where content actually changes.
              done();
          });
        });
      });
}());
