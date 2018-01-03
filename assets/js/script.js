(function ($) {
  var container;
  $.fn.duplicate = function () {
    return this.each(function () {
      var fieldname = 'duplicate';
      container = $('.message-duplicate');
      var input = $('.input-duplicate');

      $('.btn-duplicate').click(function (e) {
        container.hide().removeClass("success error");
        $('.hide-duplicate').toggleClass('active');

        // set title with current title (input field)
        $("#form-field-duplicate-title").val($('#form-field-title').val());
      });

      $("#form-field-duplicate-submit").click(function (e) {
        e.preventDefault();
        $.fn.ajax(fieldname);
        return false;
      });

      container.on('click', '.fa-close', function (e) {
        $(this).parent().hide().removeClass("success error");
      });
    });
  };

  // Ajax function
  $.fn.ajax = function (fieldname) {
    // Titel
    var newTitle = $('[data-field="' + fieldname + '"]').find('#form-field-duplicate-title').val();
    newTitle = newTitle.replace(/[\/\\]/g, " ");

    // Url
    var newID = $('[data-field="' + fieldname + '"]').find('#form-field-duplicate-uid').val();
    newID = newID.replace(/[\/\\]/g, " ");

    blueprintKey = $('[data-field="' + fieldname + '"]').find('button').data('fieldname');
    base_url = window.location.href.replace(/(\/edit.*)/g, '/field') + '/' + blueprintKey + '/' + fieldname + '/ajax/';

    var ajaxUrl = base_url + (urlencode(newTitle) || 0) + '/' + (urlencode(newID) || 0);
    console.log('aja');
    console.log(ajaxUrl);

    $.ajax({
      url: ajaxUrl,
      type: 'GET',
      success: function (response) {
        var r = JSON.parse(response);

        if (r.class == 'error') {
          container.show().html(r.message).addClass(r.class).append('<i class="icon fa fa-close"></i>');
          input.removeClass('active');
        }

        if (r.class === 'success' && r.uri) {
          container
            .show()
            .html($('#form-field-duplicate-redirectmessage').val())
            .addClass(r.class);

          var newUrl = window.location.href.replace(/(pages\/.*\/edit.*)/g, 'pages/' + r.uri + '/edit');

          setTimeout(function () {
            window.location.replace(newUrl);
          }, 2500);
        }
      }
    });
  };

  /**
   * @url https://stackoverflow.com/questions/332872/encode-url-in-javascript
   * @param str
   * @returns {string}
   */
  function urlencode(str) {
    str = (str + '').toString();

    return encodeURIComponent(str)
      .replace(/!/g, '%21')
      .replace(/'/g, '%27')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/\*/g, '%2A')
      ;
  }
})(jQuery);

