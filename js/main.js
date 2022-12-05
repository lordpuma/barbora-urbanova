const pagesNode = document.querySelector('.pages');
pagesNode.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',pagesNode.scrollTop / (pagesNode.scrollHeight - pagesNode.clientHeight));
}, false);
