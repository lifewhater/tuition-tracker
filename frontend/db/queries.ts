import { db } from "./tables";

export function addStudents(name: string, rateCents: number){
    db.runSync("INSERT INTO students (name, rate_cents) VALUES (?, ?)", [name, rateCents]);
}

export function getStudents(){
    return db.getAllSync<{id: number; name: string; rate_cents: number}>(
        "SELECT id, name, rate_cents FROM students WHERE active = 1 ORDER BY name"
    );
}