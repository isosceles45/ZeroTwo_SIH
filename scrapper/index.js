const PORT = process.env.PORT || 8000;
import express from "express";
import axios from "axios";
import cheerio from "cheerio";
const app = express();
import connect from "./connect.js";
import Advocate from "./advocate.model.js";

const cols = 4;
const LawyersLinks = [];
const LawyersDetails = [];
const path = "https://www.legalserviceindia.com/lawyers/";
axios
  .get("https://www.legalserviceindia.com/lawyers/lawyers_home.htm")
  .then((response) => {
    if (response.data != null) {
      const $ = cheerio.load(response.data);

      $(".law-block")
        .find($(".block-columns"))
        .find($("ul"))
        .find($("li"))
        .each((i, el) => {
          const link = $(el).find($("a")).attr("href");
          if (link.toString().includes("/int_lawyers")) {
            return;
          }
          LawyersLinks.push(link);
        });
    } else {
      console.log("error");
    }
  });

const findLawyerDetails = (link) => {
  const page = path + link;
  console.log(page);
  axios.get(page).then((response) => {
    if (response.data != null) {
      const $ = cheerio.load(response.data);
      let details = "";
      $(".presentation")
        .find($(".law-block"))
        .each((i, el) => {
          let data;
          $(el)
            .find($("table"))
            .find($("tbody"))
            .find($("tr"))
            .each((i, el) => {
              details = $(el)
                .find($("td"))
                .each((i, el) => {
                  data += $(el).text() + " ";
                });
            });
          console.log("------------------------------------------------");
          // data = data?.toString().split("\n");
          //   for (let i = 0; i < data?.length; i++) {
          //     data[i] = data[i].trim();
          //   }
          data = data?.trim();
          data = data?.replace(/\s\s+/g, " ");

          const descIndex = data?.indexOf("Firm Description") + 17;
          const desc = data?.substring(descIndex);
          if (desc == undefined || desc == null || desc == -1) return;
          const emailIndex = data?.indexOf("Email:");
          const copIndex = data?.indexOf("Court of practice:");
          const cop = data?.substring(copIndex, emailIndex);

          const expIndex = data?.indexOf("Expiry Date:");
          const name = data?.substring(10, expIndex);

          const addIndex = data?.indexOf("Address:") + 9;
          const telIndex = data?.indexOf("Tel No:");

          const address = data?.substring(addIndex, telIndex);
          const tel = data?.substring(telIndex + 8, telIndex + 20);

          LawyersDetails.push({
            name,
            address,
            tel,
            desc,
            cop,
            city: link.split(".")[0],
          });
          console.log(data);
          data = "";
        });
    }
  });
};

app.get("/api/lawyers", (req, res) => {
  LawyersLinks.forEach((link) => {
    findLawyerDetails(link);
  });
  res.json(LawyersLinks);
});

app.get("/api/lawyers/details", async (req, res) => {
  console.log(LawyersDetails.length);
  await Advocate.create(LawyersDetails);
  res.json(LawyersDetails);
});

const server = app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
