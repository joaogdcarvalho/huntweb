import React from "react";

import "./styles.css";

/* class component - modo tradicional de criar components
class Header extends Component {
  render() {
    return <h1>Hello</h1>
  }
};
*/

// stateless components - forma menos verbosa de criar components
const Header = () => <header id="main-header">JSHunt</header>

export default Header;