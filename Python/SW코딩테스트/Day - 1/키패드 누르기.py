position = {1: (0, 0), 2: (0, 1), 3: (0, 2),
            4: (1, 0), 5: (1, 1), 6: (1, 2),
            7: (2, 0), 8: (2, 1), 9: (2, 2),
            '*': (3, 0), 0: (3, 1), '#': (3, 2)}


def calDist(num, currL, currR, hand):
    X, Y = 0, 1
    distL = abs(position[currL][X] - position[num][X]) + \
        abs(position[currL][Y]-position[num][Y])
    distR = abs(position[currR][X] - position[num][X]) + \
        abs(position[currR][Y]-position[num][Y])
    if distL == distR:
        return 'R' if hand == 'right' else 'L'
    return 'R' if distL > distR else 'L'


def solution(numbers, hand):
    left, right = set([1, 4, 7]), set([3, 6, 9])
    currL, currR = '*', '#'
    result = ''
    for num in numbers:
        if num in left:
            result += 'L'
            currL = num
        elif num in right:
            result += 'R'
            currR = num
        else:
            result += calDist(num, currL, currR, hand)
            if result[-1] == 'L':
                currL = num
            else:
                currR = num
    return result


numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
hand = "left"

print(solution(numbers, hand))
