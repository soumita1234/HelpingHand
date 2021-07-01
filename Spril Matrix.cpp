class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        int k = 1;
        int sr=0, er=n-1, sc=0, ec=n-1;
        vector<vector<int>> matrix(n, vector<int>(n));
        while (sr<er && sc<ec) {
            for (int i=sc; i<=ec; i++) {
                matrix[sr][i] = k++;
            }
            sr++;
            for (int i=sr; i<=er; i++) {
                matrix[i][ec] = k++;
            }
            ec--;
            for (int i=ec; i>=sc; i--) {
                matrix[er][i] = k++;
            }
            er--;
            for (int i=er; i>=sr; i--) {
                matrix[i][sc] = k++;
            }
            sc++;
        }
        if (sr==er) matrix[sr][sr] = k;
        return matrix;
    }
};
