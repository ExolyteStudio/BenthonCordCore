// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== STATS COUNTER ANIMATION =====
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    });
}

// ===== INTERSECTION OBSERVER FOR STATS =====
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        
        // Toggle current FAQ
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===== DOWNLOAD BUTTON HANDLERS =====
document.querySelectorAll('.download-btn, .download-link').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const version = this.getAttribute('data-version');
        const platform = this.getAttribute('data-platform');
        
        // Show download notification
        showNotification(`Starting download for ${platform} version ${version}...`);
        
        // In a real implementation, this would trigger the actual download
        // For now, we'll just simulate it
        console.log(`Download initiated: ${platform} - Version ${version}`);
        
        // You would replace this with actual download logic:
        // window.location.href = `/downloads/benthoncord-${version}-${platform}.exe`;
    });
});

// ===== NOTIFICATION SYSTEM =====
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: '20px 30px',
        borderRadius: '8px',
        boxShadow: '0 10px 40px rgba(255, 255, 255, 0.2)',
        zIndex: '10000',
        animation: 'slideInUp 0.3s ease',
        fontWeight: '600',
        maxWidth: '400px'
    });
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            transform: translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutDown {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// ===== FEATURE CARDS PARALLAX EFFECT =====
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== CODE ANIMATION IN HERO =====
const codeLines = document.querySelectorAll('.code-line');
if (codeLines.length > 0) {
    // Repeat animation every 10 seconds
    setInterval(() => {
        codeLines.forEach((line, index) => {
            line.style.animation = 'none';
            setTimeout(() => {
                line.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
            }, 10);
        });
    }, 10000);
}

// ===== CURSOR GLOW EFFECT =====
document.addEventListener('mousemove', (e) => {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    
    Object.assign(glow.style, {
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
        pointerEvents: 'none',
        left: e.clientX - 10 + 'px',
        top: e.clientY - 10 + 'px',
        zIndex: '9999',
        transition: 'opacity 0.5s ease',
        opacity: '0'
    });
    
    document.body.appendChild(glow);
    
    setTimeout(() => {
        glow.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
        glow.style.opacity = '0';
        setTimeout(() => {
            glow.remove();
        }, 500);
    }, 200);
});

// ===== LAZY LOADING FOR IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.feature-card, .stat-item, .download-card, .version-item, .guide-step');

if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(50px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// ===== PREVENT RIGHT CLICK ON IMAGES (OPTIONAL) =====
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        // Uncomment to prevent right-click on images
        // e.preventDefault();
    });
});

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== COPY TO CLIPBOARD FUNCTIONALITY =====
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showNotification('Copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy:', err);
        showNotification('Failed to copy to clipboard');
    }
    
    document.body.removeChild(textarea);
}

// ===== THEME TOGGLE (OPTIONAL - FOR FUTURE USE) =====
function toggleTheme() {
    // This can be implemented if you want to add a light/dark theme toggle
    // For now, we're keeping it dark-only as requested
}

// ===== FORM VALIDATION (IF NEEDED) =====
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== MOBILE MENU TOGGLE (IF ADDING HAMBURGER MENU) =====
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// ===== CONSOLE MESSAGE =====
console.log('%cBenthonCord', 'font-size: 40px; font-weight: bold; color: #ffffff;');
console.log('%cAdvanced Discord RPC Manager', 'font-size: 16px; color: #b0b0b0;');
console.log('%c© 2024 BenthonCord - All rights reserved', 'font-size: 12px; color: #707070;');

// ===== EASTER EGG =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        showNotification('🎮 Konami Code activated! You found the secret!');
        document.body.style.animation = 'rainbow 2s infinite';
    }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// ===== PERFORMANCE MONITORING =====
if (window.performance) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`%cPage loaded in ${pageLoadTime}ms`, 'color: #4CAF50; font-weight: bold;');
    });
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // Ctrl + K or Cmd + K for search (future feature)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Open search modal (to be implemented)
        console.log('Search shortcut triggered');
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        // Close any open modals (to be implemented)
        document.querySelectorAll('.faq-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});
