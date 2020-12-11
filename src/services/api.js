export const API_URL =
  "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/";

export function GET_DRAGON() {
  return {
    url: API_URL,
    options: {
      method: "GET",
    },
  };
}

export function GET_DETAILS_DRAGON(id) {
  return {
    url: API_URL + id,
    options: {
      method: "GET",
    },
  };
}

export function DELETE_DRAGON(id) {
  return {
    url: API_URL + id,
    options: {
      method: "DELETE",
    },
  };
}

export function POST_DRAGON(body) {
  return {
    url: API_URL,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PUT_DRAGON(id, body) {
  return {
    url: API_URL + id,
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
