import "./scss/style.scss";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./css/style.css";
// import 'jquery/dist/jquery.min';   //this import dosn't work
import $ from "jquery"; // this is alternative import
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/js/all.min";

$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $(".add-to-cart-btn").on("click", function () {
        alert("أضيف المُنتج إلى السلة");
    });
});
