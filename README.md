# Тестовое задание itprofit

## :heavy_check_mark: Требования:
- Весь javascript код должен быть написан модульно с синтаксисом ES6 без использования сторонних библиотек таких как jQuery.
- Для стилей обязательно использовать препроцессор (любой, но желательно sass).
- Все исходники компилировать при помощи webpack
- Исходный код должен быть залит в публичный репозиторий

## Задачи:
1. :heavy_check_mark: Развернуть проект:
- [x] создать структуру папок
- [x] создать файл .gitignore с корректным содержимым
- [x] подключить git
- [x] подключить webpack
2. :x: Сверстать произвольную (дизайн на усмотрение, но все должно быть стилизовано) форму обратной связи с полями:
- [x] Имя (текстовое поле)
- [x] E-mail (поле типа email)
- [x] Телефон (текстовое поле)
- [x] Сообщение (textarea)
3. :heavy_check_mark: Подключить маску для телефона (взять из npm)
4. :heavy_check_mark: Написать модуль валидации формы на JS. Выводить текст ошибки (произвольный) под соответствующим полем, поля с ошибкой стилизовать соответственно (например красный бордер). Правила валидации:
- [x] Все поля обязательны к заполнению
- [x] поле email должно содержать корректный адрес электронной почты.
5. :heavy_check_mark: Написать модуль ajax отправки формы. Все данные должны отправляться на сервер, в ответе должен быть json объект в формате:
```json
{
  "status": "error",
  "fields": {
    "inputName": "сообщение об ошибке"
  }
}
```

Или:
```json
{
  "status": "success",
  "msg": "Ваша заявка успешно отправлена"
}
```

Где:
- status = success/error
- fields = объект с полями которые содержат ошибки
- ключи объекта fields = атрибут name поля с ошибкой
- значение ключей объекта fields = сообщение об ошибке
- msg = сообщение для вывода в форме
6. :heavy_check_mark: Обработать ответ error с выводом соответствующих сообщений об ошибке
7. :heavy_check_mark: Обработать ответ success:
- [x] очистить все поля
- [x] вывести сообщение msg
8. :heavy_check_mark: Сверстать произвольное модальное окно с произвольным текстом, добавить на страницу кнопку которая будет открывать это модальное окно. Требования:
- [x] при открытии модального окна, страница не должна “дергаться”
- [x] открытие должно быть анимированным (на Ваше усмотрение)
- [x] страница не должна прокручиваться при открытом модальном окне
- [x] все должно быть реализовано максимально через css (предполагается что js будет только добавлять/удалять классы)


## Сервер:
Добавляем в package.json в скрипты:
```json
  "scripts": { 
    // Ваши скрипты 
    // ...
    // 
    "server": "node server/index.js" 
  },
```

В зависимости проекта добавляем:
- "cors" - `npm i cors`
- "express" - `npm i express`

В корне проекта (там где package.json) создаем папку server. В папке создаем файл index.js со следующим [содержимым](https://github.com/RErokho/test-itprofit/blob/main/server/index.js). Сервер доступен по localhost:9090

Доступные запросы:
- ping - /api/ping - GET запрос для проверки работоспособности сервера (можно в браузере ввести http://localhost:9090/api/ping ). При успешном запуске отобразится:
```json
{
  "status": "success",
  "message": "Server is ready"
}
```
- registration - /api/registration - POST запрос для регистрации - случайно выдает либо серверную ошибку (400), либо успех (200)
