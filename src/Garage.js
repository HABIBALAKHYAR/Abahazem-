
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './Garage.css';
// function Garage() { 
//   return (
//   <div className="backend"> 
//   <img src="newlogo.png"  style={{ width: "90px", height: "auto" }} id="logo" />
// <div className="div2">
       
//          <h1 >Welcome to AutoCar</h1>
//           <p>lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
//             it to make a type specimen book. It has survived not only f
//             ive centuries,</p>
//   </div>    


//   <div className="divbtn">
//   <button >Conexion </button>
// </div>
//     </div>
//   );
// }

// export default Garage;

import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Garage.css';

function Garage() { 
  return (
    <div className="backend"> 
      <img src="newlogo.png" alt="Logo" style={{ width: "90px", height: "auto" }} id="logo" />
      <div className="div2">
        <h1>Welcome to AutoCar</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only f
        ive centuries,</p>
      </div>    
      <div className="divbtn">
        <Button variant="primary">Connexion</Button>
      </div>
    </div>
  );
}

export default Garage;
