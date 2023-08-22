const themeSelect = document.getElementById('theme');
const pageTheme = document.getElementById('page-theme');

themeSelect.addEventListener('change', (e) => {
  const selectedTheme = e.target.value;
  pageTheme.setAttribute('href', `/styles/${selectedTheme}.css`);
});

const name = document.querySelector("input[name='name']");
const email = document.querySelector("input[name='email']");
const message = document.querySelector("textarea[name='message']");
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log({
    name: name.value,
    email: email.value,
    message: message.value,
  });
});
