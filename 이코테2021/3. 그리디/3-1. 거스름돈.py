def Change(price):
    count = 0
    coins = [500, 100, 50, 10]
    for coin in coins:
        count += price // coin
        price %= coin
    return count


N = int(input())
print(Change(N))
