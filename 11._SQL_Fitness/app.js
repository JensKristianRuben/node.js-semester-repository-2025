import express, { json }  from 'express'
import exerciseRouter from './routers/exercisesRouter.js'
import usersRouter from './routers/usersRouter.js';


const app = express();
app.use(express.json());
app.use(exerciseRouter);
app.use(usersRouter);
app.use(express.static('public'));

// Multer

import multer from 'multer';
const upload = multer({ dest: './uploads' } );

app.post("/profile", upload.single('avatar'), (req, res) => {
    res.send({ data: "Data uploaded" });
})





const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
    console.log("Server is running on PORT: ", PORT);
    
})

