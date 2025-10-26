import express, { json } from "express";
import { Resend } from "resend";
import dotenv from 'dotenv'


const app = express();
dotenv.config();

app.use(express.json()); // so we can parse JSON



app.post("http://localhost:8080/send", async (req, res) => {
  const email = req.body.email;
  const password =  req.body.password;
  

  // const resend = new Resend(process.env.RESEND_API_KEY);

  // const { data, error } = await resend.emails.send({
  //   from: "noreply <noreply@arbezzebra.dk>",
  //   to: [email],
  //   subject: "hello world",
  //   html: "<p>it works!</p>",
  // });

  
  // if (error) {    
  //     return res.status(500).send({data: error})
  //   } 
    
    res.send({ data: email, password });
});



const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on PORT: ", PORT));
