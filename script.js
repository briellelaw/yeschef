function typeLetter(element) {
    const text = element.textContent;
    element.textContent = ''; // Clear the text initially
    let i = 0;

    // Create a span for the cursor
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    cursor.textContent = '|'; // This will be the blinking cursor

    // Add the cursor to the element initially
    element.appendChild(cursor);

    function typeCharacter() {
      if (i < text.length) {
        element.textContent = text.substring(0, i + 1); // Only update the text part, not the cursor
        element.appendChild(cursor); // Always append the cursor at the end
        i++;
        setTimeout(typeCharacter, 200); // Adjust speed of typing here
      } else {
        // Optionally remove the cursor after typing is done
        cursor.remove();
        
        // Append the icon after typing is finished
        const icon = document.createElement("i");
        icon.className = "fa-solid fa-fish"; // Use a free icon from Font Awesome
        const iconContainer = document.createElement("span"); // Wrap icon to prevent layout break
        iconContainer.appendChild(icon);
        element.appendChild(iconContainer); // Append the icon after the text
      }
    }

    typeCharacter();
  }

// Apply the typing effect to all headers when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll('header h1, header h2, header h3, header h4, header h5, header h6');
  headers.forEach((header) => {
    typeLetter(header); // Apply typing effect to all headers
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const pageTitle = document.querySelector('header h1');
    if (window.location.pathname === 'pages/recipes.html') {
      pageTitle.textContent = 'Explore Delicious Recipes';
    } else if (window.location.pathname === 'gallery.html') {
      pageTitle.textContent = 'Contact Us';
    }
  });
