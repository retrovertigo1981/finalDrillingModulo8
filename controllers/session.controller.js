const db = require('../models');
const { CreateSignature, ValidatePassword } = require('../utils');
const { User } = db;

const SessionController = {}

SessionController.login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email } })
        if (!user) throw new Error("Credenciales Inválidas", {
            cause: "INVALID_CREDENTIALS"
        })
        const isValid = ValidatePassword(user.password, password)
        if (!isValid) throw new Error("Credenciales Inválidas", {
            cause: "INVALID_CREDENTIALS"
        })
        const signature = CreateSignature({
            _id: user.id,
            email: user.email
        })

        console.log("signature:", signature)
        return res.cookie('Bearer', signature).json({ message: "Usuario Logueado Exitosamente" })
    } catch (error) {
        console.error(error)
        next(error)

    }
}

SessionController.createUser = async (req, res, next) => {
    const data = req.body;
    console.log(data);
    try {
        const user = await User.create(data);
        return res.json(user);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

module.exports = {
    SessionController
}
