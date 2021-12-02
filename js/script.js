//console.log("연결");
console.log("load");

//셀렉터 찾기.
//내가 찾아야하는 id또는class에게 이름을 지어준다
//ex) var $이름 = document.quertSelector("#id이름 or .class이름")
var $cursorDot = document.querySelector("#cursor-dot");
var $cursorBG = document.querySelector("#cursor-bg");
var $progress = document.querySelector("#progress");
var $_list = document.querySelector("#list");
console.log($_list);
var $_listEl = $_list.querySelectorAll("a");

var $list = document.querySelector(".section");
var $listEl = $list.querySelectorAll("a");
var $btnTop = document.querySelector("#btn-top");
var $btnGallery = document.querySelector("#btn-gallery");
var $slider = document.querySelector("#slider");
var $gnList = document.querySelector(".gn-list");
var $gnListEl = $gnList.querySelectorAll("a");
var $section = document.querySelectorAll(".section");
console.log($section);

var $hide = document.querySelector("#hide");
var $hideI = $hide.querySelectorAll("a");
var $img1 = document.querySelector("#img1");
var $img2 = document.querySelector("#img2");
var $img3 = document.querySelector("#img3");

//top button
$btnTop.addEventListener("click", onClickBtnTop);
function onClickBtnTop(e){
    e.preventDefault();
    TweenMax.to(window, 0.45, {scrollTo: {y: 0}, ease: Quad.easeInOut});
}

//nav scroll
for(var i = 0; i < $gnListEl.length; i++){
    $gnListEl[i].addEventListener("click", function(e){
        e.preventDefault();
        
        var $el = e.currentTarget, id = $el.getAttribute("href");
        console.log($el);
        var posY = document.querySelector("#" + id).offsetTop;
        TweenMax.to(window, 0.4, {scrollTo:{y: posY}});
    });
}


//커서 움직이기.
window.addEventListener("mousemove", onMouseMoveWindow);

function onMouseMoveWindow(e) {
    var posX = e.clientX, posY = e.clientY;

    TweenMax.killTweensOf($cursorDot);
    TweenMax.killTweensOf($cursorBG);
    TweenMax.killTweensOf($progress);
    TweenMax.to($cursorDot, 0.15, {css: {top: posY, left: posX}});
    TweenMax.to($cursorBG, 0.2, {css: {top: posY, left: posX}});
    TweenMax.to($progress, 0.25, {css: {top: posY, left: posX}});
}

//호버할때 호버땠을때 나오는 동그라미 progress부분
for(var i = 0; i < $_listEl.length; i++){
    
    $_listEl[i].addEventListener('mouseenter', function(){
        
        if(!$cursorDot.classList.contains("active")){
            $cursorDot.classList.add("active");
        }
        if(!$cursorBG.classList.contains("active")){
            $cursorBG.classList.add("active");
        }
        if(!$progress.classList.contains("active")){
            $progress.classList.add("active");
        }
    })
    $_listEl[i].addEventListener('mouseleave', function(){
        
        if($cursorDot.classList.contains("active")){
            $cursorDot.classList.remove("active");
        }
        if($cursorBG.classList.contains("active")){
            $cursorBG.classList.remove("active");
        }
        if($progress.classList.contains("active")){
            $progress.classList.remove("active");
        }
    });
}

