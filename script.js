$(document).ready(function () {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    // Text animation for the hero text
    $(".hero-text h1").addClass("animated fadeIn");

    // Hover effect for dropdown menu
    $(".dropbtn").hover(function () {
        $(this).css("background-color", "#e91e63");
    }, function () {
        $(this).css("background-color", "#333");
    });

    // Additional animations and interactions
    $(".hero-text h1").hover(function () {
        // Example: Change text color on hover
        $(this).css("color", "#e91e63");
    }, function () {
        $(this).css("color", "white");
    });

    // Example: Apply an animation to other elements
    $(".content-section p").addClass("animated zoomIn");

    // Example: Use array method map()
    var numbers = [1, 2, 3, 4, 5];
    var squaredNumbers = numbers.map(function (num) {
        return num * num;
    });
    console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

    // Example: Use array method filter()
    var evenNumbers = numbers.filter(function (num) {
        return num % 2 === 0;
    });
    console.log(evenNumbers); // Output: [2, 4]

    // Parallax Scrolling for the hero image (assuming hero image has class 'hero-image')
    $(window).scroll(function () {
        var scrollPosition = $(this).scrollTop();
        $(".hero-image").css({
            'background-position': '50% ' + (-scrollPosition / 2) + 'px'
        });
    });

    // Interactive Image Gallery (Assuming you have a gallery with the class 'image-gallery')
    $(".image-gallery img").on('click', function () {
        var src = $(this).attr('src');
        var alt = $(this).attr('alt');
        $("#gallery-modal img").attr('src', src);
        $("#gallery-modal img").attr('alt', alt);
        $("#gallery-modal").modal('show');
    });

    // Form Validation (Assuming you have a form with the id 'myForm')
    $("#myForm").submit(function (event) {
        var isValid = true;
        // Implement your validation logic here
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Toggle visibility for additional content
    $(".toggle-content-button").click(function () {
        $(".additional-content").toggle('slow');
    });
});
