from collections import defaultdict

def delete_nth(order, max_e):
    count = defaultdict(int)
    result = []
    for n in order:
        if count[n] >= max_e:
            continue
        count[n] += 1
        result.append(n)

    return result
