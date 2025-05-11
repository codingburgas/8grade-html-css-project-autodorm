function validatePasswords() {
      const newPassword = document.getElementById('new-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
      }
      return true;
    }