export function getSectionClassname(text: string) {
  const classes = text.split(" ");
  return classes.find((className) => className.startsWith("section__")) || "";
}
