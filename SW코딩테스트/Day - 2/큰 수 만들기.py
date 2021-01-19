def solution(number, k):
    box = []
    for i in number:
        while len(box) != 0 and box[-1] < i and k > 0:
            k -= 1
            box.pop()
        box.append(i)

    if k != 0:
        box = box[:-k]

    return ''.join(box)
