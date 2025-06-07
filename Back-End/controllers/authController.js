import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

// Signup for user/supplier/admin
export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already in use' });

  const user = await User.create({ name, email, password, role });
  if (!user) return res.status(500).json({ message: 'Error creating user' });

  res.status(201).json({
    message: 'Signup successful',
    token: generateToken(user),
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  res.json({
    message: 'Login successful',
    token: generateToken(user),
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};

// Dashboards
export const userDashboard = (req, res) => {
  res.json({ message: `Welcome to User Dashboard, ${req.user.name}` });
};

export const supplierDashboard = (req, res) => {
  res.json({ message: `Welcome to Supplier Dashboard, ${req.user.name}` });
};

export const adminDashboard = (req, res) => {
  res.json({ message: 'Welcome to Admin Dashboard' });
};

// Admin-only operations
export const getAllUsersAndSuppliers = async (req, res) => {
  const people = await User.find({ role: { $in: ['user', 'supplier'] } }).select('-password');
  res.json(people);
};

// Get Users ById
export const getUserOrSupplierById = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user || user.role === 'admin') {
    return res.status(404).json({ message: 'User/Supplier not found' });
  }
  res.json(user);
};

// Update Users 
export const updateUserOrSupplier = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user || user.role === 'admin') {
    return res.status(404).json({ message: 'User not found' });
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  await user.save();

  res.json({ message: 'User updated successfully', user });
};

// Create User By Admin
export const createUserByAdmin = async (req, res) => {
  const { name, email, password, role } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: 'Email already in use' });

  const newUser = await User.create({ name, email, password, role });
  res.status(201).json({ message: 'User created successfully', user: newUser });
};
