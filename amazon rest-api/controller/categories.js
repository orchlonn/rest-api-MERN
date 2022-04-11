exports.getCategories = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Бүх категориудыг энд өгнө......",
    user: req.userId,
  });
};

exports.getCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорийн мэдээллийг өгнө`,
  });
};

exports.createCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Шинээр категори үүсгэх",
  });
};

exports.updateCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорийг өөрчилнө`,
  });
};

exports.deleteCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорийг устгана`,
  });
};
