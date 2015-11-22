$(document).foundation();
$('body').show();
NProgress.start();
NProgress.inc(0.1);
NProgress.inc(0.1);
setTimeout(function() {
    NProgress.done();
    $('.fade').removeClass('out');
}, 2500);

new WOW().init();


$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});



$(document).ready(
    function() {
        $("html").niceScroll({
            scrollspeed: "80",
            mousescrollstep: "80",
            cursorcolor: "#ed4523",
            cursorwidth: "10",
            cursorborderradius: "0",
            zindex: "1000",
            horizrailenabled: "false",
            autohidemode: "false",
            cursorborder: "0px"
        });
    }
);


$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay2').toggleClass('open');
    $('body').toggleClass("overflow-hidden");
    $('span.top,span.bottom').toggleClass('cross-white');

});




var $items = $(".ins");
$items.hide();
$items.slice(0, Math.ceil($items.length / 3)).show();


$("#show_more").click(function() {

    var $items = $(".ins");
    $items.show();
    $('#show_more').addClass('hidden');
});

$("#contact-info.full-width").click(function() {
    $(this).children("#map-canvas").delay(1500).toggleClass("pointer-events");
});


$("#arrow-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});




//404

if (!SVG.supported) {
    alert('SVG not supported !');
} else {
    // parameters
    var a = 40,
        speed = 50,
        points = [
            [, , 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1, , , 1, 1, , , 1, 1],
            [, 1, 1, , , 1, 1, , , 1, 1, , , 1, 1, , , 1, 1, , , 1, 1, ],
            [1, 1, 1, 1, 1, 1, , , 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1, , ],
            [, , , 1, 1, , , 1, 1, , , 1, 1, , , , , , , 1, 1, , , ],
            [, , 1, 1, , , 1, 1, 1, 1, 1, 1, , , , , , , 1, 1, , , , ]
        ],
        colors = [
            '#ED4525', '#091848', '#0d306b', '#0064AA', '#18ABE2'
        ],
        shadowColors = ['#0055ff', '#ff0000'],
        textColors = ['#012C33', '#12575E'];

    // computed parameters
    var a2 = a / 2,
        h = Math.round(a2 * Math.sqrt(3) * 100) / 100,
        grid = [points[0].length, points.length],
        size = [(grid[0] / 2 + 0.5) * a + a * 2, grid[1] * h + a * 3],
        nb_colors = colors.length,
        objects = [],
        groups = [];


    // init canvas
    var container = document.getElementById('notfound');
    container.style.width = size[0] + 'px';
    container.style.height = size[1] + 'px';

    var simplex = new SimplexNoise(),
        paper = SVG(container).size(size[0], size[1]).viewbox(0, 0, size[0], size[1]);
    up = paper.defs().path('M' + a2 + ',0 l' + a2 + ',' + h + ' l-' + a + ',0 l' + a2 + ',-' + h),
        down = paper.defs().path('M0,0 l' + a + ',0 l-' + a2 + ',' + h + ' -' + a2 + ',-' + h),
        shadow = [paper.group(), paper.group()];

    // draw objects
    for (var l = 0; l < grid[1]; l++) {
        objects[l] = [];
        groups[l] = paper.group();

        for (var c = 0; c < grid[0]; c++) {
            if (!points[l][c]) {
                continue;
            }

            var rnd = Math.round((simplex.noise(c / 10, l / 10) + 1) / 2 * nb_colors),
                cid = rnd - Math.floor(rnd / nb_colors) * nb_colors,
                pos = [c * a2 + a, l * h + a],
                use;

            if ((l % 2 == 0 && c % 2 == 0) || (l % 2 == 1 && c % 2 == 1)) {
                use = up;
            } else {
                use = down;
            }

            var el = paper.use(use)
                .move(pos[0], pos[1])
                .style('fill:' + colors[cid])
                .data('i', rnd);

            groups[l].add(el);
            objects[l][c] = el;

            shadow[0].use(use).move(pos[0], pos[1]);
            shadow[1].use(use).move(pos[0], pos[1]);
        }
    }


    // draw text
    var text = paper.text('Page not found!')
        .font({
            family: 'Ubuntu, Calibri',
            size: a
        })
        .opacity(0.7)
        .cx(size[0] / 2 - a2)
        .y(size[1] - a - a2);

    shadow[0].add(text.clone());
    shadow[1].add(text.clone());

    text.fill(
        paper.gradient('linear', function(stop) {
            stop.at(0, textColors[0]);
            stop.at(1, textColors[1]);
        }).from(0, 0).to(0, 1)
    );


    // animate shadows
    shadow[0].back()
        .fill(shadowColors[0])
        .animate(speed * 4).loop()
        .during(function(i) {
            if (i < 0.1)
                this.move(-a / 4, 0);
            else if (i >= 0.8)
                this.move(a / 12, 0);

            if (i < 0.1)
                this.opacity(0.1);
            else if (i >= 0.4 && i < 0.5)
                this.opacity(0.5);
            else if (i >= 0.7 && i < 0.8)
                this.opacity(0.3)
            else if (i >= 0.9)
                this.opacity(0.6);
            else
                this.opacity(0);
        });

    shadow[1].back()
        .fill(shadowColors[1])
        .animate(speed * 6).loop()
        .during(function(i) {
            if (i < 0.1)
                this.move(a / 4, 0);
            else if (i >= 0.8)
                this.move(-a / 12, 0);

            if (i < 0.1)
                this.opacity(0.1);
            else if (i >= 0.4 && i < 0.5)
                this.opacity(0.5);
            else if (i >= 0.7 && i < 0.8)
                this.opacity(0.3)
            else if (i >= 0.9)
                this.opacity(0.6);
            else
                this.opacity(0);
        });


    var counter = 0;
    setInterval(function() {
        // animate position
        for (var l = 0, i = groups.length; l < i; l++) {
            if (Math.random() < 0.5) {
                groups[l].x(Math.round(Math.random() * a / 5));
            }
        }

        // animate colors        
        for (var l = 0, i = objects.length; l < i; l++) {
            for (var c = 0, j = objects[l].length; c < j; c++) {
                if (!objects[l][c]) {
                    continue;
                }

                var cid = objects[l][c].data('i') + counter;
                cid -= Math.floor(cid / nb_colors) * nb_colors;

                objects[l][c].style('fill:' + colors[cid]);
            }
        }

        counter++;
        if (counter == nb_colors) {
            counter = 0;
        }
    }, speed);
}
