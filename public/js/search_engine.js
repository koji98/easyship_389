$(function() {
  const search = $('#search-bar');
  var list = [];
  $('h1').each(function() {
    list.push($(this).text());
  });
  const whole_list = Array.from(list);
  search.on("keyup", function() {
    var text = $("input").val();
    if(text.length == 0) {
      $("h1").each(function() {
        $(this).show();
      });
    } else {
      console.log(whole_list);
      var filtered_list = whole_list.filter(item => item.indexOf(text) === 0);
      console.log(filtered_list);

      $("h1").each(function() {
        var curr_text = $(this).text();
        if(!filtered_list.includes(curr_text)){
          $(this).hide();
        } else {
          $(this).show();
        }
      });

    }
  });

});

$(function(){
  $('button').on('click', function(){
    var like_id = $(this).attr('id');
    var like_text = $(this).find('span').text();

    $.ajax({
      type: 'POST',
      url: '/internship/inc',
      data: {
        company: like_id
      }
    });

    var like_int = parseInt(like_text) + 1;
    $(this).find('span').text(like_int);
  })
})
