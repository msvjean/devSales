import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Uberlandia', 'Rio de Janeiro', 'Sao Paulo', 'Porto Alegre']}
            series={[40, 30, 10, 20]}
          />
          <PieChartCard
            name="Pagamentos"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[50, 40, 10]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
