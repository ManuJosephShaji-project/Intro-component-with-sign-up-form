var textWrapper = document.querySelector(".ml6 .letters");
const originalText = textWrapper.textContent;
const letter_origin = document.querySelector(".letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["3em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  });

  setTimeout(()=>{
    letter_origin.textContent = originalText;
  },2000)
   
var textWrapper2 = document.querySelector(".ml3");
textWrapper2.innerHTML = textWrapper2.textContent.replace( /\S/g,"<span class='letter'>$&</span>");

anime.timeline({ loop: 1 }).add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2000,
    delay: (el, i) => 10 * (i + 1),
});
