import { certificates } from "../data/data.js";
import Component from "./Mount.js";

class Certificates extends Component{
    render(){
        const certificateContainer=document.createElement("div");
        const certificateHeading=document.createElement("h1");
        const certificateCarousel=document.createElement("div");
        const carouselInner=document.createElement("div");
        const certificatePrevious=document.createElement("a");
        const certificateNext=document.createElement("a");

        certificateContainer.id="certificates";
        certificateHeading.classList.add("certificateHeading");
        
        certificateCarousel.id="carouselExampleControls";
        certificateCarousel.classList.add("carousel");
        certificateCarousel.classList.add("carousel-certificate");
        certificateCarousel.classList.add("slide");
        certificateCarousel.dataset.interval='false';

        carouselInner.classList.add("carousel-inner")
        carouselInner.classList.add("carousel-inner-certificate")

        certificateHeading.innerText=certificates.certificateHeading;
        certificatePrevious.classList.add("carousel-control-prev");
        certificatePrevious.href="#carouselExampleControls";
        certificatePrevious.role="button";
        certificatePrevious.dataset.slide="prev";
        certificateNext.classList.add("carousel-control-next")
        certificateNext.href="#carouselExampleControls";
        certificateNext.role="button";
        certificateNext.dataset.slide="next";

        certificatePrevious.innerHTML=`<span class="carousel-control-prev-icon certificate-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>`;
        certificateNext.innerHTML=` <span class="carousel-control-next-icon certificate-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>`;

        certificates.certificates.forEach((certificate,i)=>{
            const carouselItem=document.createElement("div");
            const certificateImg=document.createElement("img");
            const certificateDescription=document.createElement("h3");

            carouselItem.classList.add("carousel-item");
            carouselItem.classList.add("carousel-item-certificate");
            if(i===0){
                console.log("active")
                carouselItem.classList.add("active");
            }

            certificateImg.classList.add("d-block");
            certificateImg.classList.add("w-60");

            certificateImg.src=certificate.imageLink;
            certificateDescription.innerText=certificate.imageCaption;

            carouselInner.appendChild(carouselItem);
            carouselItem.appendChild(certificateImg);
            carouselItem.appendChild(certificateDescription);
        })

        certificatePrevious.addEventListener("click", () => {
            $(".carousel-certificate").carousel("prev");
          });
          
          certificateNext.addEventListener("click", () => {
            $(".carousel-certificate").carousel("next");
          });

        certificateContainer.appendChild(certificateHeading)
        certificateContainer.appendChild(certificateCarousel);
        certificateCarousel.appendChild(carouselInner);
        certificateCarousel.appendChild(certificatePrevious)
        certificateCarousel.appendChild(certificateNext)
        return certificateContainer;
    }
}

export{Certificates};