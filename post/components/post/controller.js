const TABLE = "post";

module.exports = (injectedStore) => {
  let store = injectedStore || require("../../../store/dummy");

  const list = () => store.list(TABLE);

  const get = (id) => {
    return store.get(TABLE, id);
  };

  const upsert = async (body, user) => {
    const post = {
      text: body.text,
      user,
    };

    return store.upsert(TABLE, post);
  };

  return {
    list,
    get,
    upsert,
  };
};
