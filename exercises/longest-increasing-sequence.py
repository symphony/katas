def longestSequence(nums):
    lengths = [1] * len(nums)

    for i in range(1, len(nums)):
        for k in range(i):
            if nums[k] < nums[i]:
                lengths[i] = max(lengths[i], lengths[k] + 1)

    return max(lengths)

import unittest

class Test(unittest.TestCase):

    def test_1(self):
        assert longestSequence([1,5,2,7,3]) == 3
        print("PASSED: `longestSequence([1, 5, 2, 7, 3])` should return `3`")


    def test_2(self):
        assert longestSequence([13,1,3,4,8,4]) == 4
        print("PASSED: `longestSequence([13,1,3,4,8,4])` should return `4`")


    def test_3(self):
        assert longestSequence([13,1,3,4,8,19,17,8,0,20,14]) == 6
        print("PASSED: `lengthOfLIS([13,1,3,4,8,19,17,8,0,20,14])` should return `6`")


if __name__ == "__main__":
    unittest.main(verbosity=2)
    print("Nice job, 3/3 tests passed!")
