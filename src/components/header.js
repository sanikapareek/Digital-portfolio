import { header } from '../data/data.js';
import Component from './Mount.js';

class Header extends Component{
    
    render(){
        const headerContainer=document.createElement("nav");
        const container=document.createElement("div");
        const headerLogo=document.createElement("a")
        const headerLogoImg=document.createElement("img");
        const toggleBtn=document.createElement("button");
        const collapseNavbar=document.createElement("div");
        const navLinks=document.createElement("ul");

        headerContainer.classList.add("navbar");
        headerContainer.classList.add("navbar-expand-lg");
        headerContainer.classList.add("navbar-light");
        headerContainer.classList.add("bg-light");

        container.classList.add("container-fluid");

        headerLogo.classList.add("navbar-brand")
        headerLogo.href=`${header.logo_href}`

        headerLogoImg.classList.add("logoImg")
        headerLogoImg.src=`${header.logo}`

        toggleBtn.classList.add("navbar-toggler");
        toggleBtn.classList.add("navbar-toggler-right");
        toggleBtn.type="button";
        toggleBtn.dataset.toggle="collapse";
        toggleBtn.dataset.target="#navbarSupportedContent";
        toggleBtn.setAttribute("aria-controls","navbarSupportedContent");
        toggleBtn.ariaExpanded="false";
        toggleBtn.ariaLabel="Toggle navigation";
        toggleBtn.innerHTML=`<span class="navbar-toggler-icon"></span>`

        collapseNavbar.classList.add("collapse");
        collapseNavbar.classList.add("navbar-collapse");
        collapseNavbar.id="navbarSupportedContent";

        navLinks.classList.add("navbar-nav");
        navLinks.classList.add("ml-auto");
        navLinks.classList.add("mb-2");
        navLinks.classList.add("mb-lg-0");


        header.nav.forEach((navLink,i)=>{
            const navLinkTitle=document.createElement("li");
            const navLinkHref=document.createElement("a");

            navLinkTitle.classList.add("nav-item");
            navLinkHref.classList.add("nav-link");
            navLinkHref.classList.add("active")
            navLinkHref.ariaCurrent="page";
            navLinkHref.innerText=navLink.title;
            navLinkHref.href=`${navLink.href}`;

            navLinks.appendChild(navLinkTitle);
            navLinkTitle.appendChild(navLinkHref);
        })

        headerContainer.appendChild(container);
        container.appendChild(headerLogo);
        headerLogo.appendChild(headerLogoImg);
        container.appendChild(toggleBtn);
        container.appendChild(collapseNavbar);
        collapseNavbar.appendChild(navLinks);

        $(document).ready(function() {
            // Close the navbar on mobile when a menu item is clicked
            $('.navbar-nav>li>a').on('click', function(){
              $('.navbar-collapse').collapse('hide');
            });
          });

        

        return headerContainer;
    }
}
export {Header}
