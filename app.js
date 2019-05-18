const path = require('path');
const fs = require('fs');
const os = require('os');
const Busboy = require('busboy');
const uuidv1 = require('uuid/v1');
const express = require('express')

const app = express()
const port = 8001

app.get('/team/:guid', (req, res) => {
    filename = path.join(".", 'public/team/index.html');

    fs.readFile(filename, "utf8", (err, data) => {
        if (err) {
            console.log(`Error reading file: ${filename}`, err);
            res.redirect("/")
            return
        }
        res.send(data)
    });
});

app.use(express.static('public'))


/**
 * Returns the csv file that has the specified guid
 * */
app.get('/f/:guid', (req, res) => {
    // response.send('user ' + request.params.guid);
    let filename = toFilename(req.params.guid)

    filename = path.join(".", filename)

    fs.readFile(filename, "utf8", (err, data) => {
        if (err) {
            console.log(`Error reading file: ${filename}`, err);
            res.redirect("/")
            return
        }
        res.send(data)
    });
});

app.post('/', function (req, res) {
    const busboyHandler = {
        fileGUID: makeGUID(),
        onFile: function () {
            let guid = this.fileGUID;

            return function (fieldname, file, filename, encoding, mimetype) {
                try {
                    console.log('[onFile] New guid:', guid);
                    processFile(guid, fieldname, file, filename, encoding, mimetype)
                } catch (error) {
                    console.log('[busboy] There was an error in busboy', error);
                    res.redirect("/")
                }
            }
        },
        onFinish: function () {
            let guid = this.fileGUID;

            return function () {
                console.log('Upload complete. New guid:', guid);
                res.redirect(`/team/${guid}`);
            }
        },
        onError: function () {
            return function (err) {
                console.log('There was an error in busboy', err);
                res.redirect("/")
            }
        }
    }

    // busboyHandler.fileGUID = makeGUID();

    const busboy = new Busboy({
        headers: req.headers,
    });

    busboy.on('file', busboyHandler.onFile());
    busboy.on('finish', busboyHandler.onFinish());
    busboy.on('error', busboyHandler.onError())

    return req.pipe(busboy);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function toFilename(guid) {
    return `/public/test-data/${guid}.csv`;
}

function makeGUID() {
    let uuid = uuidv1();
    let guid = uuid.split("-")[0];

    console.log("guid", guid)
    return guid;
}

function processFile(guid, fieldname, file, filename, encoding, mimetype) {
    filename = toFilename(guid);
    let saveTo = path.join('.', filename)

    console.log("[processFile]", guid, saveTo)
    console.log('[processFile] Uploading: ' + saveTo);
    file.pipe(fs.createWriteStream(saveTo));
}