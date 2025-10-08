// Portfolio Data
const portfolioData = {
  "languages": {
    "english": {
      "nav": {
        "about": "About",
        "projects": "Projects", 
        "certificates": "Certificates",
        "languages": "Languages",
        "education": "Education",
        "contact": "Contact"
      },
      "hero": {
        "name": "Anuj Pal",
        "tagline": "Diploma in CSE | Python | Excel | PowerPoint | Entry-Level Tech Enthusiast",
        "description": "Creating exceptional digital experiences with cutting-edge technology",
        "cta": "View My Work",
        "resumeCta": "Download Resume"
      },
      "about": {
        "title": "About Me",
        "description": "I’m a dedicated and hardworking tech enthusiast with a <strong>Diploma in Computer Science & Engineering</strong>, passionate about using technology to make life simpler and smarter. I enjoy solving problems, learning new tools, and improving systems — whether it’s fixing an issue, managing data, or finding faster ways to get things done.<br><br> I’ve built solid skills in <strong>IT support</strong>, <strong>data entry</strong>, <strong>database management</strong>, and <strong>technical troubleshooting</strong>, along with a good command of <strong>MS Office</strong> and <strong>AI tools</strong>. My ability to <strong>type fast</strong> and work with focus helps me complete <strong>tasks efficiently</strong> and <strong>accurately</strong>.<br><br> Beyond work, I’m someone who believes in balance. I love playing cricket, singing, and spending time exploring new tech or learning something creative. These interests keep me active, focused, and open-minded — qualities I bring into every project I work on.<br><br> Right now, I’m looking for opportunities as an <strong>IT Support Technician</strong>, <strong>Data Entry Operator</strong>, <strong>Database Assistant</strong>, or T<strong>echnical Support Executive</strong>, where I can apply my skills, grow my experience, and contribute to a professional team that values dedication and innovation.",
        "stats": [
          {"label": "Years Experience", "value": "Fresher"},
          {"label": "Projects Completed", "value": "5+"},
          {"label": "Technologies", "value": "5+"}
        ]
      },
      "skills": [
        {"name": "Python", "level": 88},
        {"name": "Typing Speed", "level": 100},
        {"name": "MS Office", "level": 80},
        {"name": "SQL", "level": 70},
        {"name": "Data Entry & Documentation", "level": 100}
      ],
      "projects": [
        {
          "title": "Hangman", 
          "description": "Hangman game with Python",
          "tech": ["Python"],
          "category": "python"
        },
      ],
      "certificates": [
        {
          "title": "SOAR - AI to be Aware",
          "issuer": "Microsoft",
          "date": "Sep 2025",
          imageSrc: 'certificates/ai-to-be-aware.jpg',
          verifyLink: 'https://api-fe.skillindiadigital.gov.in/api/registry-course/getCertificatePresignedUrl/2024092550468453-be0dfee2-2417-45c1-a4ea-71ccbc3a80a1'

        },
        {
          "title": "Python Programming",
          "issuer": "Reliance Foundation Skilling Academy",
          "date": "2025",
          imageSrc: 'certificates/python.jpg',
          verifyLink:'https://api-fe.skillindiadigital.gov.in/api/registry-course/getCertificatePresignedUrl/2024092550468453-91118d47-0cc8-4fb2-b290-af902fb4b2f3'
        },
        {
          "title": "SOAR - AI for Educators",
          "issuer": "Microsoft",
          "date": "2025",
          imageSrc: 'certificates/ai-for-educators.jpg',
          verifyLink:'https://api-fe.skillindiadigital.gov.in/api/registry-course/getCertificatePresignedUrl/2024092550468453-32a4d818-8f1e-4bb4-bc6e-8fedc5cfa61c'
        },
        {
          "title": "Web Design & Development",
          "issuer": "NSDC",
          "date": "2025",
          imageSrc: 'certificates/web-design.jpg',
          verifyLink:'https://api-fe.skillindiadigital.gov.in/api/registry-course/getCertificatePresignedUrl/2024092550468453-0e985123-f259-488a-9a41-a316980ea081'
        },
        {
          "title": "Junior Software Developer",
          "issuer": "NASSCOM",
          "date": "2025",
          imageSrc: 'certificates/jsd.jpg',
          verifyLink:'https://api-fe.skillindiadigital.gov.in/api/registry-course/getCertificatePresignedUrl/2024092550468453-8b8b1f30-4d66-4b1c-ada3-10175417e8ff'
        },
        {
          "title": "Computer Basics & Accounting",
          "issuer": "Reliance Foundation Skilling Academy",
          "date": "2025",
          imageSrc: 'certificates/computer-basics.jpg',
          verifyLink:'https://api-fe.skillindiadigital.gov.in/api/registry-course/getCertificatePresignedUrl/2024092550468453-45623c0c-f741-4099-926c-8be044dcd16c'
        },
      ],
      "education": [
        {
          "title": "Diploma in CSE",
          "board":"BTEUP",
          "college": "GPM Meerut",
          "period": "2022 - 2025",
          "description": "Passed Out with First Division"
        },
        {
          "title": "12th(Intermediate)",
          "board":"UP Board",
          "college": "CPVN Inter College Kaimganj",
          "period": "2020 - 2022", 
          "description": "Passed Out with First Division"
        },
        {
          "title": "10th(High School",
          "board":"UP Board",
          "college": "CPVN Inter College Kaimganj",
          "period": "2018 - 2020",
          "description": "Passed Out with First Division"
        }
      ],
      "contact": {
        "title": "Get In Touch",
        "description": "Let's discuss your next project or just say hello!",
        "form": {
          "name": "Your Name",
          "email": "Your Email",
          "message": "Your Message",
          "send": "Send Message"
        }
      }
    },
    "hindi": {
      "nav": {
        "about": "मेरे बारे में",
        "projects": "परियोजनाएं",
        "certificates": "प्रमाण पत्र", 
        "languages": "भाषाएं",
        "education": "शिक्षा",
        "contact": "संपर्क"
      },
      "hero": {
        "name": "अनुज पाल",
        "tagline": "फुल-स्टैक डेवलपर और UI/UX डिज़ाइनर",
        "description": "आधुनिक तकनीक के साथ असाधारण डिजिटल अनुभव बनाना",
        "cta": "मेरा काम देखें",
        "resumeCta": "Resume डाउनलोड"
      },
      "about": {
        "title": "मेरे बारे में",
        "description": "मैं एक समर्पित और मेहनती टेक एनथूज़ियास्ट हूँ, जिनके पास <strong>कंप्यूटर साइंस और इंजीनियरिंग में डिप्लोमा</strong> है। मेरा उद्देश्य टेक्नोलॉजी का इस्तेमाल करके जीवन को आसान, स्मार्ट और प्रभावशाली बनाना है। मुझे समस्याओं को हल करना, नए टूल्स सीखना, और सिस्टम्स को बेहतर बनाना बेहद पसंद है — चाहे वह किसी तकनीकी समस्या का समाधान हो, डेटा मैनेजमेंट हो, या प्रक्रियाओं को तेज़ और कुशल बनाने का तरीका ढूँढना।<br><br> मैंने <strong>आईटी सपोर्ट</strong>, <strong>डेटा एंट्री</strong>, <strong>डेटाबेस मैनेजमेंट</strong>, और <strong>टेक्निकल ट्रबलशूटिंग</strong> में मजबूत कौशल हासिल किए हैं। इसके साथ ही मुझे <strong>MS Office</strong> और <strong>AI टूल्स</strong> का भी गहरा ज्ञान है। मेरी <strong>तेज़ टाइपिंग</strong> और फोकस्ड काम करने की क्षमता मुझे <strong>सटीक और समय पर परिणाम देने</strong> में मदद करती है।<br><br> काम के अलावा, मैं संतुलित जीवन में विश्वास रखता हूँ। मुझे क्रिकेट खेलना, गाना गाना, और नई तकनीक सीखना या क्रिएटिव स्किल्स डेवलप करना पसंद है। ये शौक मुझे सक्रिय, फोकस्ड और खुले विचारों वाला बनाए रखते हैं — यही गुण मैं हर प्रोजेक्ट में लाता हूँ।<br><br> अभी, मैं <strong>आईटी सपोर्ट टेक्नीशियन</strong>, <strong>डेटा एंट्री ऑपरेटर</strong>, <strong>डेटाबेस असिस्टेंट</strong>, या <strong>टेक्निकल सपोर्ट एग्जीक्यूटिव</strong> के रूप में अवसर तलाश रहा हूँ, जहाँ मैं अपने कौशल का पूरा उपयोग कर सकूँ, अनुभव बढ़ा सकूँ, और एक पेशेवर टीम में <strong>समर्पण और नवाचार</strong> के साथ योगदान दे सकूँ।",
        "stats": [
          {"label": "वर्षों का अनुभव", "value": "फ्रेशर"},
          {"label": "पूर्ण परियोजनाएं", "value": "5+"},
          {"label": "तकनीकें", "value": "5+"}
        ]
      },
      "contact": {
        "title": "संपर्क में रहें",
        "description": "आइए आपकी अगली परियोजना पर चर्चा करें या बस नमस्ते कहें!",
        "form": {
          "name": "आपका नाम",
          "email": "आपका ईमेल",
          "message": "आपका संदेश",
          "send": "संदेश भेजें"
        }
      }
    },
    "hinglish": {
      "nav": {
        "about": "About Mujhe",
        "projects": "Mere Projects",
        "certificates": "Mere Certificates",
        "languages": "Languages",
        "education": "Meri Padai",
        "contact": "Contact Karo"
      },
      "hero": {
        "name": "Anuj Pal",
        "tagline": "Full-Stack Developer aur UI/UX Designer",
        "description": "Latest technology ke saath amazing digital experiences banata hun",
        "cta": "Mera Work Dekho",
        "resumeCta": "Resume Download Karo"
      },
      "about": {
        "title": "Mere Bare Mein",
        "description": "Main ek dedicated aur hardworking tech enthusiast hoon, jinke paas <strong>Computer Science & Engineering mein Diploma</strong> hai. Mera goal technology ka use karke life ko easy, smart aur impactful banana hai. Mujhe problems solve karna, naye tools seekhna, aur systems ko better banana bohot pasand hai — chahe wo kisi technical issue ka solution ho, data management ho, ya processes ko fast aur efficient banane ka tareeka ho.<br><br> Maine <strong>IT Support</strong>, <strong>Data Entry</strong>, <strong>Database Management</strong>, aur <strong>Technical Troubleshooting</strong> mein strong skills develop kiye hain. Saath hi mujhe <strong>MS Office</strong> aur <strong>AI Tools</strong> ka bhi deep knowledge hai. Meri <strong>fast typing</strong> aur focused work approach mujhe <strong>accurate aur timely results</strong> deliver karne mein help karti hai.<br><br> Work ke alawa, main balanced life mein believe karta hoon. Mujhe cricket khelna, singing, aur new technology ya creative skills explore karna pasand hai. Ye hobbies mujhe active, focused aur open-minded banaye rakhti hain — wahi qualities main har project mein bring karta hoon.<br><br> Abhi, main <strong>IT Support Technician</strong>, <strong>Data Entry Operator</strong>, <strong>Database Assistant</strong>, ya <strong>Technical Support Executive</strong> ke roles ke liye opportunities dhoond raha hoon, jahan main apne skills ka full use kar sakoon, experience grow kar sakoon, aur ek professional team mein <strong>dedication aur innovation</strong> ke saath contribute kar sakoon.",
        "stats": [
          {"label": "Years ka Experience", "value": "Fresher"},
          {"label": "Complete kiye Projects", "value": "5+"},
          {"label": "Technologies", "value": "5+"}
        ]
      },
      "contact": {
        "title": "Touch Mein Aao",
        "description": "Chaliye next project ke baare mein baat karte hain ya phir bas hello kaho!",
        "form": {
          "name": "Tumhara Naam",
          "email": "Tumhara Email",
          "message": "Tumhara Message",
          "send": "Message Send Karo"
        }
      }
    }
  },
  "languageList": [
    {"name": "Python", "level": 65},
    {"name": "Hindi", "level": 100},
    {"name": "English", "level": 80},
  ],
  "socialLinks": [
    {"name": "GitHub", "url": "https://github.com/anujpalofficial", "icon": "github"},
    {"name": "LinkedIn", "url": "https://www.linkedin.com/in/itsanujpalofficial", "icon": "linkedin"},
    {"name": "Twitter", "url": "https://x.com/apo_anujpal", "icon": "twitter"},
    {"name": "Instagram", "url": "https://www.instagram.com/anujpal_official/", "icon": "instagram"}
  ]
};

