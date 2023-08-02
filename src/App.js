import logo from "./logo.svg";
import "./assets/styles/App.scss";
import { AppHeader, Text, useToast } from "elysium-cloud-ui";
import { useEffect, useState } from "react";
import GridContainer from "./components/container";
import UserActions from "./actions/user";
import ReqLoader from "./components/loader";
import { AppContext } from "./context";
function App() {
  const [loading, toggleLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const { getUsers } = new UserActions();
  useEffect(() => {
    toggleLoading(true);
    _fetchUserList();
  }, []);
  const _fetchUserList = async () => {
    let users = await getUsers();
    setUsers(users);
    toggleLoading(false);
  };
  return (
    <div className='App'>
      <AppContext.Provider value={{ users, setUsers }}>
        {loading && <ReqLoader />}

        <AppHeader className='appHeader'>
          <Text type='h2' className='page-title'>
            {" "}
            LogiNext Case Study
          </Text>
        </AppHeader>

        <GridContainer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
