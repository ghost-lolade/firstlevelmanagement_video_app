$(function() {
  
    // Search
    var options = {
      valueNames: ['name', 'category' ]
    };
    var videoList = new List('videoGallery', options);
    
    $("#search").change(function() {
      // smooth scroll to thumbnails
      $('html, body').animate({
          scrollTop: $("#thumbnails").offset().top-60
      }, 1000);  
    });
    
    // Filter
    $('#filter').change(function () {
      var selection = this.value;
      if (selection) {
        videoList.filter(function(item) {
          return (item.values().category == selection);
        });
      } else {
        videoList.filter();
      }
    });
  });
  
  
    //Get URL query string
    function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
      }
      return (false);
    }
    // Get URL query string variables
    var id = getQueryVariable("id");
    var title = getQueryVariable("title");
  
  if(id) {
     $("[data-video-container]").show(); 
      $("[data-video]").attr("src", "https://www.youtube.com/embed/" + id);
  }
  
  if(title) {
    var videoTitle = title.replace(/\+/g, " ");
    $("[data-title]").html(videoTitle);
  }