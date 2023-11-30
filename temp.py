import numpy as np

def row_reduce_matrix(matrix):
    for row_index in range(len(matrix)):
        first_el_index = next((i for i, x in enumerate(matrix[row_index]) if x), None)
        if first_el_index == None: 
            continue
        print(first_el_index)

        matrix[row_index] = matrix[row_index]/matrix[row_index][first_el_index]

        mulitply_factor = 1
        #each row, each element in the rows
        for j in range(len(matrix)):
            if j == row_index: continue
            for i in range(len(matrix[row_index])):
                if i == first_el_index: 
                    multiply_factor = matrix[j][first_el_index]
                matrix[j][i] = matrix[j][i] - matrix[row_index][i] * multiply_factor

        print(matrix)

    return matrix


def main():
    matrix = np.array([17, 24, 1, 8, 15, 23, 5, 7, 14, 16, 4, 6, 13, 20, 22, 10, 12, 19, 21, 3, 11, 18, 25, 2, 9]).reshape(5, 5).astype('float')
    print(matrix)
    row_reduce_matrix(matrix)
    print(f"after:\n{matrix}")

main()