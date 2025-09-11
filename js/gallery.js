// Gallery functionality for project showcase
class ProjectGallery {
    constructor() {
        this.currentSlide = 0;
        this.images = [];
        this.galleryModal = null;
        this.slider = null;
        this.init();
    }

    init() {
        // Create gallery modal HTML
        this.createGalleryModal();
        
        // Bind events
        this.bindEvents();
    }

    createGalleryModal() {
        const modalHTML = `
            <div class="gallery-modal" id="galleryModal">
                <div class="gallery-container">
                    <div class="gallery-header">
                        <h3 class="gallery-title" id="galleryTitle">Project Gallery</h3>
                        <button class="gallery-close" id="galleryClose">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="gallery-content">
                        <div class="gallery-slider" id="gallerySlider"></div>
                        <button class="gallery-navigation gallery-prev" id="galleryPrev">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="gallery-navigation gallery-next" id="galleryNext">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        <div class="gallery-indicators" id="galleryIndicators"></div>
                        <div class="gallery-counter" id="galleryCounter">1 / 1</div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        this.galleryModal = document.getElementById('galleryModal');
        this.slider = document.getElementById('gallerySlider');
    }

    bindEvents() {
        // Close modal events
        document.getElementById('galleryClose').addEventListener('click', () => this.closeGallery());
        this.galleryModal.addEventListener('click', (e) => {
            if (e.target === this.galleryModal) this.closeGallery();
        });

        // Navigation events
        document.getElementById('galleryPrev').addEventListener('click', () => this.prevSlide());
        document.getElementById('galleryNext').addEventListener('click', () => this.nextSlide());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.galleryModal.classList.contains('active')) return;
            
            switch(e.key) {
                case 'Escape':
                    this.closeGallery();
                    break;
                case 'ArrowLeft':
                    this.prevSlide();
                    break;
                case 'ArrowRight':
                    this.nextSlide();
                    break;
            }
        });

        // Touch/swipe support
        this.addSwipeSupport();
    }

    addSwipeSupport() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        this.galleryModal.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        this.galleryModal.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            this.handleSwipe(startX, startY, endX, endY);
        });
    }

    handleSwipe(startX, startY, endX, endY) {
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const minSwipeDistance = 50;

        // Check if it's a horizontal swipe
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) {
                this.prevSlide();
            } else {
                this.nextSlide();
            }
        }
    }

    openGallery(projectTitle, images) {
        this.images = images;
        this.currentSlide = 0;
        
        // Update title
        document.getElementById('galleryTitle').textContent = `${projectTitle} - Gallery`;
        
        // Clear and populate slider
        this.slider.innerHTML = '';
        images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'gallery-slide';
            slide.innerHTML = `<img src="${image}" alt="${projectTitle} Screenshot ${index + 1}" class="gallery-image">`;
            this.slider.appendChild(slide);
        });

        // Create indicators
        this.createIndicators();
        
        // Update counter
        this.updateCounter();
        
        // Show modal
        this.galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    createIndicators() {
        const indicatorsContainer = document.getElementById('galleryIndicators');
        indicatorsContainer.innerHTML = '';
        
        this.images.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = 'gallery-indicator';
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => this.goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });
    }

    updateCounter() {
        const counter = document.getElementById('galleryCounter');
        counter.textContent = `${this.currentSlide + 1} / ${this.images.length}`;
    }

    updateSlider() {
        const translateX = -this.currentSlide * 100;
        this.slider.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        document.querySelectorAll('.gallery-indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });
        
        this.updateCounter();
    }

    nextSlide() {
        if (this.currentSlide < this.images.length - 1) {
            this.currentSlide++;
            this.updateSlider();
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlider();
        }
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlider();
    }

    closeGallery() {
        this.galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.projectGallery = new ProjectGallery();
    
    // Bind project card clicks and gallery trigger buttons
    document.addEventListener('click', (e) => {
        const projectCard = e.target.closest('.project-card-enhanced');
        const galleryTrigger = e.target.closest('.gallery-trigger-btn');
        
        if (projectCard && !galleryTrigger) {
            const projectTitle = projectCard.querySelector('.project-title').textContent;
            const images = projectCard.dataset.images ? JSON.parse(projectCard.dataset.images) : [];
            
            if (images.length > 0) {
                window.projectGallery.openGallery(projectTitle, images);
            }
        } else if (galleryTrigger) {
            const projectCard = galleryTrigger.closest('.project-card-enhanced');
            if (projectCard) {
                const projectTitle = projectCard.querySelector('.project-title').textContent;
                const images = projectCard.dataset.images ? JSON.parse(projectCard.dataset.images) : [];
                
                if (images.length > 0) {
                    window.projectGallery.openGallery(projectTitle, images);
                }
            }
        }
    });
});
