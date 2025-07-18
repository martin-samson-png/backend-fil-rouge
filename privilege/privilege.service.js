import Privilege from "./privilege.model.js";

const createPrivilege = async (data) => {
  return await Privilege.create(data);
};

const getAllPrivileges = async () => {
  return await Privilege.find();
};

const getPrivilegeById = async (privilege_id) => {
  return await Privilege.findById(privilege_id);
};

const updatePrivilegeById = async (privilege_id, update) => {
  return Privilege.updateOne(
    { _id: privilege_id },
    { $set: update },
    { new: true }
  );
};

const deletePrivilegeById = async (privilege_id) => {
  const privilege = await Privilege.findById(privilege_id);
  if (!privilege) return null;
  return await privilege.deleteOne();
};

export {
  createPrivilege,
  getAllPrivileges,
  getPrivilegeById,
  updatePrivilegeById,
  deletePrivilegeById,
};
