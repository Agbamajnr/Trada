import axios from 'axios'
import { ref } from 'vue';

const url = 'https://trada-market.herokuapp.com/api/waiting';

function validateEmail (emailAddress) {
  if (emailAddress.length < 1) {
    return 'You have not inputed any email address';
  }

  const regex = /@/gi

  var res = regex.test(emailAddress);

  return res
  /*
  const str = emailAddress;

  for(let i = 0; i <= str.length; i++) {
    console.log(str.length, str.charAt(str.length - 1));
    if (str.charAt(i) == '@' && str[i] == str.charAt(str.length- 1)) {
      console.log('there is @', str,length, str[i]);
      return true;
    } else {
      return false;
    }
  }
  */
}

  const addEmail = (email) => {
    const data = ref('')
    const error = ref('')
    //const validate = ref('')

    const handleReq = async () => {
          try {
            const res = await axios.post(url, {
              email
            })
            data.value =  res.data;
          } catch (err) {
            error.value = err
          }
   }
   return { data, error, handleReq};
  }


  export default addEmail
