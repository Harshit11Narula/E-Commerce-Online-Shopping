var mongoClient = require("mongodb").MongoClient;

var mongodbUrl =
  "mongodb+srv://capstone_e_shopping:kL7gP74c4uQwNna@cluster0.qkwqp.mongodb.net/capstone_e_shopping?retryWrites=true&w=majority";

function cart(req, res) {
  mongoClient.connect(
    mongodbUrl,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, dbHost) => {
      if (err) {
        res.status(500);
        res.json({ message: "Not able to connect to the server" });
      } else {
        var db = dbHost.db("project");
        db.collection("cart", (err, coll) => {
          if (err) {
            res.status(500);
            res.json({ message: "Not able to connect to the server" });
          } else {
            coll
              .find({ })
              .toArray((err, data) => {
                if (err) {
                  res.status(500);
                  res.json({
                    message: "Not able to connect to the server",
                  });
                } else {
                  res.json(data);
                }
              });
          }
        });
      }
    }
  );
}

module.exports = cart;
