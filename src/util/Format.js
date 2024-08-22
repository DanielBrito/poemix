export function idToTitle(publicationId) {
  const normalized = publicationId.replace(/_/g, ' ').toUpperCase();
  const isZine = normalized.match(RegExp('PROTESTIZANDO\\s[0-9]+'));

  return isZine ? normalized.replace(' ', ' #') : normalized;
}
