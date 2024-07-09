import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <table className={style.transactionsTable}>
        <thead>
          <tr className={style.transactionsTitleContainer}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={style.transactionsRowContainer}>
                <td className={style.transactionsItem}>{type}</td>
                <td className={style.transactionsItem}>{amount}</td>
                <td className={style.transactionsItem}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
