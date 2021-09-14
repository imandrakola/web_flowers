const $button = document.getElementsByClassName("header__increment-btn")[0];
const $button2 = document.getElementsByClassName("header__increment-btn2")[0];
const $counter = document.getElementsByClassName("header__counter")[0];
const $button1 = document.getElementsByClassName("header__increment-btn1")[0];
const $button3 = document.getElementsByClassName("header__increment-btn3")[0];
const $counter2 = document.getElementsByClassName("header__counter2")[0];
const $numbersAdder = document.getElementsByClassName("span_number2")[0];
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("demo");
const headermainnemuhide = document.getElementById("header__main--nemu-hide");
const mainbox1 = document.getElementById("main__box1");
const mainbox2 = document.getElementById("main__box2");
const mainbox3 = document.getElementById("main__box3");
const mainbox4 = document.getElementById("main__box4");
const errorall = document.getElementById("errorall");
const username = document.getElementById("username");
const password = document.getElementById("password");
const register = document.getElementById("register");
const passlogin = document.getElementById("passlogin");
const hideAlls = document.getElementById("hideAll");
const hideAlles = document.getElementById("hideAlles");
const inputSearch = document.querySelector(".header__main--information-buy");
const searchgiftflowers = document.querySelector(".search__gift--flowers");
const iconheart = document.querySelector(".icon-heart");
const hideclick = document.querySelector(".hide__click");
const searchGift = document.querySelector(".search__gift");
const searchhide = document.querySelector(".search__hide");
const login = document.querySelector(".font_9");
const loginSingin = document.querySelector(".font_9__singin");
const loginSinginHide = document.querySelector(".font_9__singin--hide");
const exit = document.querySelector(".exit");
const font9formregister = document.getElementById("font_9__form--register");
const usernamelogin = document.getElementById("username__login");
const font9formlogin = document.getElementById("font_9__form--login");
const usernameregister = document.getElementById("username__register");
const $none = "none";
const $block = "block";
const headerbirthdays = document.getElementById("header__birthday");
const headerpointeres = document.getElementById("header__pointers");
const headerpointeres2 = document.getElementById("header__pointers2");
const headerpointeres3 = document.getElementById("header__pointers3");
const headerpointeres4 = document.getElementById("header__pointers4");
const headerbirthday = document.getElementById("header__birthday");
const headerFlowers = document.getElementById("header__Flowers");
const headerSympathhy = document.getElementById("header__Sympathhy");
const headerOccasions = document.getElementById("header__Occasions");
const headerpointersAll = document.getElementById("header__pointersAll");
const inputZIPCODE = document.getElementById("input__ZIPCODE");
const inputDATE = document.getElementById("input__DATE");
const inputLOCATION = document.getElementById("input__LOCATION");
const inputOCCASION = document.getElementById("input__OCCASION");
const inputAPPLY = document.getElementById("input__APPLY");
const ZIPCODE1 = document.getElementById("input__ZIPCODE1");
const DATE1 = document.getElementById("input__DATE1");
const LOCATION1 = document.getElementById("input__LOCATION1");
const forminputfinish = document.getElementById("form__input--finish");
const OCCASION1 = document.getElementById("input__OCCASION1");
const loader = document.getElementById("loader");
const maininputcoupon = document.getElementById("main__input--coupon");
const maininputtext = document.getElementById("main__input--text");
const mainyesCoupon = document.getElementById("main__yesCoupon");
const mainnoCoupon = document.getElementById("main__noCoupon");
const mainyesCoupontick = document.getElementById("main__yesCoupon--tick");
const maininputtextmessage = document.getElementById(
  "main__input--text-message"
);
const maininputreview = document.getElementById("main__input--review");
const maininputwrite = document.getElementById("main__input--write");
const maininputapply = document.getElementById("main__input--apply");
const maininputsendreview = document.getElementById("main__input--sendreview");
const loaderCostomer = document.getElementById("loader__Costomer");
const maininputsendreviewer = document.getElementById(
  "main__input--sendreviewer"
);
const searchgiftAfrican = document.getElementById("search__gift--African");
const searchgiftAconitum = document.getElementById("search__gift--Aconitum");
const searchgiftAgapanthus = document.getElementById(
  "search__gift--Agapanthus"
);
const searchgifthoustonianum = document.getElementById(
  "search__gift--houstonianum"
);
const searchgiftroseum = document.getElementById("search__gift--roseum");
const searchgiftAgapanthusps = document.getElementById(
  "search__gift--Agapanthusps"
);
const searchgiftAgapanthusles = document.getElementById(
  "search__gift--Agapanthusles"
);
const iconheartall = document.getElementById("icon__heart--all");
const contenernum = document.getElementById("span_number");
/////////////////////////////////////////////////////////

