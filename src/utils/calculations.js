export const calculateSummary = (transactions) => {
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  return {
    balance: income - expense,
    income,
    expense,
  };
};

export const categoryBreakdown = (transactions) => {
  const data = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      if (!data[t.category]) {
        data[t.category] = 0;
      }
      data[t.category] += t.amount;
    }
  });

  return Object.keys(data).map((key) => ({
    name: key,
    value: data[key],
  }));
};