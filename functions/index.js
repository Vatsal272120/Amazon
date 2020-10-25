const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51Hf4ZSINMjRZRciD7iN9lszuYl6b9pi8Dc9R7I2NGWGjonNoOqwRs2lG0wNUtBstpR6jK5goVZmb9Y0ZkIal7fTZ00bCfsJ0Lo"
);

// app config

const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/customer/create", async (req, res) => {
  const customer = await stripe.customers.create({
    name: "vatsal",
    address: {
      line1: "510 Townsend St",
      postal_code: "98140",
      city: "San Francisco",
      state: "CA",
      country: "US",
    },
  });
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log(`payment request recieved for ${total}`);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    description: "Amazon clone",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// app listen - api
exports.api = functions.https.onRequest(app);
