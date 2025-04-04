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
  let page = 1;
  let jql = "created%20%3C%20now()%20order%20by%20created%20ASC";
  let params = "fields=*all";
  let nextPageToken = null;

  do {
    let url = `https://fluidproject.atlassian.net/rest/api/3/search/jql?jql=${jql}${nextPageToken ? `&nextPageToken=${nextPageToken}` : ""}&${params}`;
    console.log(`Loading page ${page} from ${url}`);

    const { data } = await http.get(
      url,
    );
    res.push(data.issues)
    page++;
    nextPageToken = res.nextPageToken ?? null;

    console.log(res);

    // nextPageToken = page < 10 ? res.nextPageToken ?? null : null;
  } while (nextPageToken);
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
