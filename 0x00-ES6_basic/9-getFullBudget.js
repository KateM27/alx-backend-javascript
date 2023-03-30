import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    // getIncomeInDollars: function (income)
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    // getIncomeInEuros: function (income)
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
