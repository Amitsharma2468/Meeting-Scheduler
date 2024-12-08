CREATE DATABASE meeting_scheduler;

CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role ENUM('host', 'guest') NOT NULL
    );,
    CREATE TABLE IF NOT EXISTS slots (
      id INT AUTO_INCREMENT PRIMARY KEY,
      host_id INT NOT NULL,
      start_time DATETIME NOT NULL,
      end_time DATETIME NOT NULL,
      booked TINYINT DEFAULT 0,
      guest_id INT DEFAULT NULL,
      FOREIGN KEY (host_id) REFERENCES users(id),
      FOREIGN KEY (guest_id) REFERENCES users(id)
    );,
    CREATE TABLE IF NOT EXISTS bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      slot_id INT NOT NULL,
      guest_id INT NOT NULL,
      FOREIGN KEY (slot_id) REFERENCES slots(id),
      FOREIGN KEY (guest_id) REFERENCES users(id)
    );