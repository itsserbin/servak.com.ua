require('./libs/swiper-bundle.min.js');

// Lang
$(document).on('click', '.js-lang', function () {
    const $parent = $(this).closest('.lang');
    $parent.toggleClass('show');
});


//   Burger
var burger = $('.js-burger'),
    navContent = $('.js-mob-menu'),
    activeClass = 'active',
    catalogBtn = $('.a-catalog-button'),
    disableClass = 'disable';

burger.on('click', function (e) {
    if ($(this).hasClass(activeClass)) {
        $(this).removeClass(activeClass)
        navContent.removeClass(activeClass)
        $('body').removeClass(activeClass)
        $('.o-header').removeClass(activeClass)
        catalogBtn.removeClass(disableClass)
        $('.m-header-catalog__item').removeClass('burger-active')

    } else {
        $(this).addClass(activeClass)
        navContent.addClass(activeClass)
        $('body').addClass(activeClass)
        $('.o-header').addClass(activeClass)
        catalogBtn.addClass(disableClass)
        $('.m-header-catalog__item').addClass('burger-active')
    }
});
$('.m-header-catalog__item').on('click', function () {
    if ($(this).hasClass('burger-active')) {
        $(this).addClass('active').children(".m-header-catalog__list-sub").addClass('active')
            .closest('.m-header-catalog__list').addClass('active')
            .prev('.a-btn-back').addClass('active')
            .closest('.o-header-catalog').find('.a-btn-close').addClass('active')
            .closest('.o-header-bottom').addClass('catalog-list-show');
    }
});
$('.a-btn-back').on('click', function () {
    $('.m-header-catalog__item').removeClass('active')
    $(".m-header-catalog__list-sub").removeClass('active')
    $('.m-header-catalog__list').removeClass('active')
    $('.a-btn-back').removeClass('active')
    $('.a-btn-close').removeClass('active')
    $('.o-header-bottom').removeClass('catalog-list-show');
});
$('.a-btn-catalog').on('click', function () {
    $(this).addClass('active')
    $('.m-header-catalog__item').addClass('burger-active')
    $('.o-header-bottom').addClass('catalog-list-show active no-nav')
    $('.o-header').addClass('active')
    $('body').addClass('active')
    $('.a-btn-close').addClass('active active-pop-up')
    $('.a-btn-back').addClass('active-pop-up')
});
$('.a-btn-close').on('click', function () {
    $(this).removeClass('active active-pop-up')
    $('.m-header-catalog__item').removeClass('burger-active')
    $('.o-header-bottom').removeClass('catalog-list-show active no-nav')
    $('.o-header').removeClass('active')
    $('body').removeClass('active')
    $('.a-btn-back').removeClass('active active-pop-up')
    burger.removeClass('active')
    $('.m-header-catalog__list').removeClass('active')
});


// Header Scroll
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $(".header").addClass("is-active");
    } else {
        $(".header").removeClass("is-active");
    }
});

if ($(window).scrollTop() > 100) {
    $(".header").addClass("is-active");
}

// drop
$('.a-drop-title').on('click', function () {
    $(this).next('.m-dropdown-list').slideToggle(200);
    $(this).toggleClass('active');
});

//alphabet

$(function () {

    $('.alphabet-item:not(.active)').click(function () {
        var txt = $(this).text();
        $(this).addClass('active').siblings().removeClass('active');
        $('.brand-item').removeClass('active')
        $('div#' + txt).addClass('active');

    });

});
$(function () {

    $('ul.o-cabinet-sidebar').on('click', 'li:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active')
            .closest('.o-cabinet-content').find('div.o-cabinet-right').find('div.o-cabinet-right__item').removeClass('active').eq($(this).index()).addClass('active');
    });
});

$(document).click(function (e) {
    if ($(e.target).closest('.m-dropdown').length) {
        return;
    }
    $('.m-dropdown-list').slideUp(200);
    $('.a-drop-title').removeClass('active')
});

// search modal

$(".a-search-input").focus(function () {
    $(".o-modal-search").addClass('active');
    $(".overlay").addClass('active');
    $(".overlay").addClass('e--light');
    $(".o-search-input").focus();
});
$(".a-search-btn").on('click', function () {
    $(".o-modal-search").addClass('active');
    $(".overlay").addClass('active');
    $(".overlay").addClass('e--light');
    $(".o-search-input").focus();
});

$('.o-search-input').on('input', function () {
    $('.o-search-content').addClass('active');
});
$('.o-search-input').blur(function () {
    $('.o-search-content').removeClass('active');
});


