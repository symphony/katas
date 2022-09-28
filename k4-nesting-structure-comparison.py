def same_structure_as(original, other):
    if not isinstance(original, list) and not isinstance(other, list):
        return True
    elif isinstance(original, list) and isinstance(other, list):
        for a, b in zip(original, other):
            if not same_structure_as(a, b):
                return False
        return len(original) == len(other)

