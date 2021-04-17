const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
     
    },
    actions: {
      getFetch: (field, url) => {
        fetch(url, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => setStore({ [field]: data }))
          .catch((error) => {
            console.error(error.message);
          });
      },
      
     
      
    },
  };
};

export default getState;
