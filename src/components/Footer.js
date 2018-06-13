import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy;
        <script type="text/javascript">
            document.write(new Date().getFullYear());
        </script> Xander Rapstine</p>
      </footer>
    )
  }
}
