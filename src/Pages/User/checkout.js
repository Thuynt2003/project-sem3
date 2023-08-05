import PaypalCustom from "./paypalbutton";
import CheckoutButton from "./paypalbutton";

 const CheckoutU=()=>{
    return(
        <main className="main">
  <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1 className="page-title">Checkout<span>Shop</span></h1>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Shop</a></li>
        <li className="breadcrumb-item active" aria-current="page">Checkout</li>
      </ol>
    </div>{/* End .container */}
  </nav>{/* End .breadcrumb-nav */}
  <div className="page-content">
    <div className="checkout">
      <div className="container">
        <div className="checkout-discount">
          <form action="#">
            <input type="text" className="form-control" required id="checkout-discount-input" />
            <label htmlFor="checkout-discount-input" className="text-truncate">Have a coupon? <span>Click here to enter your code</span></label>
          </form>
        </div>{/* End .checkout-discount */}
        <form action="#">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="checkout-title">Billing Details</h2>{/* End .checkout-title */}
              <div className="row">
                <div className="col-sm-6">
                  <label>First Name *</label>
                  <input type="text" className="form-control" required />
                </div>{/* End .col-sm-6 */}
                <div className="col-sm-6">
                  <label>Last Name *</label>
                  <input type="text" className="form-control" required />
                </div>{/* End .col-sm-6 */}
              </div>{/* End .row */}
              <label>Company Name (Optional)</label>
              <input type="text" className="form-control" />
              <label>Country *</label>
              <input type="text" className="form-control" required />
              <label>Street address *</label>
              <input type="text" className="form-control" placeholder="House number and Street name" required />
              <input type="text" className="form-control" placeholder="Appartments, suite, unit etc ..." required />
              <div className="row">
                <div className="col-sm-6">
                  <label>Town / City *</label>
                  <input type="text" className="form-control" required />
                </div>{/* End .col-sm-6 */}
                <div className="col-sm-6">
                  <label>State / County *</label>
                  <input type="text" className="form-control" required />
                </div>{/* End .col-sm-6 */}
              </div>{/* End .row */}
              <div className="row">
                <div className="col-sm-6">
                  <label>Postcode / ZIP *</label>
                  <input type="text" className="form-control" required />
                </div>{/* End .col-sm-6 */}
                <div className="col-sm-6">
                  <label>Phone *</label>
                  <input type="tel" className="form-control" required />
                </div>{/* End .col-sm-6 */}
              </div>{/* End .row */}
              <label>Email address *</label>
              <input type="email" className="form-control" required />
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="checkout-create-acc" />
                <label className="custom-control-label" htmlFor="checkout-create-acc">Create an account?</label>
              </div>{/* End .custom-checkbox */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="checkout-diff-address" />
                <label className="custom-control-label" htmlFor="checkout-diff-address">Ship to a different address?</label>
              </div>{/* End .custom-checkbox */}
              <label>Order notes (optional)</label>
              <textarea className="form-control" cols={30} rows={4} placeholder="Notes about your order, e.g. special notes for delivery" defaultValue={""} />
            </div>{/* End .col-lg-9 */}
            <aside className="col-lg-3">
              <div className="summary">
                <h3 className="summary-title">Your Order</h3>{/* End .summary-title */}
                <table className="table table-summary">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="#">Beige knitted elastic runner shoes</a></td>
                      <td>$84.00</td>
                    </tr>
                    <tr>
                      <td><a href="#">Blue utility pinafore denimdress</a></td>
                      <td>$76,00</td>
                    </tr>
                    <tr className="summary-subtotal">
                      <td>Subtotal:</td>
                      <td>$160.00</td>
                    </tr>{/* End .summary-subtotal */}
                    <tr>
                      <td>Shipping:</td>
                      <td>Free shipping</td>
                    </tr>
                    <tr className="summary-total">
                      <td>Total:</td>
                      <td>$160.00</td>
                    </tr>{/* End .summary-total */}
                  </tbody>
                </table>{/* End .table table-summary */}
                <div className="justify-content-center">
                <PaypalCustom/>
                </div>
                {/* <button type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
                </button> */}
              </div>{/* End .summary */}
            </aside>{/* End .col-lg-3 */}
          </div>{/* End .row */}
        </form>
      </div>{/* End .container */}
    </div>{/* End .checkout */}
  </div>{/* End .page-content */}
</main>

    );
}

export default CheckoutU;