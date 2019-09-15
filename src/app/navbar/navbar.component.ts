import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(".menu-button").click(function() {
      $("#sideMenu").animate({ marginRight: 0 }, 500);
    });
    $(document).mouseup(function(e) {
      if (
        $(e.target).closest("#sideMenu").length === 0 &&
        $("#sideMenu").css("margin-right") != "-304px"
      ) {
        $("#sideMenu").animate({ marginRight: "-304px" }, 500);
      }
    });
    $(".close-btn").click(function() {
      $("#sideMenu").animate({ marginRight: "-304px" }, 500);
    });

    $(document).ready(function() {
      $("#blackLayer").fadeOut(700);
    });
    //($("#sideMenu").css("margin-right") == "-304px")
  }
}
