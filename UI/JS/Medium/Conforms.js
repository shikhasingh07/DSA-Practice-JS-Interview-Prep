function conformsTo(object, source) {
  for (const key in source) {
    // Ensure the property is not inherited.
    if (Object.hasOwn(source, key)) {
      // Return `false` immediately if any predicate is not fulfilled.
      if (!(key in object) || !source[key](object[key])) {
        return false;
      }
    }
  }
  return true;
}