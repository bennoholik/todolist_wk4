import Header from "../header/Header";
import List from "../list/List";
import Form from "../form/Form";
import "./style.css";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Form />
      <List />
    </div>
  );
}

export default Layout;
