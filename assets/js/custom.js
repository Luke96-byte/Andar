$(function(){
    //gnb 메뉴 호버
    $('.menu-item').hover(function(){ 
        $(this).children('.sub-list').addClass('show');
    },function(){
        $('.sub-list').removeClass('show');
    });


    mainSlide = new Swiper('.sc-visual .banner-visual',{ 
        spaceBetween:0,
        loop:true,
        centeredSlides:true,
        slidesPerView:3,
        speed:1000,
        navigation:{
            prevEl: ".prev",
            nextEl: ".next"
        },
        // pagination:{
        //     el:".fraction",
        //     type:"fraction"
        // }
        pagination:{
            el:".control .fraction",
            type: "fraction",
            renderCustom: function (swiper, current, total) {
                return `<span class="curr">${current}</span>
                <span class="bar">/</span>
                <span class="total">${total}</span>`;
            }
        }
        
    });






    //뉴아이템 스와이퍼
    mainSlide = new Swiper('.sc-newitem .swiper',{ 
        spaceBetween:10,
        slidesPerGroup:3,
        slidesPerView:3,
        navigation:{
            prevEl: ".sc-newitem .prev",
            nextEl: ".sc-newitem .next"
        }
        
    });


    mainSlide = new Swiper('.sc-cate .swiper',{ 
        spaceBetween:20,
        slidesPerView:5.2,
        
    });



    //menuall 서브메뉴
    $('.btn-menuall').click(function(e){
        e.preventDefault();
        // 
        $('body').toggleClass('hidden');
        $('.pop-layer').toggleClass('show')
        $(this).toggleClass('on')
    });


    //탑 스와이퍼
    mainSlide = new Swiper('.banner-top',{ 
        slidesPerView:'1',
        loop:false,
    });

    //탑스와이퍼 스크롤
    $(window).scroll(function(){

        curr = $(this).scrollTop(); 
        branding = $('.sc-branding').offset().top;

        if (curr >= branding) {
            $('.btn.top').fadeIn();
            // $('.btn.top').addClass('show');
        } else {
            $('.btn.top').fadeOut();
            // $('.btn.top').removeClass('show');
        }
    })

    //베스트셀러 탭
    $('.tab-item').click(function(e){
        e.preventDefault();

        BestSellerTab = $(this).data('tab');

        $(this).addClass('active').siblings().removeClass('active');

        $(BestSellerTab).addClass('active').siblings().removeClass('active');

    })

    //배너1 쿠폰 스와이퍼
    mainSlide = new Swiper('.sc-banner1 .banner-coupon',{ 
        slidesPerView:'1',
        pagination:{
            el:".fraction",
            type:"fraction"
        }
    });      


    // btn-top 스크롤 
    $(window).scroll(function(){
        curr = $(this).scrollTop(); 
        bannerH = $('#header .banner-top').height();

        if (curr >= bannerH) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    })


    //btn-top 맨위로
    $('.btn.top').click(function(e){ 
    e.preventDefault();
    window.scrollTo({top:0,behavior:"smooth"})
    })
})


        


//서치바 검색

//비쥬얼 스와이퍼
//배너1 스와이퍼
//뉴아이템 스와이퍼
//카테 스와이퍼


