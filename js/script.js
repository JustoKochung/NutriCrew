window.clean = true;
      $('[class^="star-"]').on('click', function() {
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $(this).prevAll().addClass('selected');
        var index = $(this).index() + 1;
        $('.you-rated').text('You rated '+index+' stars');
      });
      $('.button').on('click', function() {
        if ($('#comments').is(':empty')) {
          window.clean = false;
          $('.errors').append('<p>Please submit a review.</p>');
        }
        if (window.clean) {
          $('.form').remove();
          $('<div class="submitted">Thank you!</div>').insertAfter('h2');
        }
        return false;
      });