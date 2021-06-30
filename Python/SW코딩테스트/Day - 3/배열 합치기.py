N, M = input().split(" ")
A = list(map(int, input().split()))
B = list(map(int, input().split()))
C = A + B
C.sort()
C = list(map(str, C))
print(" ".join(C)+" ")
