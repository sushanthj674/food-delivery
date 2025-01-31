const displayLog = (responseMsg, time, details = "") => {
  console.log(`[${time.toFixed(2)}s] ${responseMsg}`, details);
};

const toSeconds = (millies) => millies / 1000;

const packOrder = (orderDetails) => {
  const startTime = Date.now();

  setTimeout(() => {
    const elapsedTime = toSeconds(Date.now() - startTime);
    orderDetails["packageDetails"] = "Packed in eco-friendly box";
    displayLog(`Packing order...`, elapsedTime);
    displayLog("Order packed:", elapsedTime, orderDetails);
    delivery(orderDetails);
  }, 3000);

  return { ...orderDetails, startTime, status: "completed" };
};

const delivery = (orderDetails) => {
  const startTime = Date.now();

  setTimeout(() => {
    const elapsedTime = toSeconds(Date.now() - startTime);

    displayLog(`Delivering order...`, elapsedTime);
    displayLog("Order delivered: ", elapsedTime, orderDetails);
  }, 10000);
  return { ...orderDetails, startTime, status: "completed" };
};

const prepareFood = (orderDetails) => {
  const startTime = Date.now();

  setTimeout(() => {
    const elapsedTime = toSeconds(Date.now() - startTime);

    displayLog(`Preparing food...`, elapsedTime);
    displayLog("Food is ready:", elapsedTime, orderDetails);
    packOrder(orderDetails);
  }, 5000);
  return { ...orderDetails, startTime, status: "completed" };
};

let orders = 0;

const order = (foodName) => {
  const orderTime = Date.now();
  const orderDetails = { orderId: ++orders, foodDetails: foodName };

  displayLog(
    "Order received: ",
    toSeconds(Date.now() - orderTime),
    { orderId: orderDetails.orderId },
  );

  prepareFood(orderDetails);
};

order("burger");
order("pizza");
order("biriyani");