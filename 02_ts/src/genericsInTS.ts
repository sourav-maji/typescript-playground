function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavour: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", "test");
pair("masala", 20);
pair("masala", {});

// generics means general function

// generic interface example
interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 10 };
const numberBoxCup : Box<string> = {content:"10"}

