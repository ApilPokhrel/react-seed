export default {
  permission: {
    get: {
      detail: id => {
        return { url: `/auth/permission/${id}`, method: "GET" };
      }
    },
    post: {
      create: () => {
        return { url: `/auth/permission/`, method: "POST" };
      }
    },
    patch: {
      edit: id => {
        return { url: `/auth/permission/${id}`, method: "PATCH" };
      }
    },
    delete: {
      remove: id => {
        return { url: `/auth/permission/${id}`, method: "DELETE" };
      }
    }
  },

  role: {
    get: {
      detail: id => {
        return { url: `/auth/role/${id}`, method: "GET" };
      }
    },
    post: {
      create: () => {
        return { url: `/auth/role/`, method: "POST" };
      }
    },
    patch: {
      edit: id => {
        return { url: `/auth/role/${id}`, method: "PATCH" };
      }
    },
    delete: {
      remove: id => {
        return { url: `/auth/role/${id}`, method: "DELETE" };
      }
    }
  },

  user: {
    post: {
      login: () => {
        return { url: `/user/login`, method: "POST" };
      },
      register: () => {
        return { url: `/user/register`, method: "POST" };
      }
    }
  }
};
