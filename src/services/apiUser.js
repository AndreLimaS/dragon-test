function Users() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          email: "cwi@cwi.com.br",
          password: 1234,
        },
      ]);
    }, 500)
  );
}

export async function listusers() {
  const response = await Users();
  return response;
}
