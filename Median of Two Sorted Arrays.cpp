class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        nums1.insert(nums1.end(), nums2.begin(), nums2.end()); // merging
        sort(nums1.begin(), nums1.end()); // sorting
        int length = nums1.size();
        if (length % 2 == 0)  // if size of vector is even --> [1, 2, 3, 4]
            return (nums1[length/2 - 1] + nums1[length/2]) / 2.0;
        return nums1[length/2];  // if size of vector is odd --> [1, 2, 3, 4, 5]
    }
};
