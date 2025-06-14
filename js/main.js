(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

//Form Booking WA
document.getElementById("formBooking").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    
    const layananSelect = document.getElementById('layanan');
    const layanan = layananSelect.options[layananSelect.selectedIndex].text;

    const tanggal = document.getElementById('tanggal').value;
    const keluhan = document.getElementById('keluhan').value;

    const nomor = '6281315800996';
    
    const pesanWa = `Nama: ${nama}\nEmail: ${email}\nLayanan: ${layanan}\nTanggal: ${tanggal}\nKeluhan: ${keluhan}`;
    
    const url = 'https://wa.me/' + nomor + '?text=' + encodeURIComponent(pesanWa);

    window.open(url, '_blank');
});

//Scroll untuk Tab Layanan
document.querySelectorAll('.dropdown-item').forEach(function(item){
    item.addEventListener('click', function(e){
        e.preventDefault();
        const targetTab = this.getAttribute('data-target');

        document.querySelector('#layanan').scrollIntoView({ behavior: 'smooth' });

        const button = document.querySelector('button[data-bs-target="' + targetTab + '"]');
        if(button){
            setTimeout(function(){
                button.click(); 
            }, 100); 
        }
    });
});
