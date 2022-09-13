import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.transactionTableRow}>
          <th className={css.transactionRowTitle}>Type</th>
          <th className={css.transactionRowTitle}>Amount</th>
          <th className={css.transactionRowTitle}>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id} className={css.transactionTableBody}>
          <tr className={css.transactionBodyRow}>
            <td className={css.transactionBodyRowData}>{item.type}</td>
            <td className={css.transactionBodyRowData}>{item.amount}</td>
            <td className={css.transactionBodyRowData}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      )
    }
