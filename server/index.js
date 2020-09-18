const express = require("express"
);
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;
const app = express();

const productsRoute = require("./routes/productsRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/products", productsRoute);
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running at port: ${PORT}`);
  }
});

// const mongoClient = require("mongodb").MongoClient;
// const uri =
// "mongodb+srv://capstone_e_shopping:kL7gP74c4uQwNna@cluster0.qkwqp.mongodb.net/capstone_e_shopping?retryWrites=true&w=majority";

// mongoClient.connect(
//   uri,
//   { useUnifiedTopology: true, useNewUrlParser: true },
//   (err, dbHost) => {
//     if (err) {
//       console.log(`Error connection to server`);
//     } else {
//       db = dbHost.db("project");
//       db.collection("products", (err, coll) => {
//         if (err) {
//           console.log(`Error : ${err}`);
//           return null;
//         } else {
//           coll
//             .find({})
//             .then((data) => {
//               console.log(data);
//             })
//             .catch((err) => {
//               console.log(err);
//               return null;
//             });
//         }
//       });
//     }
//   }
// );
// app.listen(PORT, (err) => {
//   if (!err) {
//     console.log(`Connecting to the server...`);
//   }
// });
