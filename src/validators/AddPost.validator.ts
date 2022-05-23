import Joi from 'joi';

export const PostFormValidatorSchema = (): Joi.ObjectSchema =>
  Joi.object({
    title: Joi.string().trim().required().label('Title').messages({
      'string.empty': 'Title cannot be empty',
    }),
    content: Joi.string().trim().required().label('Content').messages({
      'string.empty': 'Content cannot bee empty',
    }),
    authorName: Joi.string().trim().required().label('Author Name').messages({
      'string.empty': 'Name cannot be empty!',
    }),
    authorEmail: Joi.string()
      .email({
        tlds: { allow: false },
      })
      .trim()
      .optional()
      .label('Email')
      .messages({
        'string.email': 'Email must be valid',
      }),
  });
