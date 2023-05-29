const bcrypt = require("bcrypt");
const auth = require("../../../auth");
const TABLE = "auth";

module.exports = (injectedStore) => {
  let store = injectedStore || require("../../../store/dummy");

  const login = async (username, password) => {
    const data = await store.query(TABLE, { username });

    return bcrypt.compare(password, data.password).then((equals) => {
      if (equals) {
        // Generate token
        return auth.sign(data);
      } else {
        throw new Error("Invalid information");
      }
    });
  };

  const upsert = async (data) => {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }

    return store.upsert(TABLE, authData);
  };

  return {
    upsert,
    login,
  };
};
