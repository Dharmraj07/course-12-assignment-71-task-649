import React from 'react';

const MealList = ({ meals }) => {
  return (
    <div>
      <ul style={styles.mealList}>
        {meals.map((meal) => (
          <li key={meal.id} style={styles.mealItem}>
            <div>
              <h2>{meal.name}</h2>
              <p>{meal.description}</p>
              <span style={styles.price}>${meal.price.toFixed(2)}</span>
            </div>
            <form style={styles.form}>
              <label htmlFor={`amount_${meal.id}`} style={styles.label}>Amount</label>
              <input
                id={`amount_${meal.id}`}
                type="number"
                min="1"
                max="5"
                defaultValue="1"
                style={styles.input}
              />
              <button
                type="button"
                style={styles.button}
              >
                + Add
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  mealList: {
    listStyle: 'none',
    margin: '2rem auto',
    padding: '0',
    width: '90%',
    maxWidth: '40rem',
  },
  mealItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: '1rem 0',
    padding: '1rem',
    borderRadius: '6px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  },
  price: {
    color: '#8a2b06',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    marginRight: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    width: '3rem',
    marginRight: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    padding: '0.25rem',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8a2b06',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default MealList;
