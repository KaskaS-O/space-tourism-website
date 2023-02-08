export async function getData() {
  let data = null;
  await fetch("data/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((response) => {
      data = response;
    })
    .catch((error) => {
      console.log(error.message);
    });

  return data;
}
