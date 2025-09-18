// server.js
import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
sqlite3.verbose();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//================ Create DB ===================
const db = new sqlite3.Database("db.sqlite", (err) => {
  if (err) console.error("========= Error to connect DB:", err.message);
  else console.log("========= DB CONECTED");
});

// ============ Users table ===================
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    name TEXT,
    phone TEXT NOT NULL,
    address TEXT NOT NULL
  )
`);

// ============ Products table ===================
db.run(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    path TEXT
  )
`);

// ============= Orders table ==================
db.run(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
  )
`);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ products: rows });
  });
});

app.post("/addproducts", (req, res) => {
  const { name, price, path } = req.body;

  if (!name || !price || !path) {
    return res.status(400).json({ error: "Need: name, price, path" });
  }

  const sql = `INSERT INTO products (name, price, path) VALUES (?, ?, ?)`;
  db.run(sql, [name, price, path], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({
      message: "========== Products added ==========",
      id: this.lastID,
    });
  });
});

// Orders

app.post("/orders", (req, res) => {
  const { name, email, phone, address, cart } = req.body;

  if (!name || !email || !phone || !address || !cart || cart.length === 0) {
    return res.status(400).json({ error: "Fill all fields" });
  }

  db.get(`SELECT id FROM users WHERE email = ?`, [email], (err, user) => {
    if (err) return res.status(500).json({ error: err.message });

    const handleUserId = (userId) => {
      cart.forEach((item) => {
        const { productId, quantity } = item;

        db.get(
          `SELECT id, quantity FROM orders WHERE user_id = ? AND product_id = ?`,
          [userId, productId],
          (err, existingOrder) => {
            if (err) return console.error(err.message);

            if (existingOrder) {
              db.run(
                `UPDATE orders SET quantity = quantity + ? WHERE id = ?`,
                [quantity, existingOrder.id],
                (err) => {
                  if (err) console.error(err.message);
                }
              );
            } else {
              db.run(
                `INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)`,
                [userId, productId, quantity],
                (err) => {
                  if (err) console.error(err.message);
                }
              );
            }
          }
        );
      });

      res.json({ message: "====Order accepder/created" });
    };

    if (user) {
      handleUserId(user.id);
    } else {
      db.run(
        `INSERT INTO users (name, email, phone, address) VALUES (?, ?, ?, ?)`,
        [name, email, phone, address],
        function (err) {
          if (err) return res.status(500).json({ error: err.message });
          handleUserId(this.lastID);
        }
      );
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on "http://localhost:${PORT}`);
});
