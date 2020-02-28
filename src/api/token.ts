const apiPrefix = "https://accounts.spotify.com/api";
const base64credentials =
  "MTVjYTgzMDFhMzk3NDU5ZThmYWVmN2M1OGViOTEzZjI6NDc3ZDhjMzc2NzNkNGRiYjhhYzAzY2NkNTQwMTNhNzg=";

export default async () => {
  console.log("token begin");
  const res = await fetch(`${apiPrefix}/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64credentials}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });
  const json = await res.json();
  const newToken = json.access_token;
  console.log("json: \n", json);
  return newToken;
};
