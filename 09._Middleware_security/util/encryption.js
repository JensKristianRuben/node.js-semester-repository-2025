import bcrypt from 'bcryptjs';

const password = "hunter123";
const saltrounds = 14;

const hashedPassword = await bcrypt.hash(password, saltrounds);

const comparePassword = "hunter123";

// const isSame = await bcrypt.compare()
