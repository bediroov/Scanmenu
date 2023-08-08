import React from 'react'

import QRCode from 'react-qr-code'


const App = () => {
  return (
<div className="Menu">
<header>
<h1>Scan Menu</h1>

</header>

<div className="Qr">
<QRCode
 size={550}
 style={{height:"300px",width:"300px"}}
 value={"https://myqrcode.com/qr/960c23de"}
 />

</div>




</div>
  )
}

export default App