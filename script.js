let likesGiven = 0;

setInterval(() => {
  let heart = document.getElementsByClassName(
      "glyphsSpriteHeart__outline__24__grey_9"
    ),
    arrow = document.querySelector(".coreSpriteRightPaginationArrow");
  if (heart[1]) {
    heart = heart[1].parentElement;
    likesGiven++, heart.click();
  }
  arrow.click();
  console.log(`You've liked ${likesGiven} post(s)!`);
}, 1000);

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "script.js" });
});
