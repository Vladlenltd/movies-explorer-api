const USER_SCHEMA_REQ_ERROR = {
  EMAIL: 'Поле e-mail является обязательным для заполнения',
  PASSWORD: 'Поле password является обязательным для заполнения',
  NAME: 'Поле name является обязательным для заполнения',
};

const USER_SCHEMA_VAL_ERROR = {
  EMAIL: 'Не верный e-mail',
};

const USER_SCHEMA_AUTH_ERROR = 'Неверный e-mail или пароль';

const MOVIE_SCHEMA_REQ_ERROR = {
  COUNTRY: 'Поле country явлется обязательным для заполнения',
  DIRECTOR: 'Поле director явлется обязательным для заполнения',
  DURATION: 'Поле фильма duration явлется обязательным для заполнения',
  YEAR: 'Поле year явлется обязательным для заполнения',
  DESCRIPTION: 'Поле description явлется обязательным для заполнения',
  IMAGE: 'Поле image явлется обязательным для заполнения',
  TRAILER: 'Поле trailerLink явлется обязательным для заполнения',
  THUMBNAIL: 'Поле thumbnail явлется обязательным для заполнения',
  OWNER: 'Поле owner явлется обязательным для заполнения',
  MOVIEID: 'Поле movieId явлется обязательным для заполнения',
  NAMERU: 'Поле nameRU явлется обязательным для заполнения',
  NAMEEN: 'Поле nameEN явлется обязательным для заполнения',
};

const MOVIE_SCHEMA_VAL_ERROR = {
  TRAILER: 'Введите корректную ссылку на трейлер',
  IMAGE: 'Введите корректную ссылку на постер',
  THUMBNAIL: 'Введите корректную ссылку на изображение',
};

module.exports = {
  USER_SCHEMA_REQ_ERROR,
  USER_SCHEMA_VAL_ERROR,
  USER_SCHEMA_AUTH_ERROR,
  MOVIE_SCHEMA_REQ_ERROR,
  MOVIE_SCHEMA_VAL_ERROR,
};
