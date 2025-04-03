    // Button sound effects (uncomment to enable)
    
    const buttons = document.querySelectorAll('button, .data-button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const sound = new Audio('assets/transform-sound.mp3');
        sound.play();
      });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const titles = [
          "I AM AN ETHICAL HACKER",
          "I AM A SECURITY RESEARCHER", 
          "I AM A VAPT ANALYST"
        ];
        const typingElement = document.getElementById('cyber-typing-title');
        
        let currentTitle = 0;
        let currentChar = 0;
        let isDeleting = false;
        let typingSpeed = 120;
        let pauseBetween = 1500;
      
        function type() {
          const fullText = titles[currentTitle];
          
          if (isDeleting) {
            // Delete characters with faster speed
            typingElement.textContent = fullText.substring(0, currentChar - 1);
            currentChar--;
            typingSpeed = 60;
          } else {
            // Type characters
            typingElement.textContent = fullText.substring(0, currentChar + 1);
            currentChar++;
            typingSpeed = 120;
          }
          
          // When typing completes
          if (!isDeleting && currentChar === fullText.length) {
            typingSpeed = pauseBetween;
            isDeleting = true;
          } 
          // When deleting completes
          else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentTitle = (currentTitle + 1) % titles.length;
            typingSpeed = 500;
          }
          
          setTimeout(type, typingSpeed);
        }
      
        // Start typing after 1 second
        setTimeout(type, 1000);
      
        // Add sound effects (optional)
        const typeSound = new Audio('assets/type-sound.mp3');
        const deleteSound = new Audio('assets/delete-sound.mp3');
        
        typingElement.addEventListener('type', () => {
          typeSound.currentTime = 0;
          typeSound.play();
        });
        
        typingElement.addEventListener('delete', () => {
          deleteSound.currentTime = 0;
          deleteSound.play();
        });
      });

      document.addEventListener('DOMContentLoaded', function() {
        const taglines = [
          '"Securing the digital frontier"',
          '"Ethical hacking for a safer tomorrow"',
          '"VAPT specialist safeguarding systems"'
        ];
        
        const taglineElement = document.getElementById('glowing-tagline');
        let currentIndex = 0;
        
        function changeTagline() {
          taglineElement.classList.add('fade-out');
          
          setTimeout(() => {
            currentIndex = (currentIndex + 1) % taglines.length;
            taglineElement.textContent = taglines[currentIndex];
            taglineElement.classList.remove('fade-out');
          }, 500);
        }
        
        setInterval(changeTagline, 3000);
      });








      




      