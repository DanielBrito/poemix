export function formatFromSnakeCase(publicationId) {
    var label = publicationId.replace(/_/g, " ").toUpperCase();
  
    if (label.match(RegExp("PROTESTIZANDO\\s[0-9]+"))) {
      return label.replace(" ", " #");
    }
  
    return label;
  }
