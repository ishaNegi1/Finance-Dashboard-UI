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

export const expenseFrequency = (transactions) => {
  const data = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      data[t.category] = (data[t.category] || 0) + 1;
    }
  });

  return Object.keys(data).map((key) => ({
    category: key,
    count: data[key],
  }));
};

export const monthlyExpenses = (transactions) => {
  const data = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      const month = t.date.slice(0, 7); // YYYY-MM
      data[month] = (data[month] || 0) + t.amount;
    }
  });

  return Object.keys(data).map((key) => ({
    month: key,
    expense: data[key],
  }));
};