// search in click

function hids() {
  searchGift.style.display = $none;
  searchhide.style.display = $none;
  iconheart.classList.remove("animation__border");
}

function shows() {
  searchGift.style.display = $block;
  searchhide.style.display = $block;
  iconheart.classList.add("animation__border");
}

iconheart.addEventListener("click", function () {
  shows();
});
searchhide.addEventListener("click", function () {
  hids();
});

// serch in click and value take and innerHTML
searchgiftAfrican.addEventListener("click", function () {
  const asd = searchgiftAfrican.innerHTML;
  console.log(searchgiftAfrican.innerHTML);
  iconheartall.placeholder = asd;
  hids();
});
searchgiftAconitum.addEventListener("click", function () {
  iconheartall.placeholder = "Aconitum";
  hids();
});
searchgiftAgapanthus.addEventListener("click", function () {
  iconheartall.placeholder = "Agapanthus";
  hids();
});
searchgifthoustonianum.addEventListener("click", function () {
  iconheartall.placeholder = "Ageratum houstonianum";
  hids();
});
searchgiftroseum.addEventListener("click", function () {
  iconheartall.placeholder = "Allium roseum";
  hids();
});
searchgiftAgapanthusps.addEventListener("click", function () {
  iconheartall.placeholder = "Agapanthusps";
  hids();
});
searchgiftAgapanthusles.addEventListener("click", function () {
  iconheartall.placeholder = "Agapanthusles";
  hids();
});
function loginaddEvent() {
  loginSingin.classList.add("show");
  loginSinginHide.classList.add("show");
}
// singin in face
exit.addEventListener("click", function () {
  loginaddEvent();
});
login.addEventListener("click", function () {
  if (loginSingin.classList.contains("show")) {
    loginSingin.classList.remove("show");
    loginSinginHide.classList.remove("show");
  } else {
    loginaddEvent();
  }
});



// singin error
function logingError() {
  var usernames = "iman";
  var passworeds = "123";
  const user = username.value;
  const pass = password.value;
  if (user === "") {
    errorall.innerHTML = "username is empty";
  }
  if (pass === "") {
    errorall.innerHTML = "password  is empty";
  }
  if (user === "" && pass === "") {
    errorall.innerHTML = "pleas write username and password";
  }
  if (user != "" && pass != "") {
    errorall.innerHTML = "plreas true username and password";
  }
  const iconlock = document.querySelector(".icon-lock");
  const iconunlocked = document.querySelector(".icon-unlocked");
  if (user === usernames  && pass === passworeds) {
    const inpass = (passlogin.style.display = $block);

    errorall.innerHTML = "";

    setTimeout(function () {
      iconlock.classList.remove("icon-lock");
      iconlock.classList.add("icon-unlocked");
    }, 1000);
    setTimeout(function () {
      const inpass = (passlogin.style.display = $none);
      iconlock.classList.remove("icon-unlocked");
      iconlock.classList.add("icon-lock");
      loginSingin.classList.add("show");
      loginSinginHide.classList.add("show");
    }, 3000);
  }
}
register.addEventListener("click", function () {
  logingError();
});

// luck in page login
const cluckpage = document.getElementById("cluckpage");
const iconlock = document.querySelector(".icon-lock");
password.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    logingError();
  }
});

username.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    logingError();
  }
});
// close click exit your welcom
passlogin.addEventListener("click", function () {
  passlogin.style.display = $none;
  loginSingin.classList.add("show");
  loginSinginHide.classList.add("show");
});

// menu mouse in block1