// Global state
let currentLanguage = 'english';
let currentCertificateIndex = 0;
let animationFrame;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
  // Initialize loading screen
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 2000);

  // Initialize all components
  initializeParticles();
  initializeNavigation();
  initializeLanguageSwitcher();
  initializeTypingEffect();
  initializeScrollAnimations();
  initializeStatsCounters();
  initializeSkills();
  initializeProjects();
  initializeCertificates();
  initializeLanguages();
  initializeEducation();
  initializeContactForm();
  initializeSocialLinks();
  initializeBackToTop();
  initializeModals();
  initializeParallax();
  
  // Update content with default language
  updateLanguage();
});

// Particle System
function initializeParticles() {
  const container = document.getElementById('particles-container');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (6 + Math.random() * 4) + 's';
    container.appendChild(particle);
  }
}

// Navigation
function initializeNavigation() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Smooth scroll and active section
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      // Close mobile menu
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Update active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => observer.observe(section));
}

// Language Switcher
function initializeLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLanguage = btn.dataset.lang;
      updateLanguage();
    });
  });
}

function updateLanguage() {
  const data = portfolioData.languages[currentLanguage];
  const elementsToUpdate = document.querySelectorAll('[data-text]');
  
  elementsToUpdate.forEach(element => {
    const key = element.dataset.text;
    const keys = key.split('.');
    let value = data;
    
    keys.forEach(k => {
      if (k.includes('[') && k.includes(']')) {
        const arrayKey = k.substring(0, k.indexOf('['));
        const index = parseInt(k.substring(k.indexOf('[') + 1, k.indexOf(']')));
        value = value[arrayKey][index];
      } else {
        value = value[k];
      }
    });
    
    if (typeof value === 'string') {
      if (element.dataset.text === 'about.description') {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    }
  });
}

// Typing Effect
function initializeTypingEffect() {
  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;

  let currentText = '';
  let currentIndex = 0;
  const texts = [
    portfolioData.languages[currentLanguage].hero.tagline,
    'Creative Problem Solver',
    'Technology Enthusiast'
  ];

  function typeText() {
    const targetText = texts[currentIndex];
    
    if (currentText.length < targetText.length) {
      currentText += targetText.charAt(currentText.length);
      typingElement.textContent = currentText;
      setTimeout(typeText, 100);
    } else {
      setTimeout(eraseText, 2000);
    }
  }

  function eraseText() {
    if (currentText.length > 0) {
      currentText = currentText.slice(0, -1);
      typingElement.textContent = currentText;
      setTimeout(eraseText, 50);
    } else {
      currentIndex = (currentIndex + 1) % texts.length;
      setTimeout(typeText, 500);
    }
  }

  typeText();
}

// Scroll Animations
function initializeScrollAnimations() {
  const animatedElements = document.querySelectorAll('.stat-card, .skill-card, .project-card, .certificate-card, .language-card, .timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        entry.target.style.opacity = '1';
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(element => {
    element.style.transform = 'translateY(50px) rotateX(10deg)';
    element.style.opacity = '0';
    element.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    observer.observe(element);
  });
}

// Stats Counters
function initializeStatsCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
  if (entry.isIntersecting) {
  const el = entry.target;
  const raw = el.dataset.target;
  const target = parseInt(raw);
  if (!isNaN(target)) {
  animateCounter(el, target);
  } else {
  el.textContent = raw && raw.trim() ? raw : 'Fresher';
  }
  observer.unobserve(el);
  }
  });
  }, { threshold: 0.5 });
  statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 60;
  
  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 50);
}

