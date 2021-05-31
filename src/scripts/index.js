import 'regenerator-runtime';
import '../styles/main.css';
import data from '../data/DATA.json';

console.log('Hello! Welcome ^^');
console.log(data);

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Makanan", "Minuman", "Kue Tart", "Salad"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Makanan", "Minuman", "Kue Tart", "Salad"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

const elemenRestaurant = document.querySelector("#restoran");

fetch(data)
    .then((data) => data.json())
    .then((restaurants) => getData(restaurants));

const getData = (data) => {
    data.restaurants.forEach(restoran => {
        elemenRestaurant.innerHTML += `        
        <section class="services">
            <div class="max-width">
                <h2 class="title">Our services</h2>
                <div class="serv-content">
                    <div class="card">
                        <div class="box">
                            <img src="${restoran.pictureId}" width="220" alt="">
                            <div class="text">${restoran.name}</div>
                            <div class="text">${restoran.rating}</div>
                            <p>${restoran.description}</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <img src="${restoran.pictureId}" width="220" alt="">
                            <div class="text">${restoran.name}</div>
                            <div class="text">${restoran.rating}</div>
                            <p>${restoran.description}</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <img src="${restoran.pictureId}" width="220" alt="">
                            <div class="text">${restoran.name}</div>
                            <div class="text">${restoran.rating}</div>
                            <p>${restoran.description}</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </section>  
        `;
    });
}