# Сайт-переходник

Статическая страница с кнопками Telegram, ВКонтакте, Discord и TikTok.

## Настройка ссылок и имени

Откройте `script.js` и замените `Ваше имя`, описание и URL в объекте `profile` на свои данные. Например, Telegram: `https://t.me/username`, TikTok: `https://www.tiktok.com/@username`. Для Discord можно использовать ссылку на профиль или приглашение на сервер.

## Публикация на GitHub Pages

1. Создайте новый публичный репозиторий на GitHub.
2. Загрузите в корень репозитория `index.html`, `styles.css`, `script.js`, `.nojekyll` и папку `.github`.
3. В репозитории откройте **Settings → Pages**.
4. В **Build and deployment → Source** выберите **GitHub Actions**.
5. Дождитесь завершения workflow **Deploy static site to GitHub Pages** во вкладке **Actions**. Адрес сайта будет показан в настройках Pages.

Публикация настроена через workflow `.github/workflows/pages.yml`.