// Skills Section
function initializeSkills() {
  const skillsGrid = document.getElementById('skills-grid');
  const skills = portfolioData.languages.english.skills;
  
  skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.innerHTML = `
      <div class="skill-info">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-percentage">${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" data-width="${skill.level}"></div>
      </div>
    `;
    skillsGrid.appendChild(skillCard);
  });

  // Animate skill bars
  const skillBars = document.querySelectorAll('.skill-progress');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.dataset.width;
        entry.target.style.width = width + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => observer.observe(bar));
}

// Projects Section
function initializeProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = portfolioData.languages.english.projects;
  
  // Create project cards
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.dataset.category = project.category;
    projectCard.innerHTML = `
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    `;
    
    projectCard.addEventListener('click', () => openProjectModal(project));
    projectsGrid.appendChild(projectCard);
  });

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      const projectCards = document.querySelectorAll('.project-card');
      
      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
          card.style.animation = 'slideInUp 0.5s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <div class="project-tech">
      ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
    </div>
    <p style="margin-top: 20px; color: var(--color-text-secondary);">
      This is a placeholder project. In a real portfolio, you would include screenshots, live demo links, and source code links.
    </p>
  `;
  
  modal.classList.remove('hidden');
}

// Certificates Section
function initializeCertificates() {
  const carousel = document.getElementById('certificates-carousel');
  const prevBtn = document.getElementById('cert-prev');
  const nextBtn = document.getElementById('cert-next');
  const certificates = portfolioData.languages.english.certificates;

  carousel.innerHTML = ''; // Clear existing

  certificates.forEach((cert, index) => {
    const certCard = document.createElement('div');
    certCard.className = 'certificate-card';

    certCard.innerHTML = `
        <img src="${cert.imageSrc}" alt="${cert.title} certificate" style="max-width: 100%; border-radius: 8px; margin-bottom: 12px;">
  <h3 class="certificate-title">${cert.title}</h3>
  <p class="certificate-issuer">${cert.issuer}</p>
  <p class="certificate-date">${cert.date}</p>
  <div class="certificate-buttons">
    <button class="btn-view btn btn--primary" aria-label="View ${cert.title} Certificate">View Certificate</button>
    <button class="btn-verify btn btn--secondary" aria-label="Verify ${cert.title} Certificate">Verify Certificate</button>
  </div>
