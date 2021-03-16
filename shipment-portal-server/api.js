const express = require("express");
const ShipmentDB = require("./db/shipment");

const router = express.Router();

// For Demo Purpose Only
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

  if (req.body.query.blnumber) {
    req.body.query.blnumber = {
      $regex: new RegExp(req.body.query.blnumber, "i"),
    };
  }

  ShipmentDB.find(req.body.query, (err, data) => {
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
// router("",(req,res)=>{})

module.exports = router;
