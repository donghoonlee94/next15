export async function delay(m: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, m);
  });
}
