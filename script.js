window.onload = () => {
  
  const list = document.querySelectorAll('.list-item');
  const input = document.querySelector('.input');
  input.addEventListener('keyup', function() {
    const value = this.value.trim().toLowerCase();
    filterList(value);
  });
  
  function filterList(value) {
    list.forEach(li => {
      const text = li.textContent.toLowerCase();
      li.style.display = (text.indexOf(value) != -1) ? '' : 'none';
    });
  }
  
}