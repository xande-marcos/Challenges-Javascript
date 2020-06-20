//Banking operations simple script to train javascript logic

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0,
    count: {}
};

//Create new transactions
function createTransaction(transaction) {
    const newTransaction = user.transactions.push(transaction)

    const typeCredit = transaction.type === 'credit'
    if (typeCredit) {
        user.balance += transaction.value
        return user.balance
    } else {
        user.balance -= transaction.value
        return user.balance
    }
}

function getHigherTransactionByType(type) {
    const typeCredit = type === 'credit'
    const typeDebit = type === 'debit'
    let maxTransaction = user.transactions[0].value

    if (typeCredit) {
        for (let transaction of user.transactions) {
            if (transaction.type == type) {
                if (transaction.value >= maxTransaction) {
                    maxTransaction = transaction.value
                }
            }
        }
    }
    else {
        for (let transaction of user.transactions) {
            if (transaction.type == type) {
                if (transaction.value >= maxTransaction) {
                    maxTransaction = transaction.value
                }
            }
        }
    }
    return maxTransaction
}

function getAverageTransactionValue() {
    let sum = 0
    for (let transaction of user.transactions) {
        sum += transaction.value;
    }
    let average = sum / user.transactions.length
    console.log(average)
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0
    }

    for (transaction of user.transactions) {
        if (transaction.type === 'credit') {
            count.credit++
        } else {
            count.debit++
        }
    }

    return count
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 20 });

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())
console.log(getTransactionsCount())