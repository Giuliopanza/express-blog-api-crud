const arrayPosts = require('../data/posts.js');

function index(req, res) {
    // copiamo la logica dell'index

    // res.send('Lista delle pizze');
    //Inizialmente, il menu filtrato corrisponde a quello originale
    let filteredPosts = arrayPosts;

    // Se la richiesta contiene un filtro, allora filtriamo il menu
    if (req.query.ingredient) {
        filteredPosts = arrayPosts.filter(
            post => post.title.includes(req.query.title) //"salame piccante"
        );
    }

    // restituiamo la variabile filteredMenu
    // potrebbe essere stata filtrata o contenere il menu originale
    res.json(filteredPosts);
}

function show(req, res) {
    // res.send('Dettagli della pizza ' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const post = arrayPosts.find(post => post.id === id);

    // Facciamo il controllo
    if (!post) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    // Restituiamolo sotto forma di JSON   
    res.json(post);
}

function store(req, res) {
    res.send('Creazione nuova pizza');
}

function update(req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
}

function patch(req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
}

function destroy(req, res) {
    // copiamo la logica della destroy..
    // res.send('Eliminazione della pizza ' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const post = arrayPosts.find(post => post.id === id);

    // Facciamo il controllo
    if (!post) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }


    // Rimuoviamo la pizza dal menu
    arrayPosts.splice(arrayPosts.indexOf(post), 1);

    // Restituiamo lo status corretto
    res.sendStatus(204)
}

// esportiamo tutto
module.exports = { index, show, store, update, patch, destroy }