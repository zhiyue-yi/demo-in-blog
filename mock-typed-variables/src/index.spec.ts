import { Order } from "./interface";
import { calculateTotalPrice } from ".";

describe("# calculateTotalPrice", () => {
  it("should return true if total price matches", () => {
    const mockOrder: RecursivePartial<Order> = {
      items: [
        {
          unit: 2,
          unitPrice: 10,
          discount: 0,
        },
        {
          unit: 1,
          unitPrice: 5,
          discount: 1,
        },
      ],
      totalPrice: 24,
    };

    expect(calculateTotalPrice(mockOrder as Order)).toBe(true);
  });

  it("should return true if total price matches", () => {
    const mockOrder: RecursivePartial<Order> = {
      items: [
        {
          unit: 2,
          unitPrice: 10,
          discount: 0,
        },
        {
          unit: 1,
          unitPrice: 5,
          discount: 1,
        },
      ],
      totalPrice: 23,
    };

    expect(calculateTotalPrice(mockOrder as Order)).toBe(false);
  });
});
