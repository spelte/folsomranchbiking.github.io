window.onload = function() {
  const buttons = document.querySelectorAll('[data-art-button]');
  buttons.forEach(button => {
    button.addEventListener('click', closeArticle);
  })
}

function closeArticle(e) {
  const header = e.currentTarget.parentElement;
  header.parentElement.classList.add("art_hidden");
  setTimeout(() => {
    header.parentElement.style.display = "none";
  }, 300)
}