`

    carousel.appendChild(certCard);
  // After appending each certCard to carousel
const viewBtn = certCard.querySelector('.btn-view');
const verifyBtn = certCard.querySelector('.btn-verify');

viewBtn.addEventListener('click', () => openCertificateLightbox(cert));
verifyBtn.addEventListener('click', () => {
  if (cert.verifyLink && cert.verifyLink.startsWith('http')) {
    window.open(cert.verifyLink, '_blank', 'noopener');
  } else {
    alert('Verification link not available or invalid');
  }
});

  });

  // Carousel controls logic as existing
  let currentCertificateIndex = 0;

// Decide how many cards fit per view by container width
function getPerView() {
  const container = carousel.parentElement; // usually the .carousel-container
  const w = container ? container.clientWidth : window.innerWidth;
  if (w <= 600) return 1;
  if (w <= 1024) return 2;
  return 3;
}

function updateVarsAndClamp() {
  const perView = getPerView();
  const parent = carousel.parentElement || document.documentElement;
  parent.style.setProperty('--certs-per-view', perView);
  const total = carousel.querySelectorAll('.certificate-card').length;
  const maxIndex = Math.max(0, total - perView);
  if (currentCertificateIndex > maxIndex) currentCertificateIndex = maxIndex;
  if (currentCertificateIndex < 0) currentCertificateIndex = 0;
  return { perView, maxIndex, total };
}


function updateCertificateCarousel() {
  const { perView, total } = updateVarsAndClamp();
  const cardWidth = carousel.querySelector('.certificate-card').offsetWidth + 16; // 16px gap
  const movePx = currentCertificateIndex * cardWidth;
  carousel.style.transform = `translateX(-${movePx}px)`;
}


prevBtn.onclick = () => {
  const { maxIndex } = updateVarsAndClamp();
  currentCertificateIndex = currentCertificateIndex <= 0 ? maxIndex : currentCertificateIndex - 1;
  updateCertificateCarousel();
};

nextBtn.onclick = () => {
  const { maxIndex } = updateVarsAndClamp();
  currentCertificateIndex = currentCertificateIndex >= maxIndex ? 0 : currentCertificateIndex + 1;
  updateCertificateCarousel();
};

window.addEventListener('resize', updateCertificateCarousel);
updateCertificateCarousel();
}

function openCertificateLightbox(cert) {
  const lightbox = document.getElementById('cert-lightbox');
  const lightboxBody = document.getElementById('lightbox-body');

  lightboxBody.innerHTML = `
    <div style="text-align: center; padding: 20px;">
      <img src="${cert.imageSrc}" alt="${cert.title} certificate" style="max-width: 90vw; max-height: 80vh; margin-bottom: 20px; border-radius: 10px; box-shadow: 0 0 15px rgba(0,0,0,0.3);" />
      <h2 style="color: var(--color-white); margin-bottom: 8px;">${cert.title}</h2>
      <p style="color: var(--color-white); margin: 2px 0;">${cert.issuer}</p>
      <p style="color: var(--color-white); margin: 2px 0 20px 0;">${cert.date}</p>
      <button onclick="closeCertificateLightbox()" style="padding: 8px 16px; border:none; background: var(--color-teal-500); color: white; border-radius: 6px; cursor: pointer;">Close</button>
    </div>
  `;

  lightbox.classList.remove('hidden');
}

function closeCertificateLightbox() {
  const lightbox = document.getElementById('cert-lightbox');
  lightbox.classList.add('hidden');
}


// Languages Section
function initializeLanguages() {
  const languagesGrid = document.getElementById('languages-grid');
  const languages = portfolioData.languageList;
  
  languages.forEach(lang => {
    const langCard = document.createElement('div');
    langCard.className = 'language-card';
    langCard.innerHTML = `
      <h3 class="language-name">${lang.name}</h3>
      <div class="language-progress">
        <div class="progress-circle" data-progress="${lang.level}">
          <span class="progress-percentage">${lang.level}%</span>
        </div>
      </div>
    `;
    languagesGrid.appendChild(langCard);
  });

  // Animate progress circles
  const progressCircles = document.querySelectorAll('.progress-circle');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = parseInt(entry.target.dataset.progress);
        const degrees = (progress / 100) * 360;
        entry.target.style.background = `conic-gradient(var(--color-teal-300) ${degrees}deg, transparent ${degrees}deg)`;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  progressCircles.forEach(circle => observer.observe(circle));
}

// Education Timeline
function initializeEducation() {
  const timeline = document.getElementById('timeline');
  const educations = portfolioData.languages.english.education;
  
  educations.forEach((edu, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3 class="education-title">${edu.title}</h3>
        <p class="education-board">${edu.board}</p>
        <p class="education-college">${edu.college}</p>
        <p class="education-period">${edu.period}</p>
        <p class="education-description">${edu.description}</p>
      </div>
    `;
    timeline.appendChild(timelineItem);
  });
}
function showToast(message, type = 'success', ms = 2200) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.remove('hidden', 'error', 'show');
  if (type === 'error') el.classList.add('error');
  // Trigger fade-in
  requestAnimationFrame(() => el.classList.add('show'));
  // Auto-hide
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    el.classList.remove('show');
    // Hide fully after transition
    setTimeout(() => el.classList.add('hidden'), 300);
  }, ms);
}


