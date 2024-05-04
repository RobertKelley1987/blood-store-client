import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { pmtIntents } from "../services/pmt-intents";
import { CartItem } from "../types";

// Hook to update the shipping cost of pmt intent in Stripe.
export function useUpdatePmtIntent(
  cartItems: CartItem[],
  shipping: number,
  pmtIntentId: string
) {
  const navigate = useNavigate();

  // Provide ids and qtys of cart items for price lookup in backend.
  const items = cartItems.map((item) => {
    return { id: item.product.id, qty: item.qty };
  });

  useEffect(() => {
    // If no id is provided to look up the pmt intent, do nothing.
    if (!pmtIntentId) {
      return;
    }

    const updatePmtIntent = async () => {
      const {
        data: { error },
      } = await pmtIntents.update(pmtIntentId, items, shipping);

      // Navigate to server error page if update fails.
      if (error) {
        navigate("/checkout/error");
      }
    };

    updatePmtIntent();
  }, [shipping]);
}
