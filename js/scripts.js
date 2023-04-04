

window.onload = function () {
  var MicroModal = window.MicroModal;
  MicroModal.init({onShow: modal => console.info(`${modal.id} is shown`)});
  // document.getElementById("modal-1").classList.add("is-open");
  let slider = window.tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
    responsive: {
        800: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
  });
  MicroModal.show("modal-1");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  //document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myDropdown").style.display = "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  console.log(e.target);
  if (!document.getElementById('menu-drop').contains(e.target)) {
  var myDropdown = document.getElementById("myDropdown");
    // if (myDropdown.classList.contains('show')) {
    //   myDropdown.classList.remove('show');
    // }
    myDropdown.style.display = "none";
  }
}
