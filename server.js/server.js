const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

let serviceAccount = require("./smartstore-c0b21-firebase-adminsdk-jsk2i-d6f192a1f2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let staticPath = path.join(__dirname, "public");

const app = express();

//middlewares
app.use(express.static(staticPath));
app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})    

app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})    

app.post('/signup', (req, res) => {
    let { nami, email, password, number, tac, notification } = req.body; 

    if(nami.value.length < 3){
        return res.json({'alert': 'name must be 3 letters long'});
    } else if(!email.value.length){
        return({'alert': 'enter your email'});
    } else if(password.value.length < 8){
        return({'alert': 'password should be 8 letters long'});
    } else if(!number.value.length){
        return({'alert': 'enter your phone number'});
    } else if(!Number(number.value) || number.value.length < 10){
        return({'alert': 'invalid number, please enter valid one'});
    } else if(!tac){
        return({'alert': 'you must agree to our terms and conditions'});
    }

    db.collection('users').doc(email).get()
.then(user => {
    if(user.exists){
        return res.json({'alert': 'email already exists'});
    } else{
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                req.body.password = hash;
                db.collection('users').doc(email).set(req.body)
                .then(data => {
                    res.json({
                        name: req.body.name,
                        email: req.body.email,
                        seller: req.body.seller,
                    })
                })
            })
        })
    }
})

})

app.get('/login' , (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.post('/login' , (req, res) => {
    let { email, password } = req.body;

    if(!email.length || !password.length){
        return res.json({'alert': 'fill all the inputs'})
    }

    db.collection('users').doc(email).get()
    .then(user => {
        if(!user.exists){
            return res.json({'alert': 'log in email does not exists'})
        } else{
            bcrypt.compare(password, user.data().password, (err, result) => {
                if(result){
                    let data = user.data();
                    return res.json({
                        name: data.name,
                        email: data.email,
                        seller: data.seller,
                    })
                } else{
                    return res.json({'alert': 'password in incorrect'})
                }
        })
    }
    })
})

app.get('/seller', (req, res) => {
    res.sendFile(path.join(staticPath, "seller.html"));
})

app.post('/seller', (req, res) => {
    let { name, about, address, number, tac, legit, email } = req.body;
    if(!name.lenght || !address.lenght || !about.lenght || !number.lenght < 13 || !Number(number)){
        return res.json({'alert': 'some inforamations(s) is/are invalid'});
    } else if(!tac || !legit){
        return res.json({'alert': 'you must agree to our terms and conditions'})
    } else{
        db.collection('sellers').doc(email).set(req.body)
        .then(data => {
            db.collection('users').doc(email).update({
                seller: true
            }).then(data => {
                res.json(true);
        })
    })
  }
})

app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})

