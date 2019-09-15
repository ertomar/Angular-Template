import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  imageUrlArray = [
    "assets/images/slide01.jpg",
    "assets/images/slide02.jpg",
    "assets/images/slide03.jpg",
    "assets/images/slide04.jpg",
    "assets/images/slide05.jpg"
  ];

  constructor() {}

  ngOnInit() {
    let i = 0;
    //Whighten The first dot.
    $(".slide-show .indicator-dots ul li span")
      .eq(0)
      .css("backgroundColor", "#fff");

    //slide show function, fades out the old slide and simultaneously fades in the new one;
    let slideShow = () => {
      changePrevSlide(i);
      i++;
      i %= 5;
      changeNextSlide(i);
    };
    //set interval for slide change
    let slideInterval = setInterval(slideShow, 5000);
    $(".slide-show .indicator-dots ul li").click(function(e) {
      let newSlideIndex = parseInt(e.target.textContent);
      if (i != newSlideIndex) {
        changePrevSlide(i);
        changeNextSlide(newSlideIndex);
        i = newSlideIndex;
      }
      //clear the interval and set a new one to stay on the slide for a new 5 seconds
      clearInterval(slideInterval);
      slideInterval = setInterval(slideShow, 5000);
    });

    function changePrevSlide(i: number) {
      //hide the old slide.
      $(".slide-show")
        .children("article")
        .eq(i)
        .fadeOut(500);
      //Change the old slide dot to gray color.
      $(".slide-show .indicator-dots ul li span")
        .eq(i)
        .css("backgroundColor", "rgba(255, 255, 255, 0.35)");
    }
    function changeNextSlide(i: number) {
      //Whiten the new slide dot.
      $(".slide-show .indicator-dots ul li span")
        .eq(i)
        .css("backgroundColor", "#fff");

      //show the new slide
      $(".slide-show")
        .children("article")
        .eq(i)
        .fadeIn(500);
    }
  }
}
