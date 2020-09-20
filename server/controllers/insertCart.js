var mongoClient = require("mongodb").MongoClient;

var mongodbUrl =
  "mongodb+srv://capstone_e_shopping:kL7gP74c4uQwNna@cluster0.qkwqp.mongodb.net/capstone_e_shopping?retryWrites=true&w=majority";

function insertCart(req, res) {
  mongoClient.connect(
    mongodbUrl,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, dbHost) => {
      if (err) {
        res.status(500);
        res.json({ message: "Not able to connect to the server" });
      } else {
        var db = dbHost.db("project");
        db.collection("products", (err, coll) => {
          if (err) {
            res.status(500);
            res.json({ message: "Not able to connect to the server" });
          } else {
              var userToBeChecked = req.body;
            coll
              .find({ category: userToBeChecked.category })
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

module.exports = insertCart;
