import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let users = [];
let dataStore = [];


//Метод GET
app.get("/data", (req, res) => {
  res.json(dataStore);
});

app.get("/users", (req, res) => {
  res.json(users);
});

// Обработка POST-запросов
app.post('/data', (req, res) => {
  const newData = req.body;
  dataStore.push(newData); // Сохраняем данные в массив
  res.status(201).json(newData); // Отправляем ответ с новыми данными
});

// Регистрация
app.post('/register', (req, res) => {
  const { email, password, name, surname, phone, role } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'Пользователь уже существует' });
  }
  users.push({ email, password, name, surname, phone, role });
  res.status(201).json({ message: 'Регистрация успешна' });
});

// Вход
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ message: 'Вход успешен', user: { email: user.email, name: user.name, surname: user.surname, phone: user.phone, role: user.role } });
  } else {
    res.status(400).json({ error: 'Неверный email или пароль' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});



// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser"

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors()); // Позволяет запрашивать сервер с других доменов
// app.use(bodyParser.json()); // Для парсинга JSON

// // Массив для хранения данных
// let dataStore = [];
// let users = [];

// //Метод GET
// app.get("/data", (req, res) => {
//     res.json(dataStore);
//   });

// // Обработка POST-запросов
// app.post('/data', (req, res) => {
//   const newData = req.body;
//   dataStore.push(newData); // Сохраняем данные в массив
//   res.status(201).json(newData); // Отправляем ответ с новыми данными
// });

// app.post('/register', (req, res) => {
//     const { email, password } = req.body;
//     // Проверка, есть ли уже пользователь
//     if (users.find(u => u.email === email)) {
//         return res.status(400).json({ error: 'Пользователь уже существует' });
//     }
//     // Добавление пользователя
//     users.push({ email, password });
//     res.status(201).json({ message: 'Регистрация успешна' });
// });

// // Авторизация
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     // Поиск пользователя
//     const user = users.find(u => u.email === email && u.password === password);
//     if (user) {
//         res.json({ message: 'Вход успешен' });
//     } else {
//         res.status(400).json({ error: 'Неверный email или пароль' });
//     }
// });

// app.get("/users", (req, res) => {
//     res.json(users);
// });

// // Запуск сервера
// app.listen(PORT, () => {
//   console.log(`Сервер запущен на http://localhost:${PORT}`);
// });