// Contact Form
function initializeContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('.submit-btn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const originalText = btnText ? btnText.textContent : 'Send Message';

  // Progressive enhancement: if action missing, keep old animation only
  const endpoint = form.getAttribute('action');
  const method = (form.getAttribute('method') || 'POST').toUpperCase();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Start loading UI
    if (submitBtn) {
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
    }
    if (btnText) btnText.textContent = 'Sending...';

    // Build payload
    const formData = new FormData(form);

    try {
      if (!endpoint) {
        // No endpoint configured: fallback to fake success (existing behavior)
        await new Promise(r => setTimeout(r, 1200));
        if (btnText) btnText.textContent = 'Sent!';
        if (submitBtn) submitBtn.style.background = 'var(--color-success)';
        await new Promise(r => setTimeout(r, 1200));
        form.reset();
        // On success, after form.reset():
        showToast('Message sent successfully ✅', 'success');
      } else {
        // Real submission to Formspree (or compatible)
        const res = await fetch(endpoint, {
          method,
          headers: { 'Accept': 'application/json' },
          body: formData
        });

        // Consider 200-299 and 202/204 as success
        const success = res.ok || res.status === 202 || res.status === 204;

        if (success) {
          if (btnText) btnText.textContent = 'Sent!';
          if (submitBtn) submitBtn.style.background = 'var(--color-success)';
          form.reset();
          showToast('Message sent successfully ✅', 'success');
        } else {
          // Try to read JSON only if response is JSON
          let message = 'Submission failed';
          const ct = res.headers.get('content-type') || '';
          if (ct.includes('application/json')) {
            const data = await res.json().catch(() => ({}));
            if (data && data.errors) {
              message = data.errors.map(e => e.message).join(', ');
            } else if (data && data.message) {
              message = data.message;
            }
          } else {
            // Fallback to text for debugging (optional)
            // const text = await res.text().catch(() => '');
            // console.log('Form error response:', text);
          }
          alert('Form error: ' + message);
          if (btnText) btnText.textContent = 'Try Again';
          if (submitBtn) submitBtn.style.background = 'var(--color-error)';
          showToast('Submission failed. Please try again.', 'error');
        }
      }
    } catch (err) {
      alert('Network error. Please check connection and try again.');
      if (btnText) btnText.textContent = 'Try Again';
      if (submitBtn) submitBtn.style.background = 'var(--color-error)';
    } finally {
      // Restore button after a short delay
      setTimeout(() => {
        if (btnText) btnText.textContent = originalText;
        if (submitBtn) {
          submitBtn.style.background = '';
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
          
        }
      }, 1500);
    }
  });

  // Floating labels (keep existing behavior)
  const inputs = document.querySelectorAll('.form-input-3d');
  inputs.forEach((input) => {
    input.addEventListener('focus', () => input.parentNode.classList.add('focused'));
    input.addEventListener('blur', () => {
      if (!input.value) input.parentNode.classList.remove('focused');
    });
  });
}


