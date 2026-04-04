<h1>Finance Dashboard</h1>

<h2>Overview</h2>
<p>
The Finance Dashboard is a frontend web application that helps users track and understand their financial activity.
The dashboard provides a summary of income, expenses, and balance, along with visualizations and insights to help users
analyze their spending patterns.
</p>
<p>
This project focuses on clean UI design, component structure, state management, and data visualization using React.
</p>

<hr/>

<h2>Features</h2>

<h3>1. Dashboard Overview</h3>
<ul>
  <li>Summary cards:
    <ul>
      <li>Total Balance</li>
      <li>Total Income</li>
      <li>Total Expense</li>
    </ul>
  </li>
  <li>Time-based visualization:
    <ul>
      <li>Balance trend over time (line chart)</li>
    </ul>
  </li>
  <li>Categorical visualization:
    <ul>
      <li>Expense breakdown by category (pie chart)</li>
    </ul>
  </li>
  <li>Additional visualizations:
    <ul>
      <li>Monthly spending trend</li>
      <li>Expense frequency by category</li>
    </ul>
  </li>
</ul>

<h3>2. Transactions Section</h3>
<ul>
  <li>View all transactions in a table</li>
  <li>Transaction details:
    <ul>
      <li>Date</li>
      <li>Description</li>
      <li>Category</li>
      <li>Amount</li>
      <li>Type (Income/Expense)</li>
    </ul>
  </li>
  <li>Features:
    <ul>
      <li>Search transactions</li>
      <li>Filter by income/expense</li>
      <li>Filter by month and year</li>
      <li>Sort by date</li>
      <li>Add transaction (Admin only)</li>
      <li>Delete transaction (Admin only)</li>
      <li>Edit transaction (Admin only)</li>
    </ul>
  </li>
</ul>

<h3>3. Role-Based UI</h3>
<ul>
  <li>Viewer:
    <ul>
      <li>Can only view dashboard, transactions, and insights</li>
    </ul>
  </li>
  <li>Admin:
    <ul>
      <li>Can add, delete and edit transactions</li>
    </ul>
  </li>
  <li>Role can be switched using a dropdown in the navbar</li>
</ul>

<h3>4. Insights Section</h3>
<ul>
  <li>Total expense</li>
  <li>Highest spending category</li>
  <li>Monthly spending comparison</li>
  <li>Savings rate (percentage of income saved)</li>
</ul>

<p><strong>Monthly comparison logic:</strong></p>
<ul>
  <li>If a specific month is selected → compares with previous month</li>
  <li>Handles cases where not enough data is available</li>
</ul>

<h3>5. Global Filters</h3>
<ul>
  <li>Month filter</li>
  <li>Year filter</li>
  <li>Filters affect:
    <ul>
      <li>Dashboard charts</li>
      <li>Transactions</li>
      <li>Insights</li>
    </ul>
  </li>
</ul>

<h3>6. Dark Mode</h3>
<ul>
  <li>Toggle between light mode and dark mode</li>
  <li>Theme preference is saved in localStorage</li>
</ul>

<h3>7. Data Persistence</h3>
<ul>
  <li>Transactions are stored in localStorage</li>
  <li>Data remains after page refresh</li>
</ul>

<h3>8. Empty State Handling</h3>
<ul>
  <li>If no data is available for selected filters, the UI shows a “No data available” message instead of empty charts.</li>
</ul>

<hr/>

<h2>Tech Stack</h2>
<ul>
  <li>React (Vite)</li>
  <li>Tailwind CSS</li>
  <li>Recharts (for charts)</li>
  <li>Context API (state management)</li>
  <li>LocalStorage (data persistence)</li>
</ul>

<hr/>

<h2>Project Structure</h2>
<pre>
src/
│
├── components/
│   ├── Dashboard/
│   ├── Transactions/
│   ├── Insights/
│   └── UI/
│
├── context/
│   └── FinanceContext.jsx
│
├── data/
│   └── mockData.js
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   └── InsightsPage.jsx
│
├── utils/
│   └── calculations.js
│
├── App.jsx
├── main.jsx
└── index.css
</pre>

<hr/>

<h2>State Management Approach</h2>
<p>
The application uses <strong>Context API</strong> for global state management. The following global states are managed:
</p>
<ul>
  <li>Transactions data</li>
  <li>User role (Admin / Viewer)</li>
  <li>Search and filter values</li>
  <li>Month and Year filter</li>
  <li>Dark mode theme</li>
</ul>
<p>
This allows all pages (Dashboard, Transactions, Insights) to access and update shared data consistently.
</p>

<hr/>

<h2>Setup Instructions</h2>

<h3>1. Clone the repository</h3>
<pre>
git clone &lt;https://github.com/ishaNegi1/Finance-Dashboard-UI.git&gt;
cd finance-dashboard
</pre>

<h3>2. Install dependencies</h3>
<pre>
npm install
</pre>

<h3>3. Run the project</h3>
<pre>
npm run dev
</pre>

<h3>4. Open in browser</h3>
<pre>
http://localhost:5173
</pre>

<hr/>

<h2>Design & UX Decisions</h2>
<ul>
  <li>The application is divided into <strong>Dashboard, Transactions, and Insights</strong> pages to avoid overcrowding and improve navigation.</li>
  <li><strong>Global month and year filters</strong> are used so the entire dashboard updates based on selected time period.</li>
  <li>Charts were chosen based on data visualization principles:
    <ul>
      <li>Line chart → trend over time</li>
      <li>Pie chart → category distribution</li>
      <li>Bar chart → category frequency</li>
    </ul>
  </li>
  <li><strong>Role-based UI</strong> is implemented to simulate real-world applications where different users have different permissions.</li>
  <li><strong>Dark mode</strong> is included to improve user experience.</li>
  <li><strong>LocalStorage</strong> is used to persist transaction data.</li>
</ul>

<hr/>

<h2>Conclusion</h2>
<p>
This project demonstrates frontend development skills including:
</p>
<ul>
  <li>Component-based architecture</li>
  <li>State management</li>
  <li>Data visualization</li>
  <li>Role-based UI</li>
  <li>Responsive and user-friendly design</li>
  <li>Dark mode implementation</li>
  <li>Local storage persistence</li>
</ul>

<h2>Live Demo</h2>
<a href='https://finance-dashboard-ui-seven-vert.vercel.app/' target='_blank'>Click here</a>
