const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.userList = (req, res) => {
  knex("users").then((data) => {
    res.status(200).json(data);
  });
};

exports.userDetails = (req, res) => {};

exports.register = (req, res) => {
  const { firstName, lastName, userName, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  knex
    .select("userName")
    .from("users")
    .where("userName", userName)
    .then((data) => {
      if (!data.length) {
        return knex("users")
          .insert({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: hashedPassword,
          })
          .then((data) => {
            res.status(201).json({
              message: "user signed up successfully",
              data,
            });
          })
          .catch((error) => {
            res
              .status(400)
              .json({ message: "Issue signing up user", error: error });
          });
      } else {
        res
          .status(400)
          .json({ message: "User with that username already exists" });
      }
    })
    .catch((error) => {
      res.status(400).json({
        message: "Ran into issue signing up user",
        erorr: error,
      });
    });
};

exports.login = (req, res) => {
  const { userName, password } = req.body;
  knex("users")
    .where("userName", userName)
    .then((data) => {
      const passwordCheck = bcrypt.compareSync(password, data[0].password);
      console.log(data.length);
      if (data.length && passwordCheck) {
        const payload = {
          id: data[0].id,
          userName: data[0].userName,
          firstName: data[0].firstName,
          lastName: data[0].lastName,
          email: data[0].email,
          issuedAt: Date.now(),
        };
        const token = jwt.sign(payload, "tempKey", { expiresIn: "3h" });
        res.status(200).json({ token });
      } else {
        res.status(401).json({
          message: "Invalid password",
        });
      }
    })
    .catch((error) => {
      res
        .status(401)
        .json({ message: "Unable to find user with that name", error: error });
    });
};

exports.deleteUser = (req, res) => {
  knex("users")
    .delete()
    .where({ id: req.params.id })
    .then(() => {
      res.status(204).send(`User has been deleted`);
    })
    .catch((error) => {
      res.status(400).send(`Error deleting User ${error}`);
    });
};

exports.favouritesList = (req, res) => {
  knex("favourites")
    .where({ userID: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    });
};

exports.addFavourite = (req, res) => {
  let { parkID } = req.body;

  knex("favourites")
    .where("userID", req.params.id)
    .where("parkID", parkID)
    .then((data) => {
      if (!data.length) {
        knex("favourites")
          .insert({ parkID: parkID, userID: req.params.id })
          .then((data) => {
            res.status(201).json({
              message: "Successfully Added to favourites",
              data,
            });
          })
          .catch((error) => {
            res
              .status(400)
              .json({ message: "Issue Adding Favourite", error: error });
          });
      } else {
        res.status(400).json({ message: "Favourite already exists" });
      }
    })
    .catch((error) => {
      res.status(400).json({
        message: "Ran into issue adding to favourites",
        erorr: error,
      });
    });
};

exports.removeFavourite = (req, res) => {
  let { parkID } = req.body;

  knex("favourites")
    .where("userID", req.params.id)
    .where("parkID", parkID)
    .then((data) => {
      if (data.length) {
        knex("favourites")
          .delete()
          .where({ parkID: parkID })
          .where({ userID: req.params.id })
          .then((data) => {
            res.status(201).json({
              message: "Successfully removed favourite",
              data,
            });
          })
          .catch((error) => {
            res
              .status(400)
              .json({ message: "Issue removing Favourite", error: error });
          });
      } else {
        res.status(400).json({ message: "Park Not in favourites" });
      }
    })
    .catch((error) => {
      res.status(400).json({
        message: "Ran into issue removing from favourites",
        erorr: error,
      });
    });
};

exports.updateUserInfo = (req, res) => {};
