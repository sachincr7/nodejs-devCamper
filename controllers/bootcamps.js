const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @description Get all bootcamps
// @route       GET /api/v1/bootcamps
// Access       Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});

// @description Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// Access       Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @description Create new bootcamp
// @route       GET /api/v1/bootcamps
// Access       Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({ success: true, data: bootcamp });
});

// // @description Update bootcamps
// // @route       GET /api/v1/bootcamps/:id
// // Access       Private
// exports.updateBootcamp = (req, res, next) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
// };

// // @description Delete bootcamp
// // @route       GET /api/v1/bootcamps/:id
// // Access       Private
// exports.deleteBootcamp = (req, res, next) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
// };
