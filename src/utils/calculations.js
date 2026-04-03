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

export const monthlyExpenses = (transactions, selectedYear) => {
  const data = {};

  transactions.forEach((t) => {
    const [year, month] = t.date.split("-");

    if (t.type === "expense") {
      if (selectedYear === "all" || year === selectedYear) {
        const key = `${year}-${month}`;
        data[key] = (data[key] || 0) + t.amount;
      }
    }
  });

  return Object.keys(data)
    .sort()
    .map((key) => ({
      month: key,
      expense: data[key],
    }));
};

export const getBalanceTrend = (transactions) => {
  let balance = 0;
  const dailyBalance = {};

  const sorted = [...transactions].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );

  sorted.forEach((t) => {
    if (t.type === "income") {
      balance += t.amount;
    } else {
      balance -= t.amount;
    }

    dailyBalance[t.date] = balance;
  });

  return Object.keys(dailyBalance).map((date) => ({
    date,
    balance: dailyBalance[date],
  }));
};
