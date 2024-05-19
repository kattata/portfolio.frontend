export default defineNuxtPlugin((_nuxtApp) => {
  const query = groq`*[_type == "dictionary"]{ title, en}`;
  const { data } = useSanityQuery(query);

  const dictionaries = data.value;

  _nuxtApp.provide('dictionaries', dictionaries);

  // TODO: Add HTML support
  // TODO: Add SSR

  _nuxtApp.provide('t', (key: string) => {
    return (
      dictionaries?.find((dictionary: any) => dictionary.title === key)?.en ||
      key
    );
  });
});
