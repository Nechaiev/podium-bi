const MessagesError = {
  unauthorized: 'Unauthorized',
  unauthenticated:
    'You have been logged out due to inactivity or an alternate login.',
  resourceNotFound: 'Resource not found!',
  somethingWentWrong: 'Something went wrong. Please try again later.',
  isRequired: `This field {name} is required!`,
  invalidEmail: 'Please enter a valid email address.',
  invalidPhone: 'Please enter a valid phone number.',
  charactersMin: 'Please enter at least {min} characters',
  charactersMax: 'Please enter at no more than {max} characters',
  itemMin: 'Please add at least a {min} item',
  itemMax: 'Maximum number of items {max}',
  confirmedPass: 'Please enter the same password again.',
  invalidFileType: '{name}: Invalid file type, allowed file types: {types}.',
  invalidFileSize:
    '{name}: Invalid file size, file size should be smaller than: {size}.',
  invalidFileLimit: 'Maximum number of files exceeded, limit is {max} at most.',
  alphaDash:
    'This field may contain alphabetic characters, numbers, dashes or underscores. No spaces.',
  url: 'URL is not valid',
  "credentials.invalid": "Не валідний пароль або емеіл"
}

export default MessagesError;