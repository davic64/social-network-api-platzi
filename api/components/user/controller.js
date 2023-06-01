const auth = require("../auth");

const TABLE = "user";

module.exports = (injectedStore, injectedCache) => {
  let cache = injectedCache || require("../../../store/dummy");
  let store = injectedStore || require("../../../store/dummy");

  const list = async () => {
    let users = await cache.list(TABLE);
    if (!users) {
      users = await store.list(TABLE);
      cache.upsert(TABLA, users);
    }

    return users;
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

  const follow = (from, to) => {
    return store.upsert(TABLE + "_follow", {
      user_from: from,
      user_to: to,
    });
  };

  const following = async (user) => {
    const join = {};
    join[TABLE] = "user_to";
    const query = { user_from: user };

    return await store.query(TABLE + "_follow", query, join);
  };

  return {
    list,
    get,
    upsert,
    follow,
    following,
  };
};
