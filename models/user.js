import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
    match:[/^\S+@\S+\.\S+$/, "Please Enter a Valid Email Adress"]
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._\s]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);

export default User;

// - in express the servser is allways running, so this "model("User", UserSchema)" will be called with server start and won't be called again
// - but in next ssr, this code will be exequted with each request so, we don't wanna create the user model if it was created before in the first call ever, so we will look for the user model in the models object, if we found it we will return it without creating it again