headerpointeres.addEventListener("mouseover", function () {
  headerbirthdays.style.display = "flex";
  headerbirthdays.style.marginLeft = "-5rem";
  headermainnemuhide.style.display = "flex";
});
headerpointeres.addEventListener("mouseout", function () {
  headerbirthdays.style.display = $none;
  headermainnemuhide.style.display = "none";
});
headerbirthdays.addEventListener("mouseover", function () {
  headerbirthdays.style.display = "flex";
  headerbirthdays.style.marginLeft = "-5rem";
  headermainnemuhide.style.display = "flex";
});
headerbirthdays.addEventListener("mouseout", function () {
  headerbirthdays.style.display = $none;
  headermainnemuhide.style.display = "none";
});
/////////////////////////////////////////2
headerpointeres2.addEventListener("mouseover", function () {
  headerFlowers.style.display = "flex";
  headermainnemuhide.style.display = "flex";
});
headerpointeres2.addEventListener("mouseout", function () {
  headerFlowers.style.display = $none;
  headermainnemuhide.style.display = "none";
});
headerFlowers.addEventListener("mouseout", function () {
  headerFlowers.style.display = $none;
  headermainnemuhide.style.display = "none";
});
headerFlowers.addEventListener("mouseover", function () {
  headerFlowers.style.display = "flex";
  headermainnemuhide.style.display = "flex";
});
////////////////////////////////////////////////////3
headerpointeres3.addEventListener("mouseover", function () {
  headerOccasions.style.display = "flex";
  headerOccasions.style.marginLeft = "5rem";
  headermainnemuhide.style.display = "flex";
});
headerpointeres3.addEventListener("mouseout", function () {
  headerOccasions.style.display = $none;
  headermainnemuhide.style.display = "none";
});
headerOccasions.addEventListener("mouseout", function () {
  headerOccasions.style.display = $none;
  headermainnemuhide.style.display = "none";
});
headerOccasions.addEventListener("mouseover", function () {
  headerOccasions.style.display = "flex";
  headerOccasions.style.marginLeft = "5rem";
  headermainnemuhide.style.display = "flex";
});
/////////////////////////////////////////////4
headerpointeres4.addEventListener("mouseover", function () {
  headerSympathhy.style.display = "flex";
  headerSympathhy.style.marginLeft = "10rem";
  headermainnemuhide.style.display = "flex";
});
headerpointeres4.addEventListener("mouseout", function () {
  headerSympathhy.style.display = $none;
  headermainnemuhide.style.display = "none";
});
headerSympathhy.addEventListener("mouseout", function () {
  headerSympathhy.style.display = $none;
  headermainnemuhide.style.display = "none";
});
headerSympathhy.addEventListener("mouseover", function () {
  headerSympathhy.style.display = "flex";
  headerSympathhy.style.marginLeft = "10rem";
  headermainnemuhide.style.display = "flex";
});

//form input full
function loading() {
  loader.style.display = $block;
}

function switchinputAPPLY() {
  const inputZIPCODEs = inputZIPCODE.value;
  const inputDATEs = inputDATE.value;
  const inputLOCATIONs = inputLOCATION.value;
  const inputOCCASIONs = inputOCCASION.value;
  if (inputZIPCODEs === "") {
    inputZIPCODE.style.background = "rgb(255, 162, 162)";
    ZIPCODE1.innerHTML = "ZIPCODE is it empty";
  } else {
    inputZIPCODE.style.background = "white";
    ZIPCODE1.innerHTML = "";
  }
  if (inputDATEs === "") {
    inputDATE.style.background = "rgb(255, 162, 162)";
    DATE1.innerHTML = "DATE is it empty";
  } else {
    inputDATE.style.background = "white";
    DATE1.innerHTML = "";
  }
  if (inputLOCATIONs === "") {
    inputLOCATION.style.background = "rgb(255, 162, 162)";
    LOCATION1.innerHTML = "LOCATION is it empty";
  } else {
    inputLOCATION.style.background = "white";
    LOCATION1.innerHTML = "";
  }
  if (inputOCCASIONs === "") {
    inputOCCASION.style.background = "rgb(255, 162, 162)";
    OCCASION1.innerHTML = "OCCASION is it empty";
  } else {
    inputOCCASION.style.background = "white";
    OCCASION1.innerHTML = "";
  }
  if (
    inputZIPCODEs != "" &&
    inputDATEs != "" &&
    inputLOCATIONs != "" &&
    inputOCCASIONs != ""
  ) {
    loader.style.display = $block;
    setTimeout(function () {
      loader.style.display = $none;
    }, 3000);

    setTimeout(function () {
      forminputfinish.style.display = $block;
    }, 3500);
  }
}

