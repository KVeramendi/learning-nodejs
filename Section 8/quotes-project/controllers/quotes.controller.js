const path = require('path');
const fs = require('fs');
const DB_PATH = path.join(__dirname + '/../data/db.json')
let db = require(DB_PATH)

function render(file, res) {
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class QuotesController {
    async index(req, res) {
        return render('quotes', res)
    }

    async getAll(req, res) {
        return res.send(db);
    }

    async addItem(req, res) {
        const { body: quote } = req;
        const lastQuote = db.length > 0 ? db[db.length - 1] : null;
        const id = lastQuote ? lastQuote.id + 1 : 1;
        quote.id = id;
        db.push(quote);
        try {
            fs.writeFileSync(DB_PATH, JSON.stringify(db));
            return res.status(201).send({ message: "Quote added successfully", quote });
        } catch (error) {
            return res.status(500).send({ error: "Failed to write to database" });
        }
    }
}

module.exports = new QuotesController();