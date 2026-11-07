// Замените значения на свои. Для Discord подойдёт ссылка на профиль/сервер-приглашение.
const profile = {
  name: 'katsu',
  bio: 'Все мои ссылки — в одном месте.',
  links: {
    telegram: 'https://t.me/skyseksi',
    vk: 'https://vk.com/ravage45',
    discord: 'https://discord.com/users/612478099048759310',
    tiktok: 'https://www.tiktok.com/@k4tsu72',
    steam: 'https://steamcommunity.com/id/katsu404/',
  },
};

document.querySelectorAll('[data-profile-name]').forEach((element) => {
  element.textContent = profile.name;
});
document.querySelector('[data-profile-bio]').textContent = profile.bio;
document.querySelector('[data-year]').textContent = String(new Date().getFullYear());

document.querySelectorAll('[data-link]').forEach((anchor) => {
  const url = profile.links[anchor.dataset.link];
  if (url) anchor.href = url;
});
