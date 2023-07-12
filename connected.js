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

class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      
      <ul>
          <button class="btn" onclick = "window.location.href='index.html'"><i class="fa fa-home"></i></button>
          <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Translate</button>
            <div id="myDropdown" class="dropdown-content">
              <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
              <a href="#about">English</a>
              <a href="#base">Espanol</a>
              <a href="#blog">Zhong Wen</a>
            </div>
          </div>
          <li style="float:right"><a class="active" href="resources.html">Resources</a></li>
          <li style="float:right"><a class="active" href="connect.html">Connect</a></li>
          <li style="float:right"><a class="active" href="jobs.html">Jobs</a></li>
          <li style="float:right"><a class="active" href="news.html">News</a></li>
          <li style="float:right"><a class="active" href="about.html">About</a></li>
      </ul>
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
        <button style='float:right'>Contact Us</button>
      </footer>
    `;
    }
  }

  customElements.define('footer-component', Footer);

