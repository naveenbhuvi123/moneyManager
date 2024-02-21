// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDelete = () => {
    deleteTransaction(id)
  }
  return (
    <li className="item-list">
      <p className="title-name">{title}</p>
      <p className="title-name">Rs {amount}</p>
      <p className="title-name">{type}</p>
      <button className="btn" type="button" onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-logo"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
