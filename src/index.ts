const hello = (name?: string) => {
  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log("Hello, world!");
  }
};

hello(process.env.NAME);
