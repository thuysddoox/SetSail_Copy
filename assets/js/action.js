////////////////////////////SHOW SLIDER
var slideText = document.getElementsByClassName("slidesIntro__text");
var slider = document.getElementsByClassName("slidesIntro")[0];
var slideImg = ["url('/assets/images/sliderIntro-1.jpg')",
    "url('/assets/images/sliderIntro-2.jpg')"
];
var slidedots = document.getElementsByClassName("slidesIntro__dots-item");
var indexSlide = 1;

function slideShow() {

    if (indexSlide == 1) indexSlide = 0;
    else
        indexSlide = 1;
    slider.style.backgroundImage = slideImg[indexSlide];
    slider.style.animation = "slidesIntroBg 6s ease-in-out infinite alternate";
    for (var i = 0; i < slideText.length; i++) {
        slideText[i].style.display = "none";
        slidedots[i].style.opacity = "0.7";
    }
    slideText[indexSlide].style.display = "block";
    slidedots[indexSlide].style.opacity = "1";
}
var showSlide = setInterval(slideShow, 6000);

function AcsSlide() {
    clearInterval(showSlide);
    showSlide = setInterval(slideShow, 6000);
}

var btnSlideL = document.getElementsByClassName("slideIntro__btn-left")[0];
var btnSlideR = document.getElementsByClassName("slideIntro__btn-right")[0];
btnSlideL.addEventListener("click", AcsSlide);
btnSlideR.addEventListener("click", AcsSlide);

function playVideo() {
    var videoBreath = document.getElementsByClassName("content__breathtaking-city-video")[0];
    var modal = document.getElementsByClassName("modal-box")[0];
    if (videoBreath.style.display != "block") {
        videoBreath.style.display = "block";
        modal.style.display = "block";
    } else {
        videoBreath.style.display = "none";
        modal.style.display = "none";
    }
}

//////////////////////////////////SHOW PACKUP SLIDE
var listSlide = document.getElementsByClassName("content__packup-slide-list")[0];
var itemPackUp = document.getElementsByClassName("content__packup-slide-item")[0];
var itemPackUpList = document.getElementsByClassName("content__packup-slide-item-intro");


function showPackUp() {
    if (packUpDirect == 1) {
        if (listSlide.scrollWidth - listSlide.scrollLeft > listSlide.clientWidth)
            listSlide.scrollLeft += itemPackUp.clientWidth;
        else packUpDirect = 0;
    } else if (packUpDirect == 0) {
        if (listSlide.scrollLeft == 0) {
            packUpDirect = 1;
        } else listSlide.scrollLeft -= itemPackUp.clientWidth;
    }
}
var packUpShow = setInterval(showPackUp, 2000);
/*BUTTON CLICK SLIDER*/
var packUpDirect = 1;
var packUpLeft = document.getElementsByClassName("packup__btn-left")[0];
var packUpRight = document.getElementsByClassName("packup__btn-right")[0];

function scrollLeft() {
    clearInterval(packUpShow);
    packUpDirect = 1;
    showPackUp();
    packUpShow = setInterval(showPackUp, 2000);
}

function scrollRight() {
    clearInterval(packUpShow);
    packUpDirect = 0;
    showPackUp();
    packUpShow = setInterval(showPackUp, 2000)
}
packUpLeft.addEventListener("click", scrollLeft);
packUpRight.addEventListener("click", scrollRight);

///////////////////////////SHOW FEEDBACK
var feedback = document.getElementsByClassName("content__plan-holiday-feedback-item");
var feedbackDirect = 1;

function showFeedBack() {
    if (feedbackDirect == 1) {
        for (let i = 0; i < feedback.length; i++) {
            feedback[i].style.transform = "translate(-100%,0%)";
        }
        feedbackDirect = 0;
    } else {
        for (let i = 0; i < feedback.length; i++)
            feedback[i].style.transform = "translate(0%,0%)";
        feedbackDirect = 1;
    }
}
var showFB = setInterval(showFeedBack, 6000);
/*BUTTON CLICK FEED BACK*/
var feedbackleft = document.getElementsByClassName("plan-holiday-feedback__btn-left")[0];
var feedbackright = document.getElementsByClassName("plan-holiday-feedback__btn-right")[0];

