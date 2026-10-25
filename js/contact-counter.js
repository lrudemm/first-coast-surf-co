// Live character counter for the contact message field
const message = document.querySelector('#message');
const counter = document.querySelector('#message-count');

if (message && counter) {
  const updateCount = () => {
    counter.textContent = `${message.value.length} of ${message.maxLength} characters`;
  };

  message.addEventListener('input', updateCount);
  updateCount();
}