def solution(people, limit):
    people.sort()

    first = 0
    second = len(people)-1
    count = 0

    while first <= second:
        count += 1
        if people[first] + people[second] <= limit:
            first += 1
        second -= 1
    return count


people = [60, 60, 60, 40, 20]
limit = 100
print(solution(people, limit))
