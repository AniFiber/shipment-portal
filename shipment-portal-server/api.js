const express = require("express");
// Importing shipment file exports & Initializing it with ShipmentDB
const ShipmentDB = require("./db/shipment");

const router = express.Router();

/*
This file is now imported in app.js & called by "app.use("/api/shipment", Api)" so the final 
address would this "/api/shipment" ➕ any of the below endpoints
Like for "/all" it would be 👉 "http://localhost:5000/api/shipment/all"
*/

// To Create Demo Data for first time
router.get("/CreateDemoData", (req, res) => {
  ShipmentDB.create([
    { blnumber: "BL9234567", status: "Onboard" },
    { blnumber: "BL1256458", status: "Onboard" },
    { blnumber: "BL5678453", status: "Delivered" },
    { blnumber: "BL9256767", status: "Onboard" },
    { blnumber: "BL5626458", status: "Onboard" },
    { blnumber: "BL1458453", status: "Arrived Depot" },
  ]);
  res.send("Demo Data Created!!");
});

// Get Number of shipment onboard is DB
router.get("/totalOnboard", (req, res) => {
  ShipmentDB.countDocuments({ status: "Onboard" }, function (err, count) {
    if (err) res.status(400).json("Error: " + err);
    // console.log("there are %d shipment onboard", count);
    res.send({ count });
  });
});

// Get all Shipment
router.get("/all", (req, res) => {
  ShipmentDB.find(function (err, data) {
    if (err) return res.status(400).json("Error: " + err);
    // console.log(data);
    res.send(data);
  });
});

// Find Specific shipment by status & blnumber
router.post("/find", (req, res) => {
  // console.log(req.body);

  /*  On post request we recieve data in "req.body" & here we are recieving data as
  a json object.
  So it will be like :
  req.body = 
    {
      "query":{
        "blnumber":"bl123", 
        "status":"Onboard"
      }
    }


  */
  let query = req.body.query;
  /*
    query = {
        "blnumber":"bl123", 
        "status":"Onboard"
      }
  */

  // To search insensitive case (here bl1234567 & BL1234567 would be the same)
  query.blnumber = {
    $regex: new RegExp(query.blnumber, "i"), // will be like: $regex: /bl123/i
  };

  // if (query.blnumber) {
  //       let array = query.blnumber.split(",");
  //       if (array.length) {
  //         console.log({ array });
  //         newArr = array.map((a) => {
  //           return {
  //             $regex: new RegExp(a, "i"),
  //           };
  //         });
  //         console.log({ newArr });

  //         query.blnumber = { $in: newArr };
  //       } else {
  //         query.blnumber = {
  //           $regex: new RegExp(query.blnumber, "i"),
  //         };
  //       }
  // }

  ShipmentDB.find(query, (err, data) => {
    if (err) {
      res.status(400).json("Error: " + err);
    } else {
      // console.log(data);
      // res.json(data);
      res.send(data);
    }
  });
});

// Bonus Part - Search
router.post("/search", async (req, res) => {
  let docs;

  // To search a value both fields (i.e blnumber & status)
  try {
    docs = await ShipmentDB.aggregate([
      {
        $match: {
          $or: [
            {
              blnumber: {
                $regex: req.body.query,
                $options: "i",
              },
            },
            {
              status: {
                $regex: req.body.query,
                $options: "i",
              },
            },
          ],
        },
      },
    ]);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }

  // console.log({ docs });
  res.send(docs);
});

router.post("/update/:id", (req, res) => {
  // console.log(req.body.query, req.params.id);
  ShipmentDB.updateOne({ _id: req.params.id }, req.body.query, (err, data) => {
    if (err) {
      res.status(400).json("Error: " + err);
    } else {
      // res.json("Location Updated");
      // console.log(data);
      res.send(data);
    }
  });
});
// router("",(req,res)=>{})

module.exports = router;
