$(document).ready(function() {
    $("#why-us .slider").slick({
        autoplay: false,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    centerMode: true,
                    speed: 500,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    speed: 500,
                    arrows: false
                }
            }
        ],
    });
    
    $('#submit').click(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $("#email").val();
        var message = $("#message").val();
        $("#status").empty();
        
        // Check if the fields are empty.
        if (email === "" || message === "") {
            alert("Please fill required fields");
        } else {
            // Returns successful data submission message
            $.post("../php/contact.php", {
                sender_name: name,
                sender_email: email,
                sender_message: message
            }, function(data) {
                $("#status").append(data);
                if (data == "We have received your email") {
                    $("form")[0].reset();
                }
            });
        }
    });
});

$(window).on('resize', function() {
  var win = $(this);
  if (win.width() <= 765) {
      $('#customer-service').removeClass('five');
      $('#customer-service').removeClass('columns');
      $('#customer-service').removeClass('offset-by-one');
      $('#technical-assistance').removeClass('five');
      $('#technical-assistance').removeClass('columns');
      
      $('#customer-service').addClass('u-full-width');
      $('#technical-assistance').addClass('u-full-width');

  } else {
    $('#customer-service').removeClass('u-full-width');
    $('#technical-assistance').removeClass('u-full-width');
      
    $('#customer-service').addClass('five');
    $('#customer-service').addClass('columns');
    $('#customer-service').addClass('offset-by-one');
    $('#technical-assistance').addClass('five');
    $('#technical-assistance').addClass('columns');
  }
});