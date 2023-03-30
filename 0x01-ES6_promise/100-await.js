import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

const test = async () => {
  const value = await asyncUploadUser();
  console.log(value);
};

test();