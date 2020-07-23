$(document).ready(function () {

    const windowWidth = $(window).innerWidth();
    const windowHeight = $(window).innerHeight();

    let topp = $('.slide').eq(0).offset().top;
    $('html').animate({
        scrollTop: topp
    }, 100)

    $('#points').css({
        left: windowWidth - 50
    });

    $('html').animate({
        scrollTop: 0
    }, 0)

    $('.img:eq(0)').css({
        top: '10px',
        left: '20px'
    })
    $('.img:eq(1)').css({
        top: '200px',
        left: '400px'
    })

    $('.img:eq(2)').css({
        top: windowHeight - 100,
        left: windowWidth / 4
    })

    $('img').each(function (index, value) {

        $(window).scroll(function () {
            var yPos0 = -($(window).scrollTop() / $(value).eq(0).data('speed'));
            var yPos1 = -($(window).scrollTop() / $(value).eq(1).data('speed'));
            var yPos2 = -($(window).scrollTop() / $(value).eq(2).data('speed'));
            var yPos3 = -($(window).scrollTop() / $(value).eq(3).data('speed'));
            var yPos4 = -($(window).scrollTop() / $(value).eq(4).data('speed'));
            var yPos5 = -($(window).scrollTop() / $(value).eq(5).data('speed'));

            var coords0 = yPos0 + 'px';
            var coords1 = yPos1 + 'px';
            var coords2 = yPos2 + 'px';
            var coords3 = yPos3 + 'px';
            var coords4 = yPos4 + 'px';
            var coords5 = yPos5 + 'px';

            $(value).eq(0).css({
                top: coords0
            });
            $(value).eq(1).css({
                top: coords1
            });
            $(value).eq(2).css({
                top: coords2
            });
            $(value).eq(3).css({
                top: coords3
            });
            $(value).eq(4).css({
                top: coords4
            });
            $(value).eq(5).css({
                top: coords5
            });
        });
    });

    $('.point').eq(0).addClass('activePoint');

    let arrow;
    $('.point').each(function (index, value) {

        $(value).mouseover(function () {
            let position = $(value).position();
            let top = position.top;
            let left = position.left;


            $('.name').css({
                display: 'inline',
                position: 'fixed',
                top: top + 50,
                left: windowWidth - 250,
                'z-index': 1000
            })

            $('.name').text($('h2').eq(index + 1).text());

            $(value).mouseout(function () {
                $('.name').css({
                    display: 'none'
                })
            });

        });

        $(value).click(function () {
            $('.point').removeClass('activePoint');
            $(this).addClass('activePoint');
            let top = $('.slide').eq(index).offset().top;
            $('html').animate({
                scrollTop: top
            }, 500)
        });

        $('.arrowNext').eq(index).click(function () {
            if ($(value).hasClass('activePoint')) {
                arrow = index + 1;
                const toppp = $('.slide').eq(arrow).offset().top;
                $('.point').removeClass('activePoint');
                $('.point').eq(arrow).addClass('activePoint');
                $('html').animate({
                    scrollTop: toppp
                }, 500)
            }
        });

        $('.arrowPrew').click(function () {
            if ($(value).hasClass('activePoint')) {
                arrow = index - 1;
                const toppp = $('.slide').eq(arrow).offset().top;
                $('.point').removeClass('activePoint');
                $('.point').eq(arrow).addClass('activePoint');
                $('html').animate({
                    scrollTop: toppp
                }, 500)
            }
        });
    });









});