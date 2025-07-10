export function validateTitle(title: string) {
  const illegalChars = ['[', ']', ':', '/', '^', '|', '#'];

  for (const char of illegalChars) {
    if (title.includes(char)) {
      throw new Error(
        `An invalid character "${char}" was found in the title "${title}."`
      );
    }
  }

  return title;
}
