const unlock = document.querySelector('.unlock');
const video = document.querySelector('.background-video');
const music = document.querySelector('#music');
const player = document.querySelector('.music-player');
const toggle = document.querySelector('.music-toggle');
const details = document.querySelector('.music-details');
const play = document.querySelector('.play-toggle');
const volume = document.querySelector('.volume');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

music.volume = Number(volume.value);

function updatePlayback() {
  play.textContent = music.paused ? '▷' : 'Ⅱ';
  play.setAttribute('aria-label', music.paused ? 'Включить музыку' : 'Приостановить музыку');
}

unlock.addEventListener('click', () => {
  document.body.classList.add('unlocked');
  unlock.classList.add('is-unlocked');
  unlock.inert = true;
  player.hidden = false;
  if (!reducedMotion.matches && video instanceof HTMLVideoElement) video.play().catch(() => {});
  music.play().catch(updatePlayback);
  document.querySelector('.profile-button').focus({ preventScroll: true });
}, { once: true });

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(expanded));
  toggle.setAttribute('aria-label', expanded ? 'Закрыть музыкальный плеер' : 'Открыть музыкальный плеер');
  details.hidden = !expanded;
});

play.addEventListener('click', () => {
  if (music.paused) music.play().catch(updatePlayback);
  else music.pause();
});
volume.addEventListener('input', () => { music.volume = Number(volume.value); });
music.addEventListener('play', updatePlayback);
music.addEventListener('pause', updatePlayback);

function updateMotion() {
  if (!(video instanceof HTMLVideoElement)) return;
  if (reducedMotion.matches) video.pause();
  else video.play().catch(() => {});
}
reducedMotion.addEventListener('change', updateMotion);
updateMotion();