inputAPPLY.addEventListener("click", function () {
  switchinputAPPLY();
});

if (inputZIPCODE) {
  inputZIPCODE.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      switchinputAPPLY();
    }
  });
}
if (inputDATE) {
  inputDATE.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      switchinputAPPLY();
    }
  });
}
if (inputLOCATION) {
  inputLOCATION.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      switchinputAPPLY();
    }
  });
}
if (inputOCCASION) {
  inputOCCASION.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      switchinputAPPLY();
    }
  });
}

//copon check its yes or no
const numbercoupone = "123456";
function clickcoupones() {
  const maininputtexts = maininputtext.value;
  if (maininputtexts === "") {
    maininputtextmessage.style.display = $block;
  } else {
    if (maininputtexts === numbercoupone) {
      maininputtextmessage.style.display = $none;
      mainyesCoupon.style.display = $block;
      mainnoCoupon.style.display = $none;
    } else {
      maininputtextmessage.style.display = $none;
      mainyesCoupon.style.display = $none;
      mainnoCoupon.style.display = $block;
    }
  }
}

maininputcoupon.addEventListener("click", function () {
  clickcoupones();
});
maininputtext.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    clickcoupones();
  }
});

mainyesCoupon.addEventListener("click", function () {
  mainyesCoupon.style.display = $none;
});
mainnoCoupon.addEventListener("click", function () {
  mainnoCoupon.style.display = $none;
});

// tick animation JQ in coupone
$("button").click(function () {
  $(".check-icon").hide();
  setTimeout(function () {
    $(".check-icon").show();
  }, 10);
});

// show and hide cart
const cartBox = document.querySelector(".header__cart--boxes");
function cartadder() {
  if (cartBox.classList.contains("show")) {
    cartBox.classList.remove("show");
  } else {
    cartBox.classList.add("show");
  }
}

// adder in cart
function functionader() {
  cartBox.classList.add("show");

  const ader1 = Number($counter.value);
  const ader2 = Number($counter2.value);
  const adders = ader1 + ader2;
  $numbersAdder.innerHTML = adders;
}

// cart in add buy1
$button.addEventListener("click", function () {
  $counter.value = Number($counter.value) + 1;
});
$button2.addEventListener("click", function () {
  if ($counter.value > 0) {
    $counter.value = Number($counter.value) - 1;
  } else {
    $counter.value = 0;
  }
});

// cart in add buy2
$button1.addEventListener("click", function () {
  $counter2.value = Number($counter2.value) + 1;
});
$button3.addEventListener("click", function () {
  if ($counter2.value > 0) {
    $counter2.value = Number($counter2.value) - 1;
  } else {
    $counter2.value = 0;
  }
});

// heart in case
function clickHreart() {
  const headerBox = document.querySelector(".main__wishlist--addwishlist");
  if (headerBox.classList.contains("icon-hert")) {
    headerBox.classList.remove("icon-hert");
    headerBox.classList.add("icon-heart");
  } else {
    headerBox.classList.add("icon-hert");
    headerBox.classList.remove("icon-heart");
  }
}

// show and hide cart
function functionOpen1() {
  const mainOpen = document.querySelector(".main__box--open1");
  if (mainOpen.classList.contains("show")) {
    mainOpen.classList.remove("show");
  } else {
    mainOpen.classList.add("show");
  }
}
// function id
function padding_100(id) {
  document.getElementById(id).style.paddingBottom = "100px";
}
function padding_0(id) {
  document.getElementById(id).style.paddingBottom = "0px";
}
function hider(id) {
  document.getElementById(id).style.display = "none";
}
function shower(id) {
  document.getElementById(id).style.display = "block";
}
function marginTop(id) {
  document.getElementById(id).style.marginTop = "1rem";
}
function hietext(id) {
  document.getElementById(id).style.display = "none";
}
function showtext(id) {
  document.getElementById(id).style.display = "block";
}

