function fetchData(author) {
  let pageNum = 1;
  const url = `https://jsonmock.hackerrank.com/api/articles?author=${author}`;
  https.get(url, (res) => {
    res.setEncoding("utf8");
    res.on("data", function (body) {
      let dataRec = JSON.parse(body);
      let articles = dataRec.data;
      let totPages = dataRec.total_pages;
      let titles = [];
      articles.map((article) => {
        // sortArray.push(a.Title)
        article.title
          ? titles.push(article.title)
          : article.story_title
          ? titles.push(article.story_title)
          : titles.push(null);
      });
      if (totPages > 1) {
        for (let i = 2; i <= totPages; i++) {
          let newPage = i;
          // let url1 = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + "&page=" + newPage;
          let url1 = `https://jsonmock.hackerrank.com/api/articles?author=${author}&page=${newPage}`;
          https.get(url1, (res) => {
            res.setEncoding("utf8");
            res.on("data", function (body) {
              let newData = JSON.parse(body);
              let newArticles = newData.data;
              for (let i = 0; i < newArticles.length; i++) {
                newArticles[i].title
                  ? titles.push(newArticles[i].title)
                  : newArticles[i].story_title
                  ? titles.push(newArticles[i].story_title)
                  : titles.push(null);
              }
              // let sorted = sortArray.sort();
              // let final = titles.join("\n");
              // console.log(final);
              console.log(titles);
            });
          });
        }
      } else {
        // let sorted = sortArray.sort();
        console.log(titles.join("\n"));
      }
    });
  });
}

//primary function
function getArticleTitles(author) {
  fetchData(author);
}

const https = require("https");

const getTotalPages = (url, callback) => {
  https
    .get(url, (res) => {
      let data = "";

      res.on("data", (chunk) => (data += chunk));

      res.on("end", () => {
        return callback(null, JSON.parse(data).total_pages);
      });
    })
    .on("error", (err) => {
      return callback(err, null);
    });
};

const getArticlesHelper = (urls, callback) => {
  let titles = [];
  let count = 1;

  urls.forEach((url) => {
    https
      .get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => (data += chunk));

        res.on("end", () => {
          const articles = JSON.parse(data).data;

          articles.forEach((article) =>
            article.title
              ? titles.push(article.title)
              : article.story_title
              ? titles.push(article.story_title)
              : titles.push(null)
          );

          if (count === urls.length) {
            return callback(null, titles);
          }

          count++;
        });
      })
      .on("error", (err) => {
        return callback(err, null);
      });
  });
};

async function getArticleTitles(author) {
  if (author === "") return null;

  const url = `https://jsonmock.hackerrank.com/api/articles?author=${author}`;

  getTotalPages(url, (err, totalPages) => {
    if (err) {
      log("Error getting total number of available pages:", err);
    } else {
      const urls = [];
      for (let pageNo = 1; pageNo <= totalPages; pageNo++) {
        urls.push(`${url}&page=${pageNumber}`);
      }
      try {
        await getArticlesHelper(urls, (err, titles) => {
          if (err) {
            log("Error retrieving movies titles:", err);
          } else {
            titles.sort().forEach((title) => console.log(title));
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  });
}

// const router = new express.Router();

// router.get(
//   `https://jsonmock.hackerrank.com/api/articles?author=${authorName}&page=${pageNo}`,
//   async (req, res) => {
//     let title = [];
//     try {
//       const res = await res.status(200).send();
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   }
// );

// transactionListHistory: builder.query<void, TransactionHistoryRequest>({
//     query: (body) => ({
//       url: `/web/transactions/chartData?limit=20&page=${body.page}&userId=${body.userId}`,
//       // url: `/payments?limit=20&page=${body.page}&userId=${body.userId}`,
//     }),
//     transformResponse: (response: any) => response,
//   }),

// const { data, refetch, isLoading }: any = useTransactionListHistoryQuery({
//     userId: userData().userID,
//     page: currPage,
//   });

// // Get all tasks
// router.get("/api/v1/tasks", async (req, res) => {
//     try {
//       const tasks = await Task.find({});
//       res.status(200).send(tasks);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   });

// // // Get all tasks
// // app.get("/api/v1/tasks", async (req, res) => {
// //   try {
// //     const tasks = await Task.find({});
// //     res.status(200).send(tasks);
// //   } catch (error) {
// //     res.status(500).send(error);
// //   }
// // });
// // // app.get("/api/v1/tasks", (req, res) => {
// // //   Task.find({})
// // //     .then((tasks) => {
// // //       res.status(200).send(tasks);
// // //     })
// // //     .catch((err) => {
// // //       res.status(500).send(err);
// // //     });
// // // });
