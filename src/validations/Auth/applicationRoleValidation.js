const RoleValidation = (values) => {
    const errors = {};

    if (!values.roleName || values.roleName === "") {
        errors.name = "Role name should not empty";
    }

    if (!values.description || values.description === "") {
        errors.description = "Role description should not empty";
    }

    return errors
};

export default RoleValidation;
