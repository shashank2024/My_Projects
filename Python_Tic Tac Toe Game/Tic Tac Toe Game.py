board = {
    '1': ' ', '2': ' ', '3': ' ',
    '4': ' ', '5': ' ', '6': ' ',
    '7': ' ', '8': ' ', '9': ' ',
}

player = 1 # TO INITIALISE FIRST PLAYER
total_moves = 0
end_check = 0

def check():
    #Horizontal check 
    if board['1']=='❌' and board['2'] =='❌' and board['3']=='❌':
        print('Player one won!')
        return 1
    if board['4']=='❌' and board['5'] =='❌' and board['6']=='❌':
        print('Player one won!')
        return 1
    if board['7']=='❌' and board['8'] =='❌' and board['9']=='❌':
        print('Player one won!')
        return 1
    
    #Diagonal Check
    if board['1']=='❌' and board['5'] =='❌' and board['9']=='❌':
        print('Player one won!')
        return 1
    if board['3']=='❌' and board['5'] =='❌' and board['7']=='❌':
        print('Player one won!')
        return 1

    #vertical check
    if board['1']=='❌' and board['4'] =='❌' and board['7']=='❌':
        print('Player one won!')
        return 1
    if board['2']=='❌' and board['5'] =='❌' and board['8']=='❌':
        print('Player one won!')
        return 1
    if board['3']=='❌' and board['6'] =='❌' and board['9']=='❌':
        print('Player one won!')
        return 1

    #############################
    if board['1']=='⚪' and board['2'] =='⚪' and board['3']=='⚪':
        print('Player two won!')
        return 1
    if board['4']=='⚪' and board['5'] =='⚪' and board['6']=='⚪':
        print('Player two won!')
        return 1
    if board['7']=='⚪' and board['8'] =='⚪' and board['9']=='⚪':
        print('Player two won!')
        return 1
    
    #Diagonal Check
    if board['1']=='⚪' and board['5'] =='⚪' and board['9']=='⚪':
        print('Player two won!')
        return 1
    if board['3']=='⚪' and board['5'] =='⚪' and board['7']=='⚪':
        print('Player two won!')
        return 1

    #vertical check
    if board['1']=='⚪' and board['4'] =='⚪' and board['7']=='⚪':
        print('Player two won!')
        return 1
    if board['2']=='⚪' and board['5'] =='⚪' and board['8']=='⚪':
        print('Player two won!')
        return 1
    if board['3']=='⚪' and board['6'] =='⚪' and board['9']=='⚪':
        print('Player two won!')
        return 1
    return 0

print('1|2|3')
print('- +- + -')
print('4|5|6')
print('- +- + -')
print('7|8|9')

while True:
    print(board['1'] + '  |'+ board['2'] + '  |' + board['3'])              
    print('---+---+---')
    print(board['4'] + '  |' + board['5'] + '  |' + board['6'])
    print('---+---+---')
    print(board['7'] + '  |' + board['8'] + '  |' + board['9'])
    
    end_check = check()
    if total_moves == 9 or end_check == 1:
        break
    while True:
        if player == 1:
            p1_input = input('player one') 
            if p1_input in board and board[p1_input] == ' ' :
                board[p1_input] = '❌'
                player = 2
                break
            else:
                print('Invalid Input, Please Try Again Shashank')
                continue
        else:
            p2_input = input('player two') 
            if p2_input in board and board[p2_input] == ' ' :
                board[p2_input] = '⚪'
                player = 1
                break
            else:
                print('Invalid Input, Please Try Again SP')
                continue
    
    total_moves += 1

    print('**********************************')
    # print()