// Notification helper function to immediately show (true) then hide after 2 seconds (false)
export function showNotification(setter) {
  // Setter = setShowNotification || setShowNotification(true) then (false)
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}
