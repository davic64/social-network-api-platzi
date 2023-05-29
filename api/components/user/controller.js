const { nanoid } = require("nanoid");
const auth = require("../auth");

const TABLE = "user";

module.exports = (injectedStore) => {
  let store = injectedStore || require("../../../store/dummy");

  const list = () => {
    return store.list(TABLE);
  };

  const get = (id) => {
    return store.get(TABLE, id);
  };

  const upsert = async (body) => {
    const user = {
      name: body.name,
      username: body.username,
      password: body.password,
    };

    if (body.id) {
      user.id = body.id;
    } else {
      user.id = nanoid();
    }

    if (body.password || body.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: user.password,
      });
    }

    return store.upsert(TABLE, user);
  };

  return {
    list,
    get,
    upsert,
  };
};
