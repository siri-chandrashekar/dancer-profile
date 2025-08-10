import './style.css'

// Page content definitions
const pages = {
  home: `
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to Siri's Bharatanatyam Journey</h1>
        <p class="hero-subtitle">Experience the divine art of classical Indian dance</p>
        <div class="hero-image">
          <img src="https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg" alt="Bharatanatyam Dancer" />
        </div>
      </div>
    </section>
  `,
  
  about: `
    <section class="page-section">
      <div class="container">
        <h1 class="page-title">About Siri</h1>
        
        <div class="about-content">
          <div class="about-text">
            <h2>My Journey with Bharatanatyam</h2>
            <p>Bharatanatyam has been my spiritual and artistic companion for over two decades. What began as childhood curiosity has evolved into a profound connection with this ancient art form that speaks through movement, expression, and devotion.</p>
            
            <p>My training under renowned gurus has shaped not just my technique, but my understanding of the deeper philosophical aspects of this classical dance. Each performance is a prayer, each movement a story, and each expression a glimpse into the divine.</p>
            
            <h3>Performance Philosophy</h3>
            <p>I believe Bharatanatyam is not just entertainment but a medium of spiritual communication. Through precise mudras, expressive abhinaya, and rhythmic patterns, I strive to transport audiences into the sacred world of classical Indian tradition.</p>
          </div>
          
          <div class="about-image">
            <img src="https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg" alt="Bharatanatyam Performance" />
          </div>
        </div>

        <div class="accolades-section">
          <h2>Accolades & Awards</h2>
          <div class="awards-grid">
            <div class="award-card">
              <div class="award-icon">🏆</div>
              <h3>National Dance Competition</h3>
              <p>First Place - Classical Dance Category</p>
              <span class="award-year">2023</span>
            </div>
            <div class="award-card">
              <div class="award-icon">🎭</div>
              <h3>Cultural Heritage Award</h3>
              <p>Recognition for preserving traditional arts</p>
              <span class="award-year">2022</span>
            </div>
            <div class="award-card">
              <div class="award-icon">⭐</div>
              <h3>Excellence in Abhinaya</h3>
              <p>Outstanding expression and storytelling</p>
              <span class="award-year">2021</span>
            </div>
            <div class="award-card">
              <div class="award-icon">🌟</div>
              <h3>Young Artist Award</h3>
              <p>Promising talent in classical dance</p>
              <span class="award-year">2020</span>
            </div>
          </div>
        </div>

        <div class="video-section">
          <h2>Performance Highlights</h2>
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  `,
  
  production: `
    <section class="page-section">
      <div class="container">
        <h1 class="page-title">Production Showcase</h1>
        
        <div class="production-intro">
          <h2>Artistic Collaborations & Solo Productions</h2>
          <p>Each production is a carefully crafted journey that weaves together traditional Bharatanatyam with contemporary storytelling. These works represent years of dedication, collaboration with musicians, and deep exploration of classical themes.</p>
        </div>

        <div class="gallery-section">
          <h2>Production Gallery</h2>
          <div class="photo-gallery">
            <div class="gallery-item" onclick="openLightbox('https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg')">
              <img src="https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg" alt="Production 1" />
              <div class="gallery-overlay">
                <span>View Full Image</span>
              </div>
            </div>
            <div class="gallery-item" onclick="openLightbox('https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg')">
              <img src="https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg" alt="Production 2" />
              <div class="gallery-overlay">
                <span>View Full Image</span>
              </div>
            </div>
            <div class="gallery-item" onclick="openLightbox('https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg')">
              <img src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg" alt="Production 3" />
              <div class="gallery-overlay">
                <span>View Full Image</span>
              </div>
            </div>
            <div class="gallery-item" onclick="openLightbox('https://images.pexels.com/photos/5699455/pexels-photo-5699455.jpeg')">
              <img src="https://images.pexels.com/photos/5699455/pexels-photo-5699455.jpeg" alt="Production 4" />
              <div class="gallery-overlay">
                <span>View Full Image</span>
              </div>
            </div>
          </div>
        </div>

        <div class="videos-section">
          <h2>Performance Videos</h2>
          <div class="video-grid">
            <div class="video-card">
              <div class="video-thumbnail">
                <img src="https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg" alt="Video 1" />
                <div class="play-button" onclick="window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')">▶</div>
              </div>
              <h3>Varnam Performance</h3>
              <p>Traditional Bharatanatyam varnam showcasing intricate footwork and expressions</p>
            </div>
            <div class="video-card">
              <div class="video-thumbnail">
                <img src="https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg" alt="Video 2" />
                <div class="play-button" onclick="window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')">▶</div>
              </div>
              <h3>Tillana Finale</h3>
              <p>Energetic tillana performance with complex rhythmic patterns</p>
            </div>
          </div>
        </div>

        <div class="testimonials-section">
          <h2>What People Say</h2>
          <div class="testimonials-grid">
            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <p class="testimonial-text">Siri's performance was absolutely mesmerizing. Her grace and precision in every movement transported us to a divine realm.</p>
              <div class="testimonial-author">- Dr. Priya Sharma, Dance Critic</div>
            </div>
            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <p class="testimonial-text">The way she embodies each character through her expressions is truly remarkable. A gifted artist with deep understanding of the art form.</p>
              <div class="testimonial-author">- Maestro Ravi Kumar, Musician</div>
            </div>
            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <p class="testimonial-text">Her dedication to preserving and presenting classical Bharatanatyam in its purest form is inspiring to witness.</p>
              <div class="testimonial-author">- Prof. Meera Nair, Cultural Studies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  
  konnakol: `
    <section class="page-section">
      <div class="container">
        <h1 class="page-title">Konnakol - The Art of Vocal Percussion</h1>
        
        <div class="konnakol-intro">
          <h2>What is Konnakol?</h2>
          <p>Konnakol is the ancient South Indian art of vocal percussion, where complex rhythmic patterns are expressed through syllables. It's the vocal representation of the mridangam and other percussion instruments, creating intricate rhythmic compositions using sounds like "ta", "ki", "ta", "dha".</p>
        </div>

        <div class="journey-section">
          <h2>My Journey with Konnakol</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-marker">1</div>
              <div class="timeline-content">
                <h3>The Beginning</h3>
                <p>My introduction to Konnakol came through my Bharatanatyam training. Understanding rhythm was essential for dance, and Konnakol became the bridge between movement and music.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker">2</div>
              <div class="timeline-content">
                <h3>Deep Dive</h3>
                <p>I began studying under renowned Konnakol masters, learning the intricate patterns and mathematical beauty behind this vocal art form. Each session revealed new layers of complexity.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker">3</div>
              <div class="timeline-content">
                <h3>Integration</h3>
                <p>Combining Konnakol with my dance performances created a unique artistic expression. The vocal rhythms enhanced the storytelling and added depth to my presentations.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker">4</div>
              <div class="timeline-content">
                <h3>Teaching & Sharing</h3>
                <p>Now I share this beautiful art form with students, helping them understand how rhythm and movement create a unified artistic experience.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="konnakol-gallery">
          <h2>Konnakol in Practice</h2>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg" alt="Konnakol Practice" />
              <div class="gallery-caption">Practice Session</div>
            </div>
            <div class="gallery-item">
              <img src="https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg" alt="Teaching Konnakol" />
              <div class="gallery-caption">Teaching Workshop</div>
            </div>
            <div class="gallery-item">
              <img src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg" alt="Performance" />
              <div class="gallery-caption">Live Performance</div>
            </div>
            <div class="gallery-item">
              <img src="https://images.pexels.com/photos/5699455/pexels-photo-5699455.jpeg" alt="Collaboration" />
              <div class="gallery-caption">Musical Collaboration</div>
            </div>
          </div>
        </div>

        <div class="achievements-section">
          <h2>Konnakol Achievements</h2>
          <div class="achievements-list">
            <div class="achievement-item">
              <span class="achievement-number">01</span>
              <div class="achievement-content">
                <h3>Advanced Certification</h3>
                <p>Completed advanced Konnakol training under Guru Vikku Vinayakram</p>
              </div>
            </div>
            <div class="achievement-item">
              <span class="achievement-number">02</span>
              <div class="achievement-content">
                <h3>Workshop Conductor</h3>
                <p>Conducted Konnakol workshops at various cultural festivals</p>
              </div>
            </div>
            <div class="achievement-item">
              <span class="achievement-number">03</span>
              <div class="achievement-content">
                <h3>Fusion Performances</h3>
                <p>Created unique fusion pieces combining Konnakol with contemporary music</p>
              </div>
            </div>
          </div>
        </div>

        <div class="video-demonstrations">
          <h2>Video Demonstrations</h2>
          <div class="video-grid">
            <div class="video-card">
              <div class="video-thumbnail">
                <img src="https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg" alt="Konnakol Basics" />
                <div class="play-button" onclick="window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')">▶</div>
              </div>
              <h3>Konnakol Basics</h3>
              <p>Introduction to fundamental Konnakol patterns and techniques</p>
            </div>
            <div class="video-card">
              <div class="video-thumbnail">
                <img src="https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg" alt="Advanced Patterns" />
                <div class="play-button" onclick="window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')">▶</div>
              </div>
              <h3>Advanced Patterns</h3>
              <p>Complex rhythmic compositions and mathematical structures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  
  production: `
    <section class="page-section">
      <div class="container">
        <h1 class="page-title">Production Showcase</h1>
        
        <div class="production-intro">
          <h2>Artistic Collaborations & Solo Productions</h2>
          <p>Each production is a carefully crafted journey that weaves together traditional Bharatanatyam with contemporary storytelling. These works represent years of dedication, collaboration with musicians, and deep exploration of classical themes.</p>
        </div>

        <div class="gallery-section">
          <h2>Production Gallery</h2>
          <div class="photo-gallery">
            <div class="gallery-item" onclick="openLightbox('https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg')">
              <img src="https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg" alt="Production 1" />
              <div class="gallery-overlay">
                <span>View Full Image</span>
              </div>
            </div>
            <div class="gallery-item" onclick="openLightbox('https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg')">
              <img src="https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg" alt="Production 2" />
              <div class="gallery-overlay">
                <span>View Full Image</span>
              </div>
            </div>
            <div class="gallery-item" onclick="openLightbox('https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg')">
              <img src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg" alt="Production 3" />
              <div class="gallery-overlay">
                <span>View Full Image</span>
              </div>
            </div>
            <div class="gallery-item" onclick="openLightbox('https://images.pexels.com/photos/5699455/pexels-photo-5699455.jpeg')">
              <img src="https://images.pexels.com/photos/5699455/pexels-photo-5699455.jpeg" alt="Production 4" />
              <div class="gallery-overlay">
                <span>View Full Image</span>
              </div>
            </div>
          </div>
        </div>

        <div class="videos-section">
          <h2>Performance Videos</h2>
          <div class="video-grid">
            <div class="video-card">
              <div class="video-thumbnail">
                <img src="https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg" alt="Video 1" />
                <div class="play-button" onclick="window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')">▶</div>
              </div>
              <h3>Varnam Performance</h3>
              <p>Traditional Bharatanatyam varnam showcasing intricate footwork and expressions</p>
            </div>
            <div class="video-card">
              <div class="video-thumbnail">
                <img src="https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg" alt="Video 2" />
                <div class="play-button" onclick="window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')">▶</div>
              </div>
              <h3>Tillana Finale</h3>
              <p>Energetic tillana performance with complex rhythmic patterns</p>
            </div>
          </div>
        </div>

        <div class="testimonials-section">
          <h2>What People Say</h2>
          <div class="testimonials-grid">
            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <p class="testimonial-text">Siri's performance was absolutely mesmerizing. Her grace and precision in every movement transported us to a divine realm.</p>
              <div class="testimonial-author">- Dr. Priya Sharma, Dance Critic</div>
            </div>
            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <p class="testimonial-text">The way she embodies each character through her expressions is truly remarkable. A gifted artist with deep understanding of the art form.</p>
              <div class="testimonial-author">- Maestro Ravi Kumar, Musician</div>
            </div>
            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <p class="testimonial-text">Her dedication to preserving and presenting classical Bharatanatyam in its purest form is inspiring to witness.</p>
              <div class="testimonial-author">- Prof. Meera Nair, Cultural Studies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  
  gallery: `
    <section class="page-section">
      <div class="container">
        <h1 class="page-title">Gallery</h1>
        <div class="gallery-grid">
          <div class="gallery-item" onclick="openLightbox('https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg')">
            <img src="https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg" alt="Dance Performance 1" />
          </div>
          <div class="gallery-item" onclick="openLightbox('https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg')">
            <img src="https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg" alt="Dance Performance 2" />
          </div>
          <div class="gallery-item" onclick="openLightbox('https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg')">
            <img src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg" alt="Dance Performance 3" />
          </div>
          <div class="gallery-item" onclick="openLightbox('https://images.pexels.com/photos/5699455/pexels-photo-5699455.jpeg')">
            <img src="https://images.pexels.com/photos/5699455/pexels-photo-5699455.jpeg" alt="Dance Performance 4" />
          </div>
        </div>
      </div>
    </section>
  `,
  
  contact: `
    <section class="page-section">
      <div class="container">
        <h1 class="page-title">Contact</h1>
        <div class="contact-content">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>For performance bookings, workshops, or collaborations, please reach out through any of the following channels:</p>
            
            <div class="contact-details">
              <div class="contact-item">
                <strong>Email:</strong> siri.dance@example.com
              </div>
              <div class="contact-item">
                <strong>Phone:</strong> +91 98765 43210
              </div>
              <div class="contact-item">
                <strong>Location:</strong> Chennai, Tamil Nadu, India
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <h3>Send a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
};

// Lightbox functionality
window.openLightbox = function(imageSrc) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
      <img src="${imageSrc}" alt="Gallery Image" />
    </div>
  `;
  document.body.appendChild(lightbox);
  lightbox.style.display = 'flex';
};

window.closeLightbox = function() {
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    lightbox.remove();
  }
};

// Navigation functionality
function loadPage(pageName) {
  const app = document.getElementById('app');
  app.innerHTML = pages[pageName] || pages.home;
  
  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`[href="#${pageName}"]`)?.classList.add('active');
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Handle navigation clicks
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const pageName = href.substring(1); // Remove the #
    loadPage(pageName);
  }
});

// Load home page by default
loadPage('home');