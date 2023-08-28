const newman = require("newman");

newman.run(
  {
    collection: "https://api.postman.com/collections/29361425-d203e607-edc4-4157-b264-f023ca775aae?access_key=PMAT-01H8X1SYHXFCYDR62G02ESKG8K", // pointing to local JSON file.
 
    iterationCount: 1,
    reporters: "htmlextra",
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
