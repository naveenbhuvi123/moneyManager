import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="list-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="logo"
          alt="balance"
        />
        <div className="text-container">
          <p className="details">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="logo-container-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="logo"
          alt="income"
        />
        <div className="text-container">
          <p className="details">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </div>
      <div className="logo-container-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="logo"
          alt="expenses"
        />
        <div className="text-container">
          <p className="details">Your Expenses</p>
          <p className="amount" data-textid="expensesAmount">
            RS {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
