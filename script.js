document.addEventListener('DOMContentLoaded', () => {
    const login = document.getElementById('login');
    const signup = document.getElementById('signup');
  
    // Toggle between login and sign-up forms
    function toggleForms() {
      login.classList.toggle('hidden');
      signup.classList.toggle('hidden');
    }
  
    // Add event listeners to the login and sign-up buttons
    document.getElementById('loginLink').addEventListener('click', toggleForms);
    document.getElementById('signupLink').addEventListener('click', toggleForms);
  
    // Set the background image for the body and reset the subtle pattern as the background for the container
    $.backstretch("https://subtlepatterns.com/patterns/pattern_1.png");
    $('.container').css('background-image', 'none');
  });