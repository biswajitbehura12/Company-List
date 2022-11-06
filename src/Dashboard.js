import CompanyList from './components/CompanyList';
import CompanyContextProvider from './contexts/CompanyContext';

function Dashboard() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <CompanyContextProvider>
            <CompanyList />
          </CompanyContextProvider>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
