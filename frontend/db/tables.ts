import { openDatabaseSync} from 'expo-sqlite'

export const db = openDatabaseSync("tuition.db");
db.execSync(`
    CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    rate_cents INTEGER NOT NULL DEFAULT 10,
    default_mins INTEGER NOT NULL DEFAULT 60,
    active INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY,
    student_id INTEGER NOT NULL REFERENCES students(id),
    date TEXT NOT NULL,
    minutes INTEGER NOT NULL,
    rate_cents INTEGER NOT NULL,
    UNIQUE (student_id, date)
    );
    `)