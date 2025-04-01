import { AssetCache } from "@11ty/eleventy-fetch";
import axios from "axios";
import rateLimit from "axios-rate-limit";

const http = rateLimit(axios.create(), {
  maxRequests: 2,
  perMilliseconds: 1000,
  maxRPS: 2,
});

async function fetchIssues() {
  const res = [];
  let totalPages;
  let page = 1;
  let startAt = page * 100 - 100;

  do {
    console.log(`Loading page ${page}…`);

    const { data } = await http.get(
      `https://fluidproject.atlassian.net/rest/api/3/search?jql=project%3DFLUID&maxIssues=100&startAt=${startAt}`,
    );
    res.push(data.issues);
    totalPages = Math.ceil(data.total / 100);
    page++;
    startAt = page * 100 - 100;
  } while (page <= totalPages);
  return res.flat();
}

export default async function () {
  const asset = new AssetCache("issues");

  if (asset.isCacheValid("2h")) {
    return asset.getCachedValue();
  }

  const data = await fetchIssues();
  // data.map(async (issue) => {
  //   console.log(`Retrieving ${issue.key}…`);

  //   const { issueData } = await http.get(
  //     `https://fluidproject.atlassian.net/rest/api/3/issue/${issue.key}`,
  //   );

  //   issue.comments = issueData.fields.comment.comments;

  //   return issue;
  // });
  await asset.save(data, "json");

  return data;
}
