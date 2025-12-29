* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: linear-gradient(180deg, #1e6bff, #4aa3ff);
  color: #fff;
  padding-bottom: 80px;
}

/* HEADER */
.header {
  padding: 15px;
  text-align: center;
  background: #0f4fd8;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.logo span {
  color: gold;
}

/* BALANCE */
.balance-card {
  background: #1b5fe0;
  margin: 15px;
  border-radius: 15px;
  padding: 20px;
}

.balance {
  font-size: 32px;
  font-weight: bold;
  margin: 10px 0;
}

.balance-info {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.balance-info div span {
  font-size: 12px;
  opacity: 0.8;
}

/* ACTIONS */
.actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 15px;
}

.actions button {
  padding: 15px;
  border: none;
  border-radius: 12px;
  background: #ffffff;
  color: #1e6bff;
  font-weight: bold;
}

/* TIMER */
.timer {
  text-align: center;
  margin: 20px 0;
}

.timer h3 {
  font-size: 22px;
  margin-top: 5px;
}

/* BOTTOM NAV */
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.bottom-nav a {
  color: #888;
  font-size: 14px;
  text-decoration: none;
}

.bottom-nav a.active {
  color: #1e6bff;
  font-weight: bold;
}
