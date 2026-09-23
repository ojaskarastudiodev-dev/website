// Keep the page lightweight: load a YouTube player only after a viewer clicks.
document.querySelectorAll('[data-video]').forEach((preview) => {
  preview.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const player = document.createElement('iframe');
    player.src = `https://www.youtube-nocookie.com/embed/${preview.dataset.video}?autoplay=1&rel=0`;
    player.title = preview.dataset.title;
    player.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    player.allowFullscreen = true;
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    preview.replaceWith(player);
    player.focus();
  });
});
