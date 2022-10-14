def smaller(arr):

    return


# def smaller(arr):
#     res = []
#     sorted = []
#     def addnum(num):
#         if len(sorted) == 0 or num > sorted[-1]:
#             sorted.append(num)
#             return len(sorted) - 1
#         if num <= sorted[0]:
#             sorted.insert(0,num)
#             return 0
#         left = 0
#         right = len(sorted) - 1
#         while left <= right:
#             mid = (left + right) // 2
#             if sorted[mid + 1]  < num:
#                 left = mid + 1
#             if sorted[mid] >= num:
#                 right = mid
#             if sorted[mid] < num and sorted[mid + 1] >= num:
#                 sorted.insert(mid + 1,num)
#                 return mid + 1
#     for i in range(len(arr) - 1, -1 ,-1):
#         res.insert(0,addnum(arr[i]))
#     return res