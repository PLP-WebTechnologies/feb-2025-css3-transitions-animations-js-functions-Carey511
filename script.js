/* script.js */
function setupAnimationsAndPreferences() {
    const animatedButton = document.getElementById('animatedButton');
    const rotatingImage = document.getElementById('rotatingImage');
    const fontSizeSelect = document.getElementById('fontSize');
    const fontSizeKey = 'userFontSize';
  
    
    function saveFontSizePreference(size) {
      localStorage.setItem(fontSizeKey, size);
    }
  
    function loadFontSizePreference() {
      const savedSize = localStorage.getItem(fontSizeKey);
      if (savedSize) {
        document.body.style.fontSize = savedSize;
        fontSizeSelect.value = savedSize;
      }
    }
  
    
    loadFontSizePreference();
  
    
    fontSizeSelect.addEventListener('change', function() {
      const selectedSize = this.value;
      document.body.style.fontSize = selectedSize;
      saveFontSizePreference(selectedSize);
    });
  

    if (animatedButton) {
      animatedButton.addEventListener('click', function() {
        this.classList.add('animated');
        // Remove the animation class after the animation duration to allow it to trigger again
        setTimeout(() => {
          this.classList.remove('animated');
        }, 1000); // Matches the animation duration in CSS
      });
    }
  
    
    if (rotatingImage) {
      rotatingImage.addEventListener('mouseover', function() {
        this.classList.add('rotate');
      });
      rotatingImage.addEventListener('mouseout', function() {
        this.classList.remove('rotate');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', setupAnimationsAndPreferences);