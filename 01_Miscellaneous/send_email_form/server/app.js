import express, { json } from "express";
import { Resend } from "resend";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

const app = express();
dotenv.config();

app.use(express.json()); // so we can parse JSON
app.use(express.urlencoded({ extended: true })); // so we can parse URL encoded form data

app.post("/send", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const hashesPassword = await bcrypt.hash(password, 10);

    console.log(hashesPassword);
    

    // const resend = new Resend(process.env.RESEND_API_KEY);

    // const { data, error } = await resend.emails.send({
    //   from: "noreply <noreply@arbezzebra.dk>",
    //   to: [email],
    //   subject: "hello world",
    //   html: "<p>it works!</p>",
    // });

    res.send({ data: data });
  } catch (err) {
    return res.status(500).send({ data: err });
  }
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on PORT: ", PORT));
