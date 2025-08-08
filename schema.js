const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.object({
            url: Joi.string()
                .allow('', null)
                .default("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9FZ-pj5hRqRK1L-KyfUJicBMGCOZktsu2w&s"),
            filename: Joi.string()
                .allow('', null)
                .default("listingImage"),
        }),
    })
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        comment: Joi.string(),
        rating: Joi.number().required().min(1).max(5),
    }).required(),
});