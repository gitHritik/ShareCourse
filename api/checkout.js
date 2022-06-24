const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51KaimASI6i4F9vZj7kLYhduPufxAxRcXDFick0u7DO9YD6vP7zcqgRKnlVY9lQ8HfBU75n3CSQJvOnjuLJ4upET5004CaT4CGE"
);
const { v4: uuidv4 } = require("uuid");

const User = require("./user");
uuidv4();

const app = express();

app.use(express.json());
app.use(cors());
require("./db");

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});
app.post("/contact", async (req, res) => {
  try {
    const userData = new User(req.body);
    await userData.save();
    res.status(201).render("contact");
  } catch (error) {
    res.status(401).send("Page is not found");
  }
});

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { courses, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotency_key = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: 300 * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the Web develpment`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotency_key,
      }
    );
    console.log("Error:", { error });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "success";
  }

  res.json({ error, status });
});

app.listen(8080);
