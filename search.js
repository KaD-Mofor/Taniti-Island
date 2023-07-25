$(document).ready(function() {
    // Function to perform the search
    function performSearch(keyword) {
      // Case-insensitive search for the given keyword
      $("body").unmark().mark(keyword, {
        separateWordSearch: false,
        done: function() {
          // Scroll to the first occurrence of the keyword
          if ($(".mark").length > 0) {
            $("html, body").animate({
              scrollTop: $(".mark").first().offset().top - 100
            }, 1000);
          }
        }
      });
    }
  
    // Search button click event
    $("#search-button").on("click", function() {
      var keyword = $("#search-input").val();
      performSearch(keyword);
    });
  
    // Enter key press event in the search input
    $("#search-input").on("keyup", function(event) {
      if (event.keyCode === 13) { // Enter key
        var keyword = $(this).val();
        performSearch(keyword);
      }
    });
  
    // Clear search results when the input field is focused
    $("#search-input").on("focus", function() {
      $(this).val("");
      $("body").unmark();
    });
  });
  