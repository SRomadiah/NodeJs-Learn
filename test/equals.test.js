test("test toBe", () => {
  const name = "roma";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello roma");
});

test("test toEqual", () => {
  let person = { id: "roma" };
  Object.assign(person, { name: "Roma" });

  expect(person).toEqual({ id: "roma", name: "Roma" });
});
