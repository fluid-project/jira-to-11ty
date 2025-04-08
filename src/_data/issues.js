import { AssetCache } from "@11ty/eleventy-fetch";
import Bottleneck from "bottleneck";

async function fetchIssues(limiter, nextPageToken) {
  let data = {};
  const url = "https://fluidproject.atlassian.net/rest/api/3/search/jql";
  const params = {
    jql: "created < now() order by created ASC",
    fields: "*all",
  };

  if (nextPageToken) {
    params["nextPageToken"] = nextPageToken;
  }

  const query = new URLSearchParams(params);

  limiter = limiter || new Bottleneck({
    reservoir: 500,
    reservoirRefreshAmount: 500,
    reservoirRefreshInterval: 5 * 60 * 1000,
    maxConcurrent: 1,
    minTime: 100
  });

  try {
    console.log(`Loading page ${url}?${query}`);
    const response = await limiter.schedule(() => fetch(`${url}?${query}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "X-Force-Accept-Language": true,
        "Accept-Language": "en"
      }
    }));

    if (!response.status === "200") {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    data = await response.json();

  } catch (error) {
    throw error;
  }

  if (data.nextPageToken) {
    let issues = await fetchIssues(limiter, data.nextPageToken);
    return data.issues.concat(issues);
  }

  return data.issues;
}

export default async function () {
  const asset = new AssetCache("issues");

  if (asset.isCacheValid("2h")) {
    return asset.getCachedValue();
  }

  const data = await fetchIssues();

  await asset.save(data, "json");

  return data;
}
