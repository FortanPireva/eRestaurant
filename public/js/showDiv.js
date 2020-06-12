$("#remove").click(function (e) {
  console.log("clicked");

  $(".showVideoDiv").remove();
});

setTimeout(() => {
  console.log("qa kari");
  $(".showVideoDiv").css("visibility", "visible");
}, 2000);
