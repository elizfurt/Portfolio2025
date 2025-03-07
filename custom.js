fetch('pages/nav-bar.html')
  .then(response => response.text())
  .then(html => {
    const navBar = document.createElement('div');
    navBar.className = 'nav-bar';
    navBar.innerHTML = html;
    document.body.prepend(navBar); // Adds it to the top of the body
  })
  .catch(error => console.error('Error loading nav-bar:', error));

