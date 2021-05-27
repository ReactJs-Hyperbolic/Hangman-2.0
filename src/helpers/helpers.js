// Notification helper function to immediately show (true) then hide after 2 seconds (false)
export function showNotification(setter) {
  // Setter = setShowNotification || setShowNotification(true) then (false)
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = 'win';

  // check for win
  word.split('').forEach(letter => {
    if (!correct.includes(letter)) {
      status = '';
    }
  });

  // check for loss
  if (wrong.length === 6) status = 'lose';

  return status;
}
