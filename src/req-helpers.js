// universal fetch helper functions
const getJSON = (url) => {
  return fetch(url).then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw resp.statusText;
    }
  });
};

const postJSON = (url, payload) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw resp.statusText;
    }
  });
};

const patchJSON = (url, payload) => {
  return fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw resp.statusText;
    }
  });
};

const deleteJSON = (url) => {
  return fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw resp.statusText;
    }
  });
};
