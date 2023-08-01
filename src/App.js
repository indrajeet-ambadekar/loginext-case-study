import logo from "./logo.svg";
import "./assets/styles/App.scss";
import { AppHeader, Text, useToast } from "elysium-cloud-ui";
import { useEffect, useState } from "react";
import GridContainer from "./components/container";
import UserActions from "./actions/user";
import ReqLoader from "./components/loader";
import { useSelector } from "react-redux";
function App() {
  const getPeopleState = (state) => state.people;
  const loading = useSelector((rootState) => getPeopleState(rootState).loading);

  const { getUsers } = new UserActions();
  useEffect(() => {
    _fetchUserList();
  }, []);
  const _fetchUserList = async () => {
    getUsers();
  };
  return (
    <div className='App'>
      {loading && <ReqLoader />}

      <AppHeader className='appHeader'>
        <Text type='h2' className='page-title'>
          {" "}
          LogiNext Case Study
        </Text>
      </AppHeader>
      <GridContainer />
    </div>
  );
}

export default App;
