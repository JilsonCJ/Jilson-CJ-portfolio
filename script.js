document.addEventListener('DOMContentLoaded', function() {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Interactive elements effect
    const interactiveElements = document.querySelectorAll('a, button, [contenteditable="true"], .service-card, .portfolio-item, .social-icon');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'rgba(0, 119, 255, 0.5)';
            cursor.style.borderColor = 'transparent';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.borderColor = 'var(--primary-color)';
        });
    });
    
    // Animate skill circles on scroll
    const skillCircles = document.querySelectorAll('.skill-circle');
    
    const animateSkills = () => {
        skillCircles.forEach(circle => {
            const percent = circle.getAttribute('data-percent');
            const fill = circle.querySelector('.circle-fill');
            fill.style.strokeDasharray = `${percent}, 100`;
        });
    };
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skill-circle')) {
                    animateSkills();
                }
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    skillCircles.forEach(circle => {
        observer.observe(circle);
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Rainbow border animation for profile image
    const imageBorder = document.querySelector('.image-border');
    
    setInterval(() => {
        const randomHue = Math.floor(Math.random() * 360);
        imageBorder.style.background = `linear-gradient(135deg, hsl(${randomHue}, 100%, 50%), hsl(${(randomHue + 60) % 360}, 100%, 50%), hsl(${(randomHue + 120) % 360}, 100%, 50%), hsl(${(randomHue + 180) % 360}, 100%, 50%))`;
    }, 4000);
    
    // Social media links (you can update these with your actual links)
    document.getElementById('github').href = 'https://github.com/JilsonCJ';
    document.getElementById('linkedin').href = 'https://www.linkedin.com/in/jilson-c-j-979399337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
    document.getElementById('whatsapp').href = 'https://wa.me/919778167829';
    document.getElementById('instagram').href = 'https://www.instagram.com/___mr.__cj___?igsh=MWdtcWFpaW56ZTFheQ==';
    
	// Project links with specific URLs for each project
	const projectLinks = [
		'https://github.com/JilsonCJ/AI-resume-analyzer.git',  // Replace with 1st project's actual URL
		'https://github.com/JilsonCJ/enterprise-shop-management-software.git',  // Replace with 2nd project's actual URL
		'https://github.com/JilsonCJ/AI-chatbot.git'   // Replace with 3rd project's actual URL
	];

	document.querySelectorAll('.project-link').forEach((link, index) => {
		if (projectLinks[index]) {
			link.href = projectLinks[index];
		}
	});
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});