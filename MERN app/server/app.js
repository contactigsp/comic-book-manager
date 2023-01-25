const express = require("express");

// express app
const app = express();
app.use(express.json());

// MOUNTING
// mycollection
const mycollectionRouter = require("./routes/myCollectionRoutes");
app.use("/api/v1/mycollection", mycollectionRouter);

// wishlist
const wishlistRouter = require("./routes/wishlistRoutes");
app.use("/api/v1/wishlist", wishlistRouter);

module.exports = app;
