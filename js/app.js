$(document).ready(function() {
    let boxes = document.querySelectorAll('.box');
    let totalBoxes = boxes.length;  // Total number of boxes
    let visibleBoxes = 4;  // Initially visible boxes (1-4)
  
    // Function to show the next 4 hidden boxes with smooth effect
    function addNewBoxes() {
        $('.box.hidden:lt(4)').each(function(index) {
            // Delay and fadeIn with custom class for smooth effect
            $(this).delay(100 * index).queue(function(next) {
                $(this).removeClass('hidden').addClass('show');
                next();
            });
        });

        // Update the visible box count
        visibleBoxes += 4;

        // If all boxes are visible, hide the Load More button
        if (visibleBoxes >= totalBoxes) {
            $('#loadMore').fadeOut(500);
        }
    }

    // Click event for the "Load More" button
    $('#loadMore').click(function() {
        addNewBoxes();
    });



    $('#menu').on('click',function(){
      
    //alert(123)
    
    $('.menu-btn').addClass('open-menu')
    
    })

    $('.menu-btn').on('click',function(){
      
        $('.menu-btn').removeClass('open-menu')
      
        
      })



      
  // Scroll event listener
  // Ensure the #top element starts hidden
  $('#top').hide();  // This will explicitly hide the element at the start

  // Scroll event listener
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();

    if (scroll >= 300) {
      $('#top').fadeIn(200);
    } else {
      $('#top').fadeOut(200);
    }
  });

  // Scroll to top when #top is clicked
  $('#top').click(function() {
    scrollToTop();
  });

  // Smooth scroll to the top
  function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, 100); // Adjust 500 to control the scroll speed
  }





});


// Sticky Header
$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    let header = $('header');

    if(scroll >= 50){
        header.addClass('sticky');
    }else{
        header.removeClass('sticky');
    }

})







Fancybox.bind("[data-fancybox]", {
    // Your custom options
    });


// Detect if the user is on a mobile device
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Set different speeds for desktop and mobile
var particleSpeed = isMobile ? 2 : 6;  // Slower speed for mobile, original speed for desktop

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 61,
            "density": {
                "enable": true,
                "value_area": 1024.0252067743202
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": particleSpeed,  // Adjust speed for mobile
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 1214.938888573905,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Optional: Particle count display and stats (if needed)
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);








