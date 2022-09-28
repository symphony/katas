const isSameStructure = (original, other) => {
  if (!Array.isArray(original) && !Array.isArray(other)) return true;

  if (Array.isArray(original) && Array.isArray(other)) {
    for (let i = 0; i < original.length; i++) {
      if (!isSameStructure(original[i], other[i])) return false;
    };
    return original.length === other.length;
  };

  return false;
};

Array.prototype.sameStructureAs = function (other) {
  return isSameStructure(this, other);
};