function clickFB() {
    clearInterval(showFB);
    showFeedBack();
    setTimeOut(function() { showFB = setInterval(showFeedBack, 6000) }, 6000);
}

feedbackleft.addEventListener("click", clickFB);
feedbackright.addEventListener("click", clickFB);


/////////////////////////////////////// SHOW REVIEW TRAVEL
var review = document.getElementsByClassName("content__travel-review-item")[0];
var reviewList = document.getElementsByClassName("content__travel-review-list-wrap")[0];
var reviewDirect = 0;

function showReview() {
    if (reviewDirect == 1) {
        if (reviewList.scrollWidth - reviewList.scrollLeft > reviewList.clientWidth) {
            reviewList.scrollLeft += review.clientWidth;
        } else reviewDirect = 0;
    } else if (reviewDirect == 0) {
        if (reviewList.scrollLeft > 0) {
            reviewList.scrollLeft -= review.clientWidth;
        } else reviewDirect = 1;
    }
}
var reviewShow = setInterval(showReview, 3000);

/*BUTTON CLICK REVIEW TRAVEL*/
var dotReview = document.querySelectorAll(".content__travel-review-dots .content__plan-holiday-dot-item");

function clickDotReview(idReview) {
    clearInterval(reviewShow);
    if (idReview == 0) {
        dotReview[0].style.opacity = "1";
        dotReview[1].style.opacity = "0.6";
        dotReview[2].style.opacity = "0.6";
        reviewList.scrollLeft = 0;
    }
    if (idReview == 1) {
        dotReview[1].style.opacity = "1";
        dotReview[0].style.opacity = "0.6";
        dotReview[2].style.opacity = "0.6";
        reviewList.scrollLeft = (2 * review.clientWidth + 1);
    }
    if (idReview == 2) {
        dotReview[2].style.opacity = "1";
        dotReview[1].style.opacity = "0.6";
        dotReview[0].style.opacity = "0.6";
        reviewList.scrollLeft = (4 * review.clientWidth + 1);
    }
    reviewShow = setInterval(showReview, 3000);
}
//////////////////////////////// SHOW SLIDE PLAN HOLIDAY
var plan = document.getElementsByClassName("content__plan-holiday-item")[0];
var planList = document.getElementsByClassName("content__plan-holiday-list-wrap")[0];
var planDirect = 0;

function showPlan() {
    if (planDirect == 1) {
        if (planList.scrollWidth - planList.scrollLeft > planList.clientWidth) {
            planList.scrollLeft += plan.clientWidth;
        } else planDirect = 0;
    } else if (planDirect == 0) {
        if (planList.scrollLeft > 0) {
            planList.scrollLeft -= plan.clientWidth;
        } else planDirect = 1;
    }
}
var planShow = setInterval(showPlan, 2000);
/*BUTTON CLICK PLAN HOLIDAY*/
var dotPlan = document.querySelectorAll(".content__plan-holiday-dots .content__plan-holiday-dot-item");

function clickDotPlan(idPlan) {
    clearInterval(planShow);
    if (idPlan == 0) {
        dotPlan[0].style.opacity = "1";
        dotPlan[1].style.opacity = "0.7";
        dotPlan[2].style.opacity = "0.7";
        planList.scrollLeft = 0;
    }
    if (idPlan == 1) {
        dotPlan[1].style.opacity = "1";
        dotPlan[0].style.opacity = "0.7";
        dotPlan[2].style.opacity = "0.7";
        planList.scrollLeft = (4 * plan.clientWidth);
    }
    if (idPlan == 2) {
        dotPlan[2].style.opacity = "1";
        dotPlan[1].style.opacity = "0.7";
        dotPlan[0].style.opacity = "0.7";
        planList.scrollLeft = (8 * plan.clientWidth);
    }
    planShow = setInterval(showPlan, 2000);
}