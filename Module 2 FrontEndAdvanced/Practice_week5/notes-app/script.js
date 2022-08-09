"use strict";
const baseURL = "http://localhost:3000";

$(document).ready(function () {
  $("#show-btn").on("click", function (event) {
    $(this).hide();
    $("#hide-btn").fadeIn();
    $(".form").fadeIn();
    $(".lists").hide();
    event.preventDefault();
  });
  $("#hide-btn").on("click", function (event) {
    $(this).hide();
    $("#show-btn").fadeIn();
    $(".form").hide();
    $(".lists").fadeIn();
    event.preventDefault();
  });
  $("#delete-btn").on("click", function (event) {
    $(this).hide();
    event.preventDefault();
  });

  // creating new notes

  $(".add-btn").click(function (event) {
    var formTitle = $(".formTitle").val();
    var formAmount = $(".formAmount").val();
    var formDate = $(".formDate").val();
    var dateSplit = formDate.split("-");
    var yearDate = dateSplit[0];

    fetch(`${baseURL}/${yearDate}`, {
      method: "POST",
      body: JSON.stringify({
        title: formTitle,
        amount: formAmount,
        date: formDate,
      }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Result : ", result);
        display();
      })
      .catch(console.error);

    var div = document.createElement("div");
    div.app;
    div.innerHTML;

    event.preventDefault();
  });

  $(".cancel-btn").click(function () {
    fetch(`${baseURL}`)
      .then((response) => response.json())
      .then((users) => console.log(users))
      .catch(console.error);
  });

  function display(x) {
    var fulDta;
    $(".lists").html("");
    fetch(`$baseURL`)
      .then((response) => response.json())
      .then((users) => {
        for (let i = 0; i < users.length; i++) {
          console.log(users[i]);
          console.log("yes", users[i].year);
          if (x == users[i].year) {
            console.log("entered");
            $("lists").append(`<div class="col-sm-4">
            <div class="card p-0">
              <div
                style="
                  background-color: rgb(234, 234, 234);
                  border-radius: 0.3rem 0.3rem 0 0;
                  border-bottom: 0.1rem rgb(196, 196, 196) solid;
                  height: 3rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding-top: 0.5rem;
                "
              >
                <h5 class="card-title text-cente" style="font-weight: 700">
                ${users[i].title}
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text">Amount : $ ${users[i].amount}</p>
                <p class="card-text">Date : ${users[i].date}</p>
                <button
                  type="submit"
                  class="btn btn-primary d-grid col-12 delete-btn"
                  style="
                    font-weight: 500;
                    height: 2rem;
                    border-radius: 0.2rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    background-color: rgb(223, 65, 65);
                    border: 0;
                  "
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>`);
          }
        }
      })
      .catch(console.error);
  }
  $(".years").change(function () {
    console.log("change");
    console.log($(this).val());
    var sr = $(this).val();
    display(sr);
  });
});
