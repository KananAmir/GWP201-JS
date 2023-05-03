// let btn = document.querySelector(".btn");

// console.log(btn);

// console.log($(".btn"));
// console.log($("#heading"));

$(".btn").click(function () {
  $("#heading").css({ color: "red", backgroundColor: "green" });
  //   $(".box").hide();
  //   $(".box").show();
  $(".box").toggle();
});

// $("form").submit(function () {});
$("input").keyup(function (e) {
  //   console.log(e.target.value);
  //   console.log($("input").val());
  //   console.log($(".btn").text());
  console.log($(".btn").text(e.target.value));
});

// $(".btn").on("click", function () {
//   console.log("hello");
// });

// $(".fade").on("click", function () {
//   //   $(".content").fadeOut();
//   //   $(".content").fadeIn();
//   $(".content").fadeToggle(3000);
// });

$(".fade").on("click", function () {
  //   $(".content").slideUp(3000, function () {
  //     console.log("finished");
  //   });
  $(".content").slideToggle(3000, function () {
    console.log("finished");
  });
});

// $("h2").css("color", "red").slideUp(2000).slideDown(2000);
