

export const handleErros = (err) => {
  let errors = { 
    email : '',
    password : ''
  };

   console.log(err.message , err.code);;

  //  if(err.code ===)

   //validation errors
   if(err.message.includes('User validation failed')){
    Object.values(err.errors).forEach(({properties}) => {
       errors[properties.path] = properties.message
    }) 
   };

   return errors
}