// box shower click togel
mainbox1.addEventListener("click", function () {
  if (mainbox1.classList.contains("kalapala")) {
    mainbox1.classList.remove("kalapala");
  } else {
    hider("si1");
    shower("si2");
    shower("si3");
    shower("si5");
    shower("si7");
    hider("si4");
    hider("si6");
    hider("si8");
    marginTop("si2");
    hietext("textbox3");
    hietext("textbox2");
    hietext("textbox4");
    showtext("textbox1");
    mainbox1.classList.add("kalapala");
    mainbox2.classList.remove("kalapala");
    mainbox3.classList.remove("kalapala");
    mainbox4.classList.remove("kalapala");
  }
});

mainbox2.addEventListener("click", function () {
  if (mainbox2.classList.contains("kalapala")) {
    mainbox2.classList.remove("kalapala");
  } else {
    hider("si3");
    shower("si4");
    marginTop("si4");
    shower("si1");
    shower("si5");
    shower("si7");
    hider("si2");
    hider("si6");
    hider("si8");
    hietext("textbox1");
    hietext("textbox3");
    hietext("textbox4");
    showtext("textbox2");
    mainbox2.classList.add("kalapala");
    mainbox1.classList.remove("kalapala");
    mainbox3.classList.remove("kalapala");
    mainbox4.classList.remove("kalapala");
  }
});

mainbox3.addEventListener("click", function () {
  if (mainbox3.classList.contains("kalapala")) {
    mainbox3.classList.remove("kalapala");
  } else {
    hider("si5");
    shower("si6");
    marginTop("si6");
    shower("si1");
    shower("si3");
    shower("si7");
    hider("si2");
    hider("si4");
    hider("si8");
    hietext("textbox1");
    hietext("textbox2");
    hietext("textbox4");
    showtext("textbox3");
    mainbox3.classList.add("kalapala");
    mainbox1.classList.remove("kalapala");
    mainbox2.classList.remove("kalapala");
    mainbox4.classList.remove("kalapala");
  }
});

mainbox4.addEventListener("click", function () {
  if (mainbox4.classList.contains("kalapala")) {
    mainbox4.classList.remove("kalapala");
  } else {
    hider("si7");
    shower("si8");
    marginTop("si8");
    shower("si1");
    shower("si3");
    shower("si5");
    hider("si2");
    hider("si4");
    hider("si6");
    hietext("textbox1");
    hietext("textbox2");
    hietext("textbox3");
    showtext("textbox4");
    mainbox4.classList.add("kalapala");
    mainbox1.classList.remove("kalapala");
    mainbox2.classList.remove("kalapala");
    mainbox3.classList.remove("kalapala");
  }
});

// slider flowers
let i;
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = $none;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = $block;
  dots[slideIndex - 1].className += " active";
}
function num(num) {
  console.log(num);
}
setInterval(function () {
  plusSlides(1);
}, 2000);

// slider srcrool
const sliderdiv = document.getElementById("mainslider");
let admargin = 0;

// const mainsliderss = sliderdiv.children;
// for(let slid = 0 ; slid < mainsliderss.length; slid++){
//   console.log(slid)
// }

function arrowmarg() {
  admargin = admargin - 10;
  if (admargin >= -40) {
    document.getElementById("mainslider").style.marginLeft = admargin + "rem";
  } else {
    admargin = -40;
  }
}

function arrowmargs() {
  admargin = admargin + 10;
  if (admargin <= 0) {
    document.getElementById("mainslider").style.marginLeft = admargin + "rem";
  } else {
    admargin = 0;
  }
}

// // hover
// function cartadder() {
//   const clickhover = document.getElementsByClassName("main__box");
//   if (clickhover.classList.contains("show")) {
//     clickhover.classList.remove("show");
//   } else {
//     clickhover.classList.add("show");
//   }
// }

// star rating/////////////////////////////////////////
const container = document.querySelector(".rating");
const items = container.querySelectorAll(".rating-item");
container.onclick = (e) => {
  const element = e.target.classList;
  // use different star
  if (!element.contains("active")) {
    items.forEach(
      // reset star
      (item) => item.classList.remove("active")
    );
    // add star
    element.add("active");
  }
};

