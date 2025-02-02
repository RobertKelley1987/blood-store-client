import { Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import MenuContextProvider from "./context/MenuContext";
import Store from "./layouts/Store";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ApparelShowPage from "./pages/ApparelShowPage";
import MusicShowPage from "./pages/MusicShowPage";
import AccessoryShowPage from "./pages/AccessoryShowPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import Checkout from "./layouts/Checkout";
import CheckoutPage from "./pages/CheckoutPage";
import FAQPage from "./pages/FAQPage";
import PaymentPage from "./pages/PaymentPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import PmtErrorPage from "./pages/PmtErrorPage";
import OrderErrorPage from "./pages/OrderErrorPage";
import NotFoundPage from "./pages/NotFoundPage";

const APPAREL = ["hoodies", "longsleeves", "t-shirts"];
const MUSIC = ["vinyl", "cds"];
const ACCESSORIES = ["patches"];

function App() {
  return (
    <CartContextProvider>
      <MenuContextProvider>
        <Routes>
          <Route path="/" element={<Store />}>
            <Route index element={<HomePage />} />
            <Route
              path="/collections/all"
              element={<ProductsPage headingText="All Items" />}
            />
            <Route path="/collections/:collection" element={<ProductsPage />} />
            {APPAREL.map((category) => (
              <Route
                key={category}
                path={`/${category}/:id`}
                element={<ApparelShowPage />}
              />
            ))}
            {MUSIC.map((category) => (
              <Route
                key={category}
                path={`/${category}/:id`}
                element={<MusicShowPage />}
              />
            ))}
            {ACCESSORIES.map((category) => (
              <Route
                key={category}
                path={`/${category}/:id`}
                element={<AccessoryShowPage />}
              />
            ))}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionsPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="/checkout" element={<Checkout />}>
            <Route index element={<CheckoutPage />} />
            <Route
              path="/checkout/success"
              element={<OrderConfirmationPage />}
            ></Route>
            <Route path="/checkout/pmt-error" element={<PmtErrorPage />} />
            <Route path="/checkout/order-error" element={<OrderErrorPage />} />
            <Route path="/checkout/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </MenuContextProvider>
    </CartContextProvider>
  );
}

export default App;
