import { useEffect, useState, useRef } from "react";

import data from "../Data/data";

import BasicTable from "./ProductList";

import ProductNew from "./ProductNew";

function Product(props) {
  const [itemsList, setItemsList] = useState([...data]);
  const socket = useRef();

  useEffect(() => {
    if (props.socketData.connected === true) {
      socket.current = props.socketData.socket;
    }
  }, [props.socketData]);

  const sendToServer = (data) => {
    socket.current.send(JSON.stringify(data));
  };

  const storeItemHandler = (iProduct, iName) => {
    sendToServer({
      id: Date.now(),
      type: iProduct,
      name: iName,
      tag: "Product404",
    });

    // setItemsList((prevItemsList) => {
    //   const updatedItems = [...prevItemsList];
    //   updatedItems.push({
    //     id: Math.random().toString(),
    //     type: iProduct,
    //     name: iName,
    //   });

    //   return updatedItems;
    // });
  };

  useEffect(() => {
    if (props.socketData.connected === true) {
      socket.current.onmessage = (evt) => {
        const { data } = evt;
        try {
          const parsedData = JSON.parse(data);

          if (parsedData.tag === "Product404") {
            console.log(parsedData, "MESSAGE");
            setItemsList((pre) => {
              return [...pre, parsedData];
            });
          }
        } catch (err) {}
      };
    }
  }, [socket, props.socketData]);
  
  const deleteItemHandler = (itemId) => {
    setItemsList((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  const filteredProduct1 = itemsList.filter((product) => {
    return product.type === "Grocery";
  });
  const filteredProduct2 = itemsList.filter((product) => {
    return product.type === "Electronics";
  });
  const filteredProduct3 = itemsList.filter((product) => {
    return product.type === "Clothing";
  });

  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>Product</h1>

        <ProductNew onAddItems={storeItemHandler} data={data} />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "4rem",
          }}
        >
          <div>
            <BasicTable
              title={"Grocery"}
              products={filteredProduct1}
              onDeleteProduct={deleteItemHandler}
            />
          </div>
          <div>
            <BasicTable
              title={"Electronics"}
              products={filteredProduct2}
              onDeleteProduct={deleteItemHandler}
            />
          </div>
          <div>
            <BasicTable
              title={"Clothing"}
              products={filteredProduct3}
              onDeleteProduct={deleteItemHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
