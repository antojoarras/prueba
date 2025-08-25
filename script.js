document.querySelectorAll('.monster').forEach(monster => {
  monster.addEventListener('click', () => {
    const isActive = monster.classList.contains('active');
    document.querySelectorAll('.monster').forEach(m => m.classList.remove('active'));
    if (!isActive) monster.classList.add('active');
  });
});
