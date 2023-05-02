[![Tests](../../actions/workflows/tests-13-sprint.yml/badge.svg)](../../actions/workflows/tests-13-sprint.yml) [![Tests](../../actions/workflows/tests-14-sprint.yml/badge.svg)](../../actions/workflows/tests-14-sprint.yml)
# Бэкенд проекта Место 

## Описание проекта
Место - это интерактивная страница, на которой пользователи могут делиться фотографиями, удалять их и ставить лайки. 


- Взаимодействие с Express и MongoDB;
- Описания схем и моделей;
- Описания контроллеров и роутов;
- CORS. Обработка ошибок.

## Функционал:
- Роуты для пользователей:
  - GET /users — возвращает всех пользователей из базы;
  - GET /users/:userId — возвращает пользователя по _id;
  - POST /users — создаёт пользователя с переданными в теле запроса name, about и avatar.

- Роуты для карточек:
  - GET /cards — возвращает все карточки из базы;
  - POST /cards — создаёт карточку с переданными в теле запроса name и link, устанавливает поле owner для карточки;
  - DELETE /cards/:cardId — удаляет карточку по _id.

## Стек технологий:
- JavaScript:
  - Промисы (Promise);
  - Асинхронность и оптимизация;
  - Rest API;
- Node.js;
- Express;
- MongoDB.

## Директории
* `/controllers` – содержит файлы описания моделей пользователя и карточки;
* `/models` – содержит файлы описания схем пользователя и карточки;
* `/routes` — содержит описание основных роутов для пользователя и карточки;
* `/errors` – содержит описание ошибок.

## Установка и запуск проекта:
Клонировать репозиторий:

    git clone https://github.com/atex69/express-mesto-gha.git

Установить зависимости:

    npm install

Запустить сервер:

    npm run start

Запустить сервер с hot-reload:

    npm run dev

## Языки:
- JavaScript

## Библиотеки:
- Express

## База данных:
- MongoDB