// catalog open
if (window.location.href.endsWith("servak.com.ua/")) {
    var block = document.getElementsByClassName("o-header-catalog__list")[0];
    block.style.display = "block";
} else {
    $('.a-catalog-button').on('click', function () {
        $('.o-header-catalog__list').slideToggle(200);
        $(this).toggleClass('active');
    });
}

// recommend slider
const recommendationSlider = new Swiper('.o-recommendation-slider', {
    speed: 400,
    spaceBetween: 8,
    slidesPerView: 1,
    navigation: {
        nextEl: '.a-slider-next',
        prevEl: '.a-slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        400: {
            spaceBetween: 8,
            slidesPerView: 2,
        },
        640: {
            spaceBetween: 8,
            slidesPerView: 3,
        },
        768: {
            spaceBetween: 16,
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 8,
            slidesPerView: 4,
        },
        1248: {
            spaceBetween: 20,
            slidesPerView: 4,
        },
        1440: {
            spaceBetween: 40,
            slidesPerView: 4
        }
    }

});

//reviews slider
const reviewnSlider = new Swiper('.o-reviews-slider', {
    speed: 400,
    spaceBetween: 8,
    slidesPerView: 1,
    navigation: {
        nextEl: '.a-slider-next',
        prevEl: '.a-slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        481: {
            spaceBetween: 8,
            slidesPerView: 2,
        },
        768: {
            spaceBetween: 8,
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 16,
            slidesPerView: 3,
        },
        1248: {
            spaceBetween: 40,
            slidesPerView: 3,
        }
    }

});

// video-slider
const videoSlider = new Swiper('.o-video-slider', {
    speed: 400,
    spaceBetween: 8,
    slidesPerView: 1,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 50,
    },
    breakpoints: {
        481: {
            spaceBetween: 8,
            slidesPerView: 2,
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
                dragSize: 80,
            },
        },
        768: {
            spaceBetween: 8,
            slidesPerView: 3,
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
                dragSize: 100,
            },
        },
        1024: {
            spaceBetween: 16,
            slidesPerView: 3,
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
                dragSize: 140,
            },
        },
        1248: {
            spaceBetween: 40,
            slidesPerView: 3,
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
                dragSize: 200,
            },
        }
    }

});

// hero slider

const heroSlider = new Swiper('.o-hero-slider', {
    speed: 400,
    spaceBetween: 100,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.a-slider-next',
        prevEl: '.a-slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

});

const productSlider = new Swiper('.m-product-slider', {
    speed: 400,
    spaceBetween: 100,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

});


// rent slider

const rentSlider = new Swiper('.m-rent-slider', {
    speed: 400,
    spaceBetween: 8,
    slidesPerView: 1,
    watchOverflow: true,
    navigation: {
        nextEl: '.a-slider-next',
        prevEl: '.a-slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        400: {
            spaceBetween: 8,
            slidesPerView: 2,
        },
        640: {
            spaceBetween: 8,
            slidesPerView: 3,
        },
        768: {
            spaceBetween: 16,
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 8,
            slidesPerView: 4,
        },
        1248: {
            spaceBetween: 20,
            slidesPerView: 4,
        },
        1440: {
            spaceBetween: 40,
            slidesPerView: 4,
        }
    }

});

// configuration drop
$('.dropdown-item__title').on('click', function () {
    $(this).toggleClass('close');
    $(this).next('ul').slideToggle(200);

});

// show-more calc


$('ul.placing').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active');
});

$('ul.radio-buttons__list.radio').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active');
});
$('ul.radio-buttons__list.checkbox').on('click', 'li', function () {
    $(this).toggleClass('active');
});

$('.show-more-btn').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('.show-more').slideToggle(200);
});
$(".radio-buttons__item.drop").click(function (e) {
    if (!$(e.target).hasClass('show-more-btn')) {
        $(this).addClass('active');
    }
});
$(".placing-items").click(function (e) {
    $('.add-services').removeClass('disabled');
});

$('ul.o-calc-rent__tabs-list').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active')
        .closest('.o-calc-rent__tabs').find('div.o-calc-rent__tabs-items').find('div.o-calc-rent__tabs-item').removeClass('active').eq($(this).index()).addClass('active');
});

$('ul.add-parameters__list.checkbox').on('click', 'li', function () {
    $(this).toggleClass('active');
});

$('ul.add-parameters__list.radio').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active');
});


// show-price

$('.show-price').on('click', function () {
    $(this).fadeOut(0);
    $(this).next('span').fadeIn();

});

// filters drop
$('.m-filters-title').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('.m-filters-items').slideToggle(200);

});

// filter mobile
$('.a-filter-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.o-catalog-left').slideToggle(200);

});


// show more
$('.a-show-more').on('click', function () {
    $(this).toggleClass('active');
    $(this).prev('.m-about-content__none').slideToggle(200).prev('.m-about-content__show').toggleClass('active');

});