// Social Links
function initializeSocialLinks() {
  const socialContainer = document.getElementById('social-links');
  const socialLinks = portfolioData.socialLinks;
  
  socialLinks.forEach(social => {
    const link = document.createElement('a');
    link.href = social.url;
    link.className = 'social-link';
    link.target = '_blank';
    link.innerHTML = `
      <i class="fab fa-${social.icon} social-icon"></i>
      <span>${social.name}</span>
    `;
    socialContainer.appendChild(link);
  });
}

// Back to Top Button
function initializeBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Modals
function initializeModals() {
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.modal-close');
  const overlays = document.querySelectorAll('.modal-overlay');
  
  closeButtons.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });
  
  overlays.forEach(overlay => {
    overlay.addEventListener('click', closeModal);
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function closeModal() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => modal.classList.add('hidden'));
}

// Parallax Effect
function initializeParallax() {
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.5;
      shape.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.1}deg)`;
    });
  });
}

// Mouse tracking for hero section
function initializeMouseTracking() {
  const hero = document.querySelector('.hero-section');
  const profileImage = document.querySelector('.image-container');
  
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    
    const tiltX = y * 10;
    const tiltY = -x * 10;
    
    profileImage.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });
  
  hero.addEventListener('mouseleave', () => {
    profileImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

// Initialize mouse tracking
document.addEventListener('DOMContentLoaded', initializeMouseTracking);

// Performance optimization
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handlers
const optimizedScrollHandler = throttle(() => {
  // Handle scroll-based animations here
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// CTA button functionality
document.addEventListener('DOMContentLoaded', () => {
  const heroCtaBtn = document.querySelector('.hero-cta');
  if (heroCtaBtn) {
    heroCtaBtn.addEventListener('click', () => {
      document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
});

// Add loading states and error handling
function showLoading(element) {
  element.style.opacity = '0.6';
  element.style.pointerEvents = 'none';
}

function hideLoading(element) {
  element.style.opacity = '1';
  element.style.pointerEvents = 'auto';
}

// Initialize resize handler for responsive adjustments
window.addEventListener('resize', throttle(() => {
  // Handle responsive adjustments
  updateCertificateCarousel();
}, 250));

// Add smooth reveal animations for sections
const revealSections = () => {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
  });
};

// Initialize section reveals
document.addEventListener('DOMContentLoaded', revealSections);

// Add preloader for better UX
function initializePreloader() {
  const preloader = document.getElementById('loading-screen');
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 1000);
  });
}

// Initialize preloader
initializePreloader();

console.log('🚀 3D Portfolio initialized successfully!');