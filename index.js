function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.getElementById("togglePasswordButton");
    var passwordVisibilityIcon = document.getElementById("passwordVisibilityIcon");
  
    if (passwordInput.type === "password" )   {
        passwordInput.type = "text";
        passwordVisibilityIcon.classList.remove('bi bi-eye')
        passwordVisibilityIcon.classList.add('bi bi-eye-slash')
      }
      
     else {

      passwordInput.type = "password" ;
      
     
        passwordVisibilityIcon.classList.remove("bi_bi-eye-slash");
        passwordVisibilityIcon.classList.add("bi_bi-eye");
     
      
      toggleButton.setAttribute("aria-label", "Afficher le mot de passe");
    }
  }

  function toggllePasswordVisibility() {
    var passwordInput = document.getElementById("confirm-password");
    var toggleButton = document.getElementById("togglePasswordButton");
    var passwordVisibilityIcon = document.getElementById("passwordVisibilityIcon");
  
    if (passwordInput.type === "password" )   {
        passwordInput.type = "text";
        passwordVisibilityIcon.classList.remove('bi bi-eye')
        passwordVisibilityIcon.classList.add('bi bi-eye-slash')
      }
      
     else {

      passwordInput.type = "password" ;
      
     
        passwordVisibilityIcon.classList.remove("bi_bi-eye-slash");
        passwordVisibilityIcon.classList.add("bi_bi-eye");
     
      
      toggleButton.setAttribute("aria-label", "Afficher le mot de passe");
    }
  }
  


  function checkPassword() {
    const password = document.getElementById("password").value;
    const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    if (password.length < 10) {
      document.getElementById("password").setCustomValidity("Le mot de passe doit contenir au moins 10 caractères.");
    } else if (!regex.test(password)) {
      document.getElementById("password").setCustomValidity("Le mot de passe doit contenir au moins un caractère spécial.");
    } else {
      document.getElementById("password").setCustomValidity("");
    }
  }


  function Checkcorrespondent() {
        var password = document.getElementById('password');
          var confirmPassword = document.getElementById('confirm-password');
        
            if (password.value !== confirmPassword.value) {
                document.getElementById('password').setCustomValidity("les mots de passe ne correspondent pas.");
                document.getElementById('confirm-password').setCustomValidity("les mots de passe ne correspondent pas.")
            }
            else{
                document.getElementById('password').setCustomValidity("")
            }
        
       }
  
  

