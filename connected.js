function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function translationOptionOn() {
  document.getElementById("box").style.display = "block";
  document.getElementById("language-box").style.display = "block";
  document.getElementById("language-table").style.display = "grid";
  document.getElementById("deleter").style.display = "block";
}

function translationOptionOff() {
  document.getElementById("box").style.display = "none";
  document.getElementById("deleter").style.display = "none";
}

class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <ul>
        <li style="float:left"><a class="active" href="index.html">Home</a></li>
        <button class="lang-btn" onclick = "translationOptionOn()">
            <span>Language: English</span>
        </button>
        
        <li class="dropdown" style="float:right">
          <a class="active" href="resources.html">Resources</a>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>

        <li class="dropdown" style="float:right">
          <a class="active" href="connect.html">Connect</a>
          <div class="dropdown-content" style="float:right;">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>

        <li class="dropdown" style="float:right">
          <a class="active" href="jobs.html">Jobs</a>
          <div class="dropdown-content" style="float:right;">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>

        <li class="dropdown" style="float:right">
          <a class="active" href="news.html">News</a>
          <div class="dropdown-content" style="float:right;">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>

        <li class="dropdown" style="float:right">
          <a class="active" href="about.html">About</a>
          <div class="dropdown-content" style="float:right;">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
      </ul>
      
      <div id="box" onclick = "translationOptionOff()">
        <div id = "language-box" onclick = "translationOptionOff()">
          <ul id = "language-table" onclick = "translationOptionOff()">
              <li id = "language">
                  <a>English</a>
              </li>
              <li id = "language">
                  <a>Español</a>
              </li>
              <li id = "language">
                  <a>中文</a>
              </li>
          </ul>
        </div>
      </div>
      
      <div id = "deleter" onclick = "translationOptionOff()"></div>
    `;
    }
  }


  customElements.define('header-component', Header);

  class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <footer>
        Created by: University of Michigan Tech 4 Social Good
        <button id="contactButton" style="float:right">
          Contact Us
        </button>
      <div id="myPopup" class="popup">
        <div class="popup-content">
          <h3 style="text-align:center">
            Contact Us
          </h3>
          <p>Email: mandyche@umich.edu</p>
          <button id="closePopup">
            Close
          </button>
        </div>
      </div>

     
      </footer>
    `;
    }
  }

  customElements.define('footer-component', Footer);

  contactButton.addEventListener("click", function () {
    myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
        myPopup.classList.remove("show");
    }
});