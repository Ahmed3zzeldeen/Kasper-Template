// #################### Start Slider ########################## //
let sliderImages = Array.from(document.querySelectorAll('.landing img'));

// Get number of slides
let slideCount = sliderImages.length;

// Set Current Slide
let currentSlide = 2;

// Previous and Next Buttons
let nextButton = document.querySelector(".next-btn");
let prevButton = document.querySelector(".prev-btn");

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlid;
prevButton.onclick = prevSlid;

document.addEventListener("keyup", function (event) {
    switch (event.key) {
        case 'ArrowRight':
            nextButton.onclick();
            break;
        case 'ArrowLeft':
            prevButton.onclick();
            break;
        default:
            break;
    }
});

// Create The Main UL Element
let theBulletElement = document.createElement('ul');
// Set class On Create UL Element
theBulletElement.setAttribute('class', 'bullets');

// Create List Items Based On Slides Count
for(let i = 1; i <= slideCount ; i++ ){
    // create the li
    let theBulletItems = document.createElement('li');
    theBulletItems.setAttribute('data-index', i);
    // Append Items to The Main Ul List 
    theBulletElement.appendChild(theBulletItems);
}

// Add The Created Ul Element to The Page
document.querySelector('.landing').appendChild(theBulletElement);

// Get The new Created Ul 
let theBulletsCreatedUl = document.querySelector('.bullets');

// Get Pagination Items
let theBulletsItems = Array.from(document.querySelectorAll('.landing .bullets li'));

// Loop Through All Bullets Items
for (let i = 0; i < theBulletsItems.length; i++) {
    theBulletsItems[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

// Trigger The Checker Function
theChecker();

// Next Slide function
function nextSlid() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}

// Previous Slide function
function prevSlid() {
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}


// Create The Checker Function
function theChecker() {
    // Remove All Active Classes
    removeAllActive();
    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add('active');
    // Set Active Class On Current Pagination Item
    theBulletsCreatedUl.children[currentSlide - 1].classList.add('active');
    // Check if Current Slide is The First
    if (currentSlide == 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    // Check if Current Slide is The last
    if (currentSlide == slideCount) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}


//  Remove All Active Classes form Images And pagination bullets
function removeAllActive() {
    // Loop Through Images
    sliderImages.forEach(function(img) {
        img.classList.remove('active');
    });
    // Loop Through Bullets
    theBulletsItems.forEach(function(bullet) {
        bullet.classList.remove('active');
    });
}

// #################### End Slider ########################## //
// #################### Start Toggle Menu ########################## //
let arrowUp = document.querySelector(".arrow-up");
    window.onscroll = function () {
        if (window.scrollY >= 70) {
        arrowUp.classList.add('active');
        } else {
        arrowUp.classList.remove('active');
        }
    }

let toggleMenuBtn = document.querySelector('header nav .toggle-menu');

toggleMenuBtn.onclick = function(){
    if (toggleMenuBtn.classList.contains('active')) {
        toggleMenuBtn.classList.remove('active');
    } else {
        toggleMenuBtn.classList.add('active');
    }
}
// #################### End Toggle Menu ########################## //

let shuffleItems = Array.from(document.querySelectorAll('.portfolio .shuffle li'));
let portfolioItems = Array.from(document.querySelectorAll('.portfolio .imgs-container .box'));
let portfolioMoreBtn = document.querySelector('.portfolio .more');

shuffleItems.forEach( shuffleItem => {
    shuffleItem.onclick = function () {
        if (!this.classList.contains('active')) {
            shuffleItems.forEach(element => {
                element.classList.remove('active');
            });
            this.classList.add('active');
            // Add class hidden for all portItems if it's not select
            portfolioItems.forEach(portItem => {
                if (!shuffleItem.classList.contains(portItem.getAttribute('data-catagories'))) {
                    portItem.classList.add('hidden')
                } else if (shuffleItem.classList.contains('cataAll')) {
                    for (let i = 0; i < 8; i++) {
                        const element = portfolioItems[i];
                        element.classList.remove('hidden')
                    }    
                }
                else {
                    portItem.classList.remove('hidden')
                }
            });
        }
    }
});

portfolioMoreBtn.onclick = function () {
    if (portfolioMoreBtn.classList.contains('less-btn')) {
        portfolioItems.forEach(portItem => {
            if (portItem.classList.contains('hidden')) {
                portItem.classList.remove('hidden');
            }
        });
        for (let i = 7 ; i < portfolioItems.length; i++) {
                const element = portfolioItems[i];
                element.classList.add('hidden')
            }
        portfolioMoreBtn.innerHTML = "MORE";
        portfolioMoreBtn.classList.remove('less-btn');
    } else {
        portfolioItems.forEach(portItem => {
            if (portItem.classList.contains('hidden')) {
                portItem.classList.remove('hidden');
            }
        });
        portfolioMoreBtn.innerHTML = "Show Less";
        portfolioMoreBtn.classList.add('less-btn')
    }
}