// star2 rating/////////////////////////////////////////
const container2 = document.querySelector(".rating2");
const items2 = container2.querySelectorAll(".rating2-item2");
container2.onclick = (e) => {
  const element = e.target.classList;
  // use different star2
  if (!element.contains("active")) {
    items2.forEach(
      // reset star2
      (item) => item.classList.remove("active")
    );
    // add star2
    element.add("active");
  }
};

// heart in click

var heart = document.querySelector(".heart");
var x = 0;
$(document).ready(function () {
  $(".content").click(function () {
    $(heart).toggleClass("heart-active");
    y = x % 2;
    x++;
    // console.log(y);
    // console.log(x);
    if (y == 0) {
      contenernum.innerHTML = 1;
    } else {
      contenernum.innerHTML = 0;
    }
  });
});

// Costomer Review about Gerbera Daisy vasa a2321
function maininputreviewpsold() {
  const maininputreviews = maininputreview.value;
  const maininputwrites = maininputwrite.value;
  if (maininputreviews === "") {
    maininputsendreviewer.style.display = $block;
    maininputsendreview.innerHTML = "pleas write in Costomer";
  } else if (maininputwrites === "") {
    maininputsendreviewer.style.display = $block;
    maininputsendreview.innerHTML = "pleas write in text in Costomer";
  } else if (maininputreviews === "" && maininputwrites === "") {
  } else {
    maininputsendreviewer.style.display = "";
    maininputsendreview.innerHTML = "";
  }
  if (maininputreviews != "" && maininputwrites != "") {
    loaderCostomer.style.display = $block;
    setTimeout(function () {
      loaderCostomer.style.display = $none;
    }, 3000);
    setTimeout(function () {
      maininputsendreviewer.innerHTML = "massege it's send";
    }, 3500);
  }
}
maininputapply.addEventListener("click", function () {
  maininputreviewpsold();
});

maininputreview.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    maininputreviewpsold();
  }
});

// document.getElementById("customerReviewForm").onsubmit = function (e) {
//   e.preventDefault();
// };

// box 2 in question ask me
const maininputwritetextarea = document.getElementById(
  "main__input--writetextarea"
);
const maininputapplytextarea = document.getElementById(
  "main__input--applytextarea"
);
const maininputQUESTIONtextarea = document.getElementById(
  "main__input--QUESTIONtextarea"
);
const maininputquestiontextarea = document.getElementById(
  "main__input--questiontextarea"
);
const loaderquestion = document.getElementById("loader__question");

function functionmaininputwritetextareas() {
  const maininputwritetextareas = maininputwritetextarea.value;
  if (maininputwritetextareas === "") {
    maininputQUESTIONtextarea.style.display = $block;
    maininputQUESTIONtextarea.innerHTML = "pleas Enter Ask a QUESTION";
    maininputwritetextarea.style.background = "rgb(255 203 203)";
  } else if (maininputwritetextareas != "") {
    loaderquestion.style.display = $block;
    setTimeout(function () {
      loaderquestion.style.display = $none;
    }, 3000);
    setTimeout(function () {
      maininputQUESTIONtextarea.style.display = $none;
      maininputquestiontextarea.innerHTML = "thank you for a QUESTION";
      maininputwritetextarea.style.background = "rgb(215 255 190)";
    }, 3500);
  }
}
maininputapplytextarea.addEventListener("click", function () {
  functionmaininputwritetextareas();
});

// chenge login and registers
usernameregister.addEventListener("click", function () {
  if (font9formregister.classList.contains("show")) {
    font9formregister.classList.remove("show");
    font9formlogin.classList.add("show");
  }
});
usernamelogin.addEventListener("click", function () {
  if (font9formlogin.classList.contains("show")) {
    font9formlogin.classList.remove("show");
    font9formregister.classList.add("show");
  }
});


// exit ALL with esc for click
document.addEventListener("keydown", myFunction);
function myFunction(){
  loginSingin.classList.add("show");
  loginSinginHide.classList.add("show");
  cartBox.classList.add("show");
  
}