//questions

$('.a-question').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('.a-answer').slideToggle(200).prev('.m-about-content__show').toggleClass('active');

});

// a-btn-top
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $(".a-btn-top").addClass("active");
    } else {
        $(".a-btn-top").removeClass("active");
    }
});

// delivery drop

$('.a-delivery-title').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('.a-delivery-show').slideToggle(200);

});

// cart characteristics drop
$('.a-characteristics-title').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('.a-characteristics-show').slideToggle(200);

});

var max_lis = 3;

$('ul.o-cart-list').each(function () {
    var lis_length = $('li', this).length;

    if (lis_length <= max_lis) {
        $(this).find('li.m-cart-item').find('.a-characteristics-show').addClass('active');
    }

});


//modal configurator open
$(".modal-configurator-open").on("click", function (event) {
    $(".o-modal-configurator").addClass('active');
    $(".overlay").addClass('active');
    //$('body').addClass('active');
});

// modall callback

$(".modal-callback-open").on("click", function (event) {
    $(".o-modal-callback").addClass('active');
    $(".overlay").addClass('active');
    //$('body').addClass('active');
});


//modal cart open

$(".a-cart-link").on("click", function (event) {
    $(".modal-cart").addClass('active');
    $(".overlay").addClass('active');
    //$('body').addClass('active');
});
$(".overlay").on("click", function (e) {
    $(".o-modal").removeClass('active');
    $(this).removeClass('active');
    //$('body').removeClass('active');
});
$(".a-modal-close").on("click", function (e) {
    $(this).closest(".o-modal").removeClass('active');
    $('.overlay').removeClass('active');
    //$('body').removeClass('active');
});

// password form

$('.m-login-form').on('click', '.password-control', function () {
    if ($('.input-password').attr('type') == 'password') {
        $(this).addClass('active');
        $('.input-password').attr('type', 'text');
    } else {
        $(this).removeClass('active');
        $('.input-password').attr('type', 'password');
    }
    return false;

});
// articles tabs
$('ul.o-articles-tabs').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active')
        .closest('.o-articles-content').find('div.o-articles-tabs__content').find('div.o-articles-item').removeClass('active').eq($(this).index()).addClass('active');
});


// info tabs

$('ul.m-info-nav__list').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active')
        .closest('.m-info').find('div.m-info-right').find('div.m-info-content').removeClass('active').eq($(this).index()).addClass('active');
});

// var offset = $element.offset().top + $element.height();

var target = $('.bottom');
if (target.length !== 0) {
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    var elHeight = $('.m-product-page__trade').height();
    $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > (scrollToElem + 200)) {
            $('.m-product-page__trade').removeClass('active-fixed')
            $('.m-product-page__trade').addClass('active-sticky')
        } else {
            $('.m-product-page__trade').addClass('active-fixed')
            $('.m-product-page__trade').removeClass('active-sticky')
        }
    });
}


// product page tabs
$('ul.m-product-page__nav').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active')
        .closest('.o-product-page__bottom').find('div.m-product-page__item').slideUp(400).eq($(this).index()).slideDown(400);
});


// MODALS
const openModalButtons = $('[data-modal-target]'),
    closeModalButtons = $('[data-close-button]'),
    overlay = $('#overlay');

openModalButtons.each(function () {
    $(this).on('click', function () {
        const modal = $(this).data('modalTarget')
        openModal(modal)
    })
})

closeModalButtons.each(function () {
    $(this).on('click', function () {
        const modal = $(this).closest('.modal')
        closeModal(modal)
    })
})

overlay.on('click', function () {
    const modals = $('.modal.active');
    modals.each(function () {
        closeModal(this)
    })
})

function openModal(modal) {
    if (modal == null) {
        return
    }
    $(modal).addClass('active')
    overlay.addClass('active')
}

function closeModal(modal) {
    if (modal == null) {
        return
    }
    $(modal).removeClass('active')
    overlay.removeClass('active')
}


// SWIPER For mobile
// const breakpoint = window.matchMedia( '(min-width: 768px)');
// let categorySwiper;

// const breakpointChecker = function() {
//     if ( breakpoint.matches === true ) {
//         console.log(categorySwiper)
//         if ( categorySwiper !== undefined ) categorySwiper.destroy( true, true );
//         return
//     } else if ( breakpoint.matches === false ) {
//         return enableSwiper();
//     }
// }


// const enableSwiper = function() {

//     categorySwiper = new Swiper('.category-swiper', {
//         slidesPerView: 3.5,
//         grabCursor: true,

//     })


// }

// breakpoint.addListener(breakpointChecker);
// breakpointChecker();