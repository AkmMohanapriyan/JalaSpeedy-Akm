import Service from '../models/Service.js';

// Create Service (Admin only)
export const createService = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      duration,
      location,
      available,
      category,
      includedItems
    } = req.body;

    if (!title || !description || !price || !duration || !location) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const service = await Service.create({
      title,
      description,
      price,
      duration,
      location,
      available,
      category,
      includedItems,
      createdBy: req.user.id
    });

    res.status(201).json({
      message: "Service created successfully",
      service
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get All Services (Admin & User)
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().populate("createdBy", "name email");
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch services", error: error.message });
  }
};

// Get Service by ID (Admin & User)
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate("createdBy", "name email");
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: "Failed to get service", error: error.message });
  }
};

// Update Service by ID (Admin only)
export const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    Object.assign(service, req.body);
    const updated = await service.save();

    res.status(200).json({
      message: "Service updated successfully",
      updated
    });
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message });
  }
};

// Delete Service by ID (Admin only)
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    await service.deleteOne();
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Deletion failed", error: error.message });
  }
};
