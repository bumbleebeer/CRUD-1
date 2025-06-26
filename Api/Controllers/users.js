import { database } from "../database.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM crud.usuarios";

    database.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
} 