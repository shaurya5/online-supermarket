import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// function OrderSummary() {
//   return (

//   )
// }

function UserForm() {
  return (
    <div>
      <form class="row g-3 w-50 border border-2">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Full Name
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Full Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Phone Number
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Alternate Phone Number
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
function Checkout() {
  return (
    <div>
      <UserForm />
    </div>
  );
}

export default Checkout;
