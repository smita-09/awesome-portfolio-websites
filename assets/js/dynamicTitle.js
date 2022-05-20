window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "Hello, there!";

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      toggle();
    } else {
      document.title = pageTitle;
    }
  });

  document.addEventListener("visibilitychange", function (e) {
    if (!document.hidden) {
      document.title = pageTitle;
      favicon.href = "./assets/images/dp_female.svg";
    }
  });

  function toggle() {
    if (document.title === attentionMessage) {
      document.title = pageTitle;
      favicon.href = "./assets/images/dp_female.svg";
    } else {
      document.title = attentionMessage;
      // favicon.href = "./assets/images/folded.png";
    }
